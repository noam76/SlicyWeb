/**
 * Wichy
 * Decision Engine
 *
 * Responsible for:
 * - Recommendation decision making
 * - Preset selection
 * - Recommendation evaluation
 * - Rule application
 *
 * No rendering logic.
 * No repository logic.
 * No UI logic.
 *
 * Based on:
 * - ARCHITECTURE.md
 * - AI_ENGINE_SPEC.md
 * - PRINT_PRESETS_SPEC.md
 * - OBJECT_CLASSIFICATION_SPEC.md
 */

import type { Classification } from "../types/Classification";
import type { PrintPreset } from "../types/PrintPreset";

export class DecisionEngine {
  /**
   * Selects the most appropriate preset
   * for a classification result.
   */
  public selectPreset(
    classification: Classification,
    presets: PrintPreset[],
  ): PrintPreset | null {
    if (presets.length === 0) {
      return null;
    }

    const category =
      classification.category;

    const matchingPreset =
      presets.find(
        (preset) =>
          preset.category ===
          category,
      );

    return (
      matchingPreset ??
      presets[0]
    );
  }

  /**
   * Returns whether a preset
   * should be recommended.
   */
  public shouldRecommend(
    confidenceScore: number,
  ): boolean {
    return confidenceScore >= 50;
  }

  /**
   * Returns a normalized recommendation score.
   */
  public calculateScore(
    confidenceScore: number,
  ): number {
    return Math.max(
      0,
      Math.min(
        100,
        confidenceScore,
      ),
    );
  }

  /**
   * Determines recommendation quality.
   */
  public getRecommendationLevel(
    score: number,
  ): string {
    if (score >= 90) {
      return "excellent";
    }

    if (score >= 75) {
      return "high";
    }

    if (score >= 50) {
      return "medium";
    }

    return "low";
  }
}
