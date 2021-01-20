import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

it("Game should stop after nWrong reaches maxGuesses", function() {
  const maxWrong = 3;
  const {container} = render(<Snowman words={["zzzz"]} maxWrong={maxWrong}/>);
  const btnsArray = [...container.querySelectorAll("button")].filter(b => b.innerText !== "z");

  // click maxWrong number of buttons
  for(let i = 0; i < maxWrong; i++) {
    fireEvent.click(btnsArray[i]);
  }

  expect(container.querySelector("#Snowman-guessbtns")).not.toBeInTheDocument();
})

it("matches snapshot", function() {
  const {container} = render(<Snowman maxWrong={0} />);
  expect(container).toMatchSnapshot();
});


