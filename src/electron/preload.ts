/**
 * Wichy
 * Electron Preload Process
 *
 * Based on:
 * - ARCHITECTURE.md
 * - TECH_STACK.md
 * - API_SPEC.md
 */

import { contextBridge } from "electron";

contextBridge.exposeInMainWorld(
  "wichy",
  {
    version: "1.0.0",

    platform: process.platform,

    isElectron: true
  }
);
