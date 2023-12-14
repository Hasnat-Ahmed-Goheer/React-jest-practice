import React, { useState } from "react";
import Output from "./Output";

const Greetings = () => {
  const [changed, setChanged] = useState(false);

  const handleClick = () => {
    setChanged(true);
  };
  return (
    <div>
      <h3>Hello to you too</h3>
      {!changed && <Output>Welcome to the jest testing!</Output>}
      {changed && <Output>Changed!</Output>}
      <button onClick={handleClick}>Change</button>
    </div>
  );
};

export default Greetings;
