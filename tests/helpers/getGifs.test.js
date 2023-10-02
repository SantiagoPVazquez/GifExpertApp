import { getGifs } from "../../src/helpers/getGifs";


describe('Testing in helper getGifs', () => { 
    
    test('should return an array of gifs', async() => {

        const gifs = await getGifs('Ronin');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String)
            })


     });



 });