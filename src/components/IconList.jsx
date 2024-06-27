import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { iconList } from "@/constants/icons";
import { icons } from "lucide-react";

function IconList({ selectedIcon }) {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [openDialog, setDialog] = useState(false);
  const [icon, setIcon] = useState(
    storageValue?.icon !== undefined ? storageValue.icon : "Smile"
  );

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
    <div>
      <label>Icon</label>
      <div
        onClick={() => setDialog(true)}
        className="p-3 cursor-pointer bg-primary-text rounded-md w-[50px] h-[50px] flex items-center my-2 justify-center"
      >
        <Icon name={icon} color={"#C94F10"} size={20} />
      </div>
      <Dialog open={openDialog} onOpenChange={(open) => setDialog(open)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pick Your Favourite Icon</DialogTitle>
            <DialogDescription>
              <div className="grid grid-cols-5 gap-4 md:grid-cols-4 lg:grid-cols-5 overflow-auto h-[400px] p-6">
                {iconList.map((icon, index) => (
                  <div
                    key={index}
                    className="border p-3 flex rounded-sm items-center justify-center"
                    onClick={() => {
                      selectedIcon(icon);
                      setDialog(false);
                      setIcon(icon);
                    }}
                  >
                    <Icon name={icon} color={"#C94F10"} size={20} />
                  </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default IconList;
