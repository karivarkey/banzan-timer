import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(60); // Timer in seconds
  const [inputSeconds, setInputSeconds] = useState(60); // User input for seconds
  const [running, setRunning] = useState(false); // Timer state
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    let timerId;

    if (running && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setRunning(false); // Stop the timer when timeLeft reaches 0
      navigate("/confetti"); // Navigate to /confetti when timer completes
    }

    return () => clearInterval(timerId);
  }, [running, timeLeft, navigate]);

  const handleInputChange = (e) => {
    const value = Math.max(0, Number(e.target.value));
    setInputSeconds(value);
    if (!running) {
      setTimeLeft(value);
    }
  };

  const handleStart = () => {
    setRunning(true);
  };

  const handleReset = () => {
    setRunning(false);
    setTimeLeft(inputSeconds);
  };

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold text-gray-800">
          {hours !== "00" ? `${hours}:` : ""}
          {minutes}:{seconds}
        </h1>
        <input
          type="number"
          value={inputSeconds}
          onChange={handleInputChange}
          className="mt-5 px-4 py-2 border border-gray-300 rounded-lg"
          min="0"
        />
        <button
          onClick={handleStart}
          className="mt-5 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          Start Timer
        </button>
        <button
          onClick={handleReset}
          className="mt-5 px-6 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition duration-300"
        >
          Reset Timer
        </button>
      </div>
    </div>
  );
};

export default Timer;
