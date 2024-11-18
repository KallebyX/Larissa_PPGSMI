// src/lib/utils.ts

import { clsx, ClassValue } from "clsx";

// Função cn que usa clsx para combinar classes condicionalmente
export function cn(...classes: ClassValue[]) {
  return clsx(...classes);
}
