
//for some reason, this test fails in typescript (using the out-commented import statements),
// but passes in javascript (as it does in the original tutorial)
const {test, expect} = require('@playwright/test');
//import {test, expect} from '@playwright/test';
//import * as file from '../json/squirtle-schema.json';
const file= require('../json/squirtle-schema.json');
//import ejs from 'easy-json-schema';
const ejs= require('easy-json-schema');

test ('Pokemon information', async ({ request }) => {

    //basic situation: we have a given schema that an actual segment of the API should
    //conform to. The schema is in the json folder.
    //in the first line we're retrieving the actual data to be tested in their entirety 
    const pokemon = await request.get('pokemon/charmander');
    let pokejson= await pokemon.json();
    //console.log(await pokejson.moves[11].move.name);
    //now we isolate the part that we want to test
    let pokeForms= await pokejson.forms;
    const formSchema = await ejs(pokeForms);
    //compare the retrieved actual data with the given data from the schema
    await expect(formSchema).toEqual(file);
});