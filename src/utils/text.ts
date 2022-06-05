export function numToAlpha(num: number, base = 0) {
  const Leveller = 65;
  const rangedNum = (num - base) % 26;
  return String.fromCharCode(rangedNum + Leveller);
}

export type EmailConfig = Partial<{
  cc: string;
  bcc: string;
  subject: string;
  body: string;
  [k: string]: string;
}>;
export const getEmailLink = (email?: string, config: EmailConfig = {}) =>
  email
    ? `mailto:${email}?${new URLSearchParams(
        config as Record<string, string>
      ).toString()}`
    : "";
