import React, { useState } from "react";

function Chat() {
  const [messages, setMessages] = useState([
    {
      text: "This is a sample big message with a longer text paragraph",
      time: "10:30 AM",
      isSent: false,
    },
    {
      text: "This is a sample big message with a longer text paragraph",
      time: "10:30 AM",
      isSent: true,
    },
    {
      text: "This is a sample big message with a longer text paragraph",
      time: "10:30 AM",
      isSent: true,
    },
    {
      text: "This is a sample big message with a longer text paragraph",
      time: "10:30 AM",
      isSent: false,
    },
    {
      text: "This is a sample big message with a longer text paragraph",
      time: "10:30 AM",
      isSent: true,
    }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [orangeCount, setOrangeCount] = useState(0);
  const [cucumberCount, setCucumberCount] = useState(0);
  const [tangerineCount, setTangerineCount] = useState(0);

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([
        ...messages,
        { text: newMessage, time: "10:30 AM", isSent: true },
      ]);
      setNewMessage("");
    }
  };

  const handleOrangeChange = (amount) => {
    setOrangeCount(orangeCount + amount);
  };

  const handleCucumberChange = (amount) => {
    setCucumberCount(cucumberCount + amount);
  };

  const handleTangerineChange = (amount) => {
    setTangerineCount(tangerineCount + amount);
  };

  return (
    <div className="mx-auto flex flex-col h-screen w-full max-w-full bg-gray-100 p-4 md:w-[50%] md:pb-0 pb-24">
      <div className="bg-white shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <h2 className="text-lg font-medium">John Doe</h2>
            <p className="text-gray-500 text-sm">Online</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-3">
            <i className="fas fa-ellipsis-v"></i>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start ${
              message.isSent ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`my-2 px-4 py-3 rounded-lg max-w-xs ${
                message.isSent
                  ? "bg-purple-500 text-white ml-auto"
                  : "bg-gray-200 text-gray-800 mr-auto"
              }`}
            >
              <p>{message.text}</p>
              <span className="text-xs text-gray-300">{message.time}</span>
            </div>
          </div>
        ))}

        {/* Shopping Cart as a sent message */}
        <div className="flex items-start justify-end">
          <div className="bg-purple-500 text-white px-4 py-3 rounded-lg max-w-xs ml-auto">
            <div className="container mx-auto p-4 rounded-md shadow-md bg-gray-800">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <img
                    src="https://images.pexels.com/photos/691166/pexels-photo-691166.jpeg"
                    alt="Orange"
                    className="w-24 h-24 rounded-md"
                  />
                  <h3 className="text-sm font-bold mt-2">Orange</h3> 
                  <p className="text-sm">$8.00</p> 
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleOrangeChange(-1)}
                      disabled={orangeCount === 0}
                      className="px-3 py-1 rounded-md bg-gray-600 text-xs" 
                    >
                      -
                    </button>
                    <span className="px-2 text-sm">{orangeCount}</span> 
                    <button
                      onClick={() => handleOrangeChange(1)}
                      className="px-3 py-1 rounded-md bg-gray-600 text-xs" 
                    >
                      +
                    </button>
                  </div>
                  <p className="text-sm font-bold mt-2"> 
                    Total: ${orangeCount * 8.0}
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src="https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Cucumber"
                    className="w-24 h-24 rounded-md"
                  />
                  <h3 className="text-sm font-bold mt-2">Cucumber</h3> 
                  <p className="text-sm">$11.76</p> 
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleCucumberChange(-1)}
                      disabled={cucumberCount === 0}
                      className="px-3 py-1 rounded-md bg-gray-600 text-xs" 
                    >
                      -
                    </button>
                    <span className="px-2 text-sm">{cucumberCount}</span> 
                    <button
                      onClick={() => handleCucumberChange(1)}
                      className="px-3 py-1 rounded-md bg-gray-600 text-xs" 
                    >
                      +
                    </button>
                  </div>
                  <p className="text-sm font-bold mt-2"> 
                    Total: ${cucumberCount * 11.76}
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src="https://images.pexels.com/photos/2611810/pexels-photo-2611810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Tangerine"
                    className="w-24 h-24 rounded-md"
                  />
                  <h3 className="text-sm font-bold mt-2">Tangerine</h3> 
                  <p className="text-sm">$6.40</p> 
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleTangerineChange(-1)}
                      disabled={tangerineCount === 0}
                      className="px-3 py-1 rounded-md bg-gray-600 text-xs" 
                    >
                      -
                    </button>
                    <span className="px-2 text-sm">{tangerineCount}</span> 
                    <button
                      onClick={() => handleTangerineChange(1)}
                      className="px-3 py-1 rounded-md bg-gray-600 text-xs" 
                    >
                      +
                    </button>
                  </div>
                  <p className="text-sm font-bold mt-2"> 
                    Total: ${tangerineCount * 6.4}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md p-4 flex items-center">
        <input
          type="text"
          className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Message..."
          value={newMessage}
          onChange={handleInputChange}
        />
        <button
          className="ml-3 px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleSendMessage}
        >
          <i className="fas fa-paper-plane">→</i>
        </button>
      </div>
    </div>
  );
}

export default Chat;
