// Import both features
import { printMusic } from './music/list';
import { printSnacks } from './snacks';

// Main function that demonstrates both features
function main(): void {
    console.log("=== Welcome to the Combined Features ===");
    console.log();
    
    // Print out the snacks feature
    console.log("--- SNACKS FEATURE ---");
    printSnacks();
    
    console.log();
    
    // Print out the music feature
    console.log("--- MUSIC FEATURE ---");
    printMusic();
    
    console.log();
    console.log("=== End of All Features ===");
}

// Call the main function
main();