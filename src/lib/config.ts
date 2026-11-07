import fs from "fs";
import path from "path";
import YAML from "yaml";

type AppConfig = {
  contactToEmail?: string;
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
    resendApiKey:
      process.env.RESEND_API_KEY || fileConfig.resendApiKey || "",
  };
}
