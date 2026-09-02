/**
 * Wichy
 * Notification Type Definition
 *
 * Based on:
 * - DATA_SCHEMA.md
 */

export type NotificationType =
* | "info"
  | "warning"
  | "error*
  | "success";

export interface *otification {
  id: string;

  tim*stamp: string;

  type: Notificati*nType;

  message: string;
}
