import { Extension } from "./getColorByExtension"

export const getExtensionFileName = (filename: string) => {
  return filename.split("").pop() as Extension
}