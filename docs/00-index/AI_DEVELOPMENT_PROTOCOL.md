# AI DEVELOPMENT PROTOCOL

Version: 1.0.0

Status: Approved

Priority: Mandatory

---

# Relationship With SYSTEM_RULES

This document supplements SYSTEM_RULES.md.

If any conflict exists:

SYSTEM_RULES.md takes precedence.

AI_DEVELOPMENT_PROTOCOL.md defines the recommended workflow.

SYSTEM_RULES.md defines mandatory project rules.

---

# Purpose

This document defines the mandatory workflow that any AI assistant must follow before creating, modifying, reviewing, or validating code within the Wichy project.

The objective is to:

- preserve architecture consistency
- reduce regressions
- reduce token consumption
- prevent unnecessary rewrites
- maintain compatibility
- enforce documentation-first development

This protocol applies to:

- AI assistants
- code generation tools
- automated coding systems
- repository maintenance agents

---

# Core Principles

Priority Order:

1. Stability
2. Compatibility
3. Reliability
4. Performance
5. New Features

A working feature must never be broken to add a new feature.

---

# Documentation First Policy

Before analyzing code, the AI must read:

1. PROJECT_DOCUMENTATION_INDEX.md
2. AI_START_HERE.md
3. PROJECT_SPEC.md
4. SYSTEM_RULES.md
5. AI_DEVELOPMENT_PROTOCOL.md
7. ARCHITECTURE.md
8. DATA_SCHEMA.md
9. FILE_STRUCTURE.md
10. ROADMAP.md
11. CHANGELOG.md

Documentation has priority over assumptions.

Documentation has priority over generated code.

---

# Architecture First Policy

Before modifying any file:

1. Read architecture references
2. Read associated schema
3. Read related types
4. Read related services
5. Read existing implementation

The AI must understand the surrounding system before making modifications.

---

# Modification Policy

Preferred Order:

1. Configuration update
2. Data update
3. Small function update
4. Module update
5. System update

Avoid large-scale rewrites.

---

# Mandatory Patch Rule

Whenever possible:

PATCH existing code.

DO NOT rewrite complete systems.

Prefer:

- extending existing modules
- improving existing code
- fixing existing implementations

Avoid:

- file recreation
- architecture rewrites
- large-scale refactoring without justification

---

# Validation Before Modification

Before modifying a file:

Step 1

Read the file.

Step 2

Identify dependencies.

Step 3

Identify consumers.

Step 4

Verify schema compatibility.

Step 5

Apply minimal modification.

Step 6

Validate compatibility.

---

# Type Safety Rules

Prefer explicit types.

Avoid:

```text
any
```

Prefer:

```ts
Analysis
Classification
Recommendation
Printer
Material
Filament
```

Strong typing is mandatory whenever possible.

---
