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
