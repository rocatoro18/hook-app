import { act, renderHook } from "@testing-library/react";
import {useForm} from '../../src/hooks/useForm';

describe('Pruebas en useForm',()=>{

    const initialForm = {
        name: 'Roberto',
        email: 'robertoctr99@gmail.com'
    }

    test('debe de regresar los valores por defecto',()=>{
        const {result} = renderHook(()=> useForm(initialForm) );
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
    });

    test('debe de cambiar el nombre del formulario',()=>{
        const newValue = 'Carlos';
        const {result} = renderHook(()=>useForm(initialForm));
        const {onInputChange} = result.current;
        
        // montar el hook
        // onInputChange() // act, event...
        act(()=>{
            // PROPIEDAD COMPUTADA
            onInputChange({target:{name:'name',value:newValue}});
        });
        // expect, result.current.name === Carlos
        // expect, result.current.FormState.name = Carlos
        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);

    });

    test('debe de realizar el reset del formulario',()=>{
        const newValue = 'Carlos';
        const {result} = renderHook(()=>useForm(initialForm));
        const {onInputChange,onResetForm} = result.current;
        
        // montar el hook
        // onInputChange() // act, event...
        act(()=>{
            // PROPIEDAD COMPUTADA
            onInputChange({target:{name:'name',value:newValue}});
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);

    });

});