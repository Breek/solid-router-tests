# SolidStart

To start the test, run the following command:

```bash
pnpm i
cd node_modules/@solidjs/router
pnpm i
pnpm build
cd ../../..
pnpm dev
```

Then open your browser and go to `http://localhost:3000`.

In another terminal, run the following command:

```bash
pnpm cypress open
```

Choose `E2E Testing`, then `Chrome`, click `Start E2E Testing in Chrome`.

In `Specs`, click `useSearchParams.cy.ts` to launch the test.

Test file is located at `cypress/e2e/useSearchParams.cy.ts`.
