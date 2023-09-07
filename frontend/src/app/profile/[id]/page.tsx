"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface User {
  id: string;
  username: string;
  email: string;
  avatarUrl: string;
}

export default function Profile() {
  const params = useParams();
  const userId = params.id;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await fetch(`http://localhost:3001/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const user = await response.json();
        if (user) {
          setUser(user);
        }
      } catch (error) {
        console.log("could not fetch user");
      }
    })();
  }, []);

  return (
    <div>
      <h1>Profile page</h1>
      {user ? <h2>hello : {user?.username}</h2> : null}
    </div>
  );
}
