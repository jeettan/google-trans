import React from "react";
import "./App.css";
import swap from "./swap.png";
import axios from "axios";
import { useState } from "react";
import RightSelection from "./RightSelection";
import languageMap from "./languageMap";
import LeftSelection from "./LeftSelection";

function App() {
  const [value, setValue] = useState("Afrikaans");
  const [value2, setValue2] = useState("Afrikaans");

  const [state, setState] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");

  let api_key = "AIzaSyD-fshHBZRS90Zs2eoXsheqdQX1szr4_jQ";
  let url =
    "https://translation.googleapis.com/language/translate/v2/languages";

  let k = "";
  let k2 = "";

  function translate() {
    let url2 = "https://translation.googleapis.com/language/translate/v2";

    for (const key in languageMap) {
      if (languageMap[key] === value2) {
        k = key;
      }
    }

    for (const key in languageMap) {
      if (languageMap[key] === value) {
        k2 = key;
      }
    }

    const params = {
      q: state,
      target: k,
      key: api_key,
      source: k2,
    };

    axios.get(url2, { params })
      .then((res) => {
        setTextAreaValue(res.data.data.translations[0].translatedText);
      })
      .catch((error) => console.log(error));
  }

  const inputsHandler = (e) => {
    var text = e.target.innerHTML;
    setState(e.target.value);
  };

  function handleSelection(event) {
    setValue(event.target.value);
  }

  function handleSelection2(event) {
    setValue2(event.target.value);
  }

  function swapLanguages() {
    var temp = value;
    var temp2 = state;

    setValue(value2);
    setValue2(temp);

    setState(textAreaValue);
    setTextAreaValue(temp2);
  }

  return (
    <div className="App">
      <div class="center">
        <div class="row">
          <h1>Google Translate App Mock up</h1>
          <img
            src={swap}
            height="20px"
            class="swap"
            onClick={swapLanguages}
          ></img>
        </div>
        <div class="row">
          <div class="column">
            <div class="select" id="select">
              <LeftSelection value={value} handleSelection={handleSelection} />
            </div>
            <textarea
              rows="4"
              cols="50"
              onChange={inputsHandler}
              value={state}
            ></textarea>
          </div>
          <div class="column">
            <div class="select">
              <RightSelection value2={value2} handleSelection2={handleSelection2} />
            </div>
            <textarea rows="4" cols="50" value={textAreaValue}></textarea>
          </div>
        </div>
        <div class="row">
          <button onClick={translate} class="click">
            {" "}
            Translate{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
