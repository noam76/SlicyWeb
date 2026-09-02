// src/types/Material.ts

export interface MaterialTemperature {
  minNozzle: number;
  maxNozzle: number;
  minBed: number;
  maxBed: number;
}

export interface MaterialCooling {
  fanMin: number;
  fanMax: number;
}

export interface MaterialPhysical {
  density: number;
  shrinkage: number;
  warpingRisk: "low" | "medium" | "high";
}

export interface MaterialRecommendedSettings {
  printSpeed: number;
  travelSpeed: number;
  retractionDistance: number;
  retractionSpeed: number;
}

export interface Material {
  id: string;

  name: string;

  category: string;

  description?: string;

  temperature: MaterialTemperature;

  cooling: MaterialCooling;

  physical: MaterialPhysical;

  recommended: MaterialRecommendedSettings;
}
