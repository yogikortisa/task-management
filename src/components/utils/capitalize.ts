// create function capitalize
// input string
// return string

export const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}