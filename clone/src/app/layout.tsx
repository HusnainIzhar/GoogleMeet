import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { MetaData } from "@/utils/MetaData";

const inter = Inter({ subsets: ["latin"] });
const poppin = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

<MetaData title="chime" description="Calling app" />;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${poppin.className} bg-theme-dark`}>{children}</body>
    </html>
  );
}
