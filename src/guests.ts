// Define a list of guest names
export const guests: string[] = [
    "Alice Johnson",
    "Bob Smith",
    "Charlie Brown",
    "Diana Prince",
    "Ethan Hunt",
    "Fiona Green",
    "George Wilson",
    "Hannah Montana",
    "Ivan Petrov",
    "Julia Roberts",
    "Kevin Hart",
    "Luna Lovegood",
    "Michael Jordan",
    "Nina Dobrev",
    "Oliver Queen"
];

// Define and export a function that prints guests to the console
export function printGuests(): void {
    console.log("Guest List:");
    console.log("===========");
    guests.forEach((guest, index) => {
        console.log(`${index + 1}. ${guest}`);
    });
    console.log(`\nTotal guests: ${guests.length}`);
}

// Call the function so it actually prints out the guests
printGuests();
