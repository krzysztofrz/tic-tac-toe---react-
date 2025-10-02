import { Player } from "./components/Player";

function App() {
	return (
		<main>
			<div id="game-container">
				<ol id="players">
					<Player initialName={"firstPlayer"} symbol={"x"} />
					<Player initialName={"secondPlayer"} symbol={"o"} />
				</ol>
			</div>
		</main>
	);
}

export default App;
