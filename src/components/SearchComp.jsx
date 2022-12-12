
import React, { useContext } from 'react'
import { Form,Button } from 'react-bootstrap'
import { MovieContext } from '../context/MovieContext'

export const SearchComp = () => {
    const{setQuery,query,SearchMovies}=useContext(MovieContext);


const handleSearch=(e)=>{
  e.preventDefault()
SearchMovies()
}


  return (
<Form onSubmit={handleSearch} id='form' className=' d-flex gap-3 w-50'>
    <Form.Control 
    className='search-box py-2'
    placeholder='search movies' value={query} onChange={e=>setQuery(e.target.value)}/>
    <Button
    onClick={handleSearch}
    style={{
        background:"#00CE79",
        border:'none',
        color:'black'
    }}
    className='search-btn'>Search</Button>
</Form>
  )
}
