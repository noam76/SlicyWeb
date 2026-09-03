/**
 * Wichy
 * Category Detector Definition
 *
 * Based on:
 * - OBJECT_CLASSIFICATION_SPEC.md
 * - AI_ENGINE_SPEC.md
 * - DATA_SCHEMA.md
 */

export class CategoryDetector {
  public detect(
    features: string[]
  ): string {
    const normalizedFeatures =
      features.map((feature) =>
        feature.toLowerCase()
      );

    if (
      this.hasAny(
        normalizedFeatures,
        [
          "teeth",
          "gear",
          "circular"
        ]
      )
    ) {
      return "Gear";
    }

    if (
      this.hasAny(
        normalizedFeatures,
        [
          "bracket",
          "mounting_holes",
          "reinforcement_ribs"
        ]
      )
    ) {
      return "Bracket";
    }

    if (
      this.hasAny(
        normalizedFeatures,
        [
          "figurine",
          "organic",
          "curves"
        ]
      )
    ) {
      return "Figurine";
    }

    if (
      this.hasAny(
        normalizedFeatures,
        [
          "miniature",
          "small_features",
          "fine_details"
        ]
      )
    ) {
      return "Miniature";
    }

    if (
      this.hasAny(
        normalizedFeatures,
        [
          "container",
          "internal_volume",
          "open_top"
        ]
      )
    ) {
      return "Container";
    }

    if (
      this.hasAny(
        normalizedFeatures,
        [
          "vase",
          "thin_walls",
          "hollow"
        ]
      )
    ) {
      return "Vase";
    }

    if (
      this.hasAny(
        normalizedFeatures,
        [
          "enclosure",
          "electronics",
          "cover"
        ]
      )
    ) {
      return "Enclosure";
    }

    if (
      this.hasAny(
        normalizedFeatures,
        [
          "tool",
          "grip",
          "handle"
        ]
      )
    ) {
      return "Tool";
    }

    if (
      this.hasAny(
        normalizedFeatures,
        [
          "articulated",
          "joint",
          "linked"
        ]
      )
    ) {
      return "Articulated Model";
    }

    if (
      this.hasAny(
        normalizedFeatures,
        [
          "prototype",
          "concept"
        ]
      )
    ) {
      return "Prototype";
    }

    if (
      this.hasAny(
        normalizedFeatures,
        [
          "structural",
          "load_bearing"
        ]
      )
    ) {
      return "Structural Part";
    }

    if (
      this.hasAny(
        normalizedFeatures,
        [
          "mechanical",
          "functional_geometry",
          "holes"
        ]
      )
    ) {
      return "Mechanical Part";
    }

    if (
      this.hasAny(
        normalizedFeatures,
        [
          "decorative",
          "aesthetic"
        ]
      )
    ) {
      return "Decorative Object";
    }

    if (
      this.hasAny(
        normalizedFeatures,
        [
          "functional",
          "engineering"
        ]
      )
    ) {
      return "Functional Part";
    }

    return "Unknown";
  }

  private hasAny(
    features: string[],
    candidates: string[]
  ): boolean {
    return candidates.some(
      (candidate) =>
        features.includes(candidate)
    );
  }
}
