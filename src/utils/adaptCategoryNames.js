const adaptCategoryName = category => {
  switch (category) {
    case 'for-free':
      return 'in good hands';
    case 'lost-found':
      return 'lost/found';
    case 'sell':
      return 'sell';
    default:
      return 'unknown';
  }
};

export default adaptCategoryName;
