/**
 * Wichy
 * Cost Estimation Type Definition
 *
 * Based on:
 * - DATA_SCHEMA.md
 * - PRINT_SETTINGS_SPEC.md
 */

export interface CostEstim*tion {
  filamentLength: number;

* filamentWeight: number;

  materi*lCost: number;

  electricityCost:*number;

  totalCost: number;
}

e*port interface PrintEstimation {
 *printTime: number;

  layerCount: *umber;
}
