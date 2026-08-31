# WICHY – AI Smart 3D Printing Platform
**Version:** 1.0.0  
**Status:** Active Development  
**Philosophy:** Documentation-First | Local-First | Rule-Based AI

---

## 1. Executive Summary & Vision
Wichy is a next-generation desktop application engineered to simplify, optimize, and secure the 3D print preparation workflow. Rather than serving as just another slicing utility, Wichy acts as an intelligent engineering assistant that evaluates:
- **The Hardware:** Printer specifications, build volume, kinematics, and firmware limits.
- **The Material:** Polymer properties, thermal limits, and manufacturer-specific profiles.
- **The Geometry:** Spatial dimensions, wall thickness, bridge spans, overhang angles, and functional classification.
- **The User Objective:** Speed, visual surface finish, structural strength, or material economy.

The system combines deterministic rule-based AI, geometry analytics, and continuous hardware database synchronization to output optimal slicing configurations.

---

## 2. Core Feature Matrix

### 2.1 3D Workspace & Geometry Engine
- **Supported Formats:** STL, 3MF (Current) | STEP, OBJ, AMF (Roadmap).
- **Interactive Scene (Three.js):** Custom build plate visualization, dynamic grid adaptivity, spatial axis indicators, multi-object handling.
- **Object Manipulation:** Precise Translation, Rotation, Uniform/Non-Uniform Scaling (with specialized Scale Gizmo), Duplication with automatic spacing, and Align-to-Bed.
- **Real-Time Collision Detection:** Instantaneous bounding-box and mesh intersection checks with visual status feedback (grayscale tinting during collision).

### 2.2 Hardware & Material Intelligence
- **Dynamic GitHub Sync:** Automated fetch from public open-source repositories (OrcaSlicer, PrusaSlicer, Cura) for up-to-date printer/material definitions, with local JSON fallback.
- **Firmware Adaptivity:** Profile tuning tailored to specific printer firmwares (Klipper, Marlin, Bambu OS, RepRapFirmware), adjusting Pressure Advance, Acceleration, and Jerk constraints.
- **Tiered Material Profiles:**
  - *Generic Families:* PLA, PLA+, PETG, ABS, ASA, TPU, Nylon, PC, PP.
  - *Manufacturer Profiles:* Bambu Lab Basic, Prusament, eSUN, Polymaker, etc.

### 2.3 Rule-Based AI Analytics & Classification Engine
- **Mesh Inspection:** Real-time geometric analysis evaluating thin walls, overhang thresholds, bridge distances, volumetric distribution, and center of gravity.
- **Functional Object Categorization:** Automatic classification of models into functional domains:
  - *Miniatures & Figurines* (Focus: detail preservation, organic tree supports).
  - *Mechanical & Structural Parts* (Focus: layer adhesion, wall count, infill strength).
  - *Vases & Shells* (Focus: continuous extrusion path).
  - *Rapid Prototypes* (Focus: speed, minimal infill).
- **Automated Recommendation Generation:** Calculates layer height, wall perimeter count, infill density/pattern, cooling fans, retraction limits, print speeds, and brim/raft adhesion strategies.

### 2.4 Support & Optimization System
- **Support Strategy:** Evaluates overhang angles and surface accessibility to select between Tree/Organic supports and Standard grid supports.
- **Optimization Trade-Offs:** Minimizes support volume and print time while preserving structural integrity.

### 2.5 Multi-Variable Cost & Duration Engine
- Real-time estimation before slicing:
  - Material Mass (grams) & Filament Length (meters).
  - Total Material Cost (based on spool pricing).
  - Electrical Power Consumption & Financial Cost.
  - Total Estimated Print Duration.

---

## 3. System Architecture & Module Boundaries

The application enforces strict separation of concerns across single-responsibility modules:

```text
       ┌────────────────────────────────────────────────────────┐
       │                   React / UI Layer                     │
       │           (Zustand State, Tailwind, shadcn)            │
       └───────────────────────────┬────────────────────────────┘
                                   │
       ┌───────────────────────────┴────────────────────────────┐
       │                 Three.js Renderer / App                │
       │       (Workspace, Gizmos, Real-Time Collisions)        │
       └───────┬───────────────────┬───────────────────┬────────┘
               │                   │                   │
   ┌───────────┴───────────┐ ┌─────┴─────────────┐ ┌───┴───────────────────┐
   │ Importer & Parser     │ │ Printer & Material│ │ AI Analytics &        │
   │ (STL / 3MF Loaders)   │ │ Sync Engine       │ │ Recommendation Engine │
   └───────────────────────┘ └───────────────────┘ └───┬───────────────────┐
                                                       │
                                           ┌───────────┴───────────┐
                                           │ Cost & Telemetry      │
                                           │ Estimator Engine      │
                                           └───────────────────────┘

## 4. Technical Stack

| Layer | Technology |
|---|---|
| **Runtime Container** | Electron (Desktop Shell) |
| **Language & Typing** | TypeScript (Strict Mode) |
| **UI Framework** | React + shadcn/ui + Tailwind CSS |
| **State Management** | Zustand |
| **3D Rendering** | Three.js |
| **Validation & Parsing** | Zod |
| **Test Automation** | Vitest (Unit) + Playwright (E2E) |

---

## 5. Development Roadmap & Principles

### Development Hierarchy
`Documentation ➔ Architectural Contracts ➔ Modular Implementation ➔ Validation Testing ➔ Performance Optimization`

### Core Principles
1. **Local First:** Operates fully without active internet connectivity.
2. **Deterministic Security:** AI assists with transparent, rule-driven engineering parameters; it never hallucinates data.
3. **User Authority:** Recommendations are suggested; the user retains absolute override control over all parameters.
