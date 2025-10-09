// Define a list of snack names
const snacks: string[] = [
    "Chips",
    "Cookies",
    "Candy",
    "Popcorn",
    "Nuts",
    "Chocolate",
    "Pretzels",
    "Crackers"
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
