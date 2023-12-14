import { render, screen, waitFor } from "@testing-library/react";
import Greetings from "../components/Greetings";
import userEvent from "@testing-library/user-event";

describe("Greetings Component", () => {
  test("'Hello to you too' renders as text", () => {
    // Arrange
    render(<Greetings />);
    // Act

    // Assert
    // getFunctions throw a function if the element is not found, queryFuncs don't throw an error findFuncs return a promise
    // const linkElement = screen.getByText(/hello to you too/i);
    const linkElement = screen.getByText("Hello to you too", { exact: true });
    expect(linkElement).toBeInTheDocument();

    // const textElement = screen.queryByTestId('hello to you too',{exact:true})
    // expect(textElement).not.toBeInTheDocument();
  });
  test("'Welcome to the jest testing!' renders as text", () => {
    // Arrange
    render(<Greetings />);
    // Act

    // Assert
    const textElement = screen.getByText("Welcome to the jest testing!", {
      exact: true,
    });
    expect(textElement).toBeInTheDocument();
  });

  test("'Changed!' renders as a text", async () => {
    // Arrange
    render(<Greetings />);
    // Act :Performing an  action first before going into the assert phase
    const buttonElement = screen.getByText('Change');
    userEvent.click(buttonElement);
    // Assert
    // use waitFor when you are expecting an element to appear after an action otherwise it will throw an error if the element is not found
    await waitFor(() => {
      const textElement = screen.getByText("Changed!");
      expect(textElement).toBeInTheDocument();
    });
  });
  test("'Welcome to the jest testing' does not renders as a text when button is clicked", async () => {
    // Arrange
    render(<Greetings />);
    // Act :Performing an  action first before going into the assert phase
    const buttonElement = screen.getByText("Change");
    userEvent.click(buttonElement);
    // Assert
    // use waitFor when you are expecting an element to appear after an action otherwise it will throw an error if the element is not found
    await waitFor(() => {
      const textElement = screen.queryByText("welcome to the jest testing", {
        exact: false,
      });
      expect(textElement).toBeNull();
    });
  });
});
