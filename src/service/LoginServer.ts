import config from "./api.json";
import myFetch from "utils/ajax";

export default async function login(
  account: string,
  passwd: string
): Promise<LoginResult> {
  const loginProps: FetchProps = {
    method: "POST",
    url: config.login,
    body: {
      account,
      passwd,
    },
  };
  try {
    const response = await myFetch(loginProps);
    if (response.status >= 200 && response.status < 300) {
      // Check if the user is an administrator.
      const data: { userType: "NORMAL" | "SUPER" | "FORBIDDEN" } =
        await response.json();
      switch (data.userType) {
        case "NORMAL":
          return "login success";
        case "SUPER":
          return "super user";
        case "FORBIDDEN":
          return "forbidden user";
      }
    }
    return "login error";
  } catch (err) {
    console.error(err);
  }
  return "response error";
}
