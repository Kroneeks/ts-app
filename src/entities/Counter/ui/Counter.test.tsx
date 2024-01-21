import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    it('Testing render', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        const sidebar = screen.getByTestId('value-title');
        expect(sidebar).toHaveTextContent('10');
    });

    it('Increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        fireEvent.click(screen.getByTestId('increment-btn'));
        const sidebar = screen.getByTestId('value-title');
        expect(sidebar).toHaveTextContent('11');
    });

    it('Decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        fireEvent.click(screen.getByTestId('decrement-btn'));
        const sidebar = screen.getByTestId('value-title');
        expect(sidebar).toHaveTextContent('9');
    });
});
