import { useState } from "react";

type PropsType = {
  on: boolean;
};

export const OnOff = (props: PropsType) => {
  let [on, setOn] = useState(true);

  const onStyle = {
    width: "30px",
    hight: "30px",
    border: "1px solid black",
    marginLeft: "30px",
    backgroundColor: on ? "green" : "white",
  };
  const offStyle = {
    width: "30px",
    hight: "30px",
    border: "1px solid black",
    marginLeft: "15px",
    backgroundColor: on ? "white" : "red",
  };
  const indicatorStyle = {
    width: "30px",
    height: "30px",
    borderRadius: "15px",
    border: "1px solid black",
    marginLeft: "15px",
    marginTop: "15px",
    backgroundColor: on ? "green" : "red",
  };
  const Header = {
    display: "flex",
    marginTop: "15px",
  };

  return (
    <div>
      <div style={Header}>
        <div
          style={onStyle}
          onClick={() => {
            setOn(true);
          }}
        >
          On
        </div>
        <div
          style={offStyle}
          onClick={() => {
            setOn(false);
          }}
        >
          Off
        </div>
        <div style={indicatorStyle}></div>
      </div>
    </div>
  );
};
