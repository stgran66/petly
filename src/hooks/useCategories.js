import { useEffect } from 'react';

const useCategories = (category, func) => {
  useEffect(() => {
    switch (category) {
      case 'sell':
        func('Sell');
        break;
      case 'lost-found':
        func('Lost/found');
        break;
      case 'for-free':
        func('In good hands');
        break;
      default:
        func('lost-found');
    }
  }, [category, func]);
};

export default useCategories;
