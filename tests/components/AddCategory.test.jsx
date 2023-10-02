import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


describe('Testing in <AddCategory/>', () => { 
    
    test('should change the value in input box', () => { 

        render(<AddCategory onNewCategory={()=> {}}/>);
        
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'Ronin'}});
        
        expect(input.value).toBe('Ronin');
    });
    
    test('should call onNewCategory if input has a value', () => { 
        
        const inputValue = 'Ronin';
        // jest.fn() creates a mock function in order to evaluate if it has been called
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        // toHaveBeenCalledWith() allows to evaluate if the function was called with the specified argument
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });
    
    test('should not call onNewCategory if the input value is empty', () => { 
        
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);
        
        const form = screen.getByRole('form');
        fireEvent.submit( form );
        
        // Different ways to check if the function was not called
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();

    });


 });