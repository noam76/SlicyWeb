\# SYSTEM ARCHITECTURE



Version: 1.0.0



\---



\# Purpose



This document defines the software architecture of the AI Smart Slicer project.



It describes:



\- Modules

\- Responsibilities

\- Communication rules

\- Dependencies

\- Data flow

\- Project structure



This document is the architectural reference for all future development.



\---



\# Architecture Goals



The architecture must be:



\- Modular

\- Maintainable

\- Scalable

\- Testable

\- Extensible

\- Token Efficient

\- AI Friendly



The architecture must support incremental development without requiring major rewrites.



\---



\# Design Principles



The project follows:



\## Separation Of Concerns



Each module must have one primary responsibility.



Avoid modules that perform multiple unrelated functions.



\---



\## Loose Coupling



Modules communicate through:



\- Services

\- Interfaces

\- Events

\- APIs



Direct access between unrelated modules is not allowed.



\---



\## High Cohesion



Each module should contain closely related functionality.



\---



\## Local First



Always use:



1\. Local Data

2\. Cache

3\. Online Sources



in that order.



\---



\## Update Over Rewrite



New functionality must be added through:



\- modules

\- services

\- interfaces



Avoid replacing existing systems.



\---



\# Architectural Overview



```text

+----------------------------------------------------+

|                    GUI LAYER                       |

+----------------------------------------------------+



&#x20;         ↓



+----------------------------------------------------+

|                  APPLICATION LAYER                 |

+----------------------------------------------------+



&#x20;         ↓



+----------------------------------------------------+

|                    CORE SERVICES                   |

+----------------------------------------------------+



&#x20;         ↓



+----------------------------------------------------+

|                 ANALYSIS SERVICES                  |

+----------------------------------------------------+



&#x20;         ↓



+----------------------------------------------------+

|                  DATA SERVICES                     |

+----------------------------------------------------+



&#x20;         ↓



+----------------------------------------------------+

|            STORAGE / CACHE / REMOTE                |

+----------------------------------------------------+

```



\---



\# Layer Architecture



\## Layer 1



GUI Layer



Responsible for:



\- Rendering

\- Interaction

\- Menus

\- Panels

\- User Input



No business logic allowed.



No analysis logic allowed.



No printer logic allowed.



\---



\## Layer 2



Application Layer



Coordinates all modules.



Responsibilities:



\- Commands

\- Workflow

\- Event Routing

\- State Management



\---



\## Layer 3



Core Services



Central project services.



Examples:



\- Project Service

\- Scene Service

\- Object Service



\---



\## Layer 4



Analysis Services



Responsible for:



\- Geometry calculations

\- Model analysis

\- Stability analysis

\- Optimization analysis



\---



\## Layer 5



Data Services



Responsible for:



\- Printer profiles

\- Material profiles

\- Cached repositories



\---



\## Layer 6



Storage Layer



Responsible for:



\- Files

\- Databases

\- Cache

\- Online repositories



\---



\# Module Structure



\## GUI Module



Folder



```text

/gui

```



Responsibilities:



\- Window management

\- Menus

\- Panels

\- User Controls



Never performs calculations.



\---



\## Renderer Module



Folder



```text

/renderer

```



Responsibilities:



\- Rendering 3D scene

\- Rendering build plate

\- Rendering transformations



Submodules:



```text

CameraManager

GridRenderer

AxisRenderer

ObjectRenderer

SelectionRenderer

```



\---



\## Scene Module



Folder



```text

/scene

```



Responsibilities:



\- Scene management

\- Object registration

\- Selection state



\---



\## Object Module



Folder



```text

/object\_manager

```



Responsibilities:



\- Create objects

\- Delete objects

\- Rename objects

\- Duplicate objects



\---



\## Transform Module



Folder



```text

/transform

```



Responsibilities:



\- Move

\- Rotate

\- Scale

\- Reset



\---



\## Import Module



Folder



```text

/importer

```



Responsibilities:



\- STL Import

\- 3MF Import

\- Validation



Submodules



```text

STLImporter

ThreeMFImporter

FileValidator

```



\---



\## Printer Database Module



Folder



```text

/printer\_database

```



Responsibilities:



\- Load printers

\- Update printers

\- Validate printers



Submodules



```text

PrinterRepository

PrinterCache

PrinterValidator

```



\---



\## Material Database Module



Folder



```text

/material\_database

```



Responsibilities:



\- Load materials

\- Update materials

\- Validate materials



\---



\## Analysis Engine



Folder



```text

/model\_analysis

```



Responsibilities:



\- Geometry analysis

\- Stability analysis

\- Printability analysis



\---



\# Analysis Engine Architecture



```text

Model



&#x20;↓



Geometry Analyzer



&#x20;↓



Printability Analyzer



&#x20;↓



Stability Analyzer



&#x20;↓



Result Generator

```



\---



\# Geometry Analyzer



Responsibilities:



\- Dimensions

\- Volume

\- Surface Area

\- Bounding Box



Output:



Geometry Report



\---



\# Printability Analyzer



Responsibilities:



\- Overhangs

\- Bridges

\- Thin Walls

\- Small Features



Output:



Printability Report



\---



\# Stability Analyzer



Responsibilities:



\- Contact Area

\- Height Ratio

\- Center Of Gravity



Output:



Stability Report



\---



\# Recommendation Engine



Folder



```text

/recommendation\_engine

```



Responsibilities:



\- Generate print settings

\- Generate warnings

\- Generate recommendations



Input:



```text

Printer

\+

Material

\+

Analysis

```



Output:



```text

Recommended Profile

```



\---



\# Recommendation Flow



```text

Printer



&#x20;+

&#x20;

Material



&#x20;+



Model Analysis



&#x20;↓



Decision Engine



&#x20;↓



Validation Engine



&#x20;↓



Recommended Profile



&#x20;↓



Warnings

```



\---



\# Optimization Engine



Folder



```text

/optimization\_engine

```



Responsibilities:



\- Orientation search

\- Material optimization

\- Speed optimization



\---



\# Orientation Optimizer



Responsibilities:



Evaluate:



\- Stability

\- Overhangs

\- Supports

\- Surface Quality



Scoring:



0-100



\---



\# Cost Engine



Folder



```text

/cost\_engine

```



Responsibilities:



\- Material cost calculation

\- Electricity cost estimation

\- Time estimation



\---



\# Notification System



Folder



```text

/notifications

```



Responsibilities:



\- Errors

\- Warnings

\- Information messages



\---



\# Configuration System



Folder



```text

/config

```



Responsibilities:



\- Application settings

\- User settings

\- Defaults



\---



\# Cache System



Folder



```text

/cache

```



Responsibilities:



\- Store downloaded profiles

\- Reduce network requests

\- Improve startup speed



\---



\# Online Repository System



Folder



```text

/repositories

```



Responsibilities:



\- GitHub access

\- Profile refresh

\- Data synchronization



\---



\# Event Architecture



Modules communicate through events.



Example:



```text

Object Imported



↓



Scene Updated



↓



Analysis Triggered



↓



Recommendation Updated

```



\---



\# Event Types



\## Object Events



```text

ObjectAdded

ObjectRemoved

ObjectUpdated

ObjectSelected

```



\---



\## Transformation Events



```text

ObjectMoved

ObjectRotated

ObjectScaled

```



\---



\## Analysis Events



```text

AnalysisStarted

AnalysisFinished

AnalysisFailed

```



\---



\## Recommendation Events



```text

RecommendationGenerated

RecommendationUpdated

```



\---



\# Dependency Rules



Allowed



```text

GUI



↓



Application



↓



Services



↓



Data

```



\---



Forbidden



```text

GUI → Database



GUI → Repository



GUI → Analysis



GUI → AI Engine

```



\---



\# State Management



Single Source Of Truth



```text

Application State

```



Contains:



\- Scene

\- Objects

\- Printer

\- Material

\- Recommendations



All modules read from state.



Only services may modify state.



\---



\# Persistence Architecture



Saved Project



Contains:



```text

Objects

Transforms

Printer

Material

Settings

Recommendations

```



Does Not Contain:



```text

Temporary Cache

Downloaded Files

Logs

```



\---



\# Logging Architecture



Levels



```text

Debug

Info

Warning

Error

Critical

```



Logs stored separately from project files.



\---



\# Security Principles



Never execute imported file content.



Always validate:



\- STL

\- 3MF

\- Remote Data



Reject malformed files.



\---



\# Performance Principles



Large models must:



\- load asynchronously

\- be cached

\- use optimized rendering



Avoid recalculating unchanged analyses.



\---



\# Testing Architecture



Every module requires:



\## Unit Tests



Test isolated functionality.



\---



\## Integration Tests



Test communication between modules.



\---



\## Regression Tests



Verify previous functionality remains operational.



\---



\# Future Architecture Extensions



Reserved Modules



```text

/gcode\_engine



/multi\_material



/cloud



/remote\_printer



/webcam



/machine\_learning



/profile\_marketplace

```



\---



\# Architectural Golden Rules



1\. No module owns another module.



2\. Communication occurs through interfaces.



3\. Data flows downward.



4\. Events flow upward.



5\. New features must be added without rewriting existing systems.



6\. Preserve backward compatibility whenever possible.



7\. Every module must remain independently testable.



8\. Stability has priority over complexity.



\---



\# End Of Document

