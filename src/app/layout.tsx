// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Web3ContextProvider } from "~/config/Web3Context";
import { cn } from "~/lib/utils";
import "~/styles/globals.css";

export const metadata: Metadata = {
  title: "Chain Bridge",
  description: "Bridge tokens between chains",
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
        className={cn(
          inter.className,
          "h-screen w-screen bg-gradient-to-b from-blue-700 to-black",
        )}
      >
        <Web3ContextProvider>{children}</Web3ContextProvider>
      </body>
    </html>
  );
}
