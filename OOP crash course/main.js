// Almost everything is an object

// string, boolean and numbers are primitive but method can be called on them

// const s = 'Hello'
// console.log(typeof s) //object

// this is what happens in the background when object is called on a string

// const s2 = new String('Hello')

// console.log(typeof s2) // object

// DOM object Window and navigation object

// Window is the parent object of everything

// console.log(window)

//window.alert()

// Since windows is the parent object in the dom theres nothing above it any thing with windows you don't have to do window.method

// alert(1)

// navigator is a method of window that tells you about your pc and browser NOTE:THIS FEATURE IS NO LONGER RECOMMENDED. tHOUGH SOME BROWSER MIGHT STILL SUPPORT IT. IT MAY HAVE BEEN ALREADY REMOVED FROM THE RELEVANT WEB STANDARDS.

// console.log(navigator.appVersion)  


// Object literal

// const book1 = {
//     // below are properties of book1
//     title: "Book one",
//     author: "John Doe",
//     year: "2022",
//     // the below is an method 
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     }
// }

// to call a individual property
// console.log(book1.year)

// to see a value of an object
// console.log(Object.values(book1))
//  to see keys
// console.log(Object.keys(book1))
// to call a method

// console.log(book1.getSummary())

// creating a constructoror

// constructor is basically a function

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

// getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year
    return`${this.title} is ${years} years old`
}
//  Revise / change Year
Book.prototype.revise = function(newYear) {
    this.year = newYear
    this.revised = true
}
 

// Instantiate an object
const book1 = new Book("Book 1", 'John doe', "2020")
const book2 = new Book("Book 2", 'Jane doe', "2022")

console.log(book1.getSummary())
book1.revise("2022")
console.log(book1)

// Magazine constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year)

    this.month = month
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype)

// Instantiate Magazine Object
const mag1 = new Magazine("mag One", "john Doe", "2020", "Jan")

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine

console.log(mag1)


// Object Of Protos
const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year
        return`${this.title} is ${years} years old`
    }
}

// Create Object
// const Book1 = Object.create(BookProtos)
// book1.title = "Book One"
// book1.author = "John Doe"
// book1.year = "2020"

// const book1 = Object.create(bookProtos, {
//     title: { value: "Book One"},
//     author: { value: "John Doe"},
//     year: { value: "2020"}
// })

// console.log(book1)