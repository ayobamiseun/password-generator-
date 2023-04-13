import "./Slider.css";
import { useState, useRef } from "react";
export default function Slider(props) {
  const { step, min, max, value, defaultLength, onChangeValue } = props;

  const rangeRef = useRef();
  const [range, setRange] = useState("");

  const activeRangeColor = "#4aa1f3";
  const rangeBackground = "#d7dcdf";

  function handleChange(max, e) {
    onChangeValue(e);

    const value = e.target.value;
    const progress = (value / max) * 100 + "%";
    setRange(value);
    const newBackground = `linear-gradient(90deg, ${activeRangeColor} 0% ${progress}, ${rangeBackground} ${progress} 100%)`;
    rangeRef.current.style.background = newBackground;
  }

  if(range !== defaultLength || !range) {
    setRange(defaultLength)
   }
  const progressValue = range;
  const progress = (progressValue / max) * 100 + "%";
  const styleInput = {
    background: `linear-gradient(90deg, ${activeRangeColor} 0% ${progress}, ${rangeBackground} ${progress} 100%)`,
  };
  return (
    <div className="slider-container">
      <div className="slider">
        <input
          ref={rangeRef}
          type="range"
          className="range-slider"
          step={step}
          min={min}
          max={max}
          value={value}
          onChange={(e) => handleChange(max, e)}
          style={styleInput}
        />
        <span className="range-slider-value">{progressValue}</span>
      </div>
    </div>
  );
}
