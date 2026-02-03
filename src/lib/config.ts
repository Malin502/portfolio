import fs from "fs";
import path from "path";
import YAML from "yaml";

type AppConfig = {
  contactToEmail?: string;
  resendApiKey?: string;
};

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
      // 読み込み失敗時は環境変数にフォールバック
      fileConfig = {};
    }
  }

  return {
    contactToEmail:
      fileConfig.contactToEmail || process.env.CONTACT_TO_EMAIL || "example@example.com",
    resendApiKey:
      fileConfig.resendApiKey || process.env.RESEND_API_KEY || "",
  };
}
