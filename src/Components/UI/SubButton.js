import React from "react";
import { motion } from "framer-motion";

import "./SubButton.scss";

const SubButton = (props) => {
  return (
    <motion.button className="subButton" whileHover={{ scale: 1.1 }}>
      {props.name}
    </motion.button>
  );
};

export default SubButton;
