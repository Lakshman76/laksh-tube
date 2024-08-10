import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";
import { LuSendHorizonal } from "react-icons/lu";

const LiveChat = () => {
  const dispatch = useDispatch();
  const ChatMessages = useSelector((state) => state.chat.messages);

  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      // Api polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText(15),
        })
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="ml-6 p-2 h-[550px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {/* Don't use index as key */}
        {ChatMessages.map((chatMessage, idx) => (
          <ChatMessage
            name={chatMessage.name}
            message={chatMessage.message}
            key={idx}
          />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "YOU",
              message: inputMessage,
            })
          );
          setInputMessage("");
        }}
        className="ml-6 mt-2 p-2 border border-black rounded-md flex gap-20"
      >
        <input
          type="text"
          placeholder="chat..."
          className="outline-none w-96"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button type="submit" className="ml-2">
          <LuSendHorizonal className="w-5 h-5" />
        </button>
      </form>
    </>
  );
};

export default LiveChat;
