import React, { useState } from "react";
import FoodReview from "../FoodReview21/FoodReview";
import Form from "../Form/Form";

const Main = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState([]);
  const [editFood, setEditFood] = useState(null);

  const handleOpen = () => {
    setEditFood(null);
    setIsVisible(true);
  };
  const handleClose = () => setIsVisible(false);

  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEdit = (food) => {
    setEditFood(food);
    setIsVisible(true);
  };

  return (
    <div className="container mx-auto">
      <div className="bg-[#1E293B] p-6 rounded-2xl my-6 flex justify-between items-center">
        <h2 className="text-xl font-bold uppercase text-[#0EA5E9]">
          Food Store
        </h2>
        <button
          className=" bg-[#0EA5E9] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#22C55E] transition cursor-pointer"
          onClick={handleOpen}
        >
          &#10011;
        </button>
      </div>

      {isVisible && (
        <Form onClose={handleClose} setData={setData} editFood={editFood} />
      )}

      <FoodReview data={data} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Main;
