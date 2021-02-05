"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
const peronalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

for(let i = 0; i < numberOfFilms; i++){
    let a = prompt("Один из последних просмотренных фильмов?","");
    let aa = +prompt("На сколько оцените его?","");

    if ( a != null && aa != null && a != "" && aa != "" && a.length < 50) {
        peronalMovieDB.movies[a] = aa;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
    
}

if (peronalMovieDB.count > 0 && peronalMovieDB.count < 10) {
    alert("Просмотрено давольно мало фильмов");
} else if (peronalMovieDB.count >= 10 && peronalMovieDB.count < 30) {
    alert("Вы классический зритель");   
} else if (peronalMovieDB.count >= 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

function writeYourGenres() { 
    for ( let i = 0; i < 3; i++) {
        const favoriteGenreText = `Ваш любимый жанр под номером ${i+1}`;
        const favoriteGenre = prompt(favoriteGenreText);
        peronalMovieDB.genres[i] = favoriteGenre;
    }
}
writeYourGenres();

function showMyDB( p ) { 
    if ( p === false) {
        console.log( peronalMovieDB );
    } else {
        console.log( "Фильмы публичные" );
    }

}
showMyDB( peronalMovieDB.privat );




