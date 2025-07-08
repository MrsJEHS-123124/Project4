import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [versesByCategory, setVersesByCategory] = useState({});

  // Fetch categories on mount
  useEffect(() => {
    fetch('http://localhost:4000/api/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error('Error fetching categories:', err));
  }, []);

  // Fetch verses when category is clicked
  const fetchVerses = (categoryId) => {
    fetch(`http://localhost:4000/api/categories/${categoryId}/verses`)
      .then((res) => res.json())
      .then((data) =>
        setVersesByCategory((prev) => ({
          ...prev,
          [categoryId]: data,
        }))
      )
      .catch((err) => console.error('Error fetching verses:', err));
  };

  return (
   <div className="container mt-4">
  <h2 className="text-center soul-title">Welcome to your Soul-Fuel Dashboard</h2>

  <div className="list-group">
    {Array.isArray(categories) &&
      categories.map((cat) => (
        <div key={cat.id} className="mb-3">
           <button
            className="list-group-item list-group-item-action soul-category-btn"
            onClick={() => fetchVerses(cat.id)}
          >
            {cat.name}
          </button>

          {versesByCategory[cat.id] && (
            <div className="mt-2 soul-verse-box">
              {versesByCategory[cat.id].map((verse) => (
                <p key={verse.id} className="verse-text">{verse.verse_text}</p>
              ))}
            </div>
          )}
        </div>
      ))}
  </div>
</div>
  );
}
export default Dashboard;
