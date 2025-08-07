export const wait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 800));

// Local storage
export const fetchData = <T>(key: string): T | null => {
  const data = localStorage.getItem(key);
  return data ? (JSON.parse(data) as T) : null;
};
