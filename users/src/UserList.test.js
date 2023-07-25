import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

test("render one row per user", () => {
  // render the component
  const users = [
    { name: "jane", email: "jane@jane.come" },
    { name: "sam", email: "sam@sam.come" },
  ];

  // const { container } = render(<UserList users={users} />);
  render(<UserList users={users} />);

  // find all the rows in the table
  // way two
  //   const rows = container.querySelectorAll("tbody tr");

  // way one
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  //   // not a good way here:
  //     const rows = screen.getAllByRole("row"); // this will include header as well

  //   // little tool to help spot on suggested query
  //     screen.logTestingPlaygroundURL();
  // assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {
  // render the component
  const users = [
    { name: "jane", email: "jane@jane.come" },
    { name: "sam", email: "sam@sam.come" },
  ];

  render(<UserList users={users} />);

  screen.logTestingPlaygroundURL();

  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
