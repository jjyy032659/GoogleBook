import { render, screen, fireEvent } from "@testing-library/react";
import BookCard from "./BookCard";

// fake book to use in our tests
const testBook = {
  id: "test1",
  volumeInfo: {
    title: "Test Book",
    authors: ["Jane Doe"],
    description: "A test description.",
    imageLinks: {
      thumbnail: "https://example.com/cover.jpg",
    },
  },
};

test("shows the book title and author", () => {
  render(<BookCard book={testBook} onBookClick={() => {}} />);

  expect(screen.getByText("Test Book")).toBeInTheDocument();
  expect(screen.getByText("Jane Doe")).toBeInTheDocument();
});

test("shows placeholder image when there is no image", () => {
  const bookWithNoImage = {
    id: "test2",
    volumeInfo: {
      title: "No Image Book",
    },
  };

  render(<BookCard book={bookWithNoImage} onBookClick={() => {}} />);

  const image = screen.getByRole("img");
  expect(image.src).toContain("placehold.co");
});

test("calls onBookClick when the card is clicked", () => {
  const handleClick = vi.fn();

  render(<BookCard book={testBook} onBookClick={handleClick} />);

  fireEvent.click(screen.getByText("Test Book"));

  expect(handleClick).toHaveBeenCalled();
});
