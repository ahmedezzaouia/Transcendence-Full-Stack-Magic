import "./chat.css";
import ChannalAndDirectMessage from "./channal&MessageList/channal&directMessage";
import ChatContent from "./chatContent/chatContent";
import AdminsMembers from "./adminMembers/adminMembers";

export default function Chat() {
  return (
    <div className="chat-container">
      <div className="flex h-full">
        {/* <!-- Sidebar / channel list --> */}
        <ChannalAndDirectMessage />
        {/* <!-- Chat content --> */}
        <ChatContent />
        {/* <!-- Members sidebar --> */}
        <AdminsMembers />
      </div>
    </div>
  );
}

