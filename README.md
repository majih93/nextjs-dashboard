## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## Folder Structure

- `/app`: contains routes, components, application logic. where you'll most likely work from mostly.

- `app/lib`: contains functions used in your application, liek reusable utility functions and data fetching functions. a library.

- `app/ui`: contains all the UI components for your application like buttons, cards,...etc

- `public`: contains all static assets like images

- `scripts`: contains a seeding script that you'll use to populate your database in a later chapter.

## Styles

글로벌 스타일은 어떤 컴포넌트에서도 import 할 수 있지만, 보통 top-level component에 추가하는 것이 good practice라고 함.

`Next.js`에서는 root layout에 해당된다.

- Tailwind
- CSS Modules
  - Provide a way to make CSS classes locally scoped to components by default, reducing the risk of styling conflicts.
  - CSS Modules create unique class names for each component, so you don't have to worry about style collisions.
- CSS-in-JS
- Sass
