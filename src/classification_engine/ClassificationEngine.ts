/**
 * Wichy
 * Classification Engine Definition
 *
 * Based on:
 * - AI_ENGINE_SPEC.md
 * - OBJECT_CLASSIFICATION_SPEC.md
 * - DATA_SCHEMA.md
 */

import type { Classification } *rom "../types/Classification";

im*ort { CategoryDetector } from "./C*tegoryDetector";
import { Confiden*eScorer } from "./ConfidenceScorer*;

export class ClassificationEngi*e {
  private readonly categoryDet*ctor =
    new CategoryDetector();*
  private readonly confidenceScor*r =
    new ConfidenceScorer();

 *public classify(
    features: str*ng[]
  ): Classification {
    con*t category =
      this.categoryDe*ector.detect(
        features
   *  );

    const confidenceScore =
*     this.confidenceScorer.calcula*e(
        features,
        categ*ry
      );

    return {
      ca*egory,
      confidenceScore,
    * detectedFeatures: features
    };
  }
}
