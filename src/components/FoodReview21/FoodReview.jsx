const FoodReview = ({ data, onEdit, onDelete }) => {
  if (data.length === 0) {
    return <p className="text-center text-slate-500 mt-6">No foods added</p>;
  }

  return (
    <div className="grid grid-cols-4 gap-5 mt-6">
      {data.map((food) => (
        <div
          key={food.id}
          className="p-5 bg-[#F1F5F9] rounded-2xl shadow-md flex flex-col justify-between border border-[#E2E8F0]"
        >
          <div>
            <h3 className="text-lg font-bold text-[#0F172A]">{food.title}</h3>
            <p className="text-sm text-slate-600 line-clamp-2 mt-1">
              {food.description}
            </p>

            <p className="text-[#0EA5E9] font-semibold mt-2">
              {food.price} sum
            </p>

            <div className="flex flex-wrap gap-2 mt-3 items-center">
              <p className="text-sm text-slate-500">Category: </p>
              {food.categories.map((item, inx) => (
                <span
                  key={inx}
                  className="bg-[#E2E8F0] text-[#1E293B] text-xs px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>

            {food.countries.length > 0 && (
              <p className="mt-2 text-sm text-slate-500">
                Countries:{" "}
                <span className="font-medium text-[#1E293B]">
                  {food.countries.join(", ")}
                </span>
              </p>
            )}

            {food.halal && (
              <span className="inline-block mt-3 bg-green-100 text-[#22C55E] text-xs font-medium px-3 py-1 rounded-full">
                Halal
              </span>
            )}
          </div>

          <div className="flex justify-between gap-2 mt-4">
            <button
              onClick={() => onEdit(food)}
              className="flex-1 bg-green-600 text-white font-medium py-2 rounded-lg cursor-pointer"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(food.id)}
              className="flex-1 bg-red-600 text-white font-medium py-2 rounded-lg cursor-pointer "
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodReview;
