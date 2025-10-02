export const Player = ({ name, symbol }) => {
	return (
		<li className="player">
			<span className="player-symbol">{symbol}</span>
			<button>Edit</button>
		</li>
	);
};
