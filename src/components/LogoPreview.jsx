import React, { useEffect, useState, useContext } from "react";
import { UpdateStorageContext } from "../context/UpdateStorageContext";
import { icons } from "lucide-react";

function LogoPreview({ downloadIcon }) {
  const [storageValue, setStorageValue] = useState({});
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    // console.log(storageData);
    setStorageValue(storageData);
  }, [updateStorage]);

  useEffect(() => {
    if (downloadIcon) {
      console.log("Download Icon clicked");
    }
  }, [downloadIcon]);
  
  const Icon = ({ name, color, size, rotate }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return null;
    }
    return (
      <LucidIcon
        color={color}
        size={size}
        style={{ transform: `rotate(${rotate}deg)` }}
      />
    );
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="h-[500px] w-[500px] outline-dotted bg-placeholder"
        style={{ padding: `${storageValue?.bgPadding}px` }}
      >
        <div
          className="h-full w-full flex items-center justify-center"
          style={{
            borderRadius: `${storageValue?.bgRounded}px`,
            background: storageValue?.bgColor,
          }}
        >
          <Icon
            name={storageValue?.icon}
            color={storageValue?.iconsColor}
            size={storageValue?.iconSize}
            rotate={storageValue?.iconsRotate}
          />
        </div>
      </div>
    </div>
  );
}

export default LogoPreview;
