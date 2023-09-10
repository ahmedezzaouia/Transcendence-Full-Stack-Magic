export const fetchUser = async (url: string) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to fetch user: ${errorData.message || 'Response not OK'}`);
    }
    
    const user = await response.json();
    if (!user) {
      throw new Error("Failed to fetch user: User data is empty");
    }
    return user;
  } catch (error) {
    console.log("Error fetching user", error);
    throw new Error("Unexpected error while fetching user");
  }
};
