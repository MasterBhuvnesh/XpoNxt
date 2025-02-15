Here’s your styled guide with improved readability and structure:

---

# 🌐 **Guide to Deploying a Next.js Project to Expo**

## 🚀 **Steps to Deploy Using Expo CLI**

### 1️⃣ **Configure Your Next.js Project**

- Update `next.config.ts` to enable static export:

  ```typescript
  import type { NextConfig } from "next";

  const nextConfig: NextConfig = {
    output: "export",
    reactStrictMode: true,
  };

  export default nextConfig;
  ```

### 2️⃣ **Build the Project**

Run the following command to generate the output files:

```bash
npx next build
```

### 3️⃣ **Deploy with Expo**

Use Expo Application Services (EAS) to deploy your project:

```bash
eas deploy --export-dir=out
```

### 4️⃣ **Get Your Deployment URL**

- After deployment, you’ll receive a link to access your project:
  ```
  https://bhuvneshverma--yxdct6yk0b.expo.app
  ```

### 5️⃣ **Switch to Production (Optional)**

- To set up a production alias, use:
  ```bash
  eas deploy:alias --prod --id=DEPLOYMENT-ID
  ```
  Example:
  ```bash
  eas deploy:alias --prod --id=yxdct6yk0b
  ```

### 🎯 **Final Production URL**

Once deployed to production, your project will be available at:  
`https://bhuvneshverma.expo.app`

🔗 **Check it out:**  
[![Bhuvnesh Verma](https://bhuvneshverma.expo.app)](https://bhuvneshverma.expo.app)
