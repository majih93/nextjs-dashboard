// next/font에서 next에서 관리해서 최적화하는 폰트 컴포넌트를 import
import { Inter, Lusitana } from 'next/font/google';

// add font in next/font
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: '400',
});

// adding a secondary font
