\# DATA SCHEMA



Version: 1.0.0



\---



\# Purpose



This document defines every data structure used by the project.



All modules must follow these schemas.



No module may introduce incompatible structures without updating this document.



This document is considered the single source of truth for data modeling.



\---



\# Global Rules



\## Units



Distances:



mm



Temperatures:



°C



Speed:



mm/s



Acceleration:



mm/s²



Weight:



g



Length:



mm



Volume:



mm³



Area:



mm²



Time:



seconds



Cost:



local currency



\---



\# Entity Relationship Overview

Printer
↓
Material
↓
Filament
↓
Model
↓
Analysis
↓
Classification
↓
Recommendation
↓
Warnings


\---



\# Printer Schema



```json

{

&#x20; "id": "",

&#x20; "brand": "",

&#x20; "model": "",

&#x20; "series": "",

&#x20; "manufacturer": "",

&#x20; "firmware": "",

&#x20; "releaseDate": "",

&#x20; "supported": true

}

```



\---



\# Build Volume Schema



```json

{

&#x20; "buildVolume": {

&#x20;   "x": 256,

&#x20;   "y": 256,

&#x20;   "z": 256

&#x20; }

}

```



\---



\# Nozzle Schema



```json

{

&#x20; "defaultNozzle": 0.4,



&#x20; "supportedNozzles": \[

&#x20;   0.2,

&#x20;   0.4,

&#x20;   0.6,

&#x20;   0.8

&#x20; ]

}

```



\---



\# Extruder Schema



```json

{

&#x20; "extruder": {

&#x20;   "type": "direct\_drive",

&#x20;   "count": 1

&#x20; }

}

```



Possible Values



```text

direct\_drive

bowden

unknown

```



\---



\# Motion System Schema



```json

{

&#x20; "motion": {

&#x20;   "maxPrintSpeed": 500,

&#x20;   "maxTravelSpeed": 500,

&#x20;   "maxAcceleration": 20000,

&#x20;   "maxJerk": 20

&#x20; }

}

```



\---



\# Thermal Schema



```json

{

&#x20; "thermal": {

&#x20;   "maxNozzleTemp": 300,

&#x20;   "maxBedTemp": 110,

&#x20;   "maxChamberTemp": 60

&#x20; }

}

```



\---



\# Cooling Schema



```json

{

&#x20; "cooling": {

&#x20;   "partFan": true,

&#x20;   "auxFan": false,

&#x20;   "chamberFan": false

&#x20; }

}

```



\---



\# Complete Printer Schema



```json

{

&#x20; "id": "",

&#x20; "brand": "",

&#x20; "model": "",

&#x20; "series": "",

&#x20; "buildVolume": {},

&#x20; "defaultNozzle": 0.4,

&#x20; "supportedNozzles": \[],

&#x20; "motion": {},

&#x20; "thermal": {},

&#x20; "cooling": {},

&#x20; "extruder": {},

&#x20; "supportedMaterials": \[]

}

```



\---



\# Material Schema



```json

{

&#x20; "id": "",

&#x20; "name": "",

&#x20; "category": "",

&#x20; "brand": "",

&#x20; "description": ""

}

```



\---



\# Material Thermal Properties



```json

{

&#x20; "temperature": {

&#x20;   "minNozzle": 190,

&#x20;   "maxNozzle": 220,

&#x20;   "minBed": 50,

&#x20;   "maxBed": 60

&#x20; }

}

```



\---



\# Material Cooling



```json

{

&#x20; "cooling": {

&#x20;   "fanMin": 80,

&#x20;   "fanMax": 100

&#x20; }

}

```



\---



\# Material Physical Properties



```json

{

&#x20; "physical": {

&#x20;   "density": 1.24,

&#x20;   "shrinkage": 0.2,

&#x20;   "warpingRisk": "low"

&#x20; }

}

```



\---



\# Material Print Settings



```json

{

&#x20; "recommended": {

&#x20;   "printSpeed": 80,

&#x20;   "travelSpeed": 200,

&#x20;   "retractionDistance": 0.8,

&#x20;   "retractionSpeed": 35

&#x20; }

}

```



\---



\# Complete Material Schema



```json

{

&#x20; "id": "",

&#x20; "name": "",

&#x20; "category": "",

&#x20; "temperature": {},

&#x20; "cooling": {},

&#x20; "physical": {},

&#x20; "recommended": {}

}

```

\--- 

\# Filament Schema

```json
{
  "id": "",
  "brand": "",
  "name": "",
  "material": "",
  "color": "",
  "diameter": 1.75,
  "density": 1.24,
  "recommendedProfile": {},
  "manufacturerSettings": {}
}
```

\---


\# Project Schema


Represents an entire workspace.


```json

{

&#x20; "projectId": "",

&#x20; "projectName": "",

&#x20; "createdAt": "",

&#x20; "updatedAt": "",

&#x20; "version": "",

&#x20; "scene": "",

&#x20; "settings": ""

}

```



\---



\# Scene Schema



```json

{

&#x20; "scene": {

&#x20;   "objects": \[],

&#x20;   "printer": {},

&#x20;   "material": {},

&#x20;   "filament": {},

&#x20;   "preset": {}

&#x20; }

}

```



\---



\# Object Schema



```json

{

&#x20; "objectId": "",

&#x20; "fileName": "",

&#x20; "fileType": "",

&#x20; "visible": true,

&#x20; "locked": false

}

```



\---



\# Transform Schema



```json

{

&#x20; "transform": {

&#x20;   "position": {

&#x20;     "x": 0,

&#x20;     "y": 0,

&#x20;     "z": 0

&#x20;   },



&#x20;   "rotation": {

&#x20;     "x": 0,

&#x20;     "y": 0,

&#x20;     "z": 0

&#x20;   },



&#x20;   "scale": {

&#x20;     "x": 1,

&#x20;     "y": 1,

&#x20;     "z": 1

&#x20;   }

&#x20; }

}

```



\---



\# Model Geometry Schema



```json

{

&#x20; "geometry": {

&#x20;   "width": 0,

&#x20;   "depth": 0,

&#x20;   "height": 0,

&#x20;   "volume": 0,

&#x20;   "surfaceArea": 0

&#x20; }

}

```



\---



\# Mesh Statistics Schema



```json

{

&#x20; "mesh": {

&#x20;   "vertices": 0,

&#x20;   "triangles": 0

&#x20; }

}

```



\---



\# Stability Analysis Schema



```json

{

&#x20; "stability": {

&#x20;   "contactArea": 0,

&#x20;   "heightRatio": 0,

&#x20;   "centerOfGravity": {},

&#x20;   "riskScore": 0

&#x20; }

}

```



\---



\# Overhang Analysis Schema



```json

{

&#x20; "overhangs": {

&#x20;   "detected": true,

&#x20;   "maxAngle": 60,

&#x20;   "percentage": 25

&#x20; }

}

```



\---



\# Bridge Analysis Schema



```json

{

&#x20; "bridges": {

&#x20;   "detected": true,

&#x20;   "count": 10,

&#x20;   "longestBridge": 25

&#x20; }

}

```



\---



\# Thin Wall Schema



```json

{

&#x20; "thinWalls": {

&#x20;   "detected": true,

&#x20;   "minimumThickness": 0.8

&#x20; }

}

```



\---


\# Complete Analysis Schema


```json

{

&#x20; "dimensions": {},

&#x20; "geometry": {},

&#x20; "mesh": {},

&#x20; "stability": {},

&#x20; "overhangs": {},

&#x20; "bridges": {},

&#x20; "thinWalls": {},

&#x20; "classification": {}

}

```

\---

\# Object Classification Schema

```json
{
  "classification": {
    "category": "",
    "confidenceScore": 0,
    "detectedFeatures": []
  }
}
```


\---


\# Recommended Settings Schema


```json

{

&#x20; "recommendedSettings": {

&#x20;   "layerHeight": 0.2,

&#x20;   "wallCount": 3,

&#x20;   "topLayers": 5,

&#x20;   "bottomLayers": 5,

&#x20;   "infillDensity": 15,

&#x20;   "infillPattern": "gyroid",

&#x20;   "supportType": "organic",

&#x20;   "adhesionType": "brim"

&#x20; }

}

```

\---


\# Print Preset Schema

```json
{
  "preset": {
    "name": "",
    "category": "",
    "description": "",
    "settings": {}
  }
}
```

\---


\# Speed Schema


```json

{

&#x20; "speed": {

&#x20;   "print": 80,

&#x20;   "outerWall": 40,

&#x20;   "innerWall": 80,

&#x20;   "infill": 120,

&#x20;   "travel": 250

&#x20; }

}

```



\---



\# Cooling Settings Schema



```json

{

&#x20; "cooling": {

&#x20;   "fanSpeed": 100,

&#x20;   "minimumLayerTime": 5

&#x20; }

}

```



\---



\# Retraction Schema



```json

{

&#x20; "retraction": {

&#x20;   "distance": 0.8,

&#x20;   "speed": 35

&#x20; }

}

```



\---



\# Recommended Profile Schema



```json

{

&#x20; "recommendedProfile": {

&#x20;   "preset": {},

&#x20;   "quality": {},

&#x20;   "speed": {},

&#x20;   "cooling": {},

&#x20;   "retraction": {},

&#x20;   "supports": {},

&#x20;   "adhesion": {},

&#x20;   "confidenceScore": 0

&#x20; }

}

```



\---



\# Warning Schema



```json

{

&#x20; "warning": {

&#x20;   "code": "",

&#x20;   "severity": "",

&#x20;   "message": ""

&#x20; }

}

```



\---



\# Warning Severity



```text

info

low

medium

high

critical

```



\---



\# Notification Schema



```json

{

&#x20; "notification": {

&#x20;   "id": "",

&#x20;   "timestamp": "",

&#x20;   "type": "",

&#x20;   "message": ""

&#x20; }

}

```



\---



\# Optimization Result Schema



```json

{

&#x20; "optimization": {

&#x20;   "orientationScore": 90,

&#x20;   "supportReduction": 35,

&#x20;   "timeReduction": 12,

&#x20;   "materialReduction": 8

&#x20; }

}

```



\---



\# Cost Estimation Schema



```json

{

&#x20; "cost": {

&#x20;   "filamentLength": 0,

&#x20;   "filamentWeight": 0,

&#x20;   "materialCost": 0,

&#x20;   "electricityCost": 0,

&#x20;   "totalCost": 0

&#x20; }

}

```



\---



\# Print Estimation Schema



```json

{

&#x20; "estimation": {

&#x20;   "printTime": 0,

&#x20;   "layerCount": 0

&#x20; }

}

```



\---



\# GitHub Printer Repository Schema



```json

{

&#x20; "repository": {

&#x20;   "name": "",

&#x20;   "url": "",

&#x20;   "lastUpdated": "",

&#x20;   "verified": true

&#x20; }

}

```



\---



\# Cache Schema



```json

{

&#x20; "cache": {

&#x20;   "createdAt": "",

&#x20;   "expiresAt": "",

&#x20;   "source": "",

&#x20;   "version": ""

&#x20; }

}

```



\---



\# User Preferences Schema



```json

{

&#x20; "preferences": {

&#x20;   "theme": "dark",

&#x20;   "language": "en",

&#x20;   "units": "metric"

&#x20; }

}

```



\---



\# Theme Values



```text

dark

light

system

```



\---



\# Language Values



```text

en

fr

he

es

de

it

```



\---



\# Future Extensions

{
  &#x20; "pluginSystem": {},
  
  &#x20; "pluginMarketplace": {},
  
  &#x20; "communityProfiles": {},

  &#x20; "filamentTracking": {},
  
  &#x20; "visionClassification": {}
}

Reserved:


```json

{

&#x20; "gcode": {},

&#x20; "multimaterial": {},

&#x20; "camera": {},

&#x20; "cloud": {},

&#x20; "remotePrinter": {},

&#x20; "telemetry": {},

&#x20; "machineLearning": {}

}

```



\---



\# Schema Compatibility Rules



Existing fields must never be removed.



New fields should be added whenever possible.



Breaking schema changes require:



\- PROJECT\_SPEC update

\- ARCHITECTURE update

\- CHANGELOG entry

\- Version increase



\---



\# End Of Document

