import React from 'react';

const FilterSidebar = ({ filters, onFilterChange }) => {
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    const currentValues = filters[name] || [];
    const newValues = checked
      ? [...currentValues, value]
      : currentValues.filter((val) => val !== value);
    onFilterChange(name, newValues);
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <aside className="filter-sidebar">
      <div className="filter-section">
        <h4>Category</h4>
        {['Web Development', 'Data Science', 'Marketing', 'Design', 'Business'].map((category) => (
          <div key={category} className="filter-option">
            <input
              type="checkbox"
              id={category}
              name="category"
              value={category}
              checked={filters.category?.includes(category) || false}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>

      <div className="filter-section">
        <h4>Level</h4>
        {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
          <div key={level} className="filter-option">
            <input
              type="checkbox"
              id={level}
              name="level"
              value={level}
              checked={filters.level?.includes(level) || false}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={level}>{level}</label>
          </div>
        ))}
      </div>

      <div className="filter-section">
        <h4>Price</h4>
        <div className="filter-option">
          <input type="radio" id="price_all" name="price" value="all" checked={filters.price === 'all'} onChange={handleRadioChange}/>
          <label htmlFor="price_all">All</label>
        </div>
        <div className="filter-option">
          <input type="radio" id="price_free" name="price" value="free" checked={filters.price === 'free'} onChange={handleRadioChange}/>
          <label htmlFor="price_free">Free</label>
        </div>
        <div className="filter-option">
          <input type="radio" id="price_paid" name="price" value="paid" checked={filters.price === 'paid'} onChange={handleRadioChange}/>
          <label htmlFor="price_paid">Paid</label>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;