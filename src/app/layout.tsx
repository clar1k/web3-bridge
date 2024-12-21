// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Web3ContextProvider } from "~/config/Web3Context";
import { cn } from "~/lib/utils";
import "~/styles/globals.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bloom Bridge",
  description: "",
};
const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "h-screen w-screen bg-cover bg-center")}
        style={{
          backgroundImage: "url('/Background.jpg')",
        }}
      >
        <Web3ContextProvider>{children}</Web3ContextProvider>
      </body>
    </html>
  );
}
