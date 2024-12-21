"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { useAccount, useDisconnect } from "wagmi";
import { ConnectWallet } from "~/components/ConnectWallet";
import ChainSelector from "~/components/bridge/ChainSelector";
import TokenInput from "~/components/bridge/TokenInput";
import { ArrowLeftRight } from "lucide-react";

function CrossChainBridge() {
  const [originalChain, setOriginalChain] = useState("ethereum");
  const [targetChain, setTargetChain] = useState("base");
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const { disconnect } = useDisconnect();
  const { isConnected } = useAccount();

  return (
    <div className="flex h-screen items-center justify-center p-4">
      <Card className="mx-auto w-full max-w-md border-black bg-black text-white">
        <CardHeader>
          <CardTitle>Cross-chain bridge</CardTitle>
          <CardDescription>Transfer tokens between chains</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <ChainSelector
              originalChain={originalChain}
              targetChain={targetChain}
              setOriginalChain={setOriginalChain}
              setTargetChain={setTargetChain}
            />
            <TokenInput
              amount={amount}
              address={address}
              setAmount={setAmount}
              setAddress={setAddress}
            />
            <Button
              className="w-full bg-blue-700 hover:bg-blue-800"
              onClick={() => {
                console.log("Transfer");
              }}
              disabled={!isConnected}
            >
              Transfer <ArrowLeftRight className="h-4 w-4" />
            </Button>
            {isConnected ? (
              <Button
                onClick={() => disconnect()}
                className="w-full bg-blue-700 hover:bg-blue-800"
              >
                Disconnect
              </Button>
            ) : (
              <ConnectWallet />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CrossChainBridge;
