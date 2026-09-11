# AI SMART SLICER

# PROJECT IMPACT MATRIX

Version: 1.0.0

Status: Approved

Priority: Critical

---

# Purpose

This document defines the mandatory impact analysis process for all project modifications.

The objective is to:

- Prevent incomplete updates
- Prevent regressions
- Prevent dependency violations
- Improve change traceability
- Improve documentation consistency
- Improve testing coverage
- Improve architecture stability

Every modification must be analyzed through this matrix before implementation.

---

# Impact Analysis Philosophy

No modification exists in isolation.

Every change has consequences.

Before making any modification determine:

```text
What Changes

What Is Impacted

What Must Be Reviewed

What Must Be Updated

What Must Be Tested
```

Impact analysis is mandatory.

---

# Impact Categories

Changes are classified into:

```text
Documentation Impact

Schema Impact

API Impact

Architecture Impact

Domain Impact

Feature Impact

Repository Impact

UI Impact

External Update Impact

Bug Fix Impact
```

---

# Documentation Change

Examples:

```text
Specification Update

Text Correction

Documentation Clarification

New Documentation Section
```

Mandatory Review:

```text
CROSS_DOCUMENT_DEPENDENCIES.md
```

Review:

```text
Related Documents

Referenced Documents
```

Testing:

```text
None

Documentation Validation
```

Changelog:

```text
Usually Not Required
```

---

# Documentation Structure Change

Examples:

```text
New Document

Removed Document

Moved Document

Renamed Document
```

Mandatory Review:

```text
PROJECT_DOCUMENTATION_INDEX.md

Wichy files explication.txt

AI_START_HERE.md

CLAUDE_DOCUMENT_READING_ORDER.md
```

Testing:

```text
Documentation Validation
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

Dependency Change

Communication Flow Change

Repository Flow Change
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

PROJECT_IMPACT_MATRIX.md

CROSS_DOCUMENT_DEPENDENCIES.md
```

Testing:

```text
Integration Tests

Regression Tests

Architecture Validation
```

Risk Level:

```text
High
```

---

# Schema Change

Examples:

```text
New Field

Removed Field

Data Contract Change

New Schema

Schema Refactoring
```

Mandatory Review:

```text
DATA_SCHEMA.md

ARCHITECTURE.md

API_SPEC.md

AI_ENGINE_SPEC.md
```

Review If Relevant:

```text
PRINTER_PROFILE_SPEC.md

MATERIAL_PROFILE_SPEC.md

FILAMENT_SETTINGS_SPEC.md

PRINT_PRESETS_SPEC.md

PRINT_SETTINGS_SPEC.md
```

Mandatory Update Evaluation:

```text
CHANGELOG.md
```

Testing:

```text
Schema Validation

Integration Tests

Regression Tests
```

Risk Level:

```text
High
```

---

# API Change

Examples:

```text
Endpoint Change

Payload Change

Response Change

Contract Change

IPC Contract Change
```

Mandatory Review:

```text
API_SPEC.md

ARCHITECTURE.md

DATA_SCHEMA.md
```

Review If Relevant:

```text
AI_ENGINE_SPEC.md

SECURITY_SPEC.md
```

Mandatory Update Evaluation:

```text
CHANGELOG.md
```

Testing:

```text
API Validation

Integration Tests

Regression Tests
```

Risk Level:

```text
High
```

---

# IPC Change

Examples:

```text
New IPC Handler

IPC Payload Change

Channel Modification
```

Mandatory Review:

```text
API_SPEC.md

ARCHITECTURE.md

AI_START_HERE.md

DOMAINS_DEPENDENCY_MATRIX.md
```

Testing:

```text
IPC Tests

Integration Tests

Regression Tests
```

Risk Level:

```text
High
```

---

# File Structure Change

Examples:

```text
Directory Added

Directory Removed

Module Relocation

Folder Reorganization
```

Mandatory Review:

```text
FILE_STRUCTURE.md

DIRECTORY_PURPOSES.md
```

Mandatory Update Evaluation:

```text
PROJECT_DOCUMENTATION_INDEX.md

Wichy files explication.txt

CHANGELOG.md
```

Testing:

```text
Build Validation

Import Validation
```

Risk Level:

```text
Medium
```

---

# New Domain

Examples:

```text
New Major System

New Architectural Responsibility
```

Mandatory Review:

```text
ARCHITECTURE.md

DOMAIN_BOUNDARIES.md

DOMAINS_DEPENDENCY_MATRIX.md

FILE_OWNERSHIP_MATRIX.md
```

Mandatory Update Evaluation:

```text
FILE_STRUCTURE.md

DIRECTORY_PURPOSES.md

CHANGELOG.md

PROJECT_DOCUMENTATION_INDEX.md
```

Testing:

```text
Architecture Validation

Integration Tests
```

Risk Level:

```text
Critical
```

---

# Domain Boundary Change

Examples:

```text
Responsibility Change

Ownership Change

Boundary Modification
```

Mandatory Review:

```text
DOMAIN_BOUNDARIES.md

DOMAINS_DEPENDENCY_MATRIX.md

FILE_OWNERSHIP_MATRIX.md

ARCHITECTURE.md
```

Testing:

```text
Architecture Review

Integration Tests
```

Risk Level:

```text
Critical
```

---

# Recommendation Engine Change

Examples:

```text
New Recommendation Logic

Decision 
