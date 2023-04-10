import './Slider.css'
export default function Slider(props) {
    const {step, min, max, value, onChange} = props;

    function handleChange(max, e) {
        onChange(e);

    }
  return (
    <div className='slider-container'>
    <div className='slider'>
    <input type="range" className='range-slider' step={step} min={min} max={max} value={value} onChange={handleChange(max) } />
    <span className='range-slider-value'>9</span>
    </div>
   
    </div>
  )
}