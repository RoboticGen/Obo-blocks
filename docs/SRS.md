# **Software Requirement Specification**

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

- Requirements Gathering and Analysis - **1 week**
    - Design and Architecture - **3 weeks**
    - Frontend Development - **6 weeks**
    - Backend Development - **6 weeks**
    - Integration and Testing - **6 weeks**
    - Deployment - **2 weeks**

### Milestones

- [x] Completion of Requirements Gathering and Analysis
- [x] Completion of Design and Architecture
- Frontend Development
    - [x] Release 1.0
    - [x] Release 2.0
    - [x] Release 3.0
    - [ ] Release 4.0
    - [ ] Release 5.0
- Backend Development
    - [x] Release 1.0
    - [x] Release 2.0
    - [x] Release 3.0
    - [ ] Release 4.0
    - [ ] Release 5.0
- [ ] Integration and Testing
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
*   [Highlightjs](https://highlightjs.org/)
