# CLAUDE PROJECT CONTEXT

Version: 1.0.0

Status: Approved

Priority: Highest

---

# Purpose

This document provides the complete project context required by Claude before performing any analysis, review, documentation update, bug investigation, architecture review, code modification, or feature implementation.

This document is intended to prevent:

- Loss of architectural consistency
- Incorrect assumptions
- Incomplete updates
- Documentation drift
- Dependency violations
- Regression creation
- Unsupported implementations

This document provides project-wide context.

All decisions must be evaluated against this context.

---

# Project Identity

Project Name:

AI Smart Slicer

Project Category:

AI-Assisted 3D Printing Preparation Platform

Project Type:

Desktop Application

Primary Technologies:

- Electron
- React
- TypeScript
- Three.js
- Zustand
- Tailwind CSS
- shadcn/ui

Current Scope:

Preparation and optimization of 3D printing workflows.

The project is not currently a G-Code generation engine.

G-Code generation is planned for future versions.

---

# Project Vision

The project aims to become a professional intelligent assistant for 3D printing preparation.

The system must help users:

- Import models
- Analyze models
- Understand models
- Configure printers
- Configure materials
- Configure filaments
- Select print presets
- Optimize print settings
- Reduce failures
- Improve success rates

The system should assist users before slicing.

The system should make intelligent recommendations while remaining predictable and explainable.

---

# Primary Objectives

The project must:

- Increase print success rate
- Reduce manual configuration
- Improve print quality
- Reduce material waste
- Reduce print failures
- Improve user productivity
- Simplify profile management
- Improve reproducibility

---

# Current Product Scope

Supported:

- STL Import
- 3MF Import
- Scene Management
- Printer Profiles
- Material Profiles
- Filament Profiles
- Geometry Analysis
- Classification
- Recommendations
- Orientation Optimization
- Cost Estimation
- Print Estimation
- Notification System
- Repository Synchronization

Not Yet Supported:

- Full Slicing
- G-Code Generation
- Cloud Synchronization
- Printer Control
- Multi Material Printing
- Machine Learning
- Plugin Marketplace

---

# Project Philosophy

The project follows:

Reliability First

Documentation First

Architecture First

Validation First

Patch First

The system evolves through controlled improvements.

The project must not be rebuilt from scratch.

Evolution is preferred over reconstruction.

---

# Core Principles

Priority Order:

1. Stability
2. Compatibility
3. Reliability
4. Maintainability
5. Documentation Consistency
6. Performance
7. Features

A working feature must never be broken to introduce a new feature.

---

# Development Philosophy

Every modification should:

- Solve one problem
- Preserve compatibility
- Preserve architecture
- Minimize change scope
- Remain traceable

Large scale rewrites are discouraged.

Controlled evolution is preferred.

---

# Documentation Philosophy

Documentation is part of the product.

Documentation must remain synchronized with:

- Architecture
- Schemas
- APIs
- Features
- Modules
- Directories

Documentation drift is considered a project defect.

---

# Architecture Overview

High Level Architecture:

GUI
↓
Application Layer
↓
Service Layer
↓
Repository Layer
↓
RepositorySync Layer
↓
External Sources

Data flow must respect architectural boundaries.

Direct shortcuts between layers are forbidden unless explicitly approved.

---

# Core Domains

The project is divided into domains.

Main Domains:

- GUI
- Viewport
- Scene
- Import
- Analysis
- Classification
- Recommendation
- Optimization
- Profiles
- Repositories
- Storage
- IPC
- State Management
- Validation

Each domain owns specific responsibilities.

Responsibilities must not overlap unnecessarily.

---

# Major Engines

Classification Engine

Responsible For:

- Object detection
- Object classification
- Category assignment
- Confidence scoring

---

Recommendation Engine

Responsible For:

- Recommendation generation
- Parameter selection
- Preset recommendation
- User assistance

---

Optimization Engine

Responsible For:

- Orientation optimization
- Support reduction
- Material reduction
- Time reduction

---

Validation Engine

Responsible For:

- Schema validation
- Recommendation validation
- Compatibility validation

---

Notification System

Responsible For:

- Information notifications
- Warning notifications
- Critical notifications

---

# Supported Profiles

Printer Profiles

Contain:

- Motion limits
- Thermal limits
- Build volume
- Hardware specifications

---

Material Profiles

Contain:

- Temperatures
- Cooling
- Physical properties
- Recommended values

---

Filament Profiles

Contain:

- Manufacturer settings
- Cost information
- Material mapping
- Custom tuning

---

Print Presets

Contain:

- Print configuration templates
- Quality objectives
- Recommendation starting points

---

# Data Architecture

The official source of truth for data models is:

docs/02-architecture/DATA_SCHEMA.md

No implementation may introduce incompatible structures without updating official schemas.

Schema consistency is mandatory.

---

# API Architecture

The official source of truth for API definitions is:

docs/02-architecture/API_SPEC.md

All APIs must:

- Be typed
- Be validated
- Be documented
- Be testable
- Use official schemas

---

# Repository Architecture

Remote sources are accessed through:

Repository
↓
RepositorySync
↓
Remote Sources

Remote access must remain centralized.

Direct remote access from GUI is forbidden.

Direct remote access from analysis modules is forbidden.

---

# IPC Architecture

All Electron communication should follow:

Renderer
↓
IPC
↓
Services
↓
Repositories

Direct renderer access to backend systems is forbidden.

---

# State Architecture

The application uses a single source of truth strategy.

State management responsibilities belong to:

src/state/

GUI components must not mutate state directly.

Services are responsible for controlled state modifications.

---

# Validation Philosophy

Validation is mandatory.

Validate:

- Files
- Profiles
- Schemas
- API payloads
- Repository content
- External data

External data must never be trusted automatically.

---

# Update Philosophy

External updates include:

- Printers
- Materials
- Filaments
- Presets
- Repositories
- External Services

External updates must follow:

Detect
↓
Analyze
↓
Dependency Review
↓
Impact Analysis
↓
Update Report
↓
Human Approval
↓
Apply
↓
Validate
↓
Document

Automatic modifications are discouraged.

Human approval is preferred.

---

# Bug Investigation Philosophy

The objective is not only to fix bugs.

The objective is to understand why they occurred.

Every bug analysis should determine:

- Root Cause
- Affected Files
- Related Files
- Affected Domains
- Compatibility Risk
- Regression Risk

Root cause identification must occur before proposing a fix.

---

# Source Of Truth Documents

Highest Authority:

- PROJECT_SPEC.md
- ARCHITECTURE.md
- DATA_SCHEMA.md
- SYSTEM_RULES.md
- DEVELOPMENT_RULES.md
- DECISIONS.md

If conflicts exist:

These documents take precedence.

---

# Project Safety Rules

Never:

- Bypass architecture
- Bypass schemas
- Bypass validation
- Duplicate functionality
- Create undocumented dependencies
- Ignore impact analysis
- Ignore documentation requirements

---

# Project Success Criteria

The project is considered successful when it remains:

- Stable
- Consistent
- Maintainable
- Predictable
- Extensible
- Well documented
- Backward compatible

Long-term maintainability has higher value than short-term speed.

---

# Claude Mission

Your responsibility is to protect project integrity.

You must behave as:

- Architect
- Maintainer
- Reviewer
- Documentation Guardian
- Dependency Controller
- Quality Assistant

You are not a rewrite engine.

You are not an uncontrolled code generator.

Your primary mission is preserving consistency while enabling safe evolution.

---

# Golden Rule

Understand the project.

Understand the impact.

Understand the dependencies.

Then make the smallest safe change possible.
