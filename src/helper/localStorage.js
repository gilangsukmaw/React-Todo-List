export const getFromLocalStorate = (key) => {
  const result = localStorage.getItem(key);
  return result;
};
