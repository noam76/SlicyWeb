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
│   ├── AI_START_HERE.md                 = Point d'entrée principal pour l'IA et les nouveaux contributeurs
│   ├── API_START_HERE.md                = Guide de démarrage rapide pour l'API et les services
│   └── PROJECT_DOCUMENTATION_INDEX.md   = Index complet de toute la documentation du projet
│
├── 01-project/
│   ├── PROJECT_DESCRIPTION.md           = Présentation générale, vision et objectifs du projet
│   ├── PROJECT_SPEC.md                  = Cahier des charges principal du projet
│   ├── ROADMAP.md                       = Planification des futures fonctionnalités et phases
│   ├── PHASES_IMPLEMENTATION_PLAN.md    = Ordre détaillé d'implémentation des modules
│   ├── CHANGELOG.md                     = Historique des modifications et versions
│   └── DECISIONS.md                     = Journal des décisions architecturales (ADR)
│
├── 02-architecture/
│   ├── API_SPEC.md                      = Comment les modules communiquent entre eux
│   ├── ARCHITECTURE.md                  = Comment le logiciel est construit
│   ├── FILE_STRUCTURE.md                = Où se trouve chaque fichier et dossier
│   ├── IMPORT_EXPORT_SPEC.md            = Gestion des imports et exports de fichiers
│   ├── TECH_STACK.md                    = Technologies utilisées dans le projet
│   └── DATA_SCHEMA.md                   = Structure officielle de toutes les données
│
├── 03-development/
│   ├── SYSTEM_RULES.md                  = Règles globales du projet
│   ├── DEVELOPMENT_WORKFLOW.md          = Workflow officiel de développement
│   ├── DEVELOPMENT_RULES.md             = Règles de codage, refactoring et maintenance
│   ├── USER_SETTINGS_SPEC.md            = Paramètres utilisateur et préférences
│   ├── ERROR_CODES_SPEC.md              = Liste normalisée des erreurs et avertissements
│   └── UNDO_REDO_SPEC.md                = Fonctionnement du système Undo / Redo
│
├── 04-ai/
│   ├── AI_ENGINE_SPEC.md                = Architecture du moteur IA
│   ├── RECOMMENDATION_RULES.md          = Règles utilisées pour les recommandations
│   ├── OBJECT_CLASSIFICATION_SPEC.md    = Classification automatique des modèles 3D
│   ├── SUPPORT_GENERATION_SPEC.md       = Génération intelligente des supports
│   ├── PRINT_PRESETS_SPEC.md            = Profils prédéfinis d'impression
│   └── PRINT_SETTINGS_SPEC.md           = Tous les paramètres d'impression disponibles
│
├── 05-profiles/
│   ├── FILAMENT_SETTINGS_SPEC.md        = Profils détaillés des filaments
│   ├── PRINTER_PROFILE_SPEC.md          = Profils et capacités des imprimantes
│   └── MATERIAL_PROFILE_SPEC.md         = Profils des matériaux d'impression
│
├── 06-quality/
│   ├── TEST_PLAN.md                     = Stratégie de tests du projet
│   ├── SECURITY_SPEC.md                 = Règles de sécurité et validation
│   └── PERFORMANCE_SPEC.md              = Objectifs de performances et optimisation
│
├── 07-future/
│   ├── GCODE_ENGINE_SPEC.md             = Future architecture du moteur G-Code
│   └── PLUGIN_SYSTEM_SPEC.md            = Future architecture du système de plugins
│
├── 08-user-interface/
│   └── GUI_SPEC.md                      = Spécification complète de l'interface utilisateur
│
├── 09-reference/
│   ├── GLOSSARY.md                      = Dictionnaire des termes techniques du projet
│   ├── TERMINOLOGY.md                   = Terminologie officielle à utiliser partout
│   ├── NAMING_CONVENTIONS.md            = Conventions de nommage du code et fichiers
│   ├── ARCHITECTURE_DECISION_MATRIX.md  = Comparatif et justification des choix techniques
│   ├── PROJECT_ACRONYMS.md              = Liste des acronymes utilisés dans le projet
│   ├── DIRECTORY_PURPOSES.md            = Description du rôle de chaque dossier
│   └── VERSIONING_POLICY.md             = Politique de gestion des versions
│
├── README.md                            = Page d'accueil du dépôt GitHub
├── CONTRIBUTING.md                      = Guide de contribution au projet
├── CODE_OF_CONDUCT.md                   = Règles de conduite pour les contributeurs
└── LICENSE                              = Conditions légales d'utilisation du projet├── 00-index/
│   ├── AI_START_HERE.md                 = Point d'entrée principal pour l'IA et les nouveaux contributeurs
│   ├── API_START_HERE.md                = Guide de démarrage rapide pour l'API et les services
│   └── PROJECT_DOCUMENTATION_INDEX.md   = Index complet de toute la documentation du projet
│
├── 01-project/
│   ├── PROJECT_DESCRIPTION.md           = Présentation générale, vision et objectifs du projet
│   ├── PROJECT_SPEC.md                  = Cahier des charges principal du projet
│   ├── ROADMAP.md                       = Planification des futures fonctionnalités et phases
│   ├── PHASES_IMPLEMENTATION_PLAN.md    = Ordre détaillé d'implémentation des modules
│   ├── CHANGELOG.md                     = Historique des modifications et versions
│   └── DECISIONS.md                     = Journal des décisions architecturales (ADR)
│
├── 02-architecture/
│   ├── API_SPEC.md                      = Comment les modules communiquent entre eux
│   ├── ARCHITECTURE.md                  = Comment le logiciel est construit
│   ├── FILE_STRUCTURE.md                = Où se trouve chaque fichier et dossier
│   ├── IMPORT_EXPORT_SPEC.md            = Gestion des imports et exports de fichiers
│   ├── TECH_STACK.md                    = Technologies utilisées dans le projet
│   └── DATA_SCHEMA.md                   = Structure officielle de toutes les données
│
├── 03-development/
│   ├── SYSTEM_RULES.md                  = Règles globales du projet
│   ├── DEVELOPMENT_WORKFLOW.md          = Workflow officiel de développement
│   ├── DEVELOPMENT_RULES.md             = Règles de codage, refactoring et maintenance
│   ├── USER_SETTINGS_SPEC.md            = Paramètres utilisateur et préférences
│   ├── ERROR_CODES_SPEC.md              = Liste normalisée des erreurs et avertissements
│   └── UNDO_REDO_SPEC.md                = Fonctionnement du système Undo / Redo
│
├── 04-ai/
│   ├── AI_ENGINE_SPEC.md                = Architecture du moteur IA
│   ├── RECOMMENDATION_RULES.md          = Règles utilisées pour les recommandations
│   ├── OBJECT_CLASSIFICATION_SPEC.md    = Classification automatique des modèles 3D
│   ├── SUPPORT_GENERATION_SPEC.md       = Génération intelligente des supports
│   ├── PRINT_PRESETS_SPEC.md            = Profils prédéfinis d'impression
│   └── PRINT_SETTINGS_SPEC.md           = Tous les paramètres d'impression disponibles
│
├── 05-profiles/
│   ├── FILAMENT_SETTINGS_SPEC.md        = Profils détaillés des filaments
│   ├── PRINTER_PROFILE_SPEC.md          = Profils et capacités des imprimantes
│   └── MATERIAL_PROFILE_SPEC.md         = Profils des matériaux d'impression
│
├── 06-quality/
│   ├── TEST_PLAN.md                     = Stratégie de tests du projet
│   ├── SECURITY_SPEC.md                 = Règles de sécurité et validation
│   └── PERFORMANCE_SPEC.md              = Objectifs de performances et optimisation
│
├── 07-future/
│   ├── GCODE_ENGINE_SPEC.md             = Future architecture du moteur G-Code
│   └── PLUGIN_SYSTEM_SPEC.md            = Future architecture du système de plugins
│
├── 08-user-interface/
│   └── GUI_SPEC.md                      = Spécification complète de l'interface utilisateur
│
├── 09-reference/
│   ├── GLOSSARY.md                      = Dictionnaire des termes techniques du projet
│   ├── TERMINOLOGY.md                   = Terminologie officielle à utiliser partout
│   ├── NAMING_CONVENTIONS.md            = Conventions de nommage du code et fichiers
│   ├── ARCHITECTURE_DECISION_MATRIX.md  = Comparatif et justification des choix techniques
│   ├── PROJECT_ACRONYMS.md              = Liste des acronymes utilisés dans le projet
│   ├── DIRECTORY_PURPOSES.md            = Description du rôle de chaque dossier
│   └── VERSIONING_POLICY.md             = Politique de gestion des versions
│
├── README.md                            = Page d'accueil du dépôt GitHub
├── CONTRIBUTING.md                      = Guide de contribution au projet
├── CODE_OF_CONDUCT.md                   = Règles de conduite pour les contributeurs
└── LICENSE                              = Conditions légales d'utilisation du projet
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
