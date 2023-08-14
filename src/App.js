import './App.css';
import { useState } from 'react';
import styled from "styled-components";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import { crossmintProjectID } from "./config.ts";
import { crossmintCollectionID } from "./config.ts";
import { crossmintNET } from "./config.ts";

const MinusIcon = (props) => (
  <svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 11h8m6 0c0 5.523-4.477 10-10 10S1 16.523 1 11 5.477 1 11 1s10 4.477 10 10Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const PlusIcon = (props) => (
  <svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 7v8m-4-4h8m6 0c0 5.523-4.477 10-10 10S1 16.523 1 11 5.477 1 11 1s10 4.477 10 10Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ButtonWrap = styled.div`
  padding: 3px 4px;
  background-color: #3b8c69;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: var(--white);
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  text-transform: uppercase;
`;

const NumbericIcon = styled.button`
  border: none;
  box-shadow: none;
  background: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const NumberInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px;
  gap: 5px;
  background: none;
  border-radius: 10px;
`;

const NumericField = styled.input`
  font-size: 20px;
  padding: 0;
  vertical-align: middle;
  background-color: none;
  box-sizing: border-box;
  background: none;
  font-weight: 600;
  line-height: 100%;
  height: 20px;
  width: 24px;
  color: var(--white);
  border: none;
  text-align: center;
  margin-top: -2px;
  overflow: visible;

  :hover,
  :focus {
    box-shadow: none;
  }
  :focus-visible {
    outline: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

function App() {
  const mintMaximum = 5 // Maximum amount of NFTs per transaction
  
  const [mintAmount, setMintAmount] = useState(1);

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  }

  const handleIncrement = () => {
    if (mintAmount >= mintMaximum) return;
    setMintAmount(mintAmount + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
      <ButtonWrap>
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

        <NumberInput>
          <NumbericIcon
            onClick={() => handleDecrement()}
          >
            <MinusIcon></MinusIcon>
          </NumbericIcon>

          <NumericField
            type="text"
            className="mint-amt"
            disabled
            // step={1}
            // min={1}
            // max={mintMaximum}
            value={mintAmount}
          />

          <NumbericIcon
            onClick={() => handleIncrement()}
          >
            <PlusIcon></PlusIcon>
          </NumbericIcon>
        </NumberInput>
      </ButtonWrap>
            
      </header>
    </div>
  );
}

export default App;
