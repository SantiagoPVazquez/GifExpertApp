import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";


describe('Tests in <GifGridItem/>', () => { 


    const title = 'Ronin';
    const url = 'https://ronindev.com/ronin.jpg';
    
    test('should match the snapshot', () => { 
        
       const {container} =  render(<GifGridItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();

     });


    test('should show the image with the indicated URL and ALT', () => { 
        
        render(<GifGridItem title={title} url={url}/>);
        const {src, alt} = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
        
    });
    
    
    test('should show Title as a paragraph', () => { 
        
        render(<GifGridItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();

       });

 });