import {test} from '@playwright/test';

test ('Pokemon information', async ({ request }) => {
    const pokemon = await request.get('pokemon/squirtle');
    let pokejson= await pokemon.json();
    console.log(await pokejson.moves[11].move.name);
});