import Button from "./Button";
import Slider from "./Slider";
import { useState, useEffect, useMemo } from "react";
import "./Container.css";
import CheckBox from "../Checkbox";
import {
  generatePassword,
  setPasswordLength,
  copyToClipBoard,
} from "../utils/Helper";
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
export default function Container({
  setPasswordDis,
  setRange,
  setPasswordProps,
  passwordRef,
  type
}) {
  const [rangeValue, setRangeValue] = useState(12);
  const [Checkbox, setCheckBox] = useState({
    Uppercase: true,
    Lowercase: true,
    Symbols: true,
    numbers: true,
  });
  const [checked, setChecked] = useState(false);
  const [checkedName, setCheckedName] = useState("");
  const [minMaxValue, setMinMaxValue] = useState({
    min: 1,
    max: 60
  });
  const { Uppercase, Lowercase, Symbols, numbers } = Checkbox;
  const { min, max } = minMaxValue;
  useEffect(() => {
    setPasswordLength(rangeValue);
    setRange(rangeValue);
    passwordGenerated(Checkbox, rangeValue);
    checkboxCount();

    // eslint-disable-next-line
  }, [Uppercase, Lowercase, Symbols, numbers]);
  function checkboxCount() {
    const checkCount = Object.keys(Checkbox).filter((key) => Checkbox[key]);
    const disabled = checkCount.length === 1;
    const name = checkCount[0];
    if (disabled) {
      setChecked(disabled);
      setCheckedName(name);
    } else {
      setChecked(false);
      setCheckedName("");
    }
  }

  function updateCheckBoxes() {
    if (type === "pin") {
      CHECKBOXLISTS.map(checkbox => {
        const name = checkbox.name;
        if (name !== "numbers") {
          checkbox.isChecked = false;
          const checkBoxProps = {
            name,
            checkedName: name,
            checked: true,
            isChecked: checkbox.isChecked,
            min: 0,
            max: 15,
            length: 3, 
          };
          checkBoxProperties(checkBoxProps);
        }
        return "";
      });
    }
    else {
      CHECKBOXLISTS.map(checkbox => {
        const name = checkbox.name;
       
          checkbox.isChecked = true;
          const checkBoxProps = {
            name,
            checkedName: '',
            checked: false,
            isChecked: checkbox.isChecked,
            min: 1,
            max: 60,
            length: 12, 
          };
          checkBoxProperties(checkBoxProps);
        
      });
    }
  }
  function checkBoxProperties(checkBoxProps) {
    const { name, checked, isChecked, checkedName, min, max, length } =
      checkBoxProps;

    setCheckBox(prevState => ({ ...prevState, [name]: isChecked }));
    setChecked(checked);
    setCheckedName(checkedName);
    setPasswordLength(length);
    setMinMaxValue({ min, max });
    setRangeValue(length);
    setRange(length);
  }

  function passwordGenerated(Checkbox, rangeValue) {
    const pwd = rangeValue > 3 ? generatePassword(Checkbox, rangeValue) : generatePassword(Checkbox, 3);
    // const pwd = generatePassword(Checkbox, rangeValue);
    console.log(pwd);
    setPasswordDis(pwd);
    setPasswordProps(Checkbox);
  }
  function onChangeSlider(e) {
    setRangeValue(e.target.value);
    setPasswordLength(e.target.value);
    setRange(e.target.value);
    passwordGenerated(Checkbox, e.target.value);
  }
  
  // change the check box on click
  function onChangeCheckBox(e) {
    if (type !== "pin") {
      let { name, checked } = e.target;

      {
        CHECKBOXLISTS.map((list) => {
          if (list.name === name) {
            list.isChecked = checked;
            setCheckBox((prevState) => ({ ...prevState, [name]: checked }));
            setPasswordLength(rangeValue);
            setRangeValue(rangeValue);
          }
        });
      }
    } 
  }
  useMemo(updateCheckBoxes, [type]);
  function copyClipBoard(e, elementRef) {
    e.preventDefault();
    copyToClipBoard(elementRef);
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
                min={parseInt(min, 10)}
                max={parseInt(max, 10)}
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
                <CheckBox
                  key={list.id}
                  name={list.name}
                  checked={list.isChecked}
                  label={list.label}
                  value={list.isChecked}
                  onChange={onChangeCheckBox}
                  disabled={
                    checked && list.isChecked && checkedName === list.name
                  }
                />
              ))}
            </div>
          </div>
        </div>
        <br />
        <div className="text-center">
          <div className="row">
            <div className="col-md-12">
              <Button
                iconDisplay="far fa-copy"
                handleClick={(e) => copyClipBoard(e, passwordRef.current)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
