// function to get books from google books api
import mockData from "./mockBooks.json";

export async function searchBooks(query) {
  const url =
    "https://www.googleapis.com/books/v1/volumes?q=" +
    encodeURIComponent(query) +
    "&maxResults=20&key=" +
    import.meta.env.VITE_BOOKS_API_KEY;
  const response = await fetch(url);

  // if google blocks us, use the saved data instead
  if (!response.ok) {
    console.log("API blocked, using mock data");
    return mockData.items;
  }

  const data = await response.json();

  if (data.items) {
    return data.items;
  } else {
    return [];
  }
}
