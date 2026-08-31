# AI SMART SLICER
# FILE STRUCTURE

Version: 2.0.0

Status: Approved

---

# Purpose

This document defines the official project directory structure.

Goals:

- Maintain consistency
- Simplify navigation
- Reduce technical debt
- Improve maintainability
- Prevent duplicate functionality
- Allow future expansion

This structure is the official reference for the entire project.

---

# Root Structure

```text
wichy/

├── docs/
├── src/
├── tests/
├── assets/
├── cache/
├── logs/
├── scripts/
├── plugins/
├── public/
├── releases/
├── .github/
│
├── README.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── LICENSE
│
├── package.json
├── tsconfig.json
├── vite.config.ts
├── electron-builder.json
├── eslint.config.js
├── prettier.config.js
├── .gitignore
└── .env.example
```

---

# Documentation Structure

```text
docs/

├── 00-index/
│   ├── PROJECT_DOCUMENTATION_INDEX.md
│   └── AI_START_HERE.md
│
├── 01-project/
│   ├── PROJECT_DESCRIPTION.md
│   ├── PROJECT_SPEC.md
│   ├── ROADMAP.md
│   ├── PHASES_IMPLEMENTATION_PLAN.md
│   ├── CHANGELOG.md
│   └── DECISIONS.md
│
├── 02-architecture/
│   ├── API_SPEC.md
│   ├── ARCHITECTURE.md
│   ├── FILE_STRUCTURE.md
│   ├── TECH_STACK.md
│   └── DATA_SCHEMA.md
│
├── 03-development/
│   ├── SYSTEM_RULES.md
│   ├── DEVELOPMENT_WORKFLOW.md
│   ├── DEVELOPMENT_RULES.md
│   ├── USER_SETTINGS_SPEC.md
│   ├─── ERROR_CODES_SPEC.md
│   └── UNDO_REDO_SPEC.md
│
├── 04-ai/
│   ├── AI_ENGINE_SPEC.md
│   └── RECOMMENDATION_RULES.md
│   └── OBJECT_CLASSIFICATION_SPEC.md
│   └── SUPPORT_GENERATION_SPEC.md
│   └── PRINT_PRESETS_SPEC.md
│   └── PRINT_SETTINGS_SPEC.md
│
├── 05-profiles/
│   ├── FILAMENT_SETTINGS_SPEC.md
│   ├── PRINTER_PROFILE_SPEC.md
│   └── MATERIAL_PROFILE_SPEC.md
│
├── 06-quality/
│   ├── TEST_PLAN.md
│   ├── SECURITY_SPEC.md
│   └── PERFORMANCE_SPEC.md
│
├── 07-future/
│   ├── GCODE_ENGINE_SPEC.md
│   └── PLUGIN_SYSTEM_SPEC.md
│
├── 08-user-interface/
│   └── GUI_SPEC.md
│
├── 09-reference/
├── GLOSSARY.md
├── TERMINOLOGY.md
├── NAMING_CONVENTIONS.md
├── ARCHITECTURE_DECISION_MATRIX.md
├── PROJECT_ACRONYMS.md
├── DIRECTORY_PURPOSES.md
└── VERSIONING_POLICY.md
```

---

# Documentation Statistics

Current Documentation:

```text
24 Specification Documents
```

GitHub Governance Files:

```text
README.md
CONTRIBUTING.md
CODE_OF_CONDUCT.md
LICENSE
```

Total Documentation Assets:

```text
28+
```

---

# Source Structure

```text
src/

├── app/
├── gui/
├── renderer/
├── scene/
├── object_manager/
├── transform/
├── importer/
├── printer_database/
├── material_database/
├── model_analysis/
├── recommendation_engine/
├── optimization_engine/
├── cost_engine/
├── repositories/
├── cache/
├── storage/
├── events/
├── services/
├── state/
├── config/
├── utils/
└── types/
```

---

# Application Layer

```text
src/app/

├── Application.ts
├── Startup.ts
├── Shutdown.ts
├── Version.ts
└── DependencyContainer.ts
```

---

# GUI Layer

```text
src/gui/

├── layouts/
├── windows/
├── panels/
├── dialogs/
├── menus/
├── toolbars/
├── components/
├── themes/
├── hooks/
└── styles/
```

---

# Renderer Layer

```text
src/renderer/

├── Renderer.ts
├── RendererManager.ts
├── CameraManager.ts
├── LightingManager.ts
├── SceneRenderer.ts
├── SelectionRenderer.ts
└── helpers/
```

---

# Scene

```text
src/scene/

├── SceneManager.ts
├── SceneFactory.ts
├── SceneSerializer.ts
└── SceneValidator.ts
```

---

# Object Management

```text
src/object_manager/

├── ObjectManager.ts
├── ObjectFactory.ts
├── ObjectRepository.ts
├── ObjectValidator.ts
└── ObjectDuplicator.ts
```

---

# Transformations

```text
src/transform/

├── MoveTool.ts
├── RotateTool.ts
├── ScaleTool.ts
├── TransformManager.ts
└── TransformValidator.ts
```

---

# Import System

```text
src/importer/

├── STLImporter.ts
├── ThreeMFImporter.ts
├── ImportManager.ts
└── FileValidator.ts
```

---

# Printer Database

```text
src/printer_database/

├── PrinterManager.ts
├── PrinterRepository.ts
├── PrinterValidator.ts
├── PrinterCache.ts
├── PrinterImporter.ts
└── profiles/
```

---

# Material Database

```text
src/material_database/

├── MaterialManager.ts
├── MaterialRepository.ts
├── MaterialValidator.ts
├── MaterialCache.ts
└── profiles/
```

---

# Analysis Engine

```text
src/model_analysis/

├── ModelAnalyzer.ts
├── GeometryAnalyzer.ts
├── PrintabilityAnalyzer.ts
├── StabilityAnalyzer.ts
├── MeshAnalyzer.ts
└── reports/
```

---

# Recommendation Engine

```text
src/recommendation_engine/

├── RecommendationEngine.ts
├── DecisionEngine.ts
├── ValidationEngine.ts
├── WarningEngine.ts
└── RecommendationBuilder.ts
```

---

# Optimization Engine

```text
src/optimization_engine/

├── OptimizationEngine.ts
├── OrientationOptimizer.ts
├── MaterialOptimizer.ts
├── SpeedOptimizer.ts
└── SupportOptimizer.ts
```

---

# Cost Engine

```text
src/cost_engine/

├── CostCalculator.ts
├── MaterialEstimator.ts
├── EnergyEstimator.ts
└── TimeEstimator.ts
```

---

# Services

```text
src/services/

├── AnalysisService.ts
├── RecommendationService.ts
├── PrinterService.ts
├── MaterialService.ts
├── NotificationService.ts
└── ProjectService.ts
```

---

# State Management

```text
src/state/

├── appStore.ts
├── sceneStore.ts
├── objectStore.ts
├── printerStore.ts
├── materialStore.ts
├── analysisStore.ts
└── recommendationStore.ts
```

---

# Shared Types

```text
src/types/

├── Printer.ts
├── Material.ts
├── Scene.ts
├── Object3D.ts
├── Analysis.ts
├── Recommendation.ts
└── Project.ts
```

```constants
src/constants
```
---

# Tests

```text
tests/

├── unit/
├── integration/
├── regression/
├── e2e/
├── gui/
├── analysis/
└── recommendations/
```

---

# Assets

```text
assets/

├── icons/
├── images/
├── logos/
├── themes/
└── placeholders/
```

---

# Cache

```text
cache/

├── printers/
├── materials/
├── repositories/
└── analysis/
```

---

# Logs

```text
logs/

├── application/
├── errors/
└── diagnostics/
```

---

# Scripts

```text
scripts/

├── setup/
├── migrations/
├── profile_import/
├── cache_tools/
└── release/
```

---

# Plugins

```text
plugins/

├── installed/
├── disabled/
└── cache/
```

---

# Public

```text
public/

├── fonts/
├── icons/
├── localization/
└── static/
```

---

# Releases

```text
releases/

├── alpha/
├── beta/
├── rc/
└── stable/
```

---

# GitHub

```text
.github/

└── workflows/

    ├── lint.yml
    ├── test.yml
    ├── build.yml
    └── release.yml
```

---

# Structure Rules

1. Every directory must have a single responsibility.

2. Business logic must never be placed in GUI.

3. Shared logic must be extracted into Services or Utils.

4. New modules must be documented.

5. Architecture changes require documentation updates.

6. Documentation structure must remain synchronized with implementation structure.

---

# Future Reserved Modules

```text
machine_learning/

multi_material/

cloud/

remote_printer/

webcam/

marketplace/
```

---

# Golden Rule

A new contributor should be able to understand where a file belongs in less than 60 seconds.

---

# End Of Document
