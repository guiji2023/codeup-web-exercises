(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    const person = {
        firstName:"Ivan",
        lastName: "Guan"
    }
    console.log(person.lastName)

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello= function(firstName, lastName) {
        console.log(`Hello from ${this.firstName} ${this.lastName}!`)
    }
    person.sayHello("Ivan", "Guan");


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */



    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function discount ({name, amount}){
        console.log(`Customer name: ${name}`);
        console.log(`The amount before discount: $${amount}`);
        if (amount >200){
            console.log(`The discount: $${amount * 0.12}`);
            console.log(`The amount after discount: $${amount * 0.88}`)
        } else{
            console.log(`No discount applied`);
        }
        console.log(`===================================`)
    }

    for (let i of shoppers){
        discount(i);
    }


    //forEach method
    // shoppers.forEach((i =>discount(i)));



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    const books = [
        {
            title: "The Great Gatsby",
            author: {
                firstName: "F. Scott",
                lastName: "Fitzgerald"
            }
        },
        {
            title: "To Kill a Mockingbird",
            author: {
                firstName: "Harper",
                lastName: "Lee"
            }
        },
        {
            title: "1984",
            author: {
                firstName: "George",
                lastName: "Orwell"
            }
        },
        {
            title: "The Lord of the Rings",
            author: {
                firstName: "J.R.R.",
                lastName: "Tolkien"
            }
        },
        {
            title: "Harry Potter and the Sorcerer's Stone",
            author: {
                firstName: "J.K.",
                lastName: "Rowling"
            }
        }
    ];

    console.log(books[0].title)
    console.log(books[0].author.firstName)
    console.log(books[0].author.lastName)

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    console.log(`\n\n`);

    function display ({title, author}){
        console.log(`Title: ${title}`);
        console.log(`Author: ${author.firstName} ${author.lastName} `)
    }

    books.forEach((book, index)=> {
        console.log(`Book ${index +1}`);
        display(book);
    });


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    function createBook (title, author){
        const book = {
            Title: title,
            Author: author
        }
        return book;
    }

    let newBooks=[];

    for (let i in books){
       let book = createBook(books[i].title, `${books[i].author.firstName} ${books[i].author.lastName}`);
       newBooks.push(book);
    }

    function showBookInfo ({Title, Author}){
        console.log(`Title: ${Title}`);
        console.log(`Author: ${Author}`);
    }



    newBooks.forEach((book, index)=>{
        console.log(`Book ${index+1}`);
        showBookInfo(book);
    })



})();