import React from "react";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch,} from "react-router-dom";
import Filter from './Filter.js';
import MovieList from './MovieList.js';
import film1 from './source/film1.jpg';
import film2 from './source/film2.jpg';
import film3 from './source/film3.jpg';
import film4 from './source/film4.jpg';
import Description from "./Description";
function App() {

  const objMovies = [
    {
      id:1,
      img: film1,
      title: "THE NAKED GUN 2 1/2 THE SMELL OF FEAR",
      describe: "Lieutenant Frank Drebin discovers that his ex-girlfriend's new beau is involved in a plot to kidnap a scientist who advocates solar energy.",
     link:<iframe width="614" height="409" src="https://www.youtube.com/embed/CZgfYmdEz_Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 4
    },
    {
      id:2,
      img: film2,
      title: "Batman",
      describe: "Batman enters a decisive phase in his war on crime. With the help of Police Lieutenant Jim Gordon and new district attorney Harvey Dent , he sets out to dismantle the last criminal organizations that plague the city's streets. The pairing proves to be effective, but the trio soon come up against a new crime genius who is spreading terror and chaos in Gotham: the Joker .",
      link:<iframe width="875" height="372" src="https://www.youtube.com/embed/EXeTwQWrcwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 3
    },
    {
       id:3,
      img: film3,
      title: "Sonic the Hedgehog",
      describe: "Sonic the Hedgehog[b] is a 2020 action-adventure comedy film based on the video game franchise of the same name published by Sega. Directed by Jeff Fowler (in his feature directorial debut) and written by Pat Casey and Josh Miller, it stars Ben Schwartz and Jim Carrey, with James Marsden and Tika Sumpter also in starring roles",
     link:<iframe width="727" height="409" src="https://www.youtube.com/embed/SfEpqmdXhiU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 2

    },
    {
      id:4,
      img: film4,
      title: "Aladdin",
      describe: "Aladdin est un film d'aventure fantastique américain coécrit et réalisé par Guy Ritchie, sorti en 20191. Il s'agit de l’adaptation en prise de vues réelle du film homonyme de 1992, dans la lignée des films de Walt Disney Pictures comme Le Livre de la jungle en 2016, La Belle et la Bête en 2017, et Dumbo en 2019.",
     link:<iframe width="875" height="365" src="https://www.youtube.com/embed/foyufD52aog" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      rate: 1
  
    },
  ]

  const [filtredFilms, setFiltredFilms] = useState(objMovies)

  const handelChange = (item) => {
    let filter = objMovies.filter((val) => val.title.toLowerCase().includes(item.toLowerCase()));
    console.log(filter)
    setFiltredFilms(filter)
  }

  const ratingChanged = (newRating) => {
    console.log(newRating)
    let filter = objMovies.filter((val) => val.rate === newRating);
    console.log(filter)

    setFiltredFilms(filter)
  }
  return (
    <div className="App">
      <h1>Movie List</h1>
      
      <BrowserRouter>
            <Filter changeFn={handelChange} ratingFilter={ratingChanged} />

        <Switch>
          <Route exact path="/" >      
            <MovieList obj={filtredFilms} />
          </Route>
          <Route  path="/description/:id" render={ (props) => <Description data= {objMovies} {...props} />}/>

        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;