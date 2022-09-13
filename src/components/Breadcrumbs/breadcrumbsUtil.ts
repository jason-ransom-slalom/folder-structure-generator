export const formatBreadcrumbs = (lowerCaseStrings: string[]): string[] => {
  let folderLevel = 0;
  return lowerCaseStrings.map((fileName, idx) => {
    const splitFileName = fileName.split(".");

    if (splitFileName.length === 1) {
      folderLevel++;
      if (idx === 0 && idx === lowerCaseStrings.length - 1) {
        return fileName.toUpperCase() + " (root folder) ";
      }
      if (idx === lowerCaseStrings.length - 1) {
        return fileName.toUpperCase() + ` (level ${folderLevel - 1} folder)`;
      }
      return fileName.toUpperCase();
    }

    const fileExtension = splitFileName[splitFileName.length - 1];
    const restOfFileName = splitFileName.slice(0, splitFileName.length - 1);

    return `${restOfFileName
      .map((a) => a.toUpperCase())
      .join(".")}.${fileExtension}`;
  });
};
