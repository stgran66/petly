import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useDefaultCategoryValue = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      return setSelectedCategory(category);
    }
    setSelectedCategory('sell');
  }, [category]);

  return [selectedCategory, setSelectedCategory];
};

export default useDefaultCategoryValue;
