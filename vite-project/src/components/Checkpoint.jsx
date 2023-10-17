import "./Checkpoint.scss";
import { FaRegCheckCircle } from "react-icons/fa";

export const Checkpoint = () => {
  return (
    <>
      <a
        href="https://github.com/MLT93/checkpoint-3"
        rel="noreferrer"
        target="_blank"
        className="checkpoint-title">
        <FaRegCheckCircle className="approved" />
        <span>Checkpoint</span>
      </a>
      <hr />
      <div></div>
    </>
  );
};
