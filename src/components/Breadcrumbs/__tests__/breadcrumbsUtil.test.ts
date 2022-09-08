import { formatBreadcrumbs } from '../breadcrumbsUtil';

describe('formatBreadcrumb', () => {
    it('is as function', () => {
        expect(typeof formatBreadcrumbs).toBe('function');
    });

    it('returns each string in uppercase', () => {
        const lowerCaseStrings = ['a', 'b', 'c'];

        expect(formatBreadcrumbs(lowerCaseStrings)).toMatchObject(['A', 'B', 'C']);
    });

    it('returns extensions in lowercase', () => {
        const lowerCaseStrings = ['a', 'b.txt', 'c.a.ts'];

        expect(formatBreadcrumbs(lowerCaseStrings)).toMatchObject(['A', 'B.txt', 'C.A.ts']);
    });
});
