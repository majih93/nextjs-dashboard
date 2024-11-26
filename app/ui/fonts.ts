import { Inter, Lusitana } from "next/font/google"; // next/font 모듈을 사용해서 next가 제공하는 font 최적화를 적용한다.

export const inter = Inter({ subsets: ["latin"] }); // 전체 폰트를 로딩하는 것이 아니라, 폰트의 latin 서브셋만 로딩

// secondary font
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
