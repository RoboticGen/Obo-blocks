# Obo Blocks

## **Software** **Design Document**

## Version

| Version | Date | Status |
| ---| ---| --- |
| 1.0 | 09/04/2024 | Approval Pending |
|  |  |  |

## Reference

[SRS](SRS.md)

## Introduction

### Purpose

This document outlines the design and architecture of Obo Blocks, a Scratch Blocks to Python code converter with code evaluation using Pydiode. Obo Blocks aims to facilitate the transition from visual programming to text-based programming for students and teachers at Roboticgen Academy

### Scope

Obo Blocks will allow users to convert programs written in Scratch Blocks into Python code and provide code interpretation capabilities with limited libraries using Pydiode. Additionally, it will support micropython extension, enabling users to run their Python code directly within the web interface and upload generated code to ESP32 Development Board (MagicBit).

## Design and Architecture

### System Overview

The system is for students who have no prior knowledge of Python-related programming to program ESP32 using Scratch Blocks.

### Architectural Style

The Monolithic Architecture will be used for the system.

### Components

*   **Blockly Workspace** : Responsible for providing the interface for building programs using Scratch Blocks

![](https://t37017639.p.clickup-attachments.com/t37017639/62a0d0de-93d8-4e49-938c-a9efdbdba199/image.png)

*   **Code Converter** : Responsible for converting Scratch Blocks programs into Python code.

![](https://t37017639.p.clickup-attachments.com/t37017639/717de39c-7015-4d5f-9fb6-d870cb08cfb5/image.png)

*   **Code Interpreter** : Utilizes Pydiode for executing Python code within the browser environment.

![](https://t37017639.p.clickup-attachments.com/t37017639/0e583ab7-28f4-40c3-97e1-6d2b0e8d3529/image.png)

*   **Code Uploader** : Responsible for uploading generated code to ESP32 Development Board (MagicBit).

![](https://t37017639.p.clickup-attachments.com/t37017639/4e8682c2-4607-404b-b305-8a5eb23d233b/image.png)

*   **Error Handler** : Handles errors and provides informative messages to users.

![](https://t37017639.p.clickup-attachments.com/t37017639/42209fa0-4e9b-4a6f-b1a9-8d3c8362da31/image.png)

#### Component Communication

![](https://t37017639.p.clickup-attachments.com/t37017639/1957573f-509f-4ba6-8e8d-32975de8aab1/image.png)

### Data Flow

![](https://t37017639.p.clickup-attachments.com/t37017639/fa374b92-68c4-4af9-a77d-bab192028510/image.png)

## Technology Stack

The technology stack of obo blocks will be as follow

### Frontend Technologies

*   Programming Languages : HTML,CSS and JavaScript.
*   Framework : Materialize

### External APIs and Services

*   Third-Party APIs: Blocky,Pydiode,Materialize

### Development Tools and Utilities

*   IDE/Code Editor : VS Code
*   Version Control : Git/Github
*   Project Management : ClickUp

## Deployment

### Infrastructure and DevOps

Hosting/Cloud Provider : Github Pages for Development and AWS for Deployment

### Deployment Diagram

![](https://t37017639.p.clickup-attachments.com/t37017639/e7a87446-d62a-4424-b60e-b47c40c30fc4/image.png)

## Interfaces

#### User Interface

#### ![](https://t37017639.p.clickup-attachments.com/t37017639/1a88231f-7bfb-4f50-90cb-3b9ff65aac91/Obo%20Blocks.png)

## Dependencies

*   [Blocky](https://developers.google.com/blockly)
*   [Python](https://www.python.org/)
*   [Pydiode](https://pyodide.org/en/stable/)
*   [Materialize](https://materializecss.com/)

###

# Untitled



# Untitled



# Untitled

