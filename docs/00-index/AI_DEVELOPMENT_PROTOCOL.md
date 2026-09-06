# AI DEVELOPMENT PROTOCOL

Version: 1.0.0

Status: Approved

Priority: Mandatory

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

# Documentation First Policy

Before analyzing code, the AI must read:

1. PROJECT_DOCUMENTATION_INDEX.md
2. AI_START_HERE.md
3. PROJECT_SPEC.md
4. SYSTEM_RULES.md
5. ARCHITECTURE.md
6. DATA_SCHEMA.md
7. FILE_STRUCTURE.md
8. ROADMAP.md
9. CHANGELOG.md

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

Preferred order:

1. Configuration update
2. Type update
3. Schema update
4. Small function patch
5. Module update
6. System update

Avoid large rewrites whenever possible.

---

# Patch First Rule

Always prefer:

PATCH

instead of:

REWRITE

Allowed:

- adding methods
- fixing validation
- correcting references
- adding missing types
- improving safety checks

Avoid:

- rewriting complete modules
- recreating existing files
- changing working APIs
- changing stable architecture

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

````md
Avoid:

```text
any
```
