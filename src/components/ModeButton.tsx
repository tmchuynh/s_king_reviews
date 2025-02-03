"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";
import { useEffect, useState } from "react";
import { Button, ButtonProps } from "./ui/button";
import { cn } from "@/lib/utils";

const ModeButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className }, ref) => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    useEffect(() => {
      const handleKeydown = (e: KeyboardEvent) => {
        if (e.ctrlKey && e.altKey && e.key === "l") {
          setTheme(theme === "dark" ? "light" : "dark");
        }
      };

      window.addEventListener("keydown", handleKeydown);

      return () => {
        window.removeEventListener("keydown", handleKeydown);
      };
    });

    if (!mounted) {
      return null;
    }

    const handleThemeToggle = () => {
      setTheme(theme === "dark" ? "light" : "dark");
      if (window.location.pathname === "/info/programs") {
        window.location.reload();
      }
    };

    return (
      <Button
        size="icon"
        variant="ghost"
        type="button"
        onClick={handleThemeToggle}
        aria-label="Toggle theme"
        className={cn(className, "hover:bg-transparent hover:text-secondary ")}
        ref={ref}
      >
        {theme === "dark" ? (
          <Sun
            className="transition-all rotate-0 scale-100 m-auto h-full"
            role="img"
            aria-label="toggle light mode"
          />
        ) : (
          <Moon
            className="transition-all rotate-12 scale-100 m-auto h-full"
            role="img"
            aria-label="toggle dark mode"
          />
        )}
      </Button>
    );
  }
);

export { ModeButton };
