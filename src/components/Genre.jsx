import React, { useContext } from 'react'
import { Badge } from 'react-bootstrap'

export const Genre = ({title,handleGenres,id,active}) => {


  return (
<h3>
<Badge onClick={()=>handleGenres(id)} id='badge' style={{
    cursor:'pointer',
  
}} bg={active?"primary":"dark"}>{title}</Badge>
</h3>
  )
}
