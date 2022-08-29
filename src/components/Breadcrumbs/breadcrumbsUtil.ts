export const formatBreadcrumbs = (lowerCaseStrings: string[]): string[] => {
    return lowerCaseStrings.map(fileName => {
        const splitFileName = fileName.split('.');

        if (splitFileName.length === 1) {
            return fileName.toUpperCase();
        }

        const fileExtension = splitFileName[splitFileName.length - 1];
        const restOfFileName = splitFileName.slice(0, splitFileName.length - 1);

        return `${restOfFileName.map(a => a.toUpperCase()).join('.')}.${fileExtension}`;
    });
};
