import React, { useEffect, useState } from "react";

const Form = ({ onClose, setData, editFood }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [halal, setHalal] = useState(false);

  const handleAddCountry = () => {
    if (country.trim()) {
      setCountries((prev) => [...prev, country.trim()]);
      setCountry("");
    }
  };

  const handleRemoveCountry = (index) => {
    setCountries((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddCategory = () => {
    if (category.trim()) {
      setCategories((prev) => [...prev, category.trim()]);
      setCategory("");
    }
  };

  const handleRemoveCategory = (index) => {
    setCategories((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (editFood) {
      setTitle(editFood.title);
      setDescription(editFood.description);
      setPrice(editFood.price);
      setCountries(editFood.countries);
      setCategories(editFood.categories);
      setHalal(editFood.halal);
    }
  }, [editFood]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const food = {
      id: editFood ? editFood.id : Date.now(),
      title,
      description,
      price: Number(price),
      countries,
      categories,
      halal,
    };

    if (editFood) {
      setData((prev) =>
        prev.map((item) => (item.id === editFood.id ? food : item))
      );
    } else {
      setData((prev) => [...prev, food]);
    }

    onClose();
  };

  return (
    <>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 w-full h-screen bg-black/30"
      ></div>

      <div className="fixed top-1/2 left-1/2 w-[450px] bg-[#F1F5F9] -translate-x-1/2 -translate-y-1/2 rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-[#0F172A] mb-4">Create Food</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border w-full h-10 indent-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
            type="text"
            placeholder="Name"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border w-full h-20 indent-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] resize-none"
            placeholder="Description"
          ></textarea>

          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border w-full h-10 indent-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
            type="number"
            placeholder="Price"
          />

          <div className="flex flex-wrap gap-2">
            {countries.map((item, index) => (
              <div
                key={index}
                className="bg-[#E2E8F0] px-3 py-1 rounded-full text-sm flex items-center gap-2"
              >
                <span>{item}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveCountry(index)}
                  className="text-gray-500 hover:text-red-500"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="border flex-1 h-10 indent-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
              type="text"
              placeholder="Country"
            />
            <button
              type="button"
              className="bg-[#0EA5E9] text-white px-3 rounded-lg hover:bg-[#22C55E] transition"
              onClick={handleAddCountry}
            >
              +
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((item, index) => (
              <div
                key={index}
                className="bg-[#E2E8F0] px-3 py-1 rounded-full text-sm flex items-center gap-2"
              >
                <span>{item}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveCategory(index)}
                  className="text-gray-500 hover:text-red-500"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border flex-1 h-10 indent-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
              type="text"
              placeholder="Category"
            />
            <button
              type="button"
              className="bg-[#0EA5E9] text-white px-3 rounded-lg hover:bg-[#22C55E] transition"
              onClick={handleAddCategory}
            >
              +
            </button>
          </div>

          <label className="flex items-center gap-2 text-[#0F172A]">
            <input
              type="checkbox"
              checked={halal}
              onChange={(e) => setHalal(e.target.checked)}
              className="w-5 h-5 text-[#22C55E] border-gray-300 rounded focus:ring-[#22C55E]"
            />
            Halal
          </label>

          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-[#1E293B] text-white py-2 rounded-lg hover:bg-[#0F172A] transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-[#0EA5E9] text-white py-2 rounded-lg hover:bg-[#22C55E] transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
