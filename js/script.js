"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?","");


const personLastMovie = prompt("Один из последних просмотренных фильмов?","");
const personRatingMovie = prompt("На сколько оцените его?","");
// for(let i = 0; i > +numberOfFilms ;i++) {
    
// }




const peronalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false

};
peronalMovieDB.movies[personLastMovie] = personRatingMovie;





console.log( peronalMovieDB );