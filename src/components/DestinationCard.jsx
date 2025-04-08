// Destination Card Component
const DestinationCard = ({ destination }) => {
  const { title, price, days, image, description, rating } = destination;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <div className="text-right">
            <span className="text-xl font-bold">${price}</span>
            <span className="text-gray-600">/{days}days</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex justify-between items-center">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-300">
            Booking now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
