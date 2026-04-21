export const getLabel = (theme: string) => {
  if (theme === "light") return "🌞 Light";
  if (theme === "dark") return "🌙 Dark";
  return "🌓 Auto";
};
