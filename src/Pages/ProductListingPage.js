import PlantCard from '../components/PlantCard';

const plants = [
  { id: 1, name: 'Snake Plant', price: 15.99, image: '/images/plant1.jpg', category: 'Low Light' },
  { id: 2, name: 'Peace Lily', price: 12.50, image: '/images/plant2.jpg', category: 'Air Purifying' },
  { id: 3, name: 'Aloe Vera', price: 9.99, image: '/images/plant3.jpg', category: 'Succulents' },
  { id: 4, name: 'Spider Plant', price: 11.00, image: '/images/plant4.jpg', category: 'Air Purifying' },
  { id: 5, name: 'Jade Plant', price: 14.50, image: '/images/plant5.jpg', category: 'Succulents' },
  { id: 6, name: 'Pothos', price: 10.99, image: '/images/plant6.jpg', category: 'Low Light' },
];

function ProductListingPage() {
  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <main className="product-listing">
      <h2>Plants</h2>
      {categories.map((category) => (
        <div key={category} className="category-section">
          <h3>{category}</h3>
          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
          </div>
        </div>
      ))}
    </main>
  );
}

export default ProductListingPage;