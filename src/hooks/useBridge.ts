import { useHandleBridge } from "~/hooks/useWriteBridge";

export const useBridge = () => {
  const { handleBridge, isPending, isSuccess, isError, error } =
    useHandleBridge();
  return { handleBridge, isPending, isSuccess, isError, error };
};
