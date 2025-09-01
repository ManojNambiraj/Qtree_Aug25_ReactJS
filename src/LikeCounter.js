import React, { useState } from "react";

function LikeCounter() {

    const [like, setLike] = useState(0)
    const [color, setColor] = useState("white")

    const handleLike = () => {
        setLike(like + 1);
        setColor("green")
    }

    const handleDislike = () => {
        if(like !== 0){
            setLike(like - 1);
             setColor("red");
        }
    }

  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: color }}>
      <h1>Count: {like}</h1>

      <button onClick={handleLike}>Like 👍</button>

      <button onClick={handleDislike}>Dislike 👎</button>
    </div>
  );
}

export default LikeCounter;