# Book Finder

The project is live at https://jjyy032659.github.io/GoogleBook/

A React app that lets you search for books using the Google Books API. Type in a search, get a grid of books, and click on any book to see more details in a popup.

## Features

- Search for any book by keyword
- Responsive grid of book cards (works on mobile too)
- Click a book card to open a modal with more info (publisher, published date, page count, language etc)
- Shows a message when no books are found
- Falls back to saved mock data if the Google API rate limits you (this happened to me a lot during development!)

## Tech used

- React (Vite)
- SCSS modules with a shared variables file for the colour palette
- Google Books API
- Vitest + React Testing Library for tests
