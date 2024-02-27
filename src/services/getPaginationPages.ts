/* eslint-disable no-plusplus */
const amountOfVisiblePrevPages = 1;

export const getPaginationPages = (
  currentPage: number,
  amountOfPages: number,
  amountOfVisiblePages: number
) => {
  const startPageNumber = Math.min(
    Math.max(currentPage - amountOfVisiblePrevPages, 1),
    Math.max(amountOfPages - amountOfVisiblePages + 1, 1)
  );

  const amountOfPagesToCreate = Math.min(amountOfVisiblePages, amountOfPages);

  const pages = [];

  for (let i = 0; i < amountOfPagesToCreate; i++) {
    pages.push(i + startPageNumber);
  }

  return pages;
};
