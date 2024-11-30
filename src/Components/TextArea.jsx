import { useState } from "react";
import Warning from "./Warning";

export default function TextArea({ text, setText }) {
  const [warningMessage, setWarningMessage] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<span>")) {
      setWarningMessage("No Script tags allowed!");

      newText = newText.replace("<span>", "");
    } else if (newText.includes("@")) {
      setWarningMessage("No @ allowed!");

      newText = newText.replace("@", "");
    } else {
      setWarningMessage("");
    }

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        spellCheck="false"
        placeholder="Enter text here..."
        value={text}
        onChange={handleChange}
      ></textarea>
      <Warning warningMessage={warningMessage} />
    </div>
  );
}
