import React, { useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";

function BackgroundController() {
  const [rounded, setRounded] = useState(0);
  const [padding, setPadding] = useState(0);
  const [color, setColor] = useState("#000");
  const storageValue = JSON.parse(localStorage.getItem("value"));

  useEffect(() => {
    const updateValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    };
    localStorage.setItem("value", JSON.stringify(updateValue));
  });

  return (
    <div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Rounded<span>{rounded} px</span>
        </label>
        <Slider
          step={1}
          max={512}
          defaultValue={[0]}
          onValueChange={(event) => setRounded(event[0])}
        />
      </div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Padding<span>{padding} px</span>
        </label>
        <Slider
          step={1}
          max={512}
          defaultValue={[0]}
          onValueChange={(event) => setPadding(event[0])}
        />
      </div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Icon Color
        </label>
        <ColorPickerController
          hideController={true}
          selectedColor={(color) => setColor(color)}
        />
      </div>
    </div>
  );
}

export default BackgroundController;
