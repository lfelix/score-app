import { useState, useEffect, useRef } from "react";

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

const StopwatchComponent = ({ onTimeChange }: { onTimeChange?: (time: number) => void }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setTime(prevTime => {
          const newTime = prevTime + 1;
          if (onTimeChange) onTimeChange(newTime);
          return newTime;
        });
      }, 1000);
    } else if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, onTimeChange]);

  const toggleStartPause = () => {
    setIsRunning(prev => !prev);
  };

  const resetTime = () => {
    setTime(0);
    setIsRunning(false);
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (onTimeChange) onTimeChange(0);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="bg-gray-800 text-white text-3xl font-bold px-6 py-3 rounded-lg shadow-lg">
        {formatTime(time)}
      </div>

      <div className="flex space-x-4">
        <button
          className="bg-blue-500 text-white px-6 py-2 text-lg rounded-md shadow-lg hover:bg-blue-600 transition"
          onClick={toggleStartPause}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          className="bg-red-500 text-white px-6 py-2 text-lg rounded-md shadow-lg hover:bg-red-600 transition"
          onClick={resetTime}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopwatchComponent;
