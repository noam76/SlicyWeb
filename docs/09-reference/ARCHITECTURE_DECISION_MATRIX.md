# WICHY
# ARCHITECTURE DECISION MATRIX

Version: 1.0.0

Status: Approved

---

# Purpose

This document records major architectural decisions made throughout the Wichy project.

Its purpose is to provide a structured comparison of competing solutions and explain why specific technologies, patterns, or approaches were selected.

This document complements:

```text
DECISIONS.md
```

---

# Decision Process

Every major decision should follow:

```text
Problem

↓

Options

↓

Evaluation

↓

Decision

↓

Justification
```

---

# Evaluation Criteria

All architectural decisions should be evaluated against:

```text
Performance

Maintainability

Scalability

Complexity

Cost

Learning Curve

Community Support

Long-Term Viability
```

---

# Frontend Framework

---

## Problem

Select a frontend framework.

---

## Options

```text
React

Vue

Angular

Svelte
```

---

## Selected

```text
React
```

---

## Reason

```text
Large Ecosystem

Strong TypeScript Support

Excellent Community

Electron Compatibility

Wide Industry Adoption
```

---

# Language

---

## Problem

Select primary development language.

---

## Options

```text
JavaScript

TypeScript
```

---

## Selected

```text
TypeScript
```

---

## Reason

```text
Type Safety

Maintainability

Refactoring Support

Reduced Runtime Errors
```

---

# Desktop Framework

---

## Problem

Select desktop application technology.

---

## Options

```text
Electron

Tauri

Qt
```

---

## Selected

```text
Electron
```

---

## Reason

```text
React Integration

Mature Ecosystem

Large Community

Cross Platform Support
```

---

# State Management

---

## Problem

Manage global application state.

---

## Options

```text
Redux

MobX

Zustand

Context API
```

---

## Selected

```text
Zustand
```

---

## Reason

```text
Simple

Lightweight

Minimal Boilerplate

TypeScript Friendly
```

---

# 3D Engine

---

## Problem

Render and manipulate 3D models.

---

## Options

```text
Three.js

Babylon.js
```

---

## Selected

```text
Three.js
```

---

## Reason

```text
Industry Standard

Strong Ecosystem

Large Community

Excellent Documentation
```

---

# UI Framework

---

## Problem

Select UI component system.

---

## Options

```text
Material UI

Ant Design

shadcn/ui

Custom Components
```

---

## Selected

```text
shadcn/ui
```

---

## Reason

```text
Modern Design

Customizable

Tailwind Integration

Low Overhead
```

---

# CSS Framework

---

## Problem

Select styling framework.

---

## Options

```text
Tailwind CSS

Bootstrap

Custom CSS
```

---

## Selected

```text
Tailwind CSS
```

---

## Reason

```text
Fast Development

Modern Workflow

Excellent Ecosystem

Design Consistency
```

---

# Validation Library

---

## Problem

Validate application data.

---

## Options

```text
Zod

Yup

Joi
```

---

## Selected

```text
Zod
```

---

## Reason

```text
TypeScript Integration

Schema Reuse

Strong Validation Support
```

---

# Testing Strategy

---

## Problem

Select testing approach.

---

## Options

```text
Unit Only

Integration Only

End To End Only

Multi Layer Testing
```

---

## Selected

```text
Multi Layer Testing
```

---

## Reason

```text
Better Coverage

Reduced Risk

Improved Quality
```

---

# Unit Testing

---

## Selected

```text
Vitest
```

---

## Reason

```text
Fast

TypeScript Friendly

Excellent Vite Integration
```

---

# End To End Testing

---

## Selected

```text
Playwright
```

---

## Reason

```text
Cross Platform

Reliable Automation

Modern Tooling
```

---

# Data Storage

---

# Profile Storage Strategy

---

## Problem

Store printer, material, filament, and preset profiles.

---

## Options

```text
Database

JSON Files

Remote Only
```

---

## Selected

```text
JSON Files
```

---

## Reason

```text
Human Readable

Portable

Version Control Friendly

Easy Community Contributions
```

---

## Problem

Store printer profiles, materials, and presets.

---

## Options

```text
Embedded Database

JSON Files

Cloud Storage
```

---

## Selected

```text
JSON Files
```

---

## Reason

```text
Simple

Portable

Human Readable

Version Control Friendly
```

---

# Project Philosophy

---

## Problem

Choose development strategy.

---

## Options

```text
Code First

Documentation First
```

---

## Selected

```text
Documentation First
```

---

## Reason

```text
Better Planning

Reduced Rewrites

Improved Consistency

Easier Collaboration
```

---

# AI Strategy

---


# Object Classification

---

# Confidence Scoring

---

# Recommendation Strategy

---

## Problem

Measure reliability of AI decisions.

---

## Options

```text
No Confidence

Binary Confidence

Scored Confidence
```

---

## Selected

```text
Scored Confidence
```

---

## Reason

```text
Transparency

Better User Feedback

Safer Recommendations
```

---

## Problem

Identify model categories automatically.

---

## Options

```text
No Classification

Rule Based Classification

Machine Learning Classification
```

---

## Selected

```text
Rule Based Classification
```

---

## Reason

```text
Explainable

Deterministic

Fast

No Training Required
```

---

## Problem

Select recommendation strategy.

---

## Options

```text
Rule Based AI

Machine Learning

Hybrid
```

---

## Selected

```text
Rule Based AI
```

---

## Reason

```text
Explainable

Deterministic

Predictable

No Training Required
```

---

# Printer Profiles

---

## Problem

Manage printer capabilities.

---

## Options

```text
Hardcoded

External Profiles

Cloud Profiles
```

---

## Selected

```text
External Profiles
```

---

## Reason

```text
Maintainable

Expandable

Community Friendly
```

---

# Material Profiles

---

# Filament Profiles

---

## Problem

Store manufacturer-specific filament data.

---

## Options

```text
Material Only

Filament Profiles

Cloud Filament Database
```

---

## Selected

```text
Filament Profiles
```

---

## Reason

```text
Brand Specific Settings

Improved Recommendations

Improved Reliability

Accurate Cost Calculations
```

---

## Problem

Store material information.

---

## Options

```text
Hardcoded

Profile Based
```

---

## Selected

```text
Profile Based
```

---

## Reason

```text
Flexible

Future Proof

Easy To Update
```

---

# Plugin Support

---

# Security Strategy

---

# Performance Strategy

---

## Problem

Maintain responsiveness with large models.

---

## Options

```text
Naive Rendering

Partial Optimization

Performance First Architecture
```

---

## Selected

```text
Performance First Architecture
```

---

## Reason

```text
Large Scene Support

Scalability

Better User Experience

Future Growth
```

---

## Problem

Protect application integrity.

---

## Options

```text
Trust Inputs

Partial Validation

Zero Trust Validation
```

---

## Selected

```text
Zero Trust Validation
```

---

## Reason

```text
Safer Imports

Safer Repositories

Safer Profiles

Improved Reliability
```

---

## Problem

Extend functionality.

---

## Options

```text
Closed System

Plugin Architecture
```

---

## Selected

```text
Plugin Architecture
```

---

## Reason

```text
Scalable

Community Contributions

Future Growth
```

---

# Reserved Future Decisions

Future architectural evaluations:

```text
Cloud Synchronization

Machine Learning

Remote Printing

G-Code Engine

Multi Material Support

Marketplace

Telemetry
```

---

# Decision Update Policy

When a major technology choice changes:

```text
Update This Document

↓

Update DECISIONS.md

↓

Update TECH_STACK.md

↓

Update CHANGELOG.md
```

---

# Golden Rule

Architectural decisions must prioritize long-term maintainability and reliability over short-term convenience.

---

# End Of Document
