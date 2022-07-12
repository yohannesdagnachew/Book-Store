const CHECK_STATUS = './categories/CHECK_STATUS';

const categorySlice = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export default categorySlice;
