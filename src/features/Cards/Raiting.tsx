import React, { useState } from "react";

import { FaStar } from "react-icons/fa";
type GradesStarsType = {
  grade: number;
};
export const GradesStars: React.FC<GradesStarsType> = ({ grade }) => {
  // const [value, setValue] = useState(0);
  return (
    <div>
      {[...Array(5)].map((start, i) => {
        const gradeValue = i + 1;
        // const onClick = () => {
        // setValue(gradeValue);
        // };
        return (
          <label key={i}>
            <input style={{ display: "none" }} type="radio" name="grade" value={Math.round(grade)} />
            {/*<img src={star} style={{ background: gradeValue <= value ? "red" : "" }} alt="grade" />*/}
            <FaStar className="star" color={gradeValue <= grade ? "#FFC700" : "#D9D9D9"} size={15} />
          </label>
        );
      })}
    </div>
  );
};
