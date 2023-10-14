import socket from "@/services/socket";
import { useEffect, useState } from "react";
import { useIsDirectMessage } from "@/store/userStore";
import useRecieverStore from "@/store/recieverStore";
import useMessageStore from "@/store/messagesStore";

export default function ListUsersFriends({ username }: { username: any }) {
  // request to get all users
  const [users, setUsers] = useState([]);
  const { isDirectMessage, setIsDirectMessage } = useIsDirectMessage();
  const { reciever, setReciever } = useRecieverStore();
  const { messages, setMessages } = useMessageStore();
  const [friendsId, setFriendsId] = useState([]);
  const [UserName, setUserName] = useState("");
  const [showBlock, setShowBlock] = useState(false);



  // fetch username from session storage
  const fetchUserName = async () => {
    const storedUserData = sessionStorage.getItem("user-store");
    if (storedUserData) {
      try {
        // Parse the stored data as JSON
        const userData = await JSON.parse(storedUserData);

        // Access the username property
        const savedUsername = userData.state.user.username;

        setUserName(savedUsername);
        console.log("savedUsername", savedUsername);
      } catch (error) {
        console.error("Error parsing stored data:", error);
      }
    } else {
      console.warn("User data not found in session storage.");
    }
  };

  // Define a function to copy users to friendsArray

  // Define a function to compare friendsId with all users id
  const comparingFriends = () => {
    socket.emit("getAllUsersFriends", { sender: UserName });
    socket.on("getAllUsersFriends", (data) => {
      if (data.length <= 0) {
        console.log("no friends1");
        setUsers([]);
      }
      else {
        let friendsArray = [...data.map((user: any) => user.receiverId)];
        setFriendsId(friendsArray as any);
      }
    }
    );
  };

  // Define a function to get real friends by id
  const getRealFriendsById = () => {
    if (friendsId.length > 0) {
      friendsId.map((friendId: any) => {
        socket.emit("getUserById", { id: friendId });
        socket.on("getUserById", (data) => {
          let newArray = [];
          newArray = [...users, data];
          if (newArray.length > 0) {
            newArray = newArray.filter((user: any) => user.username !== username);  // remove yourself from the list
            // avoid duplicate users
            newArray = newArray.filter((user: any, index: any, self: any) =>
              index === self.findIndex((t: any) => (
                t.username === user.username
              ))
            );
          }
          console.log("newArray", newArray);
          setUsers(newArray as any);
        });
      });
    }
    else {
      console.log("no friends");
      setUsers([]);
    }
  }



  const getAllUsers = () => {
    socket.emit("getAllUsers");
    socket.on("getAllUsers", (data) => {
      // Filter out duplicate users based on username
      const uniqueUsers = data.filter((user: any) => user.username !== username);
      let newArray = [];
      newArray = uniqueUsers.filter((user: any) => user.username !== username);
      setUsers(newArray);
    });

    return () => {
      // Clean up any event listeners or subscriptions
      socket.off("getAllUsers");
    };
  };


  // Use useEffect with users as a dependency to trigger the copy operation
  useEffect(() => {
    getAllUsers();
    fetchUserName();
    comparingFriends();
    getRealFriendsById();
  }, [UserName]);



  // save the reciever name
  const saveReceiverName = (username: string) => {
    setReciever(username);
    setIsDirectMessage(true);
    socket.emit("listDirectMessages", { sender: username, reciever: reciever });
    socket.on("listDirectMessages", (data) => {
      setMessages(data);
    });
  };

  let usersArray = [...users];
  if (usersArray.length > 0) {
    usersArray = usersArray.filter((user: any) => user.username !== username);  // remove yourself from the list
  }

  const blockUser = (username: string) => {
    // UserName is the username of the user who blocked which is saved in session storage // todo ana
    console.log("username has blocked", username, UserName);
    socket.emit("blockUser", {willbocked: username, whoblocked: UserName});
  };

  const muteUser = (username: string) => {
    console.log("username has mute", username);
  };

  return (
    <>
      {usersArray.map((user: any, index) => (
        <div
          className="flex items-center py-2  hover:bg-slate-700 rounded-2xl"
          key={index}
        >
          <span className="relative flex h-1 w-3 ml-8 mr-20  -mt-16">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
          </span>
          <div
            className="flex flex-col items-center  w-16 h-16 mr-2"
            onClick={() => saveReceiverName(user.username)}
          >
            <div
              className="flex items-center justify-between space-x-2  cursor-pointer rounded-xl"
              key={index}
            >
              <img
                className="w-14 h-14 rounded-full object-cover"
                src={user.avatarUrl}
                alt="avatar"
              />
              <div className="flex flex-col pr-20">
                <span className="font-semibold text-md"
                >{user.username}</span>
                <span className="text-sm text-gray-400">online</span>
              </div>
              {
                showBlock && (
                  // add menu card to allow user to block or mute
                  <>
                    <div className="absolute top-96 mt-2 w-56 rounded-md shadow-lg py-2 bg-white ring-1 ring-black ring-opacity-5">
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        view profile
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => blockUser(user.username)}
                      >
                        Block
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setShowBlock(!showBlock)}
                      >
                        cancel
                      </a>
                    </div>
                  </>
                )
              }
              <span className="cursor-pointer pl-20"
                onClick={() => setShowBlock(!showBlock)}
              >
                <svg
                  width="31"
                  height="37"
                  viewBox="0 0 21 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8457 11.3281C16.8812 11.3281 17.7207 10.3138 17.7207 9.06251C17.7207 7.81124 16.8812 6.79688 15.8457 6.79688C14.8102 6.79688 13.9707 7.81124 13.9707 9.06251C13.9707 10.3138 14.8102 11.3281 15.8457 11.3281Z"
                    fill="#FFFEFE"
                  />
                  <path
                    d="M15.8457 20.3906C16.8812 20.3906 17.7207 19.3763 17.7207 18.125C17.7207 16.8737 16.8812 15.8594 15.8457 15.8594C14.8102 15.8594 13.9707 16.8737 13.9707 18.125C13.9707 19.3763 14.8102 20.3906 15.8457 20.3906Z"
                    fill="#FFFEFE"
                  />
                  <path
                    d="M15.8457 29.4531C16.8812 29.4531 17.7207 28.4388 17.7207 27.1875C17.7207 25.9362 16.8812 24.9219 15.8457 24.9219C14.8102 24.9219 13.9707 25.9362 13.9707 27.1875C13.9707 28.4388 14.8102 29.4531 15.8457 29.4531Z"
                    fill="#FFFEFE"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
