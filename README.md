This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## CI and Docker Hub Publishing

This repository uses GitHub Actions to run lint, typecheck, and build on Pull Requests and pushes to `main`. The CI workflow also builds Docker images for PR previews (tagged `pr-<number>`) and publishes images to Docker Hub for merges to `main` and for tagged releases.

Required repository secrets (set these in GitHub > Settings > Secrets):

- `DOCKERHUB_USERNAME` — Docker Hub username used for authentication
- `DOCKERHUB_TOKEN` — Docker Hub personal access token (or password) used for authentication
- `DOCKERHUB_REPOSITORY` (optional) — full repo name to push to (e.g., `myorg/eh-services`). If not provided, images are pushed as `${DOCKERHUB_USERNAME}/eh-services`.

Behavior summary:
- Pull requests build and produce a preview image. If Docker Hub credentials are present the image will be pushed as `pr-<number>`; otherwise an image artifact is attached to the PR.
- Merges to `main` automatically build and push images with tags `latest` and `sha-<short>`; tag pushes (`v*.*.*`) also push the matching semantic tag.

To enable publishing, add the three secrets above. Branch protection is recommended to require passing CI on `main` before merging.
