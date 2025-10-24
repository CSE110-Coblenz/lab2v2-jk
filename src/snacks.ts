// Define a list of snack names
export const snacks: string[] = [
    "Chips",
    "Cookies"
    // Intentionally reduced to 2 items to break the test
];

// Define and export a function that prints snacks to the console
export function printSnacks(): void {
    console.log("Available Snacks:");
    console.log("================");
    snacks.forEach((snack, index) => {
        console.log(`${index + 1}. ${snack}`);
    });
}

// Call the function so it actually prints out the snacks
printSnacks();
