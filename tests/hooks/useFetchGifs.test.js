import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Testing in custom hook useFetchGifs', () => { 
    
    test('should return initial state', () => { 
        
        const { result } = renderHook( () => useFetchGifs('Ronin'));
        const {images, isLoading} = result.current;
        
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });
    
    
    test('should return an array of images and isLoading equal to false', async() => { 
        
        const { result } = renderHook( () => useFetchGifs('Ronin'));
        // waitFor() returns a promise and can be used to wait for a specific result
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
            );
            
        const {images, isLoading} = result.current;
        
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });

 });