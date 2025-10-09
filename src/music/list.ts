// Define a list of music titles
export const musicList: string[] = [
    "Bohemian Rhapsody - Queen",
    "Imagine - John Lennon",
    "Hotel California - Eagles",
    "Billie Jean - Michael Jackson",
    "Hey Jude - The Beatles",
    "Smells Like Teen Spirit - Nirvana",
    "Like a Rolling Stone - Bob Dylan",
    "What a Wonderful World - Louis Armstrong",
    "Sweet Child O' Mine - Guns N' Roses",
    "Shake It Off - Taylor Swift"
];

// Utility function to print music list to console
export function printMusic(): void {
    console.log("Music List:");
    console.log("===========");
    musicList.forEach((song, index) => {
        console.log(`${index + 1}. ${song}`);
    });
}


