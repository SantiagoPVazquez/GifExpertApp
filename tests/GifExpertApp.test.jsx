import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('Testing in <GifExpertApp/>', () => { 
    
    test('should render GifExpertApp title', () => {
        
        render(<GifExpertApp/>);
        
        expect(screen.getByText('GifExpertApp')).toBeTruthy();
        
        
    });

    test('should show results with a new category is added', () => { 
        const newCategory = 'Samurai';

        render(<GifExpertApp/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target: {value: newCategory}});
        fireEvent.submit(form);
        
        expect(screen.getByText(newCategory)).toBeTruthy();
        
    });
    
    
    test('should ignore the new category when it has been already submited', () => { 
        const newCategory = 'Ronin';
        
        render(<GifExpertApp/>);
    
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target: {value: newCategory}});
        fireEvent.submit(form);
        fireEvent.input(input, {target: {value: newCategory}});
        fireEvent.submit(form);

        expect(screen.getAllByText(newCategory).length).toBe(1);



       });

 });