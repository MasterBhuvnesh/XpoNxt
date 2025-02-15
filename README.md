# 📜 README

## 🚀 Types of Commits

| Emoji | Type       | Description                                  |
| ----- | ---------- | -------------------------------------------- |
| ✨    | `feature`  | Adding a new feature                         |
| 🐛    | `fix`      | Fixing a bug                                 |
| 🛠     | `refactor` | Code restructuring without functional change |
| 📝    | `docs`     | Updating documentation                       |
| 🎨    | `style`    | Code style changes (e.g., formatting)        |
| ⚡    | `perf`     | Performance improvements                     |
| 🗑     | `remove`   | Removing code or files                       |

## 🚀 How to Deploy a Next.js Project in Expo Using Its CLI

### 1️⃣ Build Your Next.js Project:

- Make changes in `next.config.ts` to configure the project for export.
- Example configuration:

  ```typescript
  import type { NextConfig } from "next";

  const nextConfig: NextConfig = {
    output: "export",
    reactStrictMode: true,
  };

  export default nextConfig;
  ```

### 2️⃣ Build the Project:

- Run the following command to build your Next.js project:
  ```bash
  npx next build
  ```

### 3️⃣ Deploy the Project in Expo:

- Use the Expo Application Services (EAS) CLI to deploy your project:
  ```bash
  eas deploy --export-dir=out
  ```

### 4️⃣ Get Deployment URL:

- After deployment, you will receive a deployment URL.

  Example:

  ```
  https://bhuvneshverma--yxdct6yk0b.expo.app
  ```

### 5️⃣ Change to Production (Optional):

- If you want to change the deployment to production, run the following command with your deployment ID:

  ```bash
  eas deploy:alias --prod --id=DEPLOYMENT-ID
  ```

- Example:

  ```bash
  eas deploy:alias --prod --id=yxdct6yk0b
  ```

### The final production URL you receive will be in the format: `https://bhuvneshverma.expo.app`
