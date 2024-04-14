# Timeline

| 24 March - 30 March | 31 March - 8 April | 9 April - 16 April |  |  |  |  |  |  |
| ---| ---| ---| ---| ---| ---| ---| ---| --- |
| <br>Completion of Requirements Gathering and Analysis |  |  |  |  |  |  |  |
|  |  | Completion of Design and Architecture |  |  |  |  |  |  |
|  |  |  | Release 1.0 |  |  |  |  |  |
|  |  |  |  | Release 2.0 |  |  |  |  |
|  |  |  |  |  | Release 3.0 |  |  |  |
|  |  |  |  |  |  | Release 4.0 |  |  |
|  |  |  |  |  |  |  | Release 5.0 |  |
|  |  |  |  |  |  |  |  | Review |

This document is made for the sub task Private ([https://app.clickup.com/t/86ep0uyv2](https://app.clickup.com/t/86ep0uyv2))

# SRS

# Obo Blocks

**Software Requirement Specification**

## Version History

| Version | Date | Status |
| ---| ---| --- |
| 1.0 | 02/04/2024 | Approved |
| 1.1 | 08/04/2024 | Pending Approval |

## Introduction

The purpose of this document is to outline the requirements for the development of Obo Blocks, which a Scratch Blocks to Python code converter with code evaluation using Pydiode. Obo Blocks aims to facilitate the transition from visual programming to text-based programming for students and teachers at Roboticgen Academy.

## Scope

Obo Blocks will allow users to convert programs written in Scratch Blocks, a visual programming language, into Python code. Additionally, it will provide code interpretation capabilities with limited number of libraries using Pydiode while supporting micropython extention, enabling users to run their Python code directly within the web interface while allowing users to upload generated code to ESP32 Development Board (MagicBit).The target users include students and teachers affiliated with Roboticgen Academy.

## Features

1. **Block-to-Code Conversion -** Convert Scratch Blocks programs into equivalent Python code.
2. **Code Evaluation -** Interpret Python code within the platform using Pydiode for instant feedback.
3. **Micropython Extension -** Emulate underlaying hardware for to run micropython code with in platform(With Completion of Coffee Code Research Project)
4. **Web Driven Code Uploader** - Upload generated Code Snippet to generated Code Snippet to ESP32

## Functional Requirements

#### Block-to-Code Conversion

1. **Translate Scratch Blocks to Python**: Convert Scratch Blocks programs into equivalent Python code.
2. **Support for Common Blocks**: Ensure support for common programming constructs such as logics,loops,conditionals,variables and functions.
3. **Error Handling**: Provide informative error messages for unsupported blocks or invalid configurations.

#### Code Evaluation

1. **Execute Python Code**: Utilize Pydiode to execute Python code within the browser environment.
2. **Display Output**: Show execution output and errors in the output console.
3. **Sandboxed Execution**: Ensure code execution is sandboxed for security and stability.

#### **Micropython Extension**

1. **Support for Basic Libraries** : Ensure support for common libraries in micropython (Pin,Time)

#### **Web Driven Code Uploader**

1. **Open Serial Port (USB) :** Open a Serial port to upload Code Snippet into ESP32
2. **Configure Device Parameters** : Identify ESP32 devices from other connected Devices
3. **Upload data to ESP32** : Write micropython program as a file to esp32 and verify the code has uploaded propoerly by reading written data.
4. **Handle IO Execptions** : Handle the errors when handling with ESP32

## Interfaces

### User Interfaces

Obo blocks will only interact with users on desktop-related devices.

*   **Blockly Workspace**: Interface for building programs using Scratch Blocks.
*   **Code Viewer** : Display Python code generated from Scratch Blocks and with read-only
*   **Output Console**: Display execution output and errors when evaluating Python code.

### Hardware Interfaces

Obo Blocks will communicate with ESP32 Devices to upoload micropython code

*   **USB Interface** : USB interface will be used to read and write data to the ESP32 Device

## Non - Functional Requirements

#### Performance

1. **Responsiveness -** Ensure the platform responds quickly to user interactions.

### Security

1. **Code Sandbox Security -** Ensure code execution within the platform is sandboxed to prevent malicious activities.

#### Usability

1. **Intuitive Interface -** Design user interfaces to be intuitive and easy to use for both students and teachers.

## **Preliminary Schedule**

### Development Phases

Here is breakdown of development phase with durations

- [ ]     - [ ]     Requirements Gathering and Analysis - **1 week**
    - [ ]     Design and Architecture - **3 weeks**
    - [ ]     Frontend Development - **6 weeks**
    - [ ]     Backend Development - **6 weeks**
    - [ ]     Integration and Testing - **6 weeks**
    - [ ]     Deployment - **2 weeks**

### Milestones

- [ ]     - [ ]     Completion of Requirements Gathering and Analysis
    - [ ]     Completion of Design and Architecture
    - [ ]     Frontend Development
        - [ ]     Release 1.0
        - [ ]     Release 2.0
        - [ ]     Release 3.0
        - [ ]     Release 4.0
        - [ ]     Release 5.0
- [ ]     - [ ]     Backend Development
        - [ ]     Release 1.0
        - [ ]     Release 2.0
        - [ ]     Release 3.0
        - [ ]     Release 4.0
        - [ ]     Release 5.0
- [ ]     - [ ]     Integration and Testing
    - [ ]     Final Deployment

## **Budget**

  

## Appendix

### Release 1.0

This release only include frontend with basic UI components without any functional features given above

### Release 2.0

This release will update for the Release 1.0 with added support for Basic Python Functionalities without python code interpretation

### Release 3.0

This release will update for the Release 2.0 with added support for python code interpretation

### Release 4.0

This release will update for the Release 3.0 with added support for micropython scratch blocks

### Release 5.0

This release will update for the Release 3.0 with added support for code upload to ESP32 (Magicbit)

## **Glossary**

*   **Blockly**: A web-based, visual programming language developed by Google.
*   **Scratch Blocks**: A visual blocks-based programming language developed by the MIT Media Lab.
*   **Pydiode**: A Python interpreter running in the browser environment.
*   **Python Basic Functionalities -** The basic functionalities of python will include only following,
    *   Variable Creation
    *   Arithmatic Operations
    *   Control Structures
    *   Input and Output
*   **Python Code Interpretation** - Run(evaluate/execute) python code snippets

## References

*   [Blocky](https://developers.google.com/blockly)
*   [Python](https://www.python.org/)
*   [Pydiode](https://pyodide.org/en/stable/)

# SDD

# Obo Blocks

## **Software** **Design Document**

## Version

| Version | Date | Status |
| ---| ---| --- |
| 1.0 | 09/04/2024 | Approval Pending |
|  |  |  |

## Reference

Private ([https://app.clickup.com/37017639/docs/139p17-9038/139p17-20518](https://app.clickup.com/37017639/docs/139p17-9038/139p17-20518))

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



# Resources

## UI Design

[

www.canva.com

https://www.canva.com/design/DAGB8aev5s0/AaswSvzTcye7efUxDuxoVw/edit?utm\_content=DAGB8aev5s0&utm\_campaign=designshare&utm\_medium=link2&utm\_source=sharebutton

](https://www.canva.com/design/DAGB8aev5s0/AaswSvzTcye7efUxDuxoVw/edit?utm_content=DAGB8aev5s0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

  

![](https://t37017639.p.clickup-attachments.com/t37017639/e4b23073-1777-4e25-ae75-3703440e3b02/image.png)

UI Design - v.0