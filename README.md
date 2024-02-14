# SaaS AI Companion built with Next.js 13, React, Tailwind, Prisma, Cloudinary API, Stripe, Clerk Auth.
[Live demo](https://ai-companion-gules.vercel.app/)

This is an experimental project to create and host AI companions that you can chat with on a browser. It allows you to determine the personality and backstory of your companion, and uses a vector database with similarity search to retrieve and prompt so the conversations have more depth. It also provides conversational memory by keeping the conversation in a queue and including it in the prompt.

It currently contains companions on both ChatGPT and Vicuna hosted on Replicate.

There are many possible use cases for these companions - romantic (AI girlfriends / boyfriends), friendship, entertainment, coaching, etc. You can guide your companion towards your ideal use case with the backstory you write and the model you choose.

**Note:** This project is purely experimental. If you're interested in what a production open source platform looks like, check out [Steamship](https://www.steamship.com/). Or what the leading AI chat platforms look like, check out [Character.ai](https://beta.character.ai/).

Features:
- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Clerk Authentication (Email, Google, 9+ Social Logins)
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Image Generation Tool (Open AI)
- Conversation Generation Tool (Open AI)
- Page loading state
- Stripe monthly subscription
- Free tier with API limiting
- How to write POST, DELETE, and GET routes in route handlers (app/api)
- How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- How to handle relations between Server and Child components!
- How to reuse layouts
- Folder structure in Next 13 App Router

## Prerequisites
Node version 18.x.x

## Cloning the repository
```bash
git clone https://github.com/oplevan/ai-companion.git
```

## Install packages
```bash
npm i
```

## Setup .env file
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

PINECONE_API_KEY=
PINECONE_ENVIRONMENT=
PINECONE_INDEX=

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```
## Setup Prisma
Add MySQL Database (I used PlanetScale)
```
npx prisma db push
```

## Seed categories:
```
node scripts/seed.ts
```

## Start the app
```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
