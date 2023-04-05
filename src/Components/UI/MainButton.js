import React from "react";
import { motion } from "framer-motion";

import "./MainButton.scss";

const MainButton = (props) => {
  return (
    <motion.button
      className="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {props.btnName}
    </motion.button>
  );
};

export default MainButton;
