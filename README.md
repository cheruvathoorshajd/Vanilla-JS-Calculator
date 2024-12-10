
# Expression Calculator

Welcome to the Expression Calculator project! This application is a simple yet powerful calculator built using the HTML5 Canvas API, CSS3, and plain JavaScript. It allows users to perform basic arithmetic operations and evaluate mathematical expressions in a visually engaging way, mimicking a traditional calculator interface.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [How to Run the Project](#how-to-run-the-project)
- [Usage](#usage)
- [Code Overview](#code-overview)
- [Key Functions](#key-functions)

## Overview

The Expression Calculator serves as a hands-on project designed to utilize the capabilities of the HTML5 Canvas API. The application provides an interactive experience for users to input mathematical expressions, evaluate them, and view results dynamically. It has been developed following a mock design to enhance user engagement and usability. The project adheres strictly to the use of HTML, CSS, and JavaScript without relying on any external libraries or frameworks, making it a great learning tool for web development fundamentals.

## Features

This calculator offers several features:

- **Basic Arithmetic Operations**: Users can perform addition (+), subtraction (-), multiplication (x), division (/), and modulus (%) operations.
- **Expression Evaluation**: The calculator evaluates the constructed mathematical expression upon clicking the "=" button.
- **Backspace Functionality**: Users can delete the last character of the input using the "Back" button.
- **Error Handling**: If the user inputs an invalid expression, the display will show an appropriate error message ("Invalid Expression").
- **Responsive Design**: The user interface is designed to adapt to various screen sizes, providing a smooth experience across devices.
- **User-Friendly Interface**: The layout is intuitive, with buttons clearly labeled and a clean display for inputs and results.

## Technologies Used

The project utilizes the following technologies:

- **HTML5**: For creating the structure of the calculator and integrating the Canvas element.
- **CSS3**: For styling the application, ensuring a polished and user-friendly appearance.
- **JavaScript**: To implement the logic for rendering graphics on the Canvas and managing user interactions.
- **Canvas API**: Leveraged to create a dynamic interface that allows for drawing and interactive features.

## Installation

To set up the Expression Calculator on your local machine, follow these simple steps:

1. **Clone the Repository**:
   First, you'll need to clone the repository to your local machine using Git. Open your terminal or command prompt and run the following command:

   ```bash
   git clone https://github.com/info-6150-fall-2024/assignment-7-cheruvathoorshajd.git
   ```

2. **Open the Project in a Web Browser**:
   You can open the `index.html` file directly in your web browser. Here are a few methods:
   - **Drag and Drop**: Drag the `index.html` file into your open web browser window.
   - **Right-Click Open**: Right-click on the `index.html` file and select "Open with" followed by your preferred web browser.
   - **Local Server**: If you have a local web server set up (like Apache, Nginx, or a simple HTTP server), serve the directory containing `index.html` and access it via `http://localhost:PORT`.

## How to Run the Project

1. **Ensure You Have a Modern Web Browser**:
   This project is designed to run on modern web browsers, including Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge.

2. **Open the Project**:
   After following the installation steps to clone the repository, navigate to the project folder and open the `index.html` file using one of the methods described in the Installation section.

3. **Interacting with the Calculator**:
   - Click on the buttons displayed on the calculator to construct your mathematical expression.
   - Press the "=" button to evaluate the expression. The result will be displayed in the calculator's display area.
   - Use the "Back" button to remove the last character from the expression if needed.
   - In case of an invalid expression, the display will show "Invalid Expression" to inform the user of the error.

## Usage

Using the Expression Calculator is straightforward:

- **Input**: Click on the buttons labeled with numbers, operators, and symbols to create your desired expression. The calculator accepts standard mathematical symbols and expressions.
- **Evaluate**: Once your expression is complete, click the "=" button to compute the result. The calculator will evaluate the expression and display the output.
- **Backspace**: If you make a mistake while inputting your expression, simply click the "Back" button to remove the last character.
- **Error Handling**: If the expression entered is invalid or cannot be evaluated, the calculator will display an error message ("Invalid Expression"), prompting you to correct your input.

## Code Overview

### `index.html`

This file contains the HTML structure for the calculator. It includes a `<canvas>` element where all visual elements of the calculator will be drawn using JavaScript. The document also links to external CSS and JavaScript files for styling and functionality.

### `style.css`

The CSS file is responsible for the visual presentation of the calculator. It includes:
- **Global Resets**: Styles that remove default margins and paddings across browsers for consistent rendering.
- **Flexbox Layout**: Centers the calculator on the screen for a balanced look.
- **Styling Rules**: Defines colors, sizes, and other visual elements to match the mock design.

### `script.js`

This JavaScript file contains the logic that powers the calculator:
- **Canvas Initialization**: Sets up the canvas for drawing and initializes the 2D rendering context.
- **Button Layout**: Specifies a grid layout for buttons that match the design.
- **Event Handling**: Listens for mouse clicks on the canvas, determining which button was pressed and responding accordingly.
- **Expression Evaluation**: Processes the inputted expression, evaluates it using JavaScript's `eval()` function, and handles possible errors.
- **Redrawing**: Updates the calculator display whenever a button is pressed or the expression changes.

## Key Functions

Here are some of the key functions defined in `script.js`:

- **`drawCalculator()`**: This function is responsible for rendering the entire calculator on the canvas, including the buttons and display.
- **`drawButton(button)`**: Draws an individual button on the calculator, setting its position and visual style based on its properties.
- **`processButton(label)`**: Handles the logic when a button is clicked, updating the expression, evaluating results, or showing error messages.
- **`handleClick(event)`**: Captures mouse click events, determines which button was clicked, and calls the appropriate processing function.


This expanded README provides more comprehensive information and context for users and contributors, making it a valuable resource for anyone looking to understand or use the project.

Contributor - Dennis Sharon Cheruvathoor Shaj