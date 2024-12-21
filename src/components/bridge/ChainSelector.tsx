import { ArrowRightLeft } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import Image from "next/image";

function ChainSelector({
  originalChain,
  targetChain,
  setOriginalChain,
  setTargetChain,
}: {
  originalChain: string;
  targetChain: string;
  setOriginalChain: (chain: string) => void;
  setTargetChain: (chain: string) => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <Select
        defaultValue={originalChain}
        value={originalChain}
        onValueChange={setOriginalChain}
      >
        <SelectTrigger className="w-[180px] border-gray-700 bg-gray-800 text-white">
          <SelectValue placeholder="Source chain" />
        </SelectTrigger>
        <SelectContent className="border-gray-700 bg-gray-800 text-white">
          <SelectItem className="gap-2 focus:bg-white" value="ethereum">
            <div className="flex items-center gap-2">
              Ethereum
              <Image
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                height={20}
                width={20}
                alt="ETH"
              />
            </div>
          </SelectItem>
          <SelectItem className="focus:bg-white" value="base">
            <div className="flex items-center gap-2">
              Base
              <Image src="/Coinbase.png" height={20} width={20} alt="Base" />
            </div>
          </SelectItem>
          <SelectItem className="focus:bg-white" value="arbitrum">
            <div className="flex items-center gap-2">
              Arbitrum
              <Image
                src="/Arbitrum.svg"
                height={20}
                width={20}
                alt="Arbitrum"
              />
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
      <div
        onClick={() => {
          setOriginalChain(targetChain);
          setTargetChain(originalChain);
        }}
        className="cursor-pointer"
      >
        <ArrowRightLeft className="mx-2 size-5" />
      </div>
      <Select
        value={targetChain}
        defaultValue={targetChain}
        onValueChange={setTargetChain}
      >
        <SelectTrigger className="w-[180px] border-gray-700 bg-gray-800 text-white">
          <SelectValue placeholder="Target chain" />
        </SelectTrigger>
        <SelectContent className="border-gray-700 bg-gray-800 text-white">
          <SelectItem className="focus:bg-white" value="ethereum">
            <div className="flex items-center gap-2">
              Ethereum
              <Image
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                height={20}
                width={20}
                alt="ETH"
              />
            </div>
          </SelectItem>
          <SelectItem className="focus:bg-white" value="base">
            <div className="flex items-center gap-2">
              Base
              <Image src="/Coinbase.png" height={20} width={20} alt="Base" />
            </div>
          </SelectItem>
          <SelectItem className="focus:bg-white" value="arbitrum">
            <div className="flex items-center gap-2">
              Arbitrum
              <Image
                src="/Arbitrum.svg"
                height={20}
                width={20}
                alt="Arbitrum"
              />
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default ChainSelector;
