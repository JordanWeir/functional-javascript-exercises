#!/usr/bin/env node

const workshopper = require('workshopper'),
      path        = require('path')

function fpath (f) {
    return path.join(__dirname, f)
}

workshopper({
    name        : 'functional-exercises',
    title       : 'Functional Exercises',
    subtitle    : 'Functional Javascript 101',
    appDir      : __dirname,
    menuItems   : [],
    exerciseDir : fpath('./exercises/')
})
