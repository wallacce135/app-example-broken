# app-example-broken

React + Vite + TypeScript app that **intentionally fails to build**.
Used to check how the LLM analyses a failed build.

`npm run build` fails on `tsc -b`: `UserCard.tsx` reads `user.fullName`,
but the `User` type only has `firstName` and `lastName`.
