
    // Event listener for when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
     // 🪲 Bug: Incorrect ID used for attaching the event listener
    // Event listener for solving Room 1
    document.getElementById("solveRoom1").addEventListener("click", () => {

        // Fetching data from 'books.json'
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                // Finding the most recent book
                const mostRecentBook = findMostRecentBook(books);

                 // 🪲 Bug: Incorrect element ID
                // Displaying the title of the most recent book in 'room1Result' element
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            })
            .catch(error => {
                console.error('Error fetching books.json:', error);
            });
    });


        // Event listener for solving Room 2
        document.getElementById("solveRoom2").addEventListener("click", () => {

             // 🪲 Bug: What's mssing from JS concepts?
            // Defining JavaScript and React concept sets
            const jsConcepts = new Set(['closure', 'scope', 'async', 'hoisting']);
            const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);

             // 🪲 Bug: Incorrect function call
            // Finding common concepts between JavaScript and React
            const commonConcepts = findIntersection(jsConcepts, reactConcepts);

            // Displaying the common concepts in 'room2Result' element
            document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
        });


      // 🪲 Bug: Asynchronous function ?
     // Event listener for solving Room 3
     
     document.getElementById("solveRoom3").addEventListener("click", () => {
        // Fetching data from 'directions.json'
        fetch('directions.json') 
            .then(response => response.json())
            .then(directions => {
                // Navigating through the labyrinth using fetched directions
                navigateLabyrinth(directions)
                    .then(message => {

                     // 🪲 Bug: Incorrect method
                    // Displaying the final message in 'room3Result' element

                        document.getElementById("room3Result").innerHTML = message;
                    })
                    .catch(error => {
                        console.error('Error navigating labyrinth:', error);
                    });
            })
            .catch(error => {
                console.error('Error fetching directions.json:', error);
            });
    });
});



// Function to find the most recent book from an array of books

function findMostRecentBook(books) {
    // 🪲 Bug: Logic error
    return books.reduce((mostRecent, book) => {
        const mostRecentDate = new Date(mostRecent.published);
        const currentDate = new Date(book.published);
        return currentDate > mostRecentDate ? book : mostRecent;
    });
}


// Function to find the intersection of two sets
// 🪲 Bug: Incorrect logic

function findIntersection(setA, setB) { const intersection = new Set([...setA].filter(x => setB.has(x))); return intersection; }


async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // 🪲 Bug: No delay
        new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}

