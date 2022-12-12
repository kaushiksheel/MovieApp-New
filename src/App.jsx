import React,{lazy,Suspense} from 'react'

import {Routes,Route} from 'react-router-dom';


import NotFound from './pages/NotFound'
import { MovieContextProvider } from './context/MovieContext';
import { Loading } from './components/Loading';
import ShowTvInfo from './helpers/ShowTvInfo';
import Search from './pages/Search';


const Home=lazy(()=>import('./pages/Home'))
const Movies=lazy(()=>import('./pages/Movies'))
const TvSeries=lazy(()=>import('./pages/TvSeries'))
const ShowInfo=lazy(()=>import('./pages/ShowInfo'))


export default function App() {
  return (

// TODO: Implement code splitting

<>
<MovieContextProvider>
  <Suspense fallback={<Loading/>}>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/movies' element={<Movies/>}/>
  <Route path='/tv-series' element={<TvSeries/>}/>
  <Route path='/search' element={<Search/>}/>
  <Route path='/:id' element={<ShowInfo/>}/>
  <Route path='/tv/:id' element={<ShowTvInfo/>}/>
  <Route path='*' element={<NotFound/>}/>

</Routes>
  </Suspense>
</MovieContextProvider>

</>
  )
}
