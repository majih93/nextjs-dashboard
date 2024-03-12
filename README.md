## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## Folder Structure

- `/app`: contains routes, components, application logic. where you'll most likely work from mostly.

- `app/lib`: contains functions used in your application, liek reusable utility functions and data fetching functions. a library.

- `app/ui`: contains all the UI components for your application like buttons, cards,...etc

- `public`: contains all static assets like images

- lets say I added something here in the feature1 branch

- `scripts`: contains a seeding script that you'll use to populate your database in a later chapter.

## Styles

글로벌 스타일은 어떤 컴포넌트에서도 import 할 수 있지만, 보통 top-level component에 추가하는 것이 good practice라고 함.

`Next.js`에서는 root layout에 해당된다.

- and some other for new Commmit

- Tailwind
- CSS Modules
  - Provide a way to make CSS classes locally scoped to components by default, reducing the risk of styling conflicts.
  - CSS Modules create unique class names for each component, so you don't have to worry about style collisions.
- CSS-in-JS
- Sass

- and some other for new Commmit

## Optimizing fonts and images

- 이렇게 적용되기 위해서 꼭 특정 디렉토리에 fonts라는 이름을 사용해야 되는건지??
- https://www.youtube.com/watch?v=L8_98i_bMMA

이번에 배울 내용은...

- `next/font`를 이용해서 커스텀 폰트 추가하는 방법
- `next/image`를 이용해서 이미지를 추가하는 방법
- 폰트와 이미지가 Next.js에서 최적화 되는 방식

**왜 폰트를 최적화해야 하는가?**

커스텀 폰트를 사용하는 것은 폰트를 fetch & load 하는 과정이 필요할 때 퍼포먼스에 영향을 줄 수 있음.

`CLS(Cumulative Layout Shift)`는 구글이 웹사이트의 퍼포먼스와 유저 사용성을 측정하는 지표이다.

폰트와 관련해서는 웹사이트가 최초 로딩 시 시스템/fallback 폰트로 로딩된 후에 커스텀 폰트가 다 로딩 되었을 때 커스텀 폰트로 교체될 떄 layout shift가 발생한다.

Next.js 는 `next/font`모듈을 사용하면 폰트를 최적화한다. 빌드 시에 폰트를 다운로드해서 다른 static asset들과 함께 호스팅 하는 형태로 처리되기 때문에 사용자가 웹사이트/웹어플 방문 시 폰트와 관련해서 퍼포먼스에 영향을 줄만한 추가적인 network request가 발생하지 않는다는 것을 의미한다.

**왜 이미지를 최적화해야 하는가?**

통상적으로 이미지를 html에 반영하기 위해서는 `img`태그를 사용해서 구현한다. 하지만 이는 추가로 아래의 처리들이 필요할 수 있다.

- 이미지가 여러 화면에 responsive하도록 처리
- 다양한 디바이스에 맞춰서 이미지 사이즈 조정
- 이미지 로딩에 따른 layout shift 방지
- 사용자의 viewport 밖에 위치한 이미지를 lazy loading 처리

`next/image` 컴포넌트를 활용해서 자동으로 이미지 최적화가 되도록 처리할 수 있음.

## Creating Layouts and Pages

[4장](https://nextjs.org/learn/dashboard-app/creating-layouts-and-pages)

### 학습목표

- Create `dashboard` routes using file-system routing.
- Understand the role of folders and files when creating new route segments
- Create a nested layout that can be shared between muliple dashboard pages
- Understand what colocation, partial rendering, and the root layout are.

### Nested routing

Next.js는 중첩 routing을 위해서 폴더를 사용한다. 각 폴더는 한 route 계층을 의미한다. 그리고 한 route계층은 하나의 URL계층과 상호연결됨.

```markdown
-app
|\_dashboard
|\_\_invoices

`acme.com/dashboard/invoces` 계정으로 연결
```

각각의 route에 `layout.tsx`파일과 `page.tsx`파일을 사용해서 원하는 UI를 구현할 수 있다.

`page.tsx`은 특정 경로가 접근 가능토록 하기 위한 React 컴포넌트를 export하는 파일이다.

`/app/dashboard/page.tsx`파일은 `/dashboard` 경로와 연결됨.

**layout.tsx**

`layout.tsx`파일에 import하는 컴포넌트는 다 layout의 일부에 포함된다.

`<Layout />` 컴포넌트는 하나의 페이지이거나, layout일 수 있는 `children` prop을 받는다.

이런 구조의 장점 중 하나는 page 컴포넌트만 리렌더링 되고 layout은 리렌더링되지 않는다는 점이다. (partial rerendering)

partial rerendering이 왜 좋은지? (gemini에게 물어봄)

- 퍼포먼스 향상: 필요한 부분만 리렌더링해서 퍼포먼스 향상, 특히 느린 디바이스나 네트워크 환경에서 굳
- UX향상: 더 빠른 페이지 이동 업데이트로 인해 smoother user experience. 특히 SPA 구조 앱에서는 끊어지지 않는 웹 사용 경험을 위해서 매우 중요한 요소
- 서버 부하 감소: 필요한 부분만 업데이트해서 서버에 대한 불필요한 요청 감소 -> 부하 감소 효과.

Root layout에 추가된 UI는 어플리케이션의 모든 페이지에 적용된다.
