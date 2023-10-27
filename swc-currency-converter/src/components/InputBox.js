import { Button } from "@swc-react/button";
import { Textfield } from "@swc-react/textfield";
import { FieldLabel } from "@swc-react/field-label";
import { Picker } from "@swc-react/picker";
import { MenuItem } from "@swc-react/menu";
import { FieldGroup } from "@swc-react/field-group";
import { useState, useEffect } from "react";
import axios from "axios";

function InputBox({
  label,
  currency,
  currencyList,
  onCurrencyChange,
  value,
  onValueChange,
  readonly,
  labelCurrency,
}) {
  //   const [currencyList, setCurrencyList] = useState([]);
  //   const [currencySelected, setCurrencySelected] = useState("usd");

  const handleCurrencySelect = (e) => {
    console.log("wadduuppppp");
    onCurrencyChange(e.target.value);
    // console.log("currencySelected::", currencySelected);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <FieldLabel> {label} </FieldLabel>
          <Textfield
            value={value}
            readonly={readonly}
            change={(e) => onValueChange(e.target.value)}
          >
            {" "}
          </Textfield>
        </div>
        <div>
          <FieldGroup>
            <FieldLabel htmlFor="currencyPicker"> {labelCurrency} </FieldLabel>
            <Picker
              id="currencyPicker"
              value={currency}
              change={handleCurrencySelect}
            >
              {Object.entries(currencyList).map(([id, name]) => (
                <MenuItem key={id} value={id}>
                  {id}
                </MenuItem>
              ))}
            </Picker>
          </FieldGroup>
        </div>
      </div>
    </>
  );
}

export default InputBox;
