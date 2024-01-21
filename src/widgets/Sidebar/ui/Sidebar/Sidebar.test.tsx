import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

describe('Sidebar', () => {
    it('Testing render', () => {
        componentRender(<Sidebar className="custom-sidebar" />);
        const sidebar = screen.getByTestId('sidebar-test');
        expect(sidebar).toBeInTheDocument();
        expect(sidebar).toHaveClass('custom-sidebar');
    });

    it('Testing toggle', () => {
        componentRender(<Sidebar />);
        const toggleButton = screen.getByTestId('sidebar-button');
        expect(toggleButton).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar-test')).toHaveClass('collapsed');
    });
});
