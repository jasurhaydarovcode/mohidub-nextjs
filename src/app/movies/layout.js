import { Inter } from "next/font/google";
// import "";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kinolar",
  description: "MohiDub.uz",
};

export default function MovieLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
