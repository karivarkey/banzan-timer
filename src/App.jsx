import { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds timer

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold text-gray-800">
          {minutes}:{seconds}
        </h1>
        <button
          onClick={() => setTimeLeft(60)}
          className="mt-5 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          Reset Timer
        </button>
      </div>
    </div>
  );
};

export default Timer;
