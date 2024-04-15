# Obo Blocks 
![Obo Blocks](Frontend/Media/OBO_BLOCKS.png)

**Scratch Blocks to Python Converter with Pydiode Evaluation**

## Introduction

Obo Blocks is a project aimed at easing the transition from visual programming to text-based programming, specifically targeting students and teachers at [Roboticgen Academy](https://roboticgenacademy.com/). This tool enables users to convert programs written in Scratch Blocks into Python code and provides code interpretation using Pydiode. Additionally, it supports micropython extensions for running Python code directly within the web interface.


## Features

1. **Block-to-Code Conversion -** Convert Scratch Blocks programs into equivalent Python code.
2. **Code Evaluation -** Interpret Python code within the platform using Pydiode for instant feedback.
3. **Micropython Extension -** Emulate underlaying hardware for to run micropython code with in platform(With Completion of Coffee Code Research Project)
4. **Web Driven Code Uploader** - Upload generated Code Snippet to generated Code Snippet to ESP32

## Components

- **Blockly Workspace** : Interface for building programs using Scratch Blocks.
- **Code Converter** : Converts Scratch Blocks programs into Python code.
- **Code Interpreter** : Executes Python code within the browser environment.
- **Code Uploader** : Uploads generated code to ESP32 Development Board (MagicBit).
- **Error Handler** : Handles errors and provides informative messages to users. 

Diagram of the components and their communication is shown below:

![Component Communication](docs/images/componentcommunication.png)

### User Interfaces

Obo blocks will only interact with users on desktop-related devices.

*   **Blockly Workspace**: Interface for building programs using Scratch Blocks.
*   **Code Viewer** : Display Python code generated from Scratch Blocks and with read-only
*   **Output Console**: Display execution output and errors when evaluating Python code.


## Installation

Clone this repository using the following command:

```bash
git clone https://github.com/yasanthaniroshan/Obo-blocks.git
```
Serve [index.html](Frontend/index.html) using a local server.

## Usage

You can access the Obo Blocks platform by opening [oboblocks](https://oboblocks.roboticgenacademy.com/) in a web browser.

## Documentation

For detailed documentation, refer to the [docs](docs) directory.
- [Software Requirement Document](docs/SRS.md)
- [Software Design Document](docs/SDD.md)


## Dependencies

- [Blocky](https://developers.google.com/blockly)
- [Python](https://www.python.org/)
- [Pydiode](https://pyodide.org/en/stable/)


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is under Roboticgen Academy. 
![Roboticgen Academy](https://framerusercontent.com/images/tdeDCpW3vyZ0FmSkx7W258hWXow.png)

## Contributors

[@yasanthaniroshan](https://github.com/yasanthaniroshan)

[@SeniruD](https://github.com/SeniruD)

