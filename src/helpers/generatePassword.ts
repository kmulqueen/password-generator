import type { StrengthLevel } from "../components/StrengthState";

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

  const hasUppercase = options.has("uppercase");
  const hasLowercase = options.has("lowercase");
  const hasNumbers = options.has("numbers");
  const hasSymbols = options.has("symbols");

  if (!hasUppercase && !hasLowercase && !hasNumbers && !hasSymbols) {
    return {
      password: "",
      strengthLevel: 0,
    };
  }

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

  const poolLength = passwordPool.length;
  for (let i: number = 0; i < passwordLength; i++) {
    const randIdx = Math.floor(Math.random() * poolLength);
    generatedPassword += passwordPool[randIdx];
  }

  if (generatedPassword.length < 4) {
    strengthLevel = 1;
  }

  const passwordData: PasswordData = {
    password: generatedPassword,
    strengthLevel,
  };

  console.log(passwordData);

  return passwordData;
}
