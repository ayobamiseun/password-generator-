import Button from "./Button";
import Slider from "./Slider";
import { useState } from "react";
import "./Container.css";
import Checkbox from "../Checkbox";

const CHECKBOXLISTS = [
  {
    id: 0,
    name: "Uppercase",
    label: "Uppercase",
    isChecked: true,
  },
  {
    id: 1,
    name: "Lowercase",
    label: "Lowercase",
    isChecked: true,
  },
  {
    id: 2,
    name: "Symbols",
    label: "Symbols",
    isChecked: true,
  },
  {
    id: 3,
    name: "numbers",
    label: "numbers",
    isChecked: true,
  },
];
export default function Container() {
  const [rangeValue, setRangeValue] = useState(12);
  const [checkBox, setCheckBox] = useState({
    Uppercase: true,
    Lowercase: true,
    Symbols: true,
    numbers: true,
  });
  function onChangeSlider(e) {
    setRangeValue(e.target.value);
  }


  // change the check box on click 
  function onChangeCheckBox(e) {
    let { name, checked } = e.target;

    {
      CHECKBOXLISTS.map((list) => {
        if (list.name === name) {
          list.isChecked = checked;
          setCheckBox({[name]: checked});
        }
      });
    }
  }
  return (
    <>
      <div className=" password-settings">
        <h3>Use slider to select for options</h3>
        <div className="row">
          <div className="col--md-12">
            <div className="form-group">
              &nbsp;
              <Slider
                min={1}
                max={60}
                step={1}
                defaultLength={parseInt(rangeValue, 10)}
                value={parseInt(rangeValue, 10)}
                onChangeValue={onChangeSlider}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="row checkbox-contaimer">
              {CHECKBOXLISTS.map((list) => (
                <Checkbox
                  key={list.id}
                  name={list.name}
                  checked={list.isChecked}
                  label={list.label}
                  value={list.isChecked}
                  onChange={onChangeCheckBox}
                  disabled={false}
                />
              ))}
            </div>
          </div>
        </div>
        <br />
        <div className="text-center">
          <div className="row">
            <div className="col-md-12">
              <Button iconDisplay="far fa-copy" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
