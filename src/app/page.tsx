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
import { useAccount, useChainId, useDisconnect, useSwitchChain } from "wagmi";
import { ConnectWallet } from "~/components/ConnectWallet";
import ChainSelector from "~/components/bridge/ChainSelector";
import TokenInput from "~/components/bridge/TokenInput";
import { ArrowLeftRight } from "lucide-react";
import { baseSepolia, sepolia } from "@reown/appkit/networks";
import { useBridge } from "~/hooks/useBridge";

function CrossChainBridge() {
  const [originalChain, setOriginalChain] = useState("ethereum");
  const [targetChain, setTargetChain] = useState("base");
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const { disconnect } = useDisconnect();
  const { isConnected, chainId, address: publicAddress } = useAccount();
  const { switchChain } = useSwitchChain();
  const { handleBridge } = useBridge();
  return (
    <div className="flex h-screen items-center justify-center p-4">
      <Card className="mx-auto w-full max-w-md rounded-3xl border-black bg-black text-white">
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
              onClick={async () => {
                await handleBridge({
                  amount: BigInt(0.0001 * 10 ** 18),
                  recipient: publicAddress as `0x${string}`,
                  address: "0x449be283980ae381555e9bc592f8cac34416a711",
                  destinationChainId: sepolia.id,
                });
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
            {isConnected && chainId !== baseSepolia.id && (
              <Button
                onClick={() =>
                  switchChain({
                    chainId: baseSepolia.id,
                  })
                }
                className="w-full bg-blue-700 hover:bg-blue-800"
              >
                Switch to Base Sepolia
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CrossChainBridge;
