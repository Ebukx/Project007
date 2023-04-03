import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import {Layout} from '../components'
import {Genres, Home, MovieId, Popular, Toprated} from '../pages'
import Person from '../pages/person/Person'
import PersonId from '../pages/person/PersonId'

export default function Routespath() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='movies/genres/:id' element={<Genres/>}/>
                <Route path='movies/popular' element={<Popular/>}/>
                <Route path='movies/top_rated' element={<Toprated/>}/>
                <Route path='person/popular' element={<Person/>}/>
                <Route path='movie/:movie_id' element={<MovieId/>}/>
                <Route path='person/:person_id' element={<PersonId/>}/>
            </Route>
        )
    )
  return <RouterProvider router={router}/>
}
