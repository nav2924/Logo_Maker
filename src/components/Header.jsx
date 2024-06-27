import React from "react";
import { Button } from "./ui/button";
import { ThemeProvider } from "./ui/ThemeProvider";
import { ModeToggle } from "./ui/mode-toggle";
import { Download } from "lucide-react";

function Header({ DownloadIcon }) {
  return (
    <div className="p-4 shadow-sm border flex justify-between items-center">
      <img src="/vite.svg" alt="Vite Logo" />
      <div className="flex space-x-4 items-center">
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Button
            className="flex gap-2 items-center"
            onClick={() => DownloadIcon(Date.now())}
          >
            <Download className="h-4 w-4" />
            Download
          </Button>
          <ModeToggle />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Header;
