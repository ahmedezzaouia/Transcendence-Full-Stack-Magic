import "./chat.css";
import ChannalAndDirectMessage from "@/components/chat/channal&MessageList/channal&directMessage";
import ChatContent from "@/components/chat/chatContent/chatContent";
import AdminsMembers from "@/components/chat/adminMembers/adminMembers";

export default function Chat() {
  return (
    <div className="chat-container ">
      <div className="flex h-full">
        <ChannalAndDirectMessage />
        <ChatContent />
        <AdminsMembers />
      </div>
    </div>
  );
}

