import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  handlePlayerName,
}) {
  const [playerName, setNameValue] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    // setIsEditing(!isEditing);
    if (isEditing) {
      handlePlayerName(symbol, playerName);
    }
  }

  function handlePlayerChange(event) {
    // console.log(event);
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
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameContent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}
