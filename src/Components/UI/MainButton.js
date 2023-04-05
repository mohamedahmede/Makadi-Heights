import React from 'react';
import { motion } from "framer-motion";

import './MainButton.scss';

const MainButton = (props) => {
  return (
    <motion.button className='button' whileHover={{ scale: 1.1 }}>{props.btnName}</motion.button>
  )
}

export default MainButton