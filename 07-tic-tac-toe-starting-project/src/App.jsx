import { Player } from "./components/Player";

function App() {
	return (
		<main>
			<div id="game-container">
				<ol id="players">
					<Player name={"firstPlayer"} symbol={"x"} />
					<Player name={"secondPlayer"} symbol={"o"} />
				</ol>
			</div>
		</main>
	);
}

export default App;
