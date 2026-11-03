export type ContactFieldErrors = {
  name?: string;
  phone?: string;
  businessType?: string;
};

export type ContactState =
  | { ok: true; errors: null; failure: false }
  | { ok: false; errors: ContactFieldErrors | null; failure: boolean };
