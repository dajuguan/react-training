import { useState } from "react";
export const UserInput = (initalValue) => {
  const [value, setValue] = useState(initalValue);
  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initalValue),
  ];
};
