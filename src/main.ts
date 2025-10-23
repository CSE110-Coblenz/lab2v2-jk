// Import the printGuests function from guests.ts
import { printGuests } from './guests';

// Main function that demonstrates the guest list feature
function main(): void {
    console.log("=== Welcome to the Event Management System ===");
    console.log();
    
    // Print out the guest list feature
    printGuests();
    
    console.log();
    console.log("=== End of Guest List ===");
}

// Call the main function
main();
