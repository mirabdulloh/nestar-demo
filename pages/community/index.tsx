import { useState } from "react";

const Community = () => {
  console.log("Community Component Pages router");
  const [title, setTitle] = useState<string>("Community Page");

  return (
    <div>
      {title}
      <button onClick={() => alert("hello world!")} style={{ margin: "10px" }}>
        PressMe
      </button>
    </div>
  );
};

export default Community;
