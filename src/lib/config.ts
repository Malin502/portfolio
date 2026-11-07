import fs from "fs";
import path from "path";
import YAML from "yaml";

type AppConfig = {
  contactToEmail?: string;
  contactFromEmail?: string;
  resendApiKey?: string;
};

// Secrets are provided via environment variables in production (Vercel:
// RESEND_API_KEY / CONTACT_TO_EMAIL). A local, git-ignored application.yaml
// may be used for development only, and environment variables always take
// precedence over it so a stale local file can never override production.
export function getConfig(): Required<AppConfig> {
  const cwd = process.cwd();
  const yamlPath = path.join(cwd, "application.yaml");
  let fileConfig: AppConfig = {};

  if (fs.existsSync(yamlPath)) {
    try {
      const content = fs.readFileSync(yamlPath, "utf8");
      const parsed = YAML.parse(content) as any;
      fileConfig = {
        contactToEmail:
          parsed?.contactToEmail || parsed?.contact?.toEmail || undefined,
        contactFromEmail:
          parsed?.contactFromEmail || parsed?.contact?.fromEmail || undefined,
        resendApiKey:
          parsed?.resendApiKey || parsed?.resend?.apiKey || undefined,
      };
    } catch (e) {
      // 読み込み失敗時は環境変数のみにフォールバック
      fileConfig = {};
    }
  }

  return {
    contactToEmail:
      process.env.CONTACT_TO_EMAIL || fileConfig.contactToEmail || "example@example.com",
    // Sender on the Resend-verified custom domain (malin502.dev must be
    // verified at resend.com/domains). Override with CONTACT_FROM_EMAIL.
    contactFromEmail:
      process.env.CONTACT_FROM_EMAIL || fileConfig.contactFromEmail || "contact@malin502.dev",
    resendApiKey:
      process.env.RESEND_API_KEY || fileConfig.resendApiKey || "",
  };
}
