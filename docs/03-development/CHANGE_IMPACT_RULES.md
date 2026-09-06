# CHANGE IMPACT RULES

Version: 1.0.0

Status: Approved

Priority: Mandatory

---

# Purpose

This document defines the mandatory impact analysis process that must be followed before any modification.

The objective is to:

- prevent regressions
- preserve compatibility
- maintain architectural integrity
- reduce development risks
- ensure predictable updates

Every modification must be evaluated for downstream impact before implementation.

---

# Core Principle

A file must never be modified in isolation.

Every change may affect:

- schemas
- services
- repositories
- stores
- GUI
- persistence
- documentation

Developers and AI systems must identify all affected components before making changes.

---

# Mandatory Change Analysis

Before modifying any file:

Step 1

Identify the target file.

Step 2

Identify direct dependencies.

Step 3

Identify indirect dependencies.

Step 4

Identify affected documentation.

Step 5

Apply the smallest possible change.

Step 6

Validate compatibility.

---

# Dependency Flow Rule

Changes propagate downstream.

Example:

```text
Type
 ↓
Schema
 ↓
Repository
 ↓
Service
 ↓
Store
 ↓
GUI
