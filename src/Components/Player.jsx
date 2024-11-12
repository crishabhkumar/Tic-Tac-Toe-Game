import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setNameValue] = useState(initialName);

  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    // setIsEditing(!isEditing);
  }

  function handlePlayerChange(event) {
    console.log(event);
    setNameValue(event.target.value);
  }

  let playerNameContent = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerNameContent = (
      <input
        type="text"
        value={playerName}
        required
        onChange={handlePlayerChange}
      />
    );
  }

  return (
    <li>
      <span className="player">
        {playerNameContent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}
