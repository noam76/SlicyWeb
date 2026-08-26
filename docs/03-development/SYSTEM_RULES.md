\# SYSTEM RULES



Version: 1.0.0



\---



\# Purpose



These rules define how the AI, development tools, and contributors must interact with the project.



The objective is to:



\- reduce token consumption

\- reduce bugs

\- avoid regressions

\- preserve project stability

\- guarantee maintainability

\- keep all modules compatible



These rules have priority over implementation preferences.



\---



\# Core Principles



Priority Order:



1\. Stability

2\. Compatibility

3\. Reliability

4\. Performance

5\. New Features



A working feature must never be broken to add a new feature.



\---



\# Development Philosophy



The project is developed incrementally.



The project is never rebuilt from scratch unless explicitly requested.



Every modification must preserve:



\- existing features

\- existing APIs

\- existing interfaces

\- existing data structures



Whenever possible:



PATCH existing code.



DO NOT rewrite complete systems.



\---



\# AI Behavior Rules



The AI must:



\- read existing files first

\- analyze project structure first

\- understand dependencies first

\- modify only what is necessary



The AI should act as a software maintainer, not as a code regenerator.



\---



\# Forbidden Actions



The AI must not:



\- regenerate the entire project

\- recreate existing files unnecessarily

\- duplicate existing code

\- remove stable features

\- rename working APIs without authorization

\- restructure the project without explicit request



\---



\# Update Policy



Before modifying code:



Step 1



Read existing implementation.



Step 2



Determine impacted modules.



Step 3



Identify dependencies.



Step 4



Apply minimal modifications.



Step 5



Validate compatibility.



\---



\# Modification Strategy



Preferred Order:



1\. Configuration update

2\. Data update

3\. Small function update

4\. Module update

5\. System update



Avoid large-scale rewrites.



\---



\# Token Optimization Rules



The AI must minimize token usage.



Use:



\- existing files

\- existing classes

\- existing components

\- existing services



Prefer:



PATCHES



instead of



COMPLETE FILE REGENERATION



\---



\# Documentation Rules



Every major module must have documentation.



Documentation updates are required whenever:



\- architecture changes

\- new module added

\- API modified

\- data schema modified



\---



\# Naming Rules



Use consistent naming.



Preferred:



PascalCase



Examples:



PrinterManager

MaterialDatabase

ModelAnalyzer



\---



Variables:



camelCase



Examples:



printerProfile

materialProfile



\---



Constants:



UPPER\_CASE



Examples:



MAX\_PRINT\_SPEED

DEFAULT\_LAYER\_HEIGHT



\---



\# Architecture Respect Rules



No module shall directly access unrelated modules.



Communication must occur through:



\- interfaces

\- services

\- repositories

\- events



Avoid direct coupling.



\---



\# Dependency Rules



Every new dependency must be justified.



Before adding a dependency:



Verify:



\- existing solution unavailable

\- dependency maintained

\- dependency lightweight



Avoid unnecessary packages.



\---



\# GUI Rules



GUI must be independent.



GUI must never contain:



\- printer logic

\- analysis logic

\- AI logic

\- database logic



GUI only displays data.



\---



\# Analysis Engine Rules



Analysis Engine must:



\- work independently

\- have no GUI dependency

\- expose data through APIs



The engine should be reusable.



\---



\# AI Recommendation Rules



Recommendations must be based only on:



\- printer profile

\- material profile

\- model analysis



The AI must never invent printer capabilities.



The AI must never invent material properties.



Unknown data must be marked as unknown.



\---



\# Printer Rules



Printer profiles are authoritative.



Printer limitations cannot be exceeded.



If a recommendation exceeds:



\- speed

\- acceleration

\- temperature



it must be rejected automatically.



\---



\# Material Rules



Material profiles are authoritative.



Recommendations must remain inside material limits.



Unknown material data must trigger warnings.



\---



\# Recommendation Priorities



Always prioritize:



1\. Successful Print

2\. Mechanical Reliability

3\. Safety

4\. Quality

5\. Speed

6\. Material Savings



Never sacrifice reliability for speed.



\---



\# Warning Rules



Warnings must be generated when:



\- object exceeds volume

\- collision detected

\- support required

\- excessive overhang detected

\- high warping risk detected

\- stability risk detected

\- unknown printer data

\- unknown material data



Warnings may never be hidden.



\---



\# Validation Rules



Each recommendation must pass validation.



Validation includes:



\- printer capabilities

\- material limits

\- geometry constraints



Invalid recommendations must be rejected.



\---



\# Data Rules



Data sources priority:



1\. Local Database

2\. Cached Database

3\. Official Sources

4\. Verified GitHub Sources



Never trust unverified sources.



\---



\# Local First Policy



Always use local data first.



Network requests should occur only when:



\- data unavailable locally

\- user explicitly requests refresh



Cache results whenever possible.



\---



\# Version Control Rules



Every modification must increment version.



Format:



MAJOR.MINOR.PATCH



Example:



1.0.0



\---



Major:



Breaking changes



Examples:



\- architecture change

\- schema change



\---



Minor:



New features



Examples:



\- support generation

\- optimization tools



\---



Patch:



Bug fixes



Examples:



\- calculation corrections

\- GUI fixes



\---



\# Testing Rules



Every new feature requires testing.



Minimum tests:



\- functional test

\- regression test



No feature is complete without validation.



\---



\# Release Rules



A release is acceptable only if:



\- all tests pass

\- documentation updated

\- schema validated

\- compatibility maintained



\---



\# AI Session Rules



At the beginning of each development session:



Read:



1\. PROJECT\_SPEC.md

2\. SYSTEM\_RULES.md

3\. ARCHITECTURE.md

4\. ROADMAP.md

5\. CHANGELOG.md



Before making modifications.



\---



\# Compatibility Rules



Backward compatibility is mandatory.



Existing:



\- project files

\- profiles

\- databases

\- APIs



must remain operational.



Whenever compatibility is impossible:



Document the breaking change.



\---



\# Emergency Rule



If multiple solutions exist:



Choose the solution that:



\- modifies the least code

\- introduces the fewest risks

\- preserves the highest compatibility

\- consumes the fewest tokens



\---



\# Golden Rule



A working system should be improved carefully.



Never destroy stability to gain functionality.



Prefer evolution over reconstruction.



End of Document

