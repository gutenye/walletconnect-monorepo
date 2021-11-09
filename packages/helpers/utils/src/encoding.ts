import BN from "bn.js";
import * as encoding from "@walletconnect/encoding";

// -- ArrayBuffer ------------------------------------------ //

export function convertArrayBufferToBuffer(arrBuf: ArrayBuffer): Buffer {
  return encoding.arrayToBuffer(new Uint8Array(arrBuf));
}

export function convertArrayBufferToHex(arrBuf: ArrayBuffer, noPrefix?: boolean): string {
  return encoding.arrayToHex(new Uint8Array(arrBuf), !noPrefix);
}

// -- Buffer ----------------------------------------------- //

export function convertBufferToArrayBuffer(buf: Buffer): ArrayBuffer {
  return encoding.bufferToArray(buf).buffer;
}

// -- Utf8 ------------------------------------------------- //

export function convertUtf8ToBuffer(utf8: string): Buffer {
  return encoding.utf8ToBuffer(utf8);
}

export function convertUtf8ToHex(utf8: string, noPrefix?: boolean): string {
  return encoding.utf8ToHex(utf8, !noPrefix);
}

// -- Hex -------------------------------------------------- //

export function convertHexToArrayBuffer(hex: string): ArrayBuffer {
  return encoding.hexToArray(hex).buffer;
}

// -- Number ----------------------------------------------- //

export function convertNumberToHex(num: number | string, noPrefix?: boolean): string {
  const hex = encoding.removeHexPrefix(encoding.sanitizeHex(new BN(num).toString(16)));
  return noPrefix ? hex : encoding.addHexPrefix(hex);
}
