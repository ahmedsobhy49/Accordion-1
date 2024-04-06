import { BsPlusLg } from "react-icons/bs";
import { HiOutlineMinus } from "react-icons/hi";

function Accordion({ id, title, text, currOpen, onOpen }) {
  const isOpen = currOpen === id;
  function handleToggle(id) {
    onOpen(() => (isOpen ? null : id));
  }
  return (
    <div
      className={`accordion-container ${isOpen ? "opend" : ""}`}
      onClick={() => handleToggle(id)}
    >
      <span
        style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
        className="absolute"
      >
        {isOpen ? <HiOutlineMinus /> : <BsPlusLg />}
      </span>
      <h1 className={`header`}>
        <span className={`num`}>0{id}</span>
        <span>{title}</span>
      </h1>
      {isOpen ? <p>{text}</p> : ""}
    </div>
  );
}

export default Accordion;
