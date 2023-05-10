import { useState } from "react";
export default function useToggle() {
  const [isToggle, setIsToggle] = useState(false);

  function changeToggle() {
    setIsToggle((toggle) => !toggle);
  }
  function isToggleTrue() {
    setIsToggle(true);
  }
  function isToggleFalse() {
    setIsToggle(false);
  }

  return { isToggle, changeToggle, isToggleTrue, isToggleFalse };
}
