import toast from "react-hot-toast";
import { fetchData, wait } from "../helper";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

export async function dashboardAction({ request }: { request: Request }) {
  await wait();

  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // new user submission
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome, ${values.userName}`);
    } catch (error: unknown) {
      console.error(error);
      throw new Error("There was a problem creating your account.");
    }
  }
}
