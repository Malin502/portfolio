"use client";

import React, { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number };

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

export const NetworkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const nodesRef = useRef<Node[]>([]);
  const rafRef = useRef<number | null>(null);
  const parallaxRef = useRef<{ px: number; py: number }>({ px: 0, py: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = typeof window !== "undefined" &&
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initNodes = () => {
      const rect = canvas.getBoundingClientRect();
      const baseCount = rect.width < 640 ? 28 : rect.width < 1024 ? 44 : 60;
      const count = baseCount;
      const nodes: Node[] = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
        });
      }
      nodesRef.current = nodes;
    };

    const handlePointer = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1; // [-1,1]
      const ny = (e.clientY / window.innerHeight) * 2 - 1; // [-1,1]
      parallaxRef.current.px = nx;
      parallaxRef.current.py = ny;
    };

    const tick = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const nodes = nodesRef.current;
      const { px, py } = parallaxRef.current;

      // 軽いパララックス偏移量
      const offsetX = px * 4;
      const offsetY = py * 4;

      // 背景合成を柔らかく
      ctx.globalCompositeOperation = "lighter";

      // ノードの更新
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (!prefersReducedMotion) {
          n.x += n.vx;
          n.y += n.vy;
        }
        // 端でバウンス
        if (n.x < 0 || n.x > rect.width) n.vx *= -1;
        if (n.y < 0 || n.y > rect.height) n.vy *= -1;

        // ノードドット描画
        ctx.beginPath();
        ctx.arc(n.x + offsetX * 0.3, n.y + offsetY * 0.3, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(67, 230, 213, 0.35)"; // turquoise系
        ctx.fill();
      }

      // 接続線描画
      const maxDist = 140;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxDist) {
            const t = 1 - d / maxDist; // 近いほど濃い
            const alpha = clamp(0.08 + t * 0.28, 0.06, 0.36);
            const lx1 = a.x + offsetX;
            const ly1 = a.y + offsetY;
            const lx2 = b.x + offsetX;
            const ly2 = b.y + offsetY;

            ctx.beginPath();
            ctx.moveTo(lx1, ly1);
            ctx.lineTo(lx2, ly2);
            // y位置で色味を少し変化（ピンク/ターコイズ）
            const pinkMix = clamp((a.y + b.y) / (2 * rect.height), 0, 1);
            const r = Math.round(244 * pinkMix + 67 * (1 - pinkMix));
            const g = Math.round(179 * pinkMix + 230 * (1 - pinkMix));
            const bcol = Math.round(194 * pinkMix + 213 * (1 - pinkMix));
            ctx.strokeStyle = `rgba(${r},${g},${bcol},${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    const onResize = () => {
      resize();
      initNodes();
    };

    resize();
    initNodes();

    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", handlePointer, { passive: true });

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", handlePointer);
    };
  }, []);

  return <canvas className="hero-network" ref={canvasRef} />;
};

export default NetworkCanvas;
