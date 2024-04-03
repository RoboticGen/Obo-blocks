# SRS

# Obo Blocks

**Software Requirement Specification**

## Introduction

The purpose of this document is to outline the requirements for the development of Obo Blocks, which a Scratch Blocks to Python code converter with code evaluation using Pydiode. Obo Blocks aims to facilitate the transition from visual programming to text-based programming for students and teachers at Roboticgen Academy.

## Scope

Obo Blocks will allow users to convert programs written in Scratch Blocks, a visual programming language, into Python code. Additionally, it will provide code interpretation capabilities with limited number of libraries using Pydiode while supporting micropython extention, enabling users to sun their Python code directly within the web interface.The target users include students and teachers affiliated with Roboticgen Academy.

## Features

1. **Block-to-Code Conversion -** Convert Scratch Blocks programs into equivalent Python code.
2. **Code Evaluation -** Interpret Python code within the platform using Pydiode for instant feedback.
3. **Micropython Extension -** Emulate underlaying hardware for to run micropython code with in platform

## Functional Requirements

#### Block-to-Code Conversion

1. **Translate Scratch Blocks to Python**: Convert Scratch Blocks programs into equivalent Python code.
2. **Support for Common Blocks**: Ensure support for common programming constructs such as logics,loops, conditionals, variables, and functions.
3. **Error Handling**: Provide informative error messages for unsupported blocks or invalid configurations.

#### Code Evaluation

1. **Execute Python Code**: Utilize Pydiode to execute Python code within the browser environment.
2. **Display Output**: Show execution output and errors in the output console.
3. **Sandboxed Execution**: Ensure code execution is sandboxed for security and stability.

#### **Micropython Extension**

1. **Support for Basic Libraries** : Ensure support for common libraries in micropython such as Machine,Time
2. **Assignment Management**: Allow teachers to assign lessons to students and track their progress.
3. **Assessment**: Provide mechanisms for teachers to assess student submissions and provide feedback.

## Interfaces

### User Interfaces

*   **Blockly Workspace**: Interface for building programs using Scratch Blocks.
*   **Code Editor**: Display Python code generated from Scratch Blocks and with read-only
*   **Output Console**: Display execution output and errors when evaluating Python code.

### Hardware Interfaces

Obo Blocks will not require direct interaction with hardware interfaces as it operates within web browsers.

#### 3.1.2 Hardware Interfaces

Obo Blocks will not require direct interaction with hardware interfaces as it operates within web browsers.

## Non - Functional Requirements

#### Performance

1. **Responsiveness -** Ensure the platform responds quickly to user interactions.

### Security

1. **Code Sandbox Security -** Ensure code execution within the platform is sandboxed to prevent malicious activities.

#### Usability

1. **Intuitive Interface -**Design user interfaces to be intuitive and easy to use for both students and teachers.

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
- [ ]     - [ ]     Backend Development
        - [ ]     Release 1.0
        - [ ]     Release 2.0
        - [ ]     Release 3.0
        - [ ]     Release 4.0
- [ ]     - [ ]     Integration and Testing stable Release
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
*   [Pydiode](https://pyodide.org/en/stable/)

# Untitled



# Untitled



# Untitled



# Untitled

