const MessageCard = ({ role, message }) => {
  return (
    <div
      className={`rounded-lg px-4 py-2 mb-2 max-w-md w-fit whitespace-pre-line ${
        role === "user"
          ? "bg-teal-600 text-white self-end"
          : "bg-gray-200 text-black"
      }`}
    >
      {message}
    </div>
  );
};

export default MessageCard;
