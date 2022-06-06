import React from 'react'

function Inventory(props) {
    return (
        <div
          className="bg-black p-8 w-1/3 shadow-lg rounded-lg wood-bkg"
          style={{ height: "500px" }}
        >
          <h1 className="underline-offset-1 underline">Inventory</h1>
          <br></br>
          <ul className="text-sm text-left px-8 list-decimal">{props.items}</ul>
        </div>
      );
}

export default Inventory