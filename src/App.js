import React, {useState, useEffect} from "react";
import SingleColor from "./SingleColor";
import './App.css';
import Values from "values.js";
import "./utils.js";

function App() {
  const [color, setColor] = useState("#788978");
  const [error, setError] = useState(false);
  const [noOfShades, setNoOfShades] = useState(10);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(noOfShades);
      setList(colors);
      setError(false);
      console.log("Colors: ", colors);
    } catch(err) {
      setError(true);
      console.log("Error: ", err);
    }
  }

  return (
    <>
    <section className="container">
      <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className={error ? "error" : null}
        />
        <button type="submit" className="btn">generate</button>
      </form>
    </section>
    <section className="colors">
      {list.map((color, index) => {
        return (
          <SingleColor 
            key={index}
            index={index}
            noOfShades={noOfShades}
            {...color}
            hexColor={color.hex}
          />
        )
      })}
    </section>
    </>
  );
}

export default App;