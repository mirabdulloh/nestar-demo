import withLayoutBasic from "@/libs/components/layout/LayoutBasix";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
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

export default withLayoutBasic(Community);
