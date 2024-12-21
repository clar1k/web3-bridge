import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

function TokenInput({
  amount,
  address,
  setAmount,
  setAddress,
}: {
  amount: string;
  address: string;
  setAmount: (value: string) => void;
  setAddress: (value: string) => void;
}) {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="amount">Amount</Label>
        <Input
          id="amount"
          placeholder="1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border-gray-700 bg-gray-800 text-white"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">Token address</Label>
        <Input
          id="address"
          placeholder="0x0cc278..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border-gray-700 bg-gray-800 text-white"
        />
      </div>
    </>
  );
}

export default TokenInput;
