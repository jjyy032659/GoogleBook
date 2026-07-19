import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { searchBooks } from "./api/booksApi";

// replace the real api function with a fake one
vi.mock("./api/booksApi");

const fakeBooks = [
  {
    id: "book1",
    volumeInfo: {
      title: "Clickable Book",
      authors: ["Test Author"],
      publisher: "Test Publisher",
      description: "A description",
    },
  },
];

test("opens the modal when a book card is clicked", async () => {
  searchBooks.mockResolvedValue(fakeBooks);
  const user = userEvent.setup();

  render(<App />);

  // search for something
  await user.type(screen.getByPlaceholderText("Search for a book..."), "test");
  await user.click(screen.getByText("Search"));

  // click the book card
  await user.click(await screen.findByText("Clickable Book"));

  // the modal should now show the publisher info
  expect(screen.getByText("Publisher: Test Publisher")).toBeInTheDocument();
});
