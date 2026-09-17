# SLICYWEB SMART SLICER

# CLAUDE.md

Version: 2.0.0

Status: Mandatory

Priority: Critical

-------------------------------------------------------------------------------

# Purpose

This document is the primary entry point for AI-assisted development.

It defines the mandatory behavior Claude must follow when working on the SlicyWeb Smart Slicer project.

The objectives are:

- Protect project architecture
- Protect domain boundaries
- Protect ownership rules
- Protect documentation consistency
- Prevent regressions
- Prevent undocumented assumptions
- Improve development quality
- Maintain long-term project stability

Documentation is the Source Of Truth.

-------------------------------------------------------------------------------

# Project Philosophy

The project follows:

Documentation First

Impact Analysis First

Patch First

Local First

Rule-Based AI

Architecture Protection

Domain Ownership

Dependency Governance

Compatibility First

Incremental Development

-------------------------------------------------------------------------------

# Source Of Truth Rule

Documentation is authoritative.

Do not invent undocumented behavior.

Do not invent undocumented APIs.

Do not invent undocumented schemas.

Do not invent undocumented architecture.

When uncertainty exists:

Read documentation first.

Assume less.

Verify more.

-------------------------------------------------------------------------------

# Mandatory Reading Rule

Before performing any task:

Read:

CLAUDE_READING_PRIORITY.md

CLAUDE_DOCUMENT_READING_ORDER.md

Then determine additional required documentation according to the task.

-------------------------------------------------------------------------------

# Highest Authority Documents

The following documents are considered highest authority:

PROJECT_SPEC.md

ARCHITECTURE.md

TECHNICAL_OVERVIEW.md

DATA_SCHEMA.md

API_SPEC.md

SYSTEM_RULES.md

DEVELOPMENT_RULES.md

DECISIONS.md

These documents define project truth.

No lower-priority document may override them.

-------------------------------------------------------------------------------

# Governance Documents

All modifications must comply with:

CLAUDE_GOVERNANCE_PROTOCOL.md

CLAUDE_CHANGE_IMPACT_RULES.md

CLAUDE_FILE_UPDATE_RULES.md

DOMAIN_BOUNDARIES.md

DOMAINS_DEPENDENCY_MATRIX.md

FILE_OWNERSHIP_MATRIX.md

PROJECT_IMPACT_MATRIX.md

CHANGE_CLASSIFICATION_RULES.md

CHANGE_VERIFICATION_CHECKLIST.md

DOCUMENT_UPDATE_MATRIX.md

CROSS_DOCUMENT_DEPENDENCIES.md

BUG_ANALYSIS_PROTOCOL.md

UPDATE_GOVERNANCE_PROTOCOL.md

-------------------------------------------------------------------------------

# Required Workflow

Before any modification:

1. Understand Request

2. Identify Domains

3. Identify Ownership

4. Identify Dependencies

5. Perform Impact Analysis

6. Identify Documentation Impact

7. Verify Architecture Compatibility

8. Verify Schema Compatibility

9. Verify API Compatibility

10. Implement Minimal Change

11. Validate Results

12. Update Documentation If Required

13. Evaluate CHANGELOG Impact

Never skip these steps.

-------------------------------------------------------------------------------

# Ownership Rule

Respect ownership boundaries.

Never modify files outside the appropriate ownership domain without verification.

Always review:

DOMAIN_BOUNDARIES.md

FILE_OWNERSHIP_MATRIX.md

PROJECT_IMPACT_MATRIX.md

when ownership may be affected.

-------------------------------------------------------------------------------

# Dependency Rule

Respect dependency chains.

Never introduce dependency violations.

Always verify:

DOMAINS_DEPENDENCY_MATRIX.md

before modifying shared systems.

-------------------------------------------------------------------------------

# Architecture Rule

Protect architectural integrity.

Do not:

- Bypass architecture
- Create hidden dependencies
- Merge unrelated domains
- Introduce undocumented systems
- Violate separation of concerns

Architecture stability is more important than implementation speed.

-------------------------------------------------------------------------------

# API Rule

All API changes must comply with:

API_SPEC.md

DATA_SCHEMA.md

PROJECT_IMPACT_MATRIX.md

All payloads must remain compatible with documented contracts.

-------------------------------------------------------------------------------

# Schema Rule

All schemas originate from:

DATA_SCHEMA.md

Never introduce undocumented fields.

Never remove fields without compatibility review.

Never change validation behavior without impact analysis.

-------------------------------------------------------------------------------

# Repository Rule

Repository access must follow:

Local Database

↓

Local Cache

↓

Official Profiles

↓

Verified Repositories

↓

Community Sources

Repository validation is mandatory.

-------------------------------------------------------------------------------

# Internationalization Rule

The application is multilingual.

Supported languages:

English

French

Hebrew

Requirements:

- All user-facing text must support localization.
- GUI text must never be hardcoded.
- Use translation dictionaries.
- Language-specific strings must remain externalized.
- Architecture must remain language-independent.
- WYPROJ project files must remain language-neutral.

Forbidden:

- Hardcoded UI text
- Language-dependent project data
- Embedded translations inside business logic

-------------------------------------------------------------------------------

# UI Development Rule

The UI is a presentation layer.

Business logic must not be implemented in UI components.

Use:

Services

State Management

Repositories

Existing APIs

Avoid duplicating logic.

-------------------------------------------------------------------------------

# Modification Rule

Prefer:

Small changes

Minimal patches

Existing services

Existing schemas

Existing APIs

Existing infrastructure

Avoid:

Large rewrites

Unnecessary refactoring

Architecture redesign

Full file rewrites when a patch is sufficient

-------------------------------------------------------------------------------

# Incremental Development Rule

Implement changes incrementally.

Do not introduce multiple major features simultaneously.

Prefer:

Analyze

↓

Patch

↓

Validate

↓

Continue

Instead of:

Rewrite

↓

Hope

-------------------------------------------------------------------------------

# Compatibility Rule

Preserve compatibility whenever possible.

Particularly for:

WYPROJ Files

Schemas

APIs

Profiles

Repositories

Settings

Breaking changes require explicit review.

-------------------------------------------------------------------------------

# Documentation Rule

Every modification requires documentation review.

Determine required updates using:

DOCUMENT_UPDATE_MATRIX.md

Never update documentation unnecessarily.

Never ignore required documentation updates.

-------------------------------------------------------------------------------

# Changelog Rule

Always evaluate:

CHANGELOG.md

for:

Architecture Changes

API Changes

Schema Changes

Feature Changes

Domain Changes

Project Format Changes

-------------------------------------------------------------------------------

# Bug Analysis Rule

For bug investigations:

Mandatory references:

BUG_ANALYSIS_PROTOCOL.md

PROJECT_IMPACT_MATRIX.md

FILE_OWNERSHIP_MATRIX.md

CROSS_DOCUMENT_DEPENDENCIES.md

Do not fix bugs before understanding root cause.

-------------------------------------------------------------------------------

# Safety Rule

Never assume unknown behavior.

Never fabricate:

- APIs
- Schemas
- Documentation
- Requirements
- Dependencies
- Architecture

When documentation is missing:

Identify the gap.

Report the gap.

Do not invent a solution.

-------------------------------------------------------------------------------

# Stop Rule

Stop implementation when:

Ownership Unknown

Dependencies Unknown

Architecture Unknown

Impact Unknown

Documentation Missing

Conflicts Unresolved

Analyze first.

Implement second.

-------------------------------------------------------------------------------

# Golden Rule

Read first.

Understand second.

Analyze impact third.

Modify carefully fourth.

Validate fifth.

Document sixth.

Protect architecture at every step.
