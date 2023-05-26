import React, { useState } from "react";

import { FaStar } from "react-icons/fa";
export const GradesStars = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      {[...Array(5)].map((start, i) => {
        const gradeValue = i + 1;
        const onClick = () => {
          setValue(gradeValue);
          console.log(gradeValue);
        };
        return (
          <label key={i}>
            <input style={{ display: "none" }} type="radio" name="grade" value={gradeValue} onClick={onClick} />
            {/*<img src={star} style={{ background: gradeValue <= value ? "red" : "" }} alt="grade" />*/}
            <FaStar className="star" color={gradeValue <= value ? "#FFC700" : "#D9D9D9"} size={15} />
          </label>
        );
      })}
    </div>
  );
};
