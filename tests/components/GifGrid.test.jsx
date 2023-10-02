import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// jest.mock() to create a mock of my custom hook.
jest.mock('../../src/hooks/useFetchGifs');


describe('Testing in <GifGrid/>', () => { 

    const category = 'Ronin';

    test('should show Loading...', () => { 
        
        // mockReturnValue() to set a mock value for my custom hook
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category}/>);
        
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));

        
    });
    
    
    test('should show items when useFetchGifs loads images', () => { 
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Ronin',
                url: 'https://localhost/ronin.jpg'
            },
            {
                id: 'DFG',
                title: 'RoninDev',
                url: 'https://localhost/ronindev.jpg'
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render(<GifGrid category={category}/>);

        expect(screen.getAllByRole('img').length).toBe(2);


        
    });

 });