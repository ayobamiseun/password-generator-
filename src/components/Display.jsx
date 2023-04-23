import { useState, useRef } from "react";
import { FaCheckCircle, FaExclamationCircle, FaCopy, FaSyncAlt } from "react-icons/fa";
import "./Display.css";
import Container from "./container/Container";
import Button from "./container/Button";
import { generatePassword, copyToClipBoard  } from "./utils/Helper";
import Tooltip from "./Tooltip";
export default function Display() {
  const [passwordDis, setPasswordDis] = useState("")
  const [rangeValue, setRange ] = useState("")
  const [passwordProps, setPasswordProps ] = useState("")
  const [tooltip, setTooltip] = useState(false)
  const passwordRef = useRef(null)

  let passwordDescription = ''


  function generateNewPassword() {
    const pwd = generatePassword(passwordProps, rangeValue);
    setPasswordDis(pwd)
    
  }

   function copyClipBoard(e) {
    e.preventDefault();
    copyToClipBoard(passwordRef.current)
    setTooltip(true) 

    setTimeout(() => {
      setTooltip(false) 
    }, 2000);
    
   }
  function setBackgroundColor(passwordDis) {

    if(passwordDis && passwordDis.length === 1  && passwordDis.length <= 5) {
      passwordDescription = "Bad password";
      return '#cb473e'
    } else if(passwordDis && passwordDis.length >= 6  && passwordDis.length <= 10) {
      passwordDescription = "weak password";
      return '#f07d58'
  }
else if(passwordDis && passwordDis.length > 10  ) {
  passwordDescription = "Strong Password";
  return '#55a95d'
} else {
  passwordDescription = "Bad Password"
  return '#cb473e'
}
  }


  return (
    <>
      <div className="row">
        <div className="col-12 password-display-container" style={{background: setBackgroundColor(passwordDis)}}>
          <div style={{width: "100%"}}>
            <div className="password-display">
              <input
                ref={passwordRef}
                type="type"
                value={passwordDis}
                readOnly
                className="password-display-input"
                
              />
            </div>
            <div className="password-description">
            {passwordDis && passwordDis.length > 10  ?  
              <> <FaCheckCircle style={{ color: "black" }} />
              {passwordDescription} </>
                :
  <>
  <FaExclamationCircle style={{ color: "black" }} />
              {passwordDescription}
  </>
             
            }
              {/* <i className="fas fa-check-circle"></i> */}
             
            </div>
          </div>
          <div className="password-display-icons">
            <Button className="copy-btn" iconDisplay="far fa-copy" handleClick={copyClipBoard}></Button>
            <Button
              className="generate-btn"
              iconDisplay="fas fa-sync-alt"
              handleClick={generateNewPassword}
            ></Button>
            <Tooltip
              message="copied"
              position="left"
              displayTooltip={tooltip}
             />
          </div>
        </div>
        <Container setPasswordDis={setPasswordDis} setRange={setRange} setPasswordProps={setPasswordProps} passwordRef={passwordRef} />
      </div>
    </>
  );
}
