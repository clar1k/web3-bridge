"use client";
import { useAppKit } from "@reown/appkit/react";
import { Wallet } from "lucide-react";

import { Button } from "~/components/ui/button";

export function ConnectWallet() {
  const { open } = useAppKit();
  return (
    <Button
      onClick={() => open()}
      className="w-full bg-blue-700 hover:bg-blue-800"
    >
      Connect Wallet <Wallet className="h-4 w-4" />
    </Button>
  );
}
