import React from "react";

function Speech(props) {
  return (
    <div
      className="bg-black p-8 w-1/3 shadow-lg rounded-lg falcon-bkg"
      style={{ height: "500px" }}
    >
      <h1 className="underline-offset-1 underline">Falcon-Hoof</h1>
      <br></br>
      <p className="text-sm text-left">{props.text}</p>
    </div>
  );
}

export default Speech;
