import './App.css';
import { useState } from 'react';
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import { crossmintProjectID } from "./config.ts";
import { crossmintCollectionID } from "./config.ts";
import { crossmintNET } from "./config.ts";

function App() {
  const [mintAmount, setMintAmount] = useState(1);

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  }

  const handleIncrement = () => {
    if (mintAmount >= 5) return;
    setMintAmount(mintAmount + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
      <button onClick={handleDecrement}> - </button>
      <input 
        readOnly
        type="number" 
        value={mintAmount} 
      />
      <button onClick={handleIncrement}> + </button>

      <CrossmintPayButton
        projectId={crossmintProjectID}
        collectionId={crossmintCollectionID}
        environment={crossmintNET}
        className="xmint-btn"
        locale="en-US"
        currency="USD"
        mintConfig={{
        type: "candy-machine",
        quantity: mintAmount
        }}
      />
      </header>
    </div>
  );
}

export default App;
