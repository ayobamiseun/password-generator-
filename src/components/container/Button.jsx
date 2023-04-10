import { FaCheckCircle, FaCopy, FaSyncAlt } from "react-icons/fa";
export default function Button(props) {

    const {className, label, iconDisplay, handleClick} = props;
    
  return (
    <button
    className={className}
    label={label}
    onClick={handleClick}
    >
      <i className={iconDisplay}></i>
    </button>
  )
}


