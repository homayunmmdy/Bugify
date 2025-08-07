export const wait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 800));

// Local storage
export const fetchData = <T>(key: string): T | null => {
  const data = localStorage.getItem(key);
  return data ? (JSON.parse(data) as T) : null;
};

// load the username 
export function loadUserName() {
  const userName = fetchData("userName");
  return { userName }
}

// delete item from local storage
export const deleteItem = ({ key, id } : {key : string , id?: unknown}) => {
  const existingData = fetchData(key);
  if (id) {
    const newData = existingData.filter((item) => item.id !== id);
    return localStorage.setItem(key, JSON.stringify(newData));
  }
  return localStorage.removeItem(key);
};