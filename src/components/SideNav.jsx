import { Image, PencilRuler, Shield } from "lucide-react";
import React, { useState } from "react";

function SideNav({ selectedIndex }) {
  const menu = [
    {
      id: 1,
      name: "Icon",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: Image,
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <div className="border shadow-sm h-screen">
        {menu.map((menuItem, index) => (
          <h2
            key={index}
            onClick={() => {
              setActiveIndex(index);
              selectedIndex(index);
            }}
            className={`p-2 text-lg my-2 px-7 text-primary-text 
          hover:bg-primary
          flex items-center gap-2
          hover:text-primary-foreground
          ${activeIndex === index && `bg-primary text-primary-foreground`}`}
          >
            <menuItem.icon />
            {menuItem.name}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
