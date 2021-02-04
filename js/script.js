"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");



if (numberOfFilms > 0 && numberOfFilms < 10) {
    alert("Просмотрено давольно мало фильмов");
} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    alert("Вы классический зритель");
} else if (numberOfFilms >= 30){
    alert("Вы киноман");
} else if (numberOfFilms === 0 ){
    alert("Как так?");
} else if (numberOfFilms == ""){
    alert("Введите данные");
} else {
    alert("Произошла ошибка");
}

const peronalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false

};

for(let i = 0; i < numberOfFilms; i++){
    let a = prompt("Один из последних просмотренных фильмов?","");
    let aa = +prompt("На сколько оцените его?","");

    // if (a.length > 50) {
    //     break;
    // } else {
    //     false
    // }

    peronalMovieDB.movies[a] = aa;
}

// if (a > )

if (numberOfFilms > 0 && numberOfFilms < 10) {
    alert("Просмотрено давольно мало фильмов");
} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    alert("Вы классический зритель");
} else if (numberOfFilms >= 30){
    alert("Вы киноман");
} else if (numberOfFilms === 0 ){
    alert("Как так?");
} else if (numberOfFilms == ""){
    alert("Введите данные");
} else {
    alert("Произошла ошибка");
}


console.log( peronalMovieDB );