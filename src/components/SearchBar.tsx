import React from 'react';

type SearchBarProps = {
  className?: string;
  // eslint-disable-next-line no-unused-vars
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

export const SearchBar: React.FC<SearchBarProps> = ({ className, handleChange, value }) => {
  return (
    <div className={className}>
      <div className="border rounded overflow-hidden flex">
        <input
          type="text"
          className="px-4 py-2"
          placeholder="Search..."
          onChange={handleChange}
          value={value}
        />
      </div>
    </div>
  );
};
