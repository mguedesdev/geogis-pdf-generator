import { useState, useEffect } from 'react';

const useSearch = <T extends object>(data: T[], searchPaths: string[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState<T[]>(data);

  useEffect(() => {
    const searchTermLower = searchTerm.toLowerCase();
    if (searchTermLower) {
      const filtered = data.filter(item =>
        searchPaths.some(path => {
          const pathParts = path.split('.');
          let nestedValue: any = item;
          pathParts.forEach(part => {
            nestedValue = nestedValue[part];
            if (!nestedValue) return false;
          });
          return nestedValue
            .toString()
            .toLowerCase()
            .split(' ')
            .some((word: string) => word.startsWith(searchTermLower));
        }),
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [data, searchTerm, searchPaths]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return { searchTerm, handleSearch, filteredData };
};

export default useSearch;
