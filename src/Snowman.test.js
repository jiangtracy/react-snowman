import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

// Think about all the tests that reflect how the user would use the software
// Test win/lose/guess wrong -> win
it("Game should stop after nWrong reaches maxGuesses", function() {
  const maxWrong = 3;
  const {container} = render(<Snowman words={["zzzz"]} maxWrong={maxWrong}/>);
  const btnHTML = container.querySelectorAll(".guessBtn");
  const btnsArray = [...btnHTML].filter(b => b.innerText !== "z");

  // click maxWrong number of buttons
  for(let i = 0; i < maxWrong; i++) {
    fireEvent.click(btnsArray[i]);
  }

  expect(btnHTML[0]).not.toBeInTheDocument();
})

it("matches snapshot", function() {
  const {container} = render(<Snowman maxWrong={0} />);
  expect(container).toMatchSnapshot();
});


