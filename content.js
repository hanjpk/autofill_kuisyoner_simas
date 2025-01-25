console.log("Content script loaded."); // Log when the content script is loaded

function autofillRadioButtons() {
    console.log("Starting autofill process."); // Log when autofill starts
    // Select all question elements with the specified class
    const questions = document.querySelectorAll('.column-table.not-filled-in'); // Adjusted selector to match the container
    console.log("Number of questions found:", questions.length); // Log the number of questions found

    questions.forEach((question, index) => {
        // Find all radio buttons within the current question
        const radioButtons = question.querySelectorAll('input[type="radio"]'); // Select all radio buttons
        console.log(`Question ${index + 1}: Number of radio buttons found:`, radioButtons.length); // Log the number of radio buttons found

        if (radioButtons.length > 0) { // Check if there are any radio buttons
            radioButtons[radioButtons.length - 1].checked = true; // Check the last radio button
            console.log("Checked radio button:", radioButtons[radioButtons.length - 1]); // Log the checked button
        } else {
            console.log("No radio buttons found in this question."); // Log if no radio buttons are found
        }
    });
}

// Use MutationObserver to watch for changes in the DOM
const observer = new MutationObserver(() => {
    const questions = document.querySelectorAll('.column-table.not-filled-in');
    if (questions.length > 0) {
        autofillRadioButtons();
        observer.disconnect(); // Stop observing once the function has run
    }
});

// Start observing the document for changes
observer.observe(document.body, { childList: true, subtree: true });
