import { Smile } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import ColorPickerController from "./ColorPickerController";

function IconController() {
  const [size, setSize] = useState(280);
  const [rotate, setRotate] = useState(0);
  const [color, setColor] = useState("#fff");
  const storageValue = JSON.parse(localStorage.getItem("value"));

  useEffect(() => {
    const updateValue = {
      ...storageValue,
      iconSize: size,
      iconsColor: color,
      iconsRotate: rotate,
      icon: "Smile",
    };
    localStorage.setItem("value", JSON.stringify(updateValue));
  }, [size, color, rotate]);

  return (
    <div>
      <label>Icon</label>
      <div className="p-3 cursor-pointer bg-primary-text rounded-md w-[50px] h-[50px] flex items-center my-2 justify-center">
        <Smile />
      </div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Size<span>{size} px</span>
        </label>
        <Slider
          step={1}
          max={512}
          defaultValue={[280]}
          onValueChange={(event) => setSize(event[0])}
        />
      </div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Rotate<span>{rotate} °</span>
        </label>
        <Slider
          step={1}
          max={360}
          defaultValue={[0]}
          onValueChange={(event) => setRotate(event[0])}
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

export default IconController;
