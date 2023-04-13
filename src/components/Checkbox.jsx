import './Checkbox.css'
export default function (props) {
    const {label, value, checked, name, onChange, disabled} = props;
  return (
   
    <>
    <div className="col-md-3">
        <label className="container">
        <h1>{label}</h1>
        <input type="checkbox" name={name} checked={checked} value={value} onChange={onChange} disabled={disabled} className="checkbox-input"  />
        <span className="checkmark" style={{opacity: disabled ? '0.7' : '1'}}></span>
        </label>
    </div>
         
    </>
  )
}