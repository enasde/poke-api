//const { test } = require('@playwright/test');
import {test, expect} from '@playwright/test';
let starterPokemon = [1, 4, 7, 25, 133, 152, 155, 158, 252, 255, 258, 387, 390, 393, 495, 498, 501, 650, 653, 656, 722, 725, 728, 810, 813, 816]
let randomStarterPokemon = starterPokemon[Math.floor(Math.random() * starterPokemon.length)];

test('Whats Your Starter Pokemon?!?!?', async ({ request }) => {
  //console.log(randomStarterPokemon);
  //const pokemon = await request.get(`pokemon-species/${randomStarterPokemon}`);

  const pokemon = await request.get('pokemon/squirtle');


  /*let chosenPokemon= await pokemon.json();
  let pokeName: string = await chosenPokemon.name;
  let generation: string = await chosenPokemon.generation.name;
  await console.log(`You received a ${generation} ${pokeName} from Gojo!`);*/
  
  //expect (pokemon.ok()).toBeTruthy();
  //expect(pokemon.status()).toBe(200);
  //expect(pokemon.status()).not.toBe(200);
  let pokejson = await pokemon.json();
  expect(JSON.stringify(pokejson)).toMatchSnapshot('snapshot');

});

