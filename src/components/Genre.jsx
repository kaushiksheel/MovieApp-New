import { motion } from 'framer-motion'
import React  from 'react'
import { Badge } from 'react-bootstrap'
import { item } from '../helpers/framerMotion'


export const Genre = ({title,handleGenres,id,active}) => {


  return (
<motion.h3
 whileTap={{
  scale: 0.8,
}}

onClick={()=>handleGenres(id)}  variants={item}>
<Badge id='badge' style={{
    cursor:'pointer',
  
}} bg={active?"primary":"dark"}>{title}</Badge>
</motion.h3>
  )
}
