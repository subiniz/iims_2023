let books = {
    title: ['Rich Dad Poor Dad', 'Atomic Habits', 'Deep Work', 'The Alchemist'],
    author: ['Robert Kiyosaki', 'James Clear', 'Cal Newport', 'Paulo Coelho'],
    isFree: true,
 };

// books.isFree = false;

// console.log(books);

//  books.title.push('Ikigai');

// console.log(books);

// books.author.push('Frances Mirales');

// console.log(books);

// Object.assign(books, {language: 'English'});
// // books['language'] = 'English';

// console.log(books);


// for(let i = 0; i < books.title.length; i++) {
//     console.log(books.title[i]);
// }


// for(let i=0;i<books.title.length;i++){
//     console.log(books.title[i]+" was written by "+books.author[i]);
// }

function areaOfCircle(radius) {
    const pi = 3.1415;
    let area = pi * radius * radius;
    console.log("The area of circle is " + area);
    console.log(`The area of circle is ${area}`);
}

areaOfCircle(10);