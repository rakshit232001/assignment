import { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { animated, useSpring } from "react-spring";

const Counter = () => {
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem("counter")) || 0;
  });
  //const [count, setCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("counter", count);
  }, [count]);

  const bgAnimation = useSpring({
    backgroundColor: `rgba(255, 0, 0, ${Math.min(count / 50, 1)})`,
  });

  return (
    <animated.div style={{ ...bgAnimation, height: "50vh", padding: "20vh" }}>
      <Typography variant="h4">Counter: {count}</Typography>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <Button onClick={() => setCount(0)}>Reset</Button>
      <Button onClick={() => setCount(count - 1)}>Decrement</Button>
    </animated.div>
  );
};

export default Counter;
