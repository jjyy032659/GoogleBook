import { render, screen, fireEvent } from "@testing-library/react";
import BookModal from "./BookModal";

// fake book to use in our tests
const testBook = {
  id: "test1",
  volumeInfo: {
    title: "Modal Book",
    authors: ["Jane Doe"],
    publisher: "Test Publisher",
  },
};

test("shows the book details", () => {
  render(<BookModal book={testBook} onClose={() => {}} />);

  expect(screen.getByText("Modal Book")).toBeInTheDocument();
  expect(screen.getByText("Publisher: Test Publisher")).toBeInTheDocument();
});

test("calls onClose when the X button is clicked", () => {
  const handleClose = vi.fn();

  render(<BookModal book={testBook} onClose={handleClose} />);

  fireEvent.click(screen.getByText("X"));

  expect(handleClose).toHaveBeenCalled();
});
