import {
  IJsonRpcErrorMessage,
} from "@walletconnect/types";

export function formatRpcError(
  error: Partial<IJsonRpcErrorMessage>,
): { code: number; message: string } {
  const message = error.message || "Failed or Rejected Request";
  let code = -32000;
  if (error && !error.code) {
    switch (message) {
      case "Parse error":
        code = -32700;
        break;
      case "Invalid request":
        code = -32600;
        break;
      case "Method not found":
        code = -32601;
        break;
      case "Invalid params":
        code = -32602;
        break;
      case "Internal error":
        code = -32603;
        break;
      default:
        code = -32000;
        break;
    }
  }
  const result = {
    code,
    message,
  };
  return result;
}
