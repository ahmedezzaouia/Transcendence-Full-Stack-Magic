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
