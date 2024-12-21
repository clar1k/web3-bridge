"use client";
import { createAppKit } from "@reown/appkit/react";
import { WagmiProvider } from "wagmi";
import { arbitrumSepolia, baseSepolia, sepolia } from "@reown/appkit/networks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

const queryClient = new QueryClient();

const projectId = "6383c4f3d4210dbce583ac33a5e2b027";

const metadata = {
  name: "hacken-bridge",
  description: "AppKit Example",
  url: "https://reown.com/appkit",
  icons: ["https://assets.reown.com/reown-profile-pic.png"],
};

const wagmiAdapter = new WagmiAdapter({
  networks: [sepolia, arbitrumSepolia, baseSepolia],
  projectId,
  ssr: true,
});

createAppKit({
  adapters: [wagmiAdapter],
  networks: [sepolia, arbitrumSepolia, baseSepolia],
  defaultNetwork: baseSepolia,
  projectId,
  metadata,
  features: {
    email: false,
    socials: [],
    emailShowWallets: false,
  },
  themeMode: "dark",
});

export function Web3ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
