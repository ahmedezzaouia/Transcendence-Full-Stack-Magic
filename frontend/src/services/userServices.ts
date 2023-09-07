export const fetchUser = async (url: string) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const user = await response.json();
    return user;
  } catch (error) {
    console.log("could not fetch user");
    throw new Error("could not fetch user");
  }
};

export const fetchToken = async (
    userId: string
  ): Promise<string | null> => {
    let accessToken: string = "";
    try {
      const response = await fetch(
        `http://localhost:3001/auth/token?id=${userId}`
      );
      if (response.ok) {
        const data = await response.json();
        accessToken = data.accessToken;
      }
      return accessToken;
    } catch (error) {
      console.error("There was an error fetching the token", error);
      return null;
    }
  };
  