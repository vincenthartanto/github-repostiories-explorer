import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import Card from "./Components/Card";
test("render 5 users", async () => {
  render(<App />);
  const usernameInput = screen.getByPlaceholderText("Enter Username...");
  const searchButton = screen.getByText("Search");

  fireEvent.change(usernameInput, {
    target: { value: "Vincent" },
  });
  fireEvent.click(searchButton);

  // Wait for the API call and rendering to complete
  await waitFor(() => {
    const listItems = screen.queryAllByTestId("user-item");
    expect(listItems.length).toBeLessThanOrEqual(5);
  });
});
test("Render  below 6 repositories", async () => {
  render(<Card name="Vincent" />);
  const card = screen.getByTestId("card");

  fireEvent.click(card);

  await waitFor(() => {
    const repositories = screen.queryAllByTestId("card-detail");

    expect(repositories.length).toBeLessThanOrEqual(5);
  });
});
