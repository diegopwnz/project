"use strict";
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let lastFilm = prompt('Один из проследних просмотренных фильмов?');
let filmRate = +prompt('На сколько оцените его?');


let personalMovieDB = {
	count: numberOfFilms,
	movies: { lastFilm, filmRate
},
	actors: '',
	genres: [],
	privat: false
};

console.log(personalMovieDB.movies);