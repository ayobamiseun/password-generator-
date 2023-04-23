import './Tooltip.css'
export default function Tooltip(props) {
    const {message, position, displayTooltip} = props;
  return (
    <> 
    {
        displayTooltip ?   <div className={`tooltip-bubble tooltip-${position}`}>
           <div className="tooltip-message">
   {message}
           </div>

        </div> : ''
    }

    </>
  )
}