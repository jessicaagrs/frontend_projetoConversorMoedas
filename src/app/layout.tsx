import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import NavBar from "@/components/navbar/navbar";
import DefaultProvider from "@/contexts/default-provider";
import GlobalStyles from "@/styles/styleGlobal";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"]
});

export const metadata: Metadata = {
  title: "Stone | Currency",
  description: "Generated by Jessica Aguiar",
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <DefaultProvider>
        <GlobalStyles />
        <body className={roboto.className}>
          <NavBar />
          {children}
        </body>
      </DefaultProvider>
    </html>
  );
}
