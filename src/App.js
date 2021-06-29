import web3 from "./utils/web3";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
	const [accounts, setAccounts] = useState([]);
	useEffect(() => {
		window.ethereum.request({ method: "eth_requestAccounts" });
		getAccounts();
	}, []);
	const getAccounts = async () => {
		const accounts = await web3.eth.getAccounts();
		console.log(accounts);
		setAccounts(accounts);
	};

	return (
		<div className='App'>
			{accounts.length > 0 &&
				accounts.map((account) => (
					<ul>
						<li>{account}</li>
					</ul>
				))}
		</div>
	);
}

export default App;
