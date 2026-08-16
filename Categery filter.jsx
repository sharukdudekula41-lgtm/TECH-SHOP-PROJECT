import "./CategoryFilter.css";

const categories = [
  "All",
  "Headphones",
  "Earbuds",
  "Speakers",
  "Smart Watches",
];

const CategoryFilter = ({ selected, setSelected }) => {
  return (
    <div className="category-filter">

      {categories.map((category) => (
        <button
          key={category}
          className={
            selected === category
              ? "category-btn active"
              : "category-btn"
          }
          onClick={() => setSelected(category)}
        >
          {category}
        </button>
      ))}

    </div>
  );
};

export default CategoryFilter;