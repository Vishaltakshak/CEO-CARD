import CryptoJS from "crypto-js";

const key = CryptoJS.enc.Utf8.parse("08211817988717407737618217479032");
const vector = CryptoJS.enc.Utf8.parse("9769405078373100");

export const encryption = (input) =>
  CryptoJS.AES.encrypt(JSON.stringify(input), key, { iv: vector }).toString();

export const decryption = (input) =>
  CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(input, key, { iv: vector }));
