"use strict";
const peronalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() { 
        peronalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?","");
        while( peronalMovieDB.count === null || peronalMovieDB.count === "" || isNaN(peronalMovieDB.count)) {
            peronalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?","");
        }
    },
    rememberMyFilms: function() { 
        for(let i = 0; i < peronalMovieDB.count; i++){
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
    },
    detectPersonalLevel: function() {

        if (peronalMovieDB.count > 0 && peronalMovieDB.count < 10) {
            alert("Просмотрено давольно мало фильмов");
        } else if (peronalMovieDB.count >= 10 && peronalMovieDB.count < 30) {
            alert("Вы классический зритель");   
        } else if (peronalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) { 
        if ( !hidden ) {
            console.log( peronalMovieDB );
        } else {
            console.log( "Фильмы публичные" );
        }
    
    },
    writeYourGenres: function() { 
        for ( let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);   
            if (genre === "" || genre === null) {
                console.log('NOOOO');
                i--;
            } else {
                peronalMovieDB.genres[i-1] = genre;
            }

            
        }
        peronalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} = это ${item}`);
        });
    },
    toggleVisibleNyDB: function() { 
        if( peronalMovieDB.privat ) {
            peronalMovieDB.privat = false;
        } else {
            peronalMovieDB.privat = true;
        }
    }
};


// let x = 5;
// console.log( x++ ); //10

// [] + false - null + true //null

// let y = 1;
// let x = y = 2;
// console.log( x ); 2

// [] + 1 + 2;

// console.log("1"[0]);

2 