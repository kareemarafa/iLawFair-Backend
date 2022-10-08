export const getPagesAsList = () => {
  const currentProject = localStorage.getItem('currentProject');
  if (currentProject?.length) {
    const {pages} = JSON.parse(currentProject ?? '')
    return pages?.map((page: any) => ({label: page.pageName, value: page.pageName}))
  } else {
    return [];
  }
}
