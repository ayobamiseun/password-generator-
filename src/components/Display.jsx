import { FaCheckCircle, FaCopy, FaSyncAlt } from "react-icons/fa";
import "./Display.css";
import Container from "./container/Container";
import Button from "./container/Button";
export default function Display() {
  return (
    <>
      <div className="row">
        <div className="col-12 password-display-container">
          <div>
            <div className="password-display">
              <input
                type="type"
                value="ryueiowoie38i"
                readOnly
                className="password-display-input"
              />
            </div>
            <div className="password-description">
              {/* <i className="fas fa-check-circle"></i> */}
              <FaCheckCircle style={{ color: "black" }} />
              strong password
            </div>
          </div>
          <div className="password-display-icons">
            <Button className="copy-btn" iconDisplay="far fa-copy"></Button>
            <Button
              className="generate-btn"
              iconDisplay="fas fa-sync-alt"
            ></Button>
          </div>
        </div>
        <Container />
      </div>
    </>
  );
}
