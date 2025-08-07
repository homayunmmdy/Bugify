import { fetchData } from "../helper";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return {userName}
}