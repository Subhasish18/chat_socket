# Chat Socket



A real-time chat application built with Node.js, TypeScript, and WebSockets. This project provides a robust backend for instant messaging applications.

## Description

Chat Socket is a high-performance, scalable chat server that allows users to connect and communicate in real-time. It's built with modern technologies and best practices, including a clean, typed codebase with TypeScript and a solid project structure.

## Features

*   **Real-time Messaging**: Instant message delivery using WebSockets.
*   **Multiple Rooms**: Support for public and private chat rooms.
*   **User Authentication**: Secure authentication to manage user sessions.
*   **Scalable Architecture**: Designed to handle a large number of concurrent connections.
*   **Typed Codebase**: Written in TypeScript for better maintainability and fewer bugs.

## Technologies Used

*   **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
*   **Real-time Communication**: [Socket.IO](https://socket.io/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Linting**: [ESLint](https://eslint.org/) with `eslint-plugin-import`
*   **Path-mapping**: tsconfig-paths for clean import paths.

## Prerequisites

Make sure you have the following installed on your system:
*   Node.js (v18.x or newer recommended)
*   npm or Yarn

## Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/chat_socket.git
    cd chat_socket
    ```

2.  **Install dependencies:**
    Using npm:
    ```sh
    npm install
    ```
    Or using Yarn:
    ```sh
    yarn install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add the necessary environment variables. You can use the `.env.example` file as a template:
    ```sh
    cp .env.example .env
    ```
    Now, edit the `.env` file with your configuration (e.g., `PORT`, database connection string, secret keys).


### Development

To run the server in development mode with hot-reloading:

```sh
npm run dev


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
