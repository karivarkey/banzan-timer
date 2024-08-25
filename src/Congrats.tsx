import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const Congrats = () => {
  const { width, height } = useWindowSize();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 5000); // Stop confetti after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      {isVisible && <Confetti width={width} height={height} />}
      <h1 className="text-white text-4xl font-bold">Congrats!</h1>
      <p className="text-gray-800 text-lg mt-2">You did an amazing job!</p>
    </div>
  );
};

export default Congrats;
