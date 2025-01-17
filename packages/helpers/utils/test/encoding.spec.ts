import "mocha";
import { expect } from "chai";

import * as encodingUtils from "../src/encoding";
import { removeHexPrefix } from "../src/misc";
import { getType } from "../src/validators";

function compare(a: any, b: any) {
  const type = getType(a);
  if (type !== getType(b)) {
    return false;
  }
  if (type === "array-buffer") {
    a = Buffer.from(a);
    b = Buffer.from(b);
  }
  return a.toString().toLowerCase() === b.toString().toLowerCase();
}

const TEST_STRING_UTF8 = "wallet";
const TEST_STRING_HEX = "0x77616c6c6574";
const TEST_STRING_BUF = Buffer.from(TEST_STRING_UTF8, "utf8");
const TEST_STRING_ARR_BUF = new Uint8Array(TEST_STRING_BUF).buffer;

const TEST_NUMBER_NUM = 16;
const TEST_NUMBER_HEX = "0x10";
const TEST_NUMBER_UTF8 = `${TEST_NUMBER_NUM}`;
const TEST_NUMBER_BUF = Buffer.from(removeHexPrefix(TEST_NUMBER_HEX), "hex");
const TEST_NUMBER_ARR_BUF = new Uint8Array(TEST_NUMBER_BUF).buffer;

describe("Encoding Utils", () => {
  // -- ArrayBuffer ------------------------------------------ //

  it("convertArrayBufferToBuffer", async () => {
    const input = TEST_STRING_ARR_BUF;
    const expected = TEST_STRING_BUF;
    const result = encodingUtils.convertArrayBufferToBuffer(input);
    expect(compare(result, expected)).to.be.true;
  });

  it("convertArrayBufferToHex", async () => {
    const input = TEST_STRING_ARR_BUF;
    const expected = TEST_STRING_HEX;
    const result = encodingUtils.convertArrayBufferToHex(input);
    expect(compare(result, expected)).to.be.true;
  });

  // -- Buffer ----------------------------------------------- //

  it("convertBufferToArrayBuffer", async () => {
    const input = TEST_STRING_BUF;
    const expected = TEST_STRING_ARR_BUF;
    const result = encodingUtils.convertBufferToArrayBuffer(input);
    expect(compare(result, expected)).to.be.true;
  });

  // -- Utf8 ------------------------------------------------- //

  it("convertUtf8ToBuffer", async () => {
    const input = TEST_STRING_UTF8;
    const expected = TEST_STRING_BUF;
    const result = encodingUtils.convertUtf8ToBuffer(input);
    expect(compare(result, expected)).to.be.true;
  });

  it("convertUtf8ToHex", async () => {
    const input = TEST_STRING_UTF8;
    const expected = TEST_STRING_HEX;
    const result = encodingUtils.convertUtf8ToHex(input);
    expect(compare(result, expected)).to.be.true;
  });

  // -- Hex -------------------------------------------------- //

  it("convertHexToArrayBuffer", async () => {
    const input = TEST_STRING_HEX;
    const expected = TEST_STRING_ARR_BUF;
    const result = encodingUtils.convertHexToArrayBuffer(input);
    expect(compare(result, expected)).to.be.true;
  });

  // -- Number ----------------------------------------------- //

  it("convertNumberToHex", async () => {
    const input = TEST_NUMBER_NUM;
    const expected = TEST_NUMBER_HEX;
    const result = encodingUtils.convertNumberToHex(input);
    expect(compare(result, expected)).to.be.true;
  });
});
