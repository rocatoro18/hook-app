import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

// HACER MOCK DE ESA LIBRERIA PARA UTILIZARLA
jest.mock('../../src/hooks/useCounter');
jest.mock('../../src/hooks/useFetch');

describe('Pruebas en <MultipleCustomHooks/>',()=>{

    const mockIncrement = jest.fn();
        useCounter.mockReturnValue({
           counter: 1,
           increment: mockIncrement
    });

    beforeEach(()=>{
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto',()=>{

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks/>);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Rick and Morty Character: is Alive?'));
        const newButton = screen.getByRole('button',{name:'Next Character'});
        //console.log(newButton.disabled);
        expect(newButton.disabled).toBeTruthy();
        //screen.debug();
    });

    test('debe de mostrar un personaje',()=>{
        useFetch.mockReturnValue({
            data: {name:'Roberto',status:'Alive',image:'qwerty'},
            isLoading: false,
            hasError: null
        });
        render(<MultipleCustomHooks/>);
        //screen.debug();
        expect(screen.getByText('Rick and Morty Character: is Alive?')).toBeTruthy();
        expect(screen.getByText('Roberto')).toBeTruthy();
        const newButton = screen.getByRole('button',{name:'Next Character'});
        //console.log(newButton.disabled);
        expect(newButton.disabled).toBeFalsy();
    });

    test('debe de llamar la funcion de incrementar',()=>{
        
        useFetch.mockReturnValue({
            data: {name:'Roberto',status:'Alive',image:'qwerty'},
            isLoading: false,
            hasError: null
        });
    
        render(<MultipleCustomHooks/>);
        const newButton = screen.getByRole('button',{name:'Next Character'});
        fireEvent.click(newButton);
        // EVALUAR QUE LA FUNCION INCREMENT SEA LLAMADA
        expect(mockIncrement).toHaveBeenCalled();
    });

});