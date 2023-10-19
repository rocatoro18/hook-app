import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter, RouterProvider, createMemoryRouter } from "react-router";
import { getRoutes } from "../../src/Routes";

describe('Pruebas en <MainApp />',()=>{
    test('debe de mostrar el HomePage',()=>{

        // Especificando ruta a activa
        const router = createMemoryRouter(getRoutes,{initialEntries:['/'],});
        //console.log(getRoutes);
        // Renderizando Provider
        render(<RouterProvider router={router}/>);

        // Ubicando el elemento h1
        const head = screen.getByRole('heading',{level:1}).innerHTML;
        expect(head).toContain('HomePage');

        render(
            // ESTUDIAR MEMORY ROUTER
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        );
        //screen.debug();
        expect(screen.getByText('HomePage')).toBeTruthy();
    });

    test('debe de mostrar el LoginPage',()=>{

        // Especificando ruta a activa
        const router = createMemoryRouter(getRoutes,{initialEntries:['/login'],});
        //console.log(getRoutes);
        // Renderizando Provider
        render(<RouterProvider router={router}/>);

        // Ubicando el elemento h1
        const head = screen.getByRole('heading',{level:1}).innerHTML;
        expect(head).toContain('LoginPage');

        render(
            // ESTUDIAR MEMORY ROUTER
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        );
        //screen.debug();
        expect(screen.getByText('LoginPage')).toBeTruthy();
    });

});