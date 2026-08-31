# AI SMART SLICER
# AI START HERE

Version: 1.1.0

Status: Mandatory

---

# Purpose

This is the entry point for any AI system working on the project.

Before performing any task, modifying any file, generating code, fixing bugs, or adding features, the AI must follow the reading order defined below.

This document exists to:

- Reduce token usage
- Reduce regressions
- Prevent architecture violations
- Avoid code rewrites
- Preserve project consistency

---

# Project Name

AI Smart Slicer

---

# Project Goal

Create an AI-assisted 3D printing preparation software capable of:

- Importing STL files
- Importing 3MF files
- Visualizing multiple models
- Managing printers
- Managing materials
- Analyzing geometry
- Recommending print settings
- Optimizing model orientation
- Estimating print duration and costs

The project is initially focused on:

```text
Visualization

Analysis

Recommendations
```

G-Code generation is planned for a future phase.

---

# REQUIRED READING ORDER

Read documents in the exact order below.

---

# STEP 1

Read:

```text
docs/00-index/PROJECT_DOCUMENTATION_INDEX.md
```

Purpose:

Provides a complete overview of all project documentation.

---

# STEP 2

Read:

```text
docs/01-project/PROJECT_SPEC.md
```

Purpose:

Understand project goals and requirements.

---

# STEP 3

Read:

```text
docs/03-development/SYSTEM_RULES.md
```

Purpose:

Understand mandatory project rules.

---

# STEP 4

Read:

```text
docs/02-architecture/ARCHITECTURE.md

docs/02-architecture/API_SPEC.md
```

Purpose:

Understand module architecture.

---

# STEP 5

Read:

```text
docs/02-architecture/FILE_STRUCTURE.md
```

Purpose:

Understand folder organization.

---

# STEP 6

Read:

```text
docs/02-architecture/DATA_SCHEMA.md
```

Purpose:

Understand all project data structures.

---

# STEP 7

Read:

```text
docs/03-development/DEVELOPMENT_RULES.md
```

Purpose:

Understand coding and update rules.

---

# STEP 8

Read:

```text
docs/01-project/CHANGELOG.md
```

Purpose:

Identify existing versions and changes.

---

# AFTER STEP 8

Determine which module is involved.

Read only the documents relevant to that module.

Additionally verify:

docs/01-project/PHASES_IMPLEMENTATION_PLAN.md

to ensure the requested feature belongs to the current development phase.

---

# GUI TASKS

Read:

```text
docs/08-user-interface/GUI_SPEC.md
```

---

# AI TASKS

Read:

```text
docs/04-ai/AI_ENGINE_SPEC.md

docs/04-ai/RECOMMENDATION_RULES.md

docs/04-ai/OBJECT_CLASSIFICATION_SPEC.md

docs/04-ai/SUPPORT_GENERATION_SPEC.md

docs/04-ai/PRINT_SETTINGS_SPEC.md

docs/04-ai/PRINT_PRESETS_SPEC.md
```

---

# PRINTER TASKS

Read:

```text
docs/05-profiles/PRINTER_PROFILE_SPEC.md
```

---

# MATERIAL TASKS

# PRINT TASKS

Read:

```text
docs/05-profiles/MATERIAL_PROFILE_SPEC.md

docs/05-profiles/FILAMENT_SETTINGS_SPEC.md
```

---

# SECURITY TASKS

Read:

```text
docs/06-quality/SECURITY_SPEC.md
```

---

# TESTING TASKS

Read:

```text
docs/06-quality/TEST_PLAN.md
```

---

# PERFORMANCE TASKS

Read:

```text
docs/06-quality/PERFORMANCE_SPEC.md
```

---

# GCODE TASKS

Read:

```text
docs/07-future/GCODE_ENGINE_SPEC.md
```

---

# PLUGIN TASKS

Read:

```text
docs/07-future/PLUGIN_SYSTEM_SPEC.md
```
---
# REFERENCE TASKS

Read when terminology or project conventions are involved:

docs/09-reference/GLOSSARY.md

docs/09-reference/TERMINOLOGY.md

docs/09-reference/NAMING_CONVENTIONS.md

docs/09-reference/PROJECT_ACRONYMS.md

docs/09-reference/DIRECTORY_PURPOSES.md

docs/09-reference/VERSIONING_POLICY.md

---

---

# MANDATORY DEVELOPMENT RULES

Always follow:

```text
Patch Existing Code

Not Rewrite Existing Code
```

---

## Preferred Strategy

```text
Read

↓

Analyze

↓

Modify

↓

Test

↓

Document
```

---

# FORBIDDEN ACTIONS

Never:

```text
Rewrite Entire Modules

Regenerate Entire Applications

Rename Stable APIs

Break Existing Schemas

Ignore Documentation

Create Duplicate Functionality
```

---

# CHANGE POLICY

Before modifying a file:

```text
1. Read File

2. Identify Impact

3. Patch File

4. Verify Compatibility

5. Update Documentation only if affected

6. Update Changelog only if project behavior changed
```

---

# PROJECT PRIORITIES

Priority Order:

```text
1. Stability

2. Compatibility

3. Reliability

4. Performance

5. New Features
```

---

# PROJECT PHASE

Before working, determine current phase from:

```text
ROADMAP.md
```

Never implement future phase features unless explicitly requested.

---

# SOURCE OF TRUTH

The following documents have the highest authority:

```text
PROJECT_SPEC.md

ARCHITECTURE.md

DATA_SCHEMA.md

SYSTEM_RULES.md

DEVELOPMENT_RULES.md

DECISIONS.md
```

If conflict exists:

Follow these documents.

---

# CRITICAL FILE MODIFICATION POLICY

Priority: Highest

---

WARNING

This section has higher priority than any file generation request unless the user explicitly requests a complete rewrite.

The default behavior is always:

```text
PATCH
```

Never:

```text
FULL FILE REWRITE
```

---

The AI must NEVER regenerate complete files unless explicitly requested.

The AI must ALWAYS prefer:

```text
PATCHES
```

over

```text
FULL FILE REWRITES
```

---

# Modification Strategy

When a modification is requested:

1. Read the existing file.

2. Identify impacted sections.

3. Modify only affected blocks.

4. Preserve all unrelated content.

5. Maintain backward compatibility.

---

# Preferred Response Format

Use:

```diff
+ Added Lines

- Removed Lines

~ Modified Lines
```

or

```text
SECTION TO UPDATE

OLD

↓

NEW
```

---

# Forbidden Behavior

The AI must NOT:

- rewrite entire files
- rewrite entire modules
- regenerate complete projects
- recreate existing functionality
- reorganize files without instruction
- remove existing content without justification

---

# Large File Rule

For files larger than:

```text
100 lines
```

the AI should avoid complete regeneration.

For files larger than:

```text
500 lines
```

the AI must use targeted updates only.

For files larger than:

```text
1000 lines
```

full rewrites are prohibited unless explicitly requested.

---

# Project Scale Rule

This project contains many modules and documentation files.

The AI must never regenerate:

- project documentation structure
- architecture documents
- schemas
- module specifications
- profile specifications
- AI specifications
- technical documentation

when only a small modification is required.

Example:

Request:

```text
Add one field in DATA_SCHEMA.md
```

Correct:

```text
Update only the affected schema section
```

Incorrect:

```text
Regenerate the entire DATA_SCHEMA.md file
```

---

# Documentation Update Rule

When modifying documentation:

Update only the impacted section.

Do not regenerate the whole document.

---

# Code Update Rule

When modifying source code:

Prefer:

```text
Small Patches

↓

Method Updates

↓

Class Updates

↓

Module Updates
```

Never start with file replacement.

---

# Exception

A complete file rewrite is allowed only if:

- the user explicitly requests it
- the file is severely corrupted
- the file is still empty
- a complete redesign has been approved

---

# Golden Modification Rule

Preserve existing work.

Modify only what is required.

The smallest safe change is the preferred change.

---

# GOLDEN RULE

Understand the project first.

Modify the project second.

Never modify a system you have not fully understood.

---

---

# DOCUMENTATION VERSION

Documentation Status:

Version 1.x

Core Documentation Complete

Architecture Defined

Ready For Development Phase

---

# End Of Document
