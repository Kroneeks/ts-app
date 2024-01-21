import { classNames } from './classNames';

describe('classNames', () => {
    test('With one param', () => {
        expect(classNames('someclass')).toBe('someclass');
    });

    test('With additional param', () => {
        expect(classNames('someclass', {}, ['class1'])).toBe(
            'someclass class1',
        );
    });

    test('With mods', () => {
        expect(classNames('someclass', { hovered: true }, ['class1'])).toBe(
            'someclass class1 hovered',
        );
    });

    test('With mods false', () => {
        expect(
            classNames('someclass', { hovered: true, scrollable: false }, [
                'class1',
            ]),
        ).toBe('someclass class1 hovered');
    });
});
