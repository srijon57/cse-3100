import { useEffect, useState } from 'react';

// Cat object with name, age, and breed
const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Abyssinian' },
  { name: 'Pumpkin', age: '3', breed: 'Peterbald' },
  { name: 'Luna', age: '4', breed: 'Siamese' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]); // To store the filtered list of cats
  const [selectedBreed, setSelectedBreed] = useState(''); // To track the selected breed for filtering
  const [searchTerm, setSearchTerm] = useState(''); // To search cat by name

  useEffect(() => {
    // Fetch cat images from an API endpoint and assign it to the featuredCats list
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  useEffect(() => {
    let filtered = cats; // Filter cats for the selected breed
    if (selectedBreed) {
      filtered = filtered.filter(cat => cat.breed === selectedBreed);
    }
    // For searching cat logic
    if (searchTerm) {
      filtered = filtered.filter(cat => cat.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    setFilteredCats(filtered); // For updated selected breed cats
  }, [selectedBreed, cats, searchTerm]);

  // Breeds for dropdown
  const breeds = ['Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];
  //copyright srijon-20220104124
  return (
    <section className="bg-gradient-to-r from-blue-300 via-sky-500 to-blue-400 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-8">Available Cats</h2>
        <p className="text-white text-center mb-8">Meet our adorable cats looking for their forever home!</p>

        <div className="filters mb-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Search by name"
            className="shadow appearance-none border rounded w-full md:w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
            className="shadow appearance-none border rounded w-full md:w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Filter by Breed</option>
            {breeds.map((breed, index) => (
              <option key={index} value={breed}>{breed}</option>
            ))}
          </select>
        </div>

        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 cats-container " id="cats-container">
          {filteredCats.map((cat, i) => (
            <div key={i} className="cat-card transform transition-transform duration-300 hover:scale-105 rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-48">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-fit " />
              </div>
              <div className="cat-info p-4">
                <h3 className="text-xl font-semibold mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0">Breed: {cat.breed}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
