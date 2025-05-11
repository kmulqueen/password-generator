import type { StrengthLevel } from "../components/StrengthState";

export type Payload = {
  password: string;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasSymbols: boolean;
  hasNumbers: boolean;
};

export function calculateStrength({
  password,
  hasLowercase,
  hasNumbers,
  hasSymbols,
  hasUppercase,
}: Payload): StrengthLevel {
  let level = 0;

  // Score length
  const length = password.length;

  if (length === 0) return 0;
  if (length < 4) return 1;
  if (length >= 4 && length < 8) level++;
  if (length >= 8 && length < 12) level += 2;
  if (length >= 12) level += 3;

  // Score character types
  const containsUppercase = /[A-Z]/.test(password);
  const containsLowercase = /[a-z]/.test(password);
  const containsNumbers = /[0-9]/.test(password);
  const containsSymbols = /[^A-Za-z0-9]/.test(password);

  if (hasUppercase && containsUppercase) level++;
  if (hasLowercase && containsLowercase) level++;
  if (hasNumbers && containsNumbers) level++;
  if (hasSymbols && containsSymbols) level++;

  // Score character variety
  let variety = 0;

  if (containsUppercase) variety++;
  if (containsLowercase) variety++;
  if (containsNumbers) variety++;
  if (containsSymbols) variety++;

  if (variety >= 3) level++;

  // Convert level
  if (level <= 2) return 1;
  if (level <= 4) return 2;
  if (level <= 6) return 3;
  return 4;
}
