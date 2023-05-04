export const isImage = (ext: string) => {
  if (["jpg", "png", "jpeg", "gif"].includes(ext)) {
    return false
  } else return true
} 