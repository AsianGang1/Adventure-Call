import React from 'react'

function Log(props) {
    return (
        <div
          className="bg-black p-8 w-1/3 shadow-lg rounded-lg paper-bkg"
          style={{ height: "500px" }}
        >
          <h1 className="underline-offset-1 underline">Log</h1>
          <br></br>
          <ul className="text-sm text-left list-decimal px-8">{props.actions}</ul>
        </div>
      );
}

export default Log