import { useState } from "react";
import { useEffect } from "react";

export const Timer = () => {
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    setInterval(() => {
      setCounter((p) => {
        if (p === 0) {
          return 0;
        }
        return p - 1;
      });
    }, 1000);
  }, []);
  return <div>Count is:{counter}</div>;
};
