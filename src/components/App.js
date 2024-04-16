import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSec) => prevSec + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>You've been on this page for {seconds} seconds.</p>
    </div>
  );
};

export default App;
