const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/movies', { useNewUrlParser: true });


const Schema = mongoose.Schema;

const movies = new Schema({
name: String,
genre: String,
});


//////////////////////////////CREATE TABLE ////////////////////////////////
const movie = mongoose.model('movie', movies);


const test = new movie({name: 'Armegeddon' , genre: 'sci-fi'});

test.save(movie);
