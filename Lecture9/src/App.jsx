import { colour } from "./Utils/constant";

import ColourButton from "./Component/ColourButton";
import { useState } from "react";
function App() {
  const [color, setNewColor] = useState("olive");
  const clickHandler = (value) => {
    setNewColor(value);
  };

  return (
    <div  className=" w-full h-screen  " style={{ backgroundColor: color }} >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="fixed flex flex-wrap p-4 gap-8 justify-center rounded-2xl bg-white shadow-lg bottom-12">
          {colour.map((data, index) => (
            <ColourButton
              color_data={data}
              key={index}
              clickHandler={clickHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
