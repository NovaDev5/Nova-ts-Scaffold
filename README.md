# nova ts

A lightweight **TypeScript + Express backend scaffold** for building backend node js projects with typescript.

This CLI quickly generates a ready-to-run backend with routes and structure for:

* Configs
* Controllers
* Routes
* Services

Perfect for **Web3 developers** who deal with backend infastructures quite often.

---

## Quick Start

Create a new project instantly:

```bash
npx nova-ts-scaffold my-backend
```
The my-backend text should be replaced with the name of your backend project
Then install dependencies and start the server:

```bash
cd my-backend
npm install
npm i --save-dev @types/express
npm i --save-dev @types/cors
npm run dev
```

---

## Generated Project Structure

```
my-backend
│
├── src
│   ├── controllers/controller.ts
│   ├── routes/routes.ts
│   ├── services/services.ts
│   ├── config/config.ts
│   └── index.ts
│
├── package.json
└── tsconfig.json
```

---

## Features

* Express + TypeScript backend
* Clean MVC-style architecture
* Bckend API routes ready to use
* Development build scripts included

---

## Scripts

```bash
npm run dev     # start development server
npm run build   # compile TypeScript
npm start       # run compiled server
```

---

## License

MIT
