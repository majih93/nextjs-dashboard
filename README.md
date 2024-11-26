# Next.js 공식문서 튜토리얼 따라해보기

# 2장. CSS Styling

Root컴포넌트인 `app/layout.tsx`에 global.css 파일을 import해서 적용되도록 하면 페이지 전체적으로 스타일이 적용됨.

# 3장. Optimizing Fonts and Images

- `next/font`를 사용해서 커스텀 폰트 추가하기
- `next/image`를 사용해서 이미지 추가하기
- Next.js에서 폰트와 이미지가 최적화되는 방식에 대한 이해

**왜 폰트 최적화가 필요한지??**

구글에서 웹사이트 퍼포먼스와 사용성을 측정하는데 사용하는 지표 중에 `Cumulative Layout Shift`라는 개념이 있음.

`layout shift`란, 웹페이지가 로딩되거나 사용자가 상호작용하는 과정에서 배치된 요소들이 예기치 않게 이동하는 현상을 말한다.

사용자의 미스클릭을 유도하거나, 산만함을 유발하는 등 사용자 경험을 해칠 수 있는 요소임.

`layout shift`는 다양한 이유로 발생할 수 있음.

- 이미지 크기 미지정: HTML에서 이미지 크기를 미리 지정하지 않으면 로드되기 전까지 브라우저가 얼마나 공간을 잡아야할지 몰라서 로드된 이후에 레이아웃이 이미지 실제 크기에 따라 변경될 수 있음.

- 비율을 지정하지 않은 비디오/임베드 요소: 마찬가지로 고정된 크기나 비율 지정하지 않으면 컨텐츠 로드되고 레이아웃이 변경될 수 있음.

- 동적 컨텐츠 삽입: 광고 배너 등 동적인 컨텐츠가 로딩 중간에 삽입되면 기존 요소들이 밀려나면서 레이아웃 시프트가 발생할 수 있음.

- 웹 폰트 로드: 폰트를 비동기적으로 로드할 때, 최초 렌더링 시 사용되었던 폰트가 웹폰트로 변경되면서 레이아웃 시프트가 발생할 수 있음.

`Cumulative Layout Shift`란 페이지 로드동안 발생한 레이아웃 시프트 크기 누적하여 계산한 값.

CLS 점수가 높을수록 요소가 많이 이동되었다는 것이고, 사용자가 불편함을 느꼈을 가능성이 높음.

아하 그렇구만. 폰트가 뒤늦게 로드되어서 웹페이지 레이아웃이 변경되는 것처럼 보이는 것을 방지하면 사용자 경험이 개선된다는 점에서 최적화가 필요하다.

Next.js는 이런 현상을 방지하기 위해서 `next/font` 모듈을 사용해서 처리된 폰트의 경우 빌드타임에 폰트를 미리 다운로드 받아서 다른 정적 asset과 같이 hosting한다. 그래서 웹페이지 방문 시, 폰트 로딩을 위한 추가적인 네트워크 요청이 발생하지 않음.

폰트 적용 시 특정 subset - 웹폰트 파일에서 필요한 문자 집합만을 선택하여 추출한 폰트 파일 - 만 적용할 수 있음.

**왜 이미지 최적화가 필요한지?**

이미지와 같은 정적 애셋의 경우 최상위 경로의 `/public` 폴더에 담아서 사용할 수 있음.

Next.js가 제공해주는 최적화없이 이미지를 사용하는 경우, 아래와 같이 HTML에서 img태그를 사용해서 적용함.

```HTML
<img
  src="/hero.png"
  alt="Screenshots of the dashboard project showing desktop version"
/>
```

이렇게 하게되면 이미지에 대해서 다음 작업을 추가로 처리해야 한다.

- 이미지 크기가 화면 크기에 따라 반응해서 변경되도록 처리
- 여러 디바이스에 맞춰서 이미지 크기 지정
- 이미지 로딩에 따른 레이아웃 시프트 방지
- 사용자의 viewport밖에 있는 이미지 lazy loading처리

사실 이미지 최적화는 웹개발에 있어서 그 자체로 하나의 거대한 토픽일만큼 중요하고, 특히 신경써야되는 영역 중 하나.

이런 최적화 작업을 별도로 할 필요없이, Next.js에서 제공하는 `next/image` 모듈을 사용하면 최적화를 처리해준다고 함.

`<Image>` 컴포넌트는 `<img>`태그의 확장버전으로, 아래의 최적화 기능을 제공함.

- 레이아웃 시프트 방지
- 작은 디바이스에서 viewport에 맞지 않는 이미지 resizing
- default로 lazy loading됨 이미지가 (viewport에 들어왔을 때 이미지가 load된다.)
- 브라우저에서 지원되는 경우 `WebP`나 `AVIF`와 같은 최신 포맷으로 제공

# 4장. Creating Layouts and Pages

- 파일 구조 기반 routing을 사용해서 `dashboard` route 생성
- route segment를 생성하는데 폴더와 파일의 역할 이해
- 여러 dashboard 페이지 간 공유할 수 있는 중첩된 layout 생성
- colocation, partialk rendering, root layout에 대한 이해

**새로운 페이지 만들기**

Next.js는 폴더를 사용해서 중첩된 경로 구조를 만든다.

각 폴더는 하나의 URL segment와 연결되는 `route segment` 생성한다.

app - Root segment
app/dashboard - Segment
app/dashboard/invoices - leaf segment

각각 route 별로 `layout.tsx` 파일과 `page.tsx`파일을 사용해서 UI를 만들면 된다.

`page.tsx` - Next.js에서 route에 접근하기 위해서 필요한 특별한 파일(이름이 page로 고정이라는 점)

`/dashboard`라는 경로를 만들고자 한다면 app/dashboard 폴더에 `page.tsx` 파일을 하나 만들면 된다.

폴더를 사용해서 route segment를 새롭게 만들고, page.tsx 파일을 이용해서 해당 페이지의 최상위 컴포넌트 생성

**layout.tsx - 하나의 route에서 여러 페이지들이 공유하는 UI구조를 만들 수 있는 컴포넌트**

별도로 컴포넌트 구조를 잡아줄 필요가 없이, 해당 route의 페이지들이 자동으로 layout으로 감싸지는 구조가 된다.

Next.js에서 layout 컴포넌트를 사용해서 공통 UI를 만들면, 각 페이지의 page.tsx에 해당하는 부분들만 rendering되고 layout에 해당되는, 모든 페이지에서 동일하게 적용되는 UI는 navigation이 되어도 유지된다.(partial rendering)

**root layout**

app 폴더의 최상위 디렉토리에 위치한 layout.tsx 파일을 root layout이라고 하며, 무조건 있어야 하는 파일이다.

이 컴포넌트를 통해서 `html`태그와 `body`태그를 관리하고 metadata를 처리할 수 있음.

# 5장. Navigating Between Pages

- `next/link` 컴포넌트를 사용하는 방법
- `usePathname()` hook을 이용해서 현재 위치한 페이지의 link를 다루는 방법
- Next.js navigation

**<Link> 컴포넌트**

Next.js에서 제공하는 `<Link/>` 컴포넌트를 활용해서 클라이언트 사이드 navigation을 구현할 수 있음.

<a>태그를 <Link/>로 변경하면, 전체 페이지를 refresh하지 않으면서 페이지간 이동이 가능해진다.

변경되는 부분은 서버에서 렌더링 되긴 하지만, full page refresh가 발생하지는 않음.왜 그런건지?

확인해보고 싶어서 <Link/>를 썼을 때 리렌더링되지 않아야하는 부분에 해당되는 `layout.tsx`파일에 useEffect를 하나 선언해서 테스트해보니, a태그를 사용하면 계속 리렌더링되는 반면 Link컴포넌트를 사용하면 dashboard내에서 여러 페이지간 이동해도 해당 컴포넌트는 다시 렌더링되지 않는 것을 확인하였음.

이게 어떻게 가능한걸까?

Next.js는 route segment를 기준으로 자동으로 code splitting을 적용함. 무슨 뜻인고 하니, 해당 페이지에 필요한 JavaScript 파일만 로딩해서 처리한다는 뜻이다. (React와 같은 일반적인 SPA는 초기에 모든 코드를 로딩한다.)

이를 통해서 각 페이지는 독립적으로 동작하며, Link 컴포넌트가 viewport에 존재하는 경우 Next.js는 자동으로 연결된 경로의 코드를 백그라운드에서 fetch한다. 이를 통해서 유저가 링크를 클릭하는 경우 거의 바로 페이지가 표시되는 느낌으로 사용성을 제공할 수 있음.

**usePathname()으로 active link 표시하기**

`usePathname()` hook으로 URL을 기준으로 현재 유저가 위치한 경로를 알아낼 수 있음.

hook을 사용하려면 'use client'를 파일 최상단에 명시해줘야 한다.
