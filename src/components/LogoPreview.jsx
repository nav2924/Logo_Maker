import React, { useEffect, useState, useContext } from "react";
import { UpdateStorageContext } from "../context/UpdateStorageContext";
import { icons } from "lucide-react";
import html2canvas from "html2canvas";

function LogoPreview({ downloadIcon }) {
  const [storageValue, setStorageValue] = useState({});
  const { updateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value")) || {};
    setStorageValue(storageData);
  }, [updateStorage]);

  useEffect(() => {
    if (downloadIcon) {
      downloadPngLogo();
    }
  }, [downloadIcon]);

  const downloadPngLogo = () => {
    const downloadLogoDiv = document.getElementById("downloadLogoDiv");

    html2canvas(downloadLogoDiv, {
      backgroundColor: null,
    }).then((canvas) => {
      const pngImage = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngImage;
      downloadLink.download = "logo.png";
      downloadLink.click();
    });
  };

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
        id="downloadLogoDiv"
        style={{
          padding: `${storageValue.bgPadding || 0}px`,
          borderRadius: `${storageValue.bgRounded || 0}px`,
          backgroundColor: storageValue.bgColor || "transparent",
        }}
      >
        <div className="h-full w-full flex items-center justify-center">
          <Icon
            name={storageValue.icon || ""}
            color={storageValue.iconsColor || "#000"}
            size={storageValue.iconSize || 24}
            rotate={storageValue.iconsRotate || 0}
          />
        </div>
      </div>
    </div>
  );
}

export default LogoPreview;
