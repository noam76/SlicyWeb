# AI SMART SLICER

# ARCHITECTURAL DECISIONS RECORD

Version: 1.0.0

Status: Approved

Priority:



---



# Purpose



This document records all major architectural, technical, and design decisions made throughout the project lifecycle.



Goals:



- Preserve decision history

\- Explain why choices were made

\- Avoid repeating discussions

\- Simplify future maintenance

\- Assist AI-driven development

\- Assist future contributors



This document should only contain significant decisions.



\---



\# Decision Format



Each decision uses the following format:



```text

ADR-XXX



Title



Status



Date



Context



Decision



Consequences



Alternatives Considered

```



\---



\# Status Values



```text

Proposed



Accepted



Deprecated



Superseded



Rejected

```



\---



\# ADR-001



Title:



Desktop Application First



Status:



Accepted



Date:



2026-08-24



\---



\## Context



The application is intended to work with:



\- STL files

\- 3MF files

\- Large geometry files

\- Local printer profiles



The application must also work offline.



\---



\## Decision



Build the software as a desktop application.



Technology:



```text

Electron

\+

React

\+

TypeScript

```



\---



\## Consequences



Advantages:



```text

Local File Access



Offline Operation



Cross Platform



Easy Future Expansion

```



Disadvantages:



```text

Larger Application Size

```



\---



\## Alternatives Considered



```text

Web Application



Rejected

```



Reason:



```text

Local file handling limitations.



Offline support required.

```



\---



\# ADR-002



Title:



TypeScript As Primary Language



Status:



Accepted



Date:



2026-08-24



\---



\## Context



Project complexity requires:



\- strong typing

\- maintainability

\- refactoring safety



\---



\## Decision



Use:



```text

TypeScript

```



for all application code.



\---



\## Consequences



Advantages:



```text

Type Safety



Better Refactoring



Improved IDE Support



Reduced Bugs

```



\---



\## Alternatives Considered



```text

JavaScript

```



Rejected.



\---



\# ADR-003



Title:



Three.js Rendering Engine



Status:



Accepted



Date:



2026-08-24



\---



\## Context



Project requires:



```text

3D Viewport



STL Rendering



3MF Rendering



Transform Controls



Camera Controls

```



\---



\## Decision



Use:



```text

Three.js

```



\---



\## Consequences



Advantages:



```text

Mature Ecosystem



Excellent Documentation



Industry Proven

```



\---



\## Alternatives Considered



```text

Babylon.js



Custom Renderer

```



Rejected.



\---



\# ADR-004



Title:



Rule Based AI Engine



Status:



Accepted



Date:



2026-08-24



\---



\## Context



Version 1.x must produce:



```text

Reliable



Deterministic



Predictable

```



results.



\---



\## Decision



Use:



```text

Rule Based Recommendation Engine

```



instead of machine learning.



\---



\## Consequences



Advantages:



```text

Repeatable Results



Easy Validation



Low Risk

```



\---



\## Future



Machine Learning may be added later.



\---



\# ADR-005



Title:



Local Data First



Status:



Accepted



Date:



2026-08-24



\---



\## Context



External sources may be unavailable.



\---



\## Decision



Priority:



```text

Local Database



↓



Cache



↓



GitHub



↓



Other Sources

```



\---



\## Consequences



```text

Faster Startup



Offline Support



Improved Reliability

```



\---



\# ADR-006



Title:



No G-Code Generation In Initial Releases



Status:



Accepted



Date:



2026-08-24



\---



\## Context



Project scope is large.



\---



\## Decision



Focus first on:



```text

Visualization



Analysis



Recommendations

```



\---



\## Consequences



Simpler early development.



Reduced complexity.



\---



\# Future



G-Code planned for later phases.



\---



\# ADR-007



Title:



Modular Architecture



Status:



Accepted



Date:



2026-08-24



\---



\## Context



The project will continue to grow.



\---



\## Decision



Every major feature must be isolated:



```text

Importer



Renderer



Analysis



Recommendation



Optimization

```



\---



\## Consequences



Advantages:



```text

Scalable



Maintainable



Testable

```



\---



\# ADR-008



Title:



State Management With Zustand



Status:



Accepted



Date:



2026-08-24



\---



\## Decision



Use:



```text

Zustand

```



instead of:



```text

Redux



MobX

```



\---



\## Reason



Lower complexity.



Lower maintenance cost.



\---



\# ADR-009



Title:



Formal Documentation Required



Status:



Accepted



Date:



2026-08-24



\---



\## Decision



Every major system must have documentation.



Mandatory Documents:



```text

Architecture



Schema



Security



Performance



API



Testing

```



\---



\## Consequences



Improves consistency.



Improves AI-assisted development.



\---



\# ADR-010



Title:



Patch-First Development



Status:



Accepted



Date:



2026-08-24



\---



\## Context



Large AI-generated rewrites create bugs.



\---



\## Decision



Prefer:



```text

Patch Existing Code

```



instead of:



```text

Rewrite Entire Modules

```



\---



\## Consequences



Advantages:



```text

Reduced Regressions



Reduced Token Usage



Improved Stability

```



\---



\# ADR-011



Title:



Single Source Of Truth



Status:



Accepted



Date:



2026-08-24



\---



\## Decision



Application state stored centrally.



Only services may update state.



\---



\## Consequences



Advantages:



```text

Predictable Behavior



Fewer Synchronization Bugs

```



\---



\# ADR-012



Title:



Plugin System Reserved For Future



Status:



Accepted



Date:



2026-08-24



\---



\## Decision



Do not implement plugins in early releases.



\---



\## Reason



Core stability has priority.



\---



\# Future



Plugin framework planned after stable releases.



\---



\# ADR-013



Title:



Security By Validation



Status:



Accepted



Date:



2026-08-24



\---



\## Decision



All imported content must be validated.



\---



\## Applies To



```text

STL



3MF



Printer Profiles



Material Profiles



Repositories

```



\---



\## Consequences



Improved stability.



Improved data integrity.



\---



\# ADR-014



Title:



Performance Target



Status:



Accepted



Date:



2026-08-24



\---



\## Decision



Performance goals:



```text

60 FPS Target



30 FPS Minimum



< 3 sec Startup

```



\---



\## Consequences



Performance considerations become mandatory.



\---



\# ADR-015



Title:



AI Assists User



Status:



Accepted



Date:



2026-08-24



\---



\## Decision



The AI provides:



```text

Recommendations



Warnings



Suggestions

```



The user remains in control.



\---



\## Consequences



Avoids overly aggressive automation.



Maintains user trust.



\---



\# Future Decision Template



Copy and complete:



```text

ADR-XXX



Title:



Status:



Date:



Context:



Decision:



Consequences:



Alternatives Considered:

```



\---



\# Golden Rule



Every major technical decision must be recorded here before implementation.



Future contributors should understand not only WHAT was decided, but WHY it was decided.



\---



\# End Of Document

