import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export const proxy = createMiddleware(routing);

export const config = {
  // api / trpc / _next / _vercel / 拡張子付きファイルは除外
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
