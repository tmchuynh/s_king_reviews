import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn( ...inputs: ClassValue[] ) {
  return twMerge( clsx( inputs ) );
}

export function bookURLFormat( url: string ): string {
  return "/books/" + url.replace( / /g, "-" ).toLowerCase();
}