import Button from "./Button";
import Slider from "./Slider";
import "./Container.css";
export default function Container() {
  function onChangeSlider(e) {
    console.log(e.target.value)
  }
  return (
    <>
      <div className="row password-settings">
        <h3>Use slider to select for options</h3>
        <div className="row">
          <div className="col--md-12">
            <div className="form-group">
            <Slider
             min={1}
             max={60}
             step={1}
             value={10}
             onChange={onChangeSlider}
             /></div>
          </div>
          <div className="col-md-12">
            <div className="row checkbox-contaimer">Checkbox comp</div>
          </div>
        </div>
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
