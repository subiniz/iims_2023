let books = {
    title: ['Rich Dad Poor Dad', 'Atomic Habits', 'Deep Work', 'The Alchemist'],
    author: ['Robert Kiyosaki', 'James Clear', 'Cal Newport', 'Paulo Coelho'],
    isFree: true,
 };

books.isFree = false;

console.log(books);

 books.title.push('Ikigai');

console.log(books);

books.author.push('Frances Mirales');

console.log(books);

Object.assign(books, {language: 'English'});
// books['language'] = 'English';

console.log(books);