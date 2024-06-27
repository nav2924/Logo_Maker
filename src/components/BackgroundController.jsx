import React, { useEffect, useState, useContext } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";

function BackgroundController() {
  const storageValue = JSON.parse(localStorage.getItem("value"));

  const [rounded, setRounded] = useState(
    storageValue ? storageValue?.bgRounded : 0
  );
  const [padding, setPadding] = useState(
    storageValue ? storageValue?.bgPadding : 0
  );
  const [color, setColor] = useState(
    storageValue ? storageValue?.bgColor : "#fff"
  );
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const updateValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    };
    setUpdateStorage(updateValue);
    localStorage.setItem("value", JSON.stringify(updateValue));
  }, [rounded, padding, color, setUpdateStorage, storageValue]);

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
          defaultValue={[padding]}
          onValueChange={(event) => setPadding(event[0])}
        />
      </div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Background Color
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
