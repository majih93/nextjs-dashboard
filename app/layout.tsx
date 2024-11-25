// global.css를 어떤 컴포넌트에도 추가할 수 있지만, 통상적으로 최상위 컴포넌트에 추가하는 것이 good practice
import "@/app/ui/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
