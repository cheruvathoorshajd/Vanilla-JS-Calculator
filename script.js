// Get the canvas element and its 2D rendering context
const canvas = document.getElementById('calculator');
const ctx = canvas.getContext('2d');

// Set the dimensions of the canvas
canvas.width = 500;  // Width of the canvas
canvas.height = 600; // Height of the canvas

// Variables to hold the current expression and result of the calculation
let expression = '';
let result = '';

// Define color constants used throughout the calculator
const COLORS = {
    BACKGROUND: '#2D2D2D',   // Background color of the calculator
    DISPLAY: '#1C1C1C',      // Color of the display area
    BUTTON_REGULAR: '#505050', // Color of regular buttons
    BUTTON_OPERATOR: '#FF9F0A', // Color of operator buttons
    TEXT: '#FFFFFF',         // Text color used on buttons and display
    CONTROLS: {
        CLOSE: '#FF5F56',   // Color for close button
        MINIMIZE: '#FFBD2E', // Color for minimize button
        MAXIMIZE: '#27C93F' // Color for maximize button
    }
};

// Array of button configurations defining their labels, positions, and types
const BUTTONS = [
    { label: '(', x: 0, y: 0, type: 'regular' },
    { label: '7', x: 1, y: 0, type: 'regular' },
    { label: '8', x: 2, y: 0, type: 'regular' },
    { label: '9', x: 3, y: 0, type: 'regular' },
    { label: '/', x: 4, y: 0, type: 'operator' },
    { label: ')', x: 0, y: 1, type: 'regular' },
    { label: '4', x: 1, y: 1, type: 'regular' },
    { label: '5', x: 2, y: 1, type: 'regular' },
    { label: '6', x: 3, y: 1, type: 'regular' },
    { label: 'x', x: 4, y: 1, type: 'operator' },
    { label: 'Back', x: 0, y: 2, type: 'regular' },
    { label: '1', x: 1, y: 2, type: 'regular' },
    { label: '2', x: 2, y: 2, type: 'regular' },
    { label: '3', x: 3, y: 2, type: 'regular' },
    { label: '-', x: 4, y: 2, type: 'operator' },
    { label: '%', x: 0, y: 3, type: 'regular' },
    { label: '0', x: 1, y: 3, colspan: 2, type: 'regular' },
    { label: '.', x: 3, y: 3, type: 'regular' },
    { label: '+', x: 4, y: 3, type: 'operator' },
    { label: '=', x: 4, y: 4, type: 'operator' }
];

/**
 * Draw the window control buttons (close, minimize, maximize) at the top of the calculator.
 */
function drawWindowControls() {
    // Array of control button colors
    const controls = [
        { color: COLORS.CONTROLS.CLOSE },
        { color: COLORS.CONTROLS.MINIMIZE },
        { color: COLORS.CONTROLS.MAXIMIZE }
    ];

    // Loop through each control and draw it on the canvas
    controls.forEach((control, index) => {
        ctx.beginPath();
        ctx.fillStyle = control.color; // Set the color for the current control
        ctx.arc(20 + (index * 25), 20, 6, 0, Math.PI * 2); // Draw a circular button
        ctx.fill(); // Fill the button with the specified color
    });
}

/**
 * Draw the calculator's display area showing the current expression or result.
 */
function drawDisplay() {
    ctx.fillStyle = COLORS.DISPLAY; // Set display color
    ctx.fillRect(0, 40, canvas.width, 80); // Draw the display rectangle

    ctx.fillStyle = COLORS.TEXT; // Set text color
    ctx.font = '45px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial'; // Set font for the display text
    ctx.textAlign = 'right'; // Align text to the right
    ctx.textBaseline = 'middle'; // Align text vertically to the middle
    ctx.fillText(expression || '0', canvas.width - 20, 80); // Draw the current expression or '0' if empty
}

/**
 * Draw a single button on the calculator.
 * @param {Object} button - The button object containing its properties.
 */
function drawButton(button) {
    const BUTTON_SIZE = 100; // Size of each button
    const BUTTON_MARGIN = 1; // Margin between buttons
    const startY = 120; // Starting vertical position for buttons

    const x = button.x * BUTTON_SIZE; // Calculate the x position based on button's column
    const y = startY + (button.y * BUTTON_SIZE); // Calculate the y position based on button's row
    const width = (button.colspan || 1) * BUTTON_SIZE - BUTTON_MARGIN; // Calculate width, considering colspan
    const height = BUTTON_SIZE - BUTTON_MARGIN; // Set button height

    // Set button color based on type (regular or operator)
    ctx.fillStyle = button.type === 'operator' ? COLORS.BUTTON_OPERATOR : COLORS.BUTTON_REGULAR;
    ctx.fillRect(x, y, width, height); // Draw the button rectangle

    ctx.fillStyle = COLORS.TEXT; // Set text color for button label
    ctx.font = '29px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial'; // Set font for button label
    ctx.textAlign = 'center'; // Center align text horizontally
    ctx.textBaseline = 'middle'; // Center align text vertically
    ctx.fillText(button.label, x + width / 2, y + height / 2); // Draw the button label in the center of the button
}

/**
 * Draw the entire calculator interface, including the background, controls, display, and buttons.
 */
function drawCalculator() {
    ctx.fillStyle = COLORS.BACKGROUND; // Set background color
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the background

    drawWindowControls(); // Draw window control buttons
    drawDisplay(); // Draw the display
    BUTTONS.forEach(drawButton); // Draw each button defined in BUTTONS array
}

/**
 * Process a button press, updating the expression or calculating the result.
 * @param {string} label - The label of the pressed button.
 */
function processButton(label) {
    switch(label) {
        case '=':
            try {
                const evalExpression = expression.replace(/x/g, '*'); // Replace 'x' with '*' for multiplication
                result = eval(evalExpression); // Evaluate the expression using eval
                expression = result.toString(); // Update the expression with the result
            } catch {
                expression = 'Invalid Expression'; // Handle any errors in expression evaluation
            }
            break;
        case 'Back':
            expression = expression.slice(0, -1); // Remove the last character from the expression
            break;
        default:
            expression += label; // Append the pressed button label to the expression
    }

    drawCalculator(); // Redraw the calculator after processing the button press
}

/**
 * Handle click events on the canvas, determining which button was clicked.
 * @param {MouseEvent} event - The mouse click event.
 */
function handleClick(event) {
    const rect = canvas.getBoundingClientRect(); // Get the position of the canvas relative to the viewport
    const x = event.clientX - rect.left; // Calculate x position of the click relative to the canvas
    const y = event.clientY - rect.top; // Calculate y position of the click relative to the canvas

    const BUTTON_SIZE = 100; // Size of each button
    const startY = 120; // Starting vertical position for buttons

    // Find the button that was clicked based on the x and y coordinates
    const button = BUTTONS.find(btn => {
        const btnX = btn.x * BUTTON_SIZE; // Calculate button x position
        const btnY = startY + (btn.y * BUTTON_SIZE); // Calculate button y position
        const width = (btn.colspan || 1) * BUTTON_SIZE; // Calculate button width
        return x >= btnX && x < btnX + width && // Check if x is within button width
               y >= btnY && y < btnY + BUTTON_SIZE; // Check if y is within button height
    });

    // If a button is found, process the button press
    if (button) {
        processButton(button.label);
    }
}

// Add event listener for click events on the canvas
canvas.addEventListener('click', handleClick);

// Initial drawing of the calculator interface
drawCalculator();

// Functions to handle navigation between pages

/**
 * Show the calculator page and hide the first page.
 */
function showCalculatorPage() {
    document.getElementById('first-page').style.display = 'none'; // Hide the first page
    document.getElementById('calculator-page').style.display = 'flex'; // Show the calculator page
    drawCalculator(); // Ensure the calculator is drawn when shown
}

/**
 * Show the first page and hide the calculator page.
 */
function showFirstPage() {
    document.getElementById('calculator-page').style.display = 'none'; // Hide the calculator page
    document.getElementById('first-page').style.display = 'flex'; // Show the first page
}

// Add event listeners for navigation buttons
document.getElementById('go-to-calculator').addEventListener('click', showCalculatorPage);
document.getElementById('go-back').addEventListener('click', showFirstPage);

// Initial setup to start on the first page
showFirstPage(); // Call to ensure the first page is displayed on load
