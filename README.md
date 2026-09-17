# Portfolio

## Local development

Use Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Check changes with `npm run lint` and `npm run build`. The lint command currently reports warnings from older markup but no errors.

## Dependency compatibility

React remains on 18.3 because `react-water-wave` and `react-modal-video` declare support only through React 18. Tailwind CSS remains on the latest 3.4 release because the existing PostCSS configuration and utility styles require a v4 migration. ESLint 9 is used because the current Next.js ESLint configuration fails under ESLint 10. Upgrade these together with the affected code and styles before moving to their next major versions.
