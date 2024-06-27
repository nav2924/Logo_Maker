import { Smile } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import IconList from "./IconList";

function IconController() {
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);
  const storageValue = JSON.parse(localStorage.getItem("value"));

  const [size, setSize] = useState(
    storageValue?.iconSize !== undefined ? storageValue.iconSize : 200
  );
  const [rotate, setRotate] = useState(
    storageValue?.iconsRotate !== undefined ? storageValue.iconsRotate : 0
  );
  const [color, setColor] = useState(
    storageValue?.iconsColor !== undefined ? storageValue.iconsColor : "#fff"
  );
  const [icon, setIcon] = useState(
    storageValue?.icon !== undefined ? storageValue.icon : "Smile"
  );

  useEffect(() => {
    const updateValue = {
      ...storageValue,
      iconSize: size,
      iconsColor: color,
      iconsRotate: rotate,
      icon: icon,
    };
    setUpdateStorage(updateValue);
    localStorage.setItem("value", JSON.stringify(updateValue));
  }, [size, color, rotate, icon]);

  return (
    <div>
      <IconList selectedIcon={(icon) => setIcon(icon)} />
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Size<span>{size} px</span>
        </label>
        <Slider
          step={1}
          max={512}
          defaultValue={[size]}
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
          defaultValue={[rotate]}
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
