import "./globals.css";

// ロケールなしの 404 用。ルートレイアウトが [locale] 配下にあるため、自前で <html> を持つ。
export default function NotFound() {
  return (
    <html lang="ja">
      <body>
        <main className="min-h-screen flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-bold">404</h1>
          <p>Page not found</p>
          <a href="/ja" className="underline">
            Back to home
          </a>
        </main>
      </body>
    </html>
  );
}
