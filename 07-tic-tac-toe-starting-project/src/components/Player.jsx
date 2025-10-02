import { useState } from "react";
export const Player = ({ initialName, symbol }) => {
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	function handleEditClick() {
		return setIsEditing(!isEditing);
	}

	function hanldeChange(event) {
		setPlayerName(event.target.value);
	}

	let editablePlayerName = <span className="player-name">{playerName}</span>;
	if (isEditing) {
		editablePlayerName = (
			<input type="text" required value={playerName} onChange={hanldeChange} />
		);
	}
	return (
		<li className="player">
			{editablePlayerName}
			<span className="player-symbol">{symbol}</span>
			<button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
};
