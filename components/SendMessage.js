import { useState } from "react";
import { useMoralis } from "react-moralis";

const SendMessage = ({ endOfMessageRef }) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;
    else {
      const Messages = Moralis.Object.extend("Messages");
      const messages = new Messages();

      messages
        .save({
          message: message,
          username: user.getUsername(),
          ethAddress: user.get("ethAddress"),
        })
        .then(
          (message) => {
            console.log(message);
          },
          (error) => {
            console.log(error.message);
          }
        );
      setMessage("");
    }

    endOfMessageRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form className="flex fixed bottom-10 bg-black opacity-80 w-11/12 px-6 py-4 max-w-2xl rounded-full border-blue-400 border-4">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
        type="text"
        placeholder={`Enter a message ${user.getUsername()}...`}
      />
      <button
        onClick={sendMessage}
        type="submit"
        className="font-bold text-pink-500"
      >
        Send
      </button>
    </form>
  );  
};

export default SendMessage;
