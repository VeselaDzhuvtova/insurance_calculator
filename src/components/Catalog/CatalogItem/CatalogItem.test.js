import { render, screen } from '@testing-library/react';
import { CatalogItem } from "./CatalogItem"
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Catalog Item Component', () => {
    test('Show number', () => {
        const number = 'Test number';

        render(
            <BrowserRouter>
                <CatalogItem _id={'id'} number={number} />
            </BrowserRouter>
        );

        expect(screen.queryByText(number)).toBeInTheDocument()
    });
    test('Show model', () => {
        const model = 'Test model';

        render(
            <BrowserRouter>
                <CatalogItem _id={'id'} model={model} />
            </BrowserRouter>
        );

        expect(screen.queryByText(model)).toBeInTheDocument()
    });
    test('Show marka', () => {
        const marka = 'Test marka';

        render(
            <BrowserRouter>
                <CatalogItem _id={'id'} marka={marka} />
            </BrowserRouter>
        );

        expect(screen.queryByText(marka)).toBeInTheDocument()
    });
    test('Click on details', async () => {
        const itemId = 'id';
        global.window = { location: { pathname: null } };

        render(
            <BrowserRouter>
                <CatalogItem _id={itemId} />
            </BrowserRouter>
        );

        await userEvent.click(screen.queryByText('Детайли'));

        expect(global.window.location.pathname).toContain(`/catalog/${itemId}`);
    });

    test('Click on details', async () => {
        const itemId = 'id';
        global.window = { location: { pathname: null } };

        render(
            <BrowserRouter>
                <CatalogItem _id={itemId} />
            </BrowserRouter>
        );

        await userEvent.click(screen.queryByText('Промени'));

        expect(global.window.location.pathname).toContain(`/catalog/${itemId}/edit`);
    });
});