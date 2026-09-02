/**
 * Wichy
 * Notification Type Definition
 *
 * Based on:
 * - DATA_SCHEMA.md
 * - ARCHITECTURE.md
 */

export type NotificationType =
  | "info"
  | "success"
  | "warning"
  | "error";

export interface Notification {
  id: string;

  timestamp: string;

  type: NotificationType;

  message: string;
}
