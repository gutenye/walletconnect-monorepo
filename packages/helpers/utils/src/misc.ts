import * as encoding from "@walletconnect/encoding";
import * as jsonRpcUtils from "@walletconnect/jsonrpc-utils";

// -- hex -------------------------------------------------- //

export function sanitizeHex(hex: string): string {
  return encoding.sanitizeHex(hex);
}

export function addHexPrefix(hex: string): string {
  return encoding.addHexPrefix(hex);
}

export function removeHexPrefix(hex: string): string {
  return encoding.removeHexPrefix(hex);
}

export function removeHexLeadingZeros(hex: string): string {
  return encoding.removeHexLeadingZeros(encoding.addHexPrefix(hex));
}

// -- id -------------------------------------------------- //

export const payloadId = jsonRpcUtils.payloadId;

export function uuid(): string {
  const result: string = ((a?: any, b?: any) => {
    for (
      b = a = "";
      a++ < 36;
      b += (a * 51) & 52 ? (a ^ 15 ? 8 ^ (Math.random() * (a ^ 20 ? 16 : 4)) : 4).toString(16) : "-"
    ) {
      // empty
    }
    return b;
  })();
  return result;
}
