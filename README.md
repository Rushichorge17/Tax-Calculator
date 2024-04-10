# Tax Calculator

This is a simple tax calculator web application built using HTML, CSS, and JavaScript. It allows users to calculate their tax based on their income, extra income, age group, and applicable deductions.

## Assumptions

1. The tax calculation is based on the provided formula and requirements.
2. The design may be modified for better usability and aesthetics, but all functionalities should remain intact.
3. Error handling is implemented for incorrect input values and missing fields as per the requirements.
4. Bootstrap is used for styling to maintain consistency and responsiveness.
5. The tax calculation is done on the client-side without any server-side processing.
6. Additional features like data persistence or user authentication are not included in this version.

## Design Modifications

1. Added error icons next to input fields for better user feedback.
2. Adjusted the layout and styling using Bootstrap components for a cleaner appearance.
3. Modified the "Close" button to match the style of the "Calculate Tax" button.

## Functionalities

1. Users can input their gross annual income, extra income, age group, and applicable deductions.
2. Error icons are displayed next to input fields if there are incorrect values or missing fields.
3. Tax is calculated based on the provided formula and displayed in a modal.
4. The modal shows the user's overall income after tax deduction.
5. Clicking on the "Close" button in the modal dismisses it.

## Handling Edge Cases

1. Input fields are required, and missing fields are indicated with error icons.
2. Numeric input fields accept only valid numbers, and non-numeric input is handled gracefully.
3. Tax calculation handles edge cases such as income below or above 8 Lakhs and age-based tax rates.
4. Error icons are not visible by default and only appear when there are errors in the form.

## How to Run

To run the application locally:

1. Clone this repository.
2. Open the `index.html` file in a web browser.
3. Input your financial details and click on "Calculate Tax" to see the results.

## Credits

This project was created by Rushikesh Chorge as a demonstration of HTML, CSS, and JavaScript skills.
