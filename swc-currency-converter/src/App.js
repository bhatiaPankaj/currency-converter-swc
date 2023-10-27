import "./App.css";
import InputBox from "./components/InputBox";
import { Button } from "@swc-react/button";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [fromValue, setFromValue] = useState(1);
  const [toValue, setToValue] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("usd");
  // const [currencySelected, setCurrencySelected] = useState("usd");
  const [currencyList, setCurrencyList] = useState([]);
  const [conversionValue, setConversionValue] = useState(1);

  const apiUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrency}.json`;

  useEffect(() => {
    setToValue(fromValue * conversionValue);
  }, [conversionValue, fromValue]);

  useEffect(() => {
    axios
      .get(apiUrl)
      //   .then((res) => res.json())
      .then((res) => {
        setCurrencyList(res.data[fromCurrency]);
        // setConversionValue(currencyList[toCurrency]);

        // console.log(res.data[currencySelected]);
      });
  }, [fromCurrency]);

  useEffect(() => {
    setConversionValue(currencyList[toCurrency]);
  }, [toCurrency, currencyList]);

  const convert = () => {
    setFromValue(toValue);
    setToValue(fromValue);
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    // setConversionValue(1 / conversionValue);
  };

  const onFromCurrencyChange = (val) => {
    setFromCurrency(val);
  };

  const onToCurrencyChange = (toVal) => {
    setToCurrency(toVal);
    // setConversionValue(currencyList[toVal]);
    console.log("conversionValue::::", conversionValue);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Currency Converter</h1>
      <div className="input-box">
        <InputBox
          label="From"
          labelCurrency="From Currency"
          currency={fromCurrency}
          currencyList={currencyList}
          onCurrencyChange={onFromCurrencyChange}
          value={fromValue}
          onValueChange={setFromValue}
          readonly={false}
        />
      </div>
      <div className="input-box">
        <InputBox
          label="To"
          labelCurrency="To Currency"
          currency={toCurrency}
          currencyList={currencyList}
          onCurrencyChange={onToCurrencyChange}
          value={toValue}
          onValueChange={setToValue}
          readonly={true}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button className="convert-button" onclick={convert}>
          Swap currencies
        </Button>
      </div>
    </div>
    /* 
      // const data = {
  //   india: "inr",
  //   usa: "usd",
  //   uk: "pound",
  //   japan: "Yen",
  //   China: "Remnibi",
  //   France: "Euro",
  // };
  // const dataArr = ["inr", "usd", "pound", "Yen", "Remnibi"];<div>
        <select id="selectField">
          <option selected disabled>
            {" "}
            Select an option
          </option>
          {dataArr.map((res) => (
            <option id={res} value={res}>
              {" "}
              {res}{" "}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select id="selectField2">
          <option selected disabled>
            {" "}
            Select an option 2
          </option>
          {Object.entries(data).map(([key, value]) => (
            <option key={key} value={value}>
              {value}{" "}
            </option>
          ))}
        </select>
      </div> */
  );
}

export default App;
