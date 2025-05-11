import type { StrengthLevel } from "../components/StrengthState";
import { calculateStrength, type Payload } from "./calculateStrength";

export type PasswordData = {
  password: string;
  strengthLevel: StrengthLevel;
};

export function generatePassword(options: FormData): PasswordData {
  let generatedPassword = "";
  let strengthLevel: StrengthLevel = 0;
  const upperCaseLetterPool = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  const lowerCaseLetterPool = [..."abcdefghijklmnopqrstuvwxyz"];
  const numbersAsStringPool = [..."0123456789"];
  const symbolsPool = [...`!@#$%^&*()_-+={}|\\:;"'<>,./?`];
  const passwordLength = Number(options.get("character-length") || "10");
  let passwordPool: string[] = [];

  // Check what options were checked
  const hasUppercase = options.has("uppercase");
  const hasLowercase = options.has("lowercase");
  const hasNumbers = options.has("numbers");
  const hasSymbols = options.has("symbols");

  // If no options were checked return
  if (!hasUppercase && !hasLowercase && !hasNumbers && !hasSymbols) {
    return {
      password: "",
      strengthLevel: 0,
    };
  }

  // Update passwordPool based on check options
  if (hasUppercase) {
    passwordPool = [...passwordPool, ...upperCaseLetterPool];
  }
  if (hasLowercase) {
    passwordPool = [...passwordPool, ...lowerCaseLetterPool];
  }
  if (hasNumbers) {
    passwordPool = [...passwordPool, ...numbersAsStringPool];
  }
  if (hasSymbols) {
    passwordPool = [...passwordPool, ...symbolsPool];
  }

  // Include at least one character from each selected pool
  const poolLength = passwordPool.length;
  if (hasUppercase && passwordLength > 0) {
    generatedPassword +=
      upperCaseLetterPool[
        Math.floor(Math.random() * upperCaseLetterPool.length)
      ];
  }
  if (hasLowercase && passwordLength > generatedPassword.length) {
    generatedPassword +=
      lowerCaseLetterPool[
        Math.floor(Math.random() * lowerCaseLetterPool.length)
      ];
  }
  if (hasNumbers && passwordLength > generatedPassword.length) {
    generatedPassword +=
      numbersAsStringPool[
        Math.floor(Math.random() * numbersAsStringPool.length)
      ];
  }
  if (hasSymbols && passwordLength > generatedPassword.length) {
    generatedPassword +=
      symbolsPool[Math.floor(Math.random() * symbolsPool.length)];
  }

  // Fill the rest of the password with random characters from the pool
  while (generatedPassword.length < passwordLength) {
    const randIdx = Math.floor(Math.random() * poolLength);
    generatedPassword += passwordPool[randIdx];
  }

  // Calculate strength
  const payload: Payload = {
    password: generatedPassword,
    hasLowercase,
    hasUppercase,
    hasNumbers,
    hasSymbols,
  };

  strengthLevel = calculateStrength(payload);

  const passwordData: PasswordData = {
    password: generatedPassword,
    strengthLevel,
  };

  return passwordData;
}
