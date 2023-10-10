import "./Checkpoint.scss";
import { FaRegCheckCircle } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

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
    </>
  );
};
