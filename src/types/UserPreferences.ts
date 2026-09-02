/**
 * Wichy
 * User *references Type Definition
 *
 * B*sed on:
 * - DATA_SCHEMA.md
 * -*USER_SETTINGS_SPEC.md
 */

export *ype*Theme =
  | "dark"
  | "light"
  |*"system";

export type Language =
* | "en"
  | "fr"
 *| "he"
  | "es"
  | "de"
 *|*"it";

export interface UserPrefer*nces {
  theme: Theme;

  language* Language;

  units: string;
}
```*
