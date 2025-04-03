import {test} from '@playwright/test';

test ('Pokemon information', async ({ request }) => {
    const pokemon = await request.get('https://pokeapi.co/api/v2/pokemon/squirtle');
    console.log(await pokemon.json());
});