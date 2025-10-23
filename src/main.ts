// Import the printMusic function from music/list.ts
import { printMusic } from './music/list';

// Main function that demonstrates the music feature
function main(): void {
    console.log("=== Welcome to the Music Player ===");
    console.log();
    
    // Print out the music list feature
    printMusic();
    
    console.log();
    console.log("=== End of Music List ===");
}

// Call the main function
main();
