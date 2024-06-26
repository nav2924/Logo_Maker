import React, { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

function ColorPickerController({ hideController = false, selectedColor }) {
  const [color, setColor] = useState("rgba(234,88,12,7)");

  return (
    <div>
      <ColorPicker
        value={color}
        hideController={hideController}
        hideEyeDrop
        hideAdvancedSliders
        hideColorGuide
        hideInputType
        onChange={(e) => {
          setColor(e);
          if (selectedColor) {
            selectedColor(e);
          }
        }}
      />
    </div>
  );
}

export default ColorPickerController;
