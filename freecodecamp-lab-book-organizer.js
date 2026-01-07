let books = [
  {
    title: "Old Classic",
    authorName: "Unknown",
    releaseYear: 1900
  },
  {
    title: "How to enlarge your penis in 2 weeks",
    authorName: "Pastor JM",
    releaseYear: 2026
  },
  {
    title: "Leave them behind",
    authorName: "Andrei Ochangco",
    releaseYear: 2025
  },
  {
    title: "Tralalero Tralala",
    authorName: "Louis Ken Servito",
    releaseYear: 2024
  },
];

const sortByYear = (book1, book2) => {
  if (book1.releaseYear < book2.releaseYear) return -1;
  if (book1.releaseYear > book2.releaseYear) return 1;
  return 0;
};

const filteredBooks = books.filter(book => book.releaseYear <= 1950);

filteredBooks.sort(sortByYear);

console.log(filteredBooks);
