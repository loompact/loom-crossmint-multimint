import './App.css';
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import { crossmintID } from "./config.ts";
import { crossmintNET } from "./config.ts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CrossmintPayButton
          clientId={crossmintID}
          className="xmint-btn"
          environment={crossmintNET}
          locale="en-US"
          currency="USD"
          mintConfig={{
          type: "candy-machine",
          quantity: 1 // The amount of NFTs you would like to mint per order.
          // mintingGroup: "_MINTING_GROUP_" // only if you have configured minting groups in candy guards
          }}
        />
      </header>
    </div>
  );
}

export default App;
