# AI SMART SLICER

# DOCUMENT UPDATE MATRIX

Version: 1.0.0

Status: Approved

Priority: Critical

---

# Purpose

This document defines when project documentation must be reviewed and when documentation updates are required.

The objective is to:

- Prevent documentation drift
- Prevent incomplete updates
- Improve consistency
- Reduce regression risks
- Improve traceability
- Maintain documentation reliability

This document must be consulted before modifying:

- Architecture
- Schemas
- APIs
- Project Structure
- Features
- Domains
- Repositories
- External Update Systems

---

# Documentation Update Philosophy

Documentation must remain synchronized with the project.

Not every modification requires documentation updates.

However:

Every modification requires documentation review.

The workflow is:

```text
Change
↓
Dependency Analysis
↓
Impact Analysis
↓
Documentation Review
↓
Determine Required Updates
↓
Apply Only Necessary Updates
```

Never update documentation automatically.

Always verify necessity first.

---

# Update Categories

Documentation actions are classified as:

```text
Mandatory Update

Mandatory Review

Conditional Update

Optional Update

No Action Required
```

---

# Documentation Text Correction

Examples:

```text
Grammar Fix

Typo Fix

Formatting Fix

Clarification
```

Mandatory Review:

```text
Target Document
```

Documentation Updates:

```text
Target Document Only
```

Changelog:

```text
Not Required
```

---

# New Document Added

Examples:

```text
New Specification

New Protocol

New Reference Document
```

Mandatory Review:

```text
PROJECT_DOCUMENTATION_INDEX.md

Wichy files explication.txt
```

Conditional Review:

```text
AI_START_HERE.md

CLAUDE_DOCUMENT_READING_ORDER.md
```

Mandatory Update:

```text
PROJECT_DOCUMENTATION_INDEX.md

Wichy files explication.txt
```

Changelog:

```text
Required
```

---

# Document Removed

Mandatory Review:

```text
PROJECT_DOCUMENTATION_INDEX.md

Wichy files explication.txt

AI_START_HERE.md

CLAUDE_DOCUMENT_READING_ORDER.md
```

Mandatory Update:

```text
PROJECT_DOCUMENTATION_INDEX.md

Wichy files explication.txt
```

Changelog:

```text
Required
```

---

# Document Renamed

Mandatory Review:

```text
PROJECT_DOCUMENTATION_INDEX.md

Wichy files explication.txt

AI_START_HERE.md

CLAUDE_DOCUMENT_READING_ORDER.md

Referenced Documents
```

Mandatory Update:

```text
All References
```

Changelog:

```text
Required
```

---

# Document Moved

Mandatory Review:

```text
PROJECT_DOCUMENTATION_INDEX.md

Wichy files explication.txt

FILE_STRUCTURE.md
```

Mandatory Update:

```text
All Path References
```

Changelog:

```text
Required
```

---

# Architecture Change

Examples:

```text
New Layer

New Domain

Dependency Changes

Communication Flow Changes
```

Mandatory Review:

```text
ARCHITECTURE.md

DATA_SCHEMA.md

API_SPEC.md

FILE_STRUCTURE.md

DOMAIN_BOUNDARIES.md

DOMAINS_DEPENDENCY_MATRIX.md
```

Mandatory Update Evaluation:

```text
CHANGELOG.md

TECHNICAL_OVERVIEW.md

PROJECT_DOCUMENTATION_INDEX.md
```

Conditional Update:

```text
README.md

AI_START_HERE.md
```

---

# Schema Change

Examples:

```text
New Field

Removed Field

Schema Changes

Data Contract Changes
```

Mandatory Review:

```text
DATA_SCHEMA.md

ARCHITECTURE.md

API_SPEC.md

AI_ENGINE_SPEC.md
```

Mandatory Update Evaluation:

```text
CHANGELOG.md
```

Conditional Update:

```text
PRINTER_PROFILE_SPEC.md

MATERIAL_PROFILE_SPEC.md

FILAMENT_SETTINGS_SPEC.md

PRINT_SETTINGS_SPEC.md

PRINT_PRESETS_SPEC.md
```

---

# API Change

Examples:

```text
Endpoint Changes

Payload Changes

IPC Contract Changes

Response Changes
```

Mandatory Review:

```text
API_SPEC.md

DATA_SCHEMA.md

ARCHITECTURE.md
```

Mandatory Update Evaluation:

```text
CHANGELOG.md
```

Conditional Update:

```text
AI_ENGINE_SPEC.md

SECURITY_SPEC.md

IMPORT_EXPORT_SPEC.md
```

---

# IPC Change

Mandatory Review:

```text
API_SPEC.md

ARCHITECTURE.md

AI_START_HERE.md
```

Mandatory Update Evaluation:

```text
CHANGELOG.md
```

Conditional Update:

```text
CLAUDE_DOCUMENT_READING_ORDER.md
```

---

# File Structure Change

Examples:

```text
New Directory

Directory Removed

Directory Renamed

Module Relocation
```

Mandatory Review:

```text
FILE_STRUCTURE.md

DIRECTORY_PURPOSES.md
```

Mandatory Update:

```text
FILE_STRUCTURE.md

DIRECTORY_PURPOSES.md

PROJECT_DOCUMENTATION_INDEX.md

Wichy files explication.txt
```

Mandatory Update Evaluation:

```text
CHANGELOG.md
```

Conditional Update:

```text
README.md
```

---

# New Domain

Examples:

```text
New Architectural Domain
```

Mandatory Review:

```text
ARCHITECTURE.md

DOMAIN_BOUNDARIES.md

DOMAINS_DEPENDENCY_MATRIX.md

FILE_OWNERSHIP_MATRIX.md
```

Mandatory Update:

```text
ARCHITECTURE.md

DOMAIN_BOUNDARIES.md

DOMAINS_DEPENDENCY_MATRIX.md

FILE_OWNERSHIP_MATRIX.md
```

Mandatory Update Evaluation:

```text
CHANGELOG.md

FILE_STRUCTURE.md

DIRECTORY_PURPOSES.md

PROJECT_DOCUMENTATION_INDEX.md

Wichy files explication.txt
```

---

# Domain Boundary Change

Mandatory Review:

```text
DOMAIN_BOUNDARIES.md

DOMAINS_DEPENDENCY_MATRIX.md

ARCHITECTURE.md

FILE_OWNERSHIP_MATRIX.md
```

Mandatory Update Evaluation:

```text
CHANGELOG.md
```

---

# Recommendation Engine Change

Mandatory Review:

```text
AI_ENGINE_SPEC.md

RECOMMENDATION_RULES.md

DATA_SCHEMA.md

API_SPEC.md
```

Mandatory Update Evaluation:

```text
CHANGELOG.md
```

Conditional Update:

```text
PRINT_SETTINGS_SPEC.md

PRINT_PRESETS_SPEC.md
```

---

# Classification Change

Mandatory Review:

```text
AI_ENGINE_SPEC.md

OBJECT_CLASSIFICATION_SPEC.md

DATA_SCHEMA.md
```

Mandatory Update Evaluation:

```text
CHANGELOG.md
```

---

# Optimization Change

Mandatory Review:

```text
AI_ENGINE_SPEC.md

ARCHITECTURE.md
```

Mandatory Update Evaluation:

```text
CHANGELOG.md
```

---

# Printer Profile Change

Examples:

```text
Printer Contract Change

Profile Structure Change

Validation Rule Change
```

Mandatory Review:

```text
PRINTER_PROFILE_SPEC.md

DATA_SCHEMA.md

API_SPEC.md
```

Mandatory Update Evaluation:

```text
CHANGELOG.md
```

Conditional Update:

```text
AI_ENGINE_SPEC.md
```

---

# Material Profile Change

Mandatory Review:

```text
MATERIAL_PROFILE_SPEC.md

DATA_SCHEMA.md

API_SPEC.md
```

Mandatory Update Evaluation:

```text
CHANGELOG.md
```

Conditional Update:

```text
AI_ENGINE_SPEC.md
```

---

# Filament Profile Change

Mandatory Review:

```text
FILAMENT_SETTINGS_SPEC.md

DATA_SCHEMA.md

API_SPEC.md

AI_ENGINE_SPEC.md
```

Mandatory Update Evaluation:

```text
CHANGELOG.md
```

---

# Print Preset Change

Mandatory Review:

```text
PRINT_PRESETS_SPEC.md

PRINT_SETTINGS_SPEC.md

AI_ENGINE_SPEC.md
```

Mandatory Update Evaluation:

```text
CHANGELOG.md
```

---

# GUI Specification Change

Mandatory Review:

```text
GUI_SPEC.md

ARCHITECTURE.md
```

Mandatory Update Evaluation:

```text
CHANGELOG.md
```

Conditional Update:

```text
README.md
```

---

# Repository System Change

Examples:

```text
Repository Logic

Synchronization Logic

Repository Sources
```

Mandatory Review:

```text
API_SPEC.md

ARCHITECTURE.md

UPDATE_GOVERNANCE_PROTOCOL.md
```

Mandatory Update Evaluation:

```text
CHANGELOG.md
```

Conditional Update:

```text
SECURITY_SPEC.md
```

---

# Security Change

Mandatory Review:

```text
SECURITY_SPEC.md

API_SPEC.md

ARCHITECTURE.md
```

Mandatory Update Evaluation:

```text
CHANGELOG.md
```

Conditional Update:

```text
README.md
```

---

# Performance Change

Mandatory Review:

```text
PERFORMANCE_SPEC.md

ARCHITECTURE.md
```

Mandatory Update Evaluation:

```text
CHANGELOG.md
```

---

# Versioning Policy Change

Mandatory Review:

```text
VERSIONING_POLICY.md

CHANGELOG.md

CONTRIBUTING.md
```

Mandatory Update:

```text
VERSIONING_POLICY.md

CONTRIBUTING.md
```

---

# Governance Change

Examples:

```text
New Rule

Rule Removal

Workflow Changes
```

Mandatory Review:

```text
SYSTEM_RULES.md

DEVELOPMENT_RULES.md

AI_DEVELOPMENT_PROTOCOL.md

CLAUDE_GOVERNANCE_PROTOCOL.md
```

Mandatory Update Evaluation:

```text
CONTRIBUTING.md

CHANGELOG.md
```

---

# External Update

Examples:

```text
New Printer

New Material

New Filament

New Preset

Repository Update
```

Mandatory Review:

```text
UPDATE_GOVERNANCE_PROTOCOL.md

UPDATE_IMPACT_RULES.md
```

Mandatory Output:

```text
Update Report
```

Documentation Update:

```text
Only If Required
```

Automatic Documentation Updates:

```text
Forbidden
```

Human Approval:

```text
Required
```

---

# README Update Rules

README.md should be updated when:

```text
User Visible Features Change

Installation Changes

Major Capabilities Change

Project Scope Changes

Major Architectural Milestones
```

README.md should not be updated for:

```text
Internal Refactoring

Schema Changes

Small Fixes
```

unless user impact exists.

---

# CONTRIBUTING Update Rules

CONTRIBUTING.md should be updated when:

```text
Contribution Workflow Changes

Governance Changes

Versioning Changes

Review Process Changes
```

---

# PROJECT_DOCUMENTATION_INDEX Rules

Must be updated when:

```text
Document Added

Document Removed

Document Renamed

Document Moved
```

---

# Wichy files explication.txt Rules

Must be updated when:

```text
Document Added

Document Removed

Document Renamed

Document Moved

Documentation Category Added

Documentation Structure Changes
```

---

# CHANGELOG Evaluation Rules

Always evaluate CHANGELOG.md when:

```text
Architecture Changes

Schema Changes

API Changes

Feature Changes

Project Structure Changes

User Visible Changes
```

Never ignore changelog impact.

---

# Documentation Verification Checklist

Before finishing any change verify:

```text
Documentation Reviewed

Dependencies Reviewed

Update Requirements Reviewed

Changelog Evaluated

Ownership Verified

Impact Verified
```

All items must be completed.

---

# Golden Rule

Review first.

Update second.

Only update documents that truly require updating.

Avoid both:

```text
Missing Updates
```

and

```text
Unnecessary Updates
```
