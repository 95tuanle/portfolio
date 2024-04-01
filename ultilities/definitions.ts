export type SendEmailState =
  | {
      errors?: {
        email?: string[];
        text?: string[];
      };
      message?: string;
    }
  | undefined
  | string;
