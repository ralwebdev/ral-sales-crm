import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { db } from "./db";

export function clearAllStorageExceptLogin() {
  db.clear();
}
