import Accordion from "./Accordion";
import { useState } from "react";

const Accordions = ({ data }) => {
  const [currOpen, setCurrOpen] = useState(null);
  return (
    <div className="accordions-container">
      {data.map((accor) => {
        return (
          <Accordion
            key={accor.id}
            id={accor.id}
            title={accor.title}
            text={accor.text}
            onOpen={setCurrOpen}
            currOpen={currOpen}
          />
        );
      })}
    </div>
  );
};

export default Accordions;
