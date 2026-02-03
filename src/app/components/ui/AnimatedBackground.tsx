"use client";

import React, { useEffect, useRef } from "react";
import NetworkCanvas from "@/app/components/ui/NetworkCanvas";

export const AnimatedBackground: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  // ポインタ位置からCSS変数を更新（軽量パララックス）
  useEffect(() => {
    const handlePointer = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1; // [-1,1]
      const ny = (e.clientY / window.innerHeight) * 2 - 1; // [-1,1]
      if (rootRef.current) {
        rootRef.current.style.setProperty("--px", nx.toFixed(3));
        rootRef.current.style.setProperty("--py", ny.toFixed(3));
      }
    };
    window.addEventListener("pointermove", handlePointer, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointer);
  }, []);

  // 事前定義のバブル設定（SSRとハイドレーションの差異を避ける）
  const bubbles = [
    { x: 5, d: 0, s: 0 },
    { x: 12, d: 1.2, s: 1 },
    { x: 18, d: 2.4, s: 2 },
    { x: 26, d: 0.8, s: 1.5 },
    { x: 35, d: 1.6, s: 0.5 },
    { x: 44, d: 2.2, s: 2.5 },
    { x: 53, d: 0.4, s: 1.8 },
    { x: 62, d: 1.8, s: 0.8 },
    { x: 70, d: 2.8, s: 3 },
    { x: 78, d: 0.6, s: 1.2 },
    { x: 86, d: 2.0, s: 2.2 },
    { x: 93, d: 1.0, s: 0.6 },
  ];

  return (
    <div className="hero-bg" aria-hidden="true" ref={rootRef}>
      {/* ネットワーク（ノードと線） */}
      <NetworkCanvas />
      {/* パララックス層 + パステルブロブ */}
      <div className="hero-layer layer1">
        <div className="hero-blob blob1"></div>
      </div>
      <div className="hero-layer layer2">
        <div className="hero-blob blob2"></div>
      </div>
      <div className="hero-layer layer3">
        <div className="hero-blob blob3"></div>
      </div>

      {/* オービットリング（かわいいドットが周回） */}
      <div className="hero-orbits">
        <span className="orbit orbit1"></span>
        <span className="orbit orbit2"></span>
      </div>

      {/* バブル（柔らかく上昇） */}
      <div className="hero-bubbles">
        {bubbles.map((b, i) => {
          const styleVars = {
            ["--x" as any]: `${b.x}`,
            ["--delay" as any]: `${b.d}s`,
            ["--speed" as any]: `${b.s}s`,
          } as React.CSSProperties;
          return <span key={i} className="hero-bubble" style={styleVars} />;
        })}
      </div>

      {/* スパークル層 */}
      <div className="hero-sparkles"></div>
    </div>
  );
};

export default AnimatedBackground;
