export const getPagesAsList = () => {
  const {pages} = JSON.parse(localStorage.getItem('currentProject') ?? '');
  return pages?.map((page: any) => ({label: page.pageName, value: page.pageName}))
}
