// global.css를 어떤 컴포넌트에도 추가할 수 있지만, 통상적으로 최상위 컴포넌트에 추가하는 것이 good practice
import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* antialiased - 폰트 부드럽게 만들어주는 처리(필수는 아니지만 나이스하다.) */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
