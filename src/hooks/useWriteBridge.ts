import { useWriteContract } from "wagmi";
import { abi } from "~/abi";
export const useHandleBridge = () => {
  const { writeContract, isPending, isSuccess, isError, error } =
    useWriteContract();

  const handleBridge = async ({
    address, // Zero address if eth
    recipient, // If zero address, send to self
    amount, // Amount to send
    destinationChainId, // Chain ID to bridge to
  }: {
    address: `0x${string}`;
    recipient: `0x${string}`;
    amount: bigint;
    destinationChainId: number;
  }) =>
    writeContract({
      abi,
      address: "0x0000000000000000000000000000000000000000",
      functionName: "sendTokens",
      args: [
        address,
        recipient,
        amount,
        destinationChainId,
        "0x00030100110100000000000000000000000000030d40",
      ],
    });

  return { handleBridge, isPending, isSuccess, isError, error };
};
