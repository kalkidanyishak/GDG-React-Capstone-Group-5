import DestinationCard from "./DestinationCard";

const PopularDestinations = ({ destinations }) => {
  const img = [
    "images/image2.png",
    "images/image3.png",
    "images/image4.png",
    "images/image5.png",
    "images/image6.png",
    "images/image7.png",
    "images/image2.png",
    "images/image3.png",
    "images/image4.png",
    "images/image5.png",
    "images/image6.png",
    "images/image7.png",
    "images/image2.png",
    "images/image3.png",
    "images/image4.png",
    "images/image5.png",
    "images/image6.png",
    "images/image7.png",
    "images/image5.png",
    "images/image6.png",
    "images/image7.png",
    "images/image2.png",
    "images/image3.png",
  ];
  destinations = destinations.slice(0, 10);
  return (
    <div className="w-full bg-gray-100 min-h-screen py-16 md:py-32 px-4">
      <div className="align-element">
        <div className="flex justify-center text-center items-center mb-12">
          <div>
            <h1 className="text-4xl  font-bold text-gray-900 mb-2">
              Popular Destination
            </h1>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => {
            destination.image = img[index];
            return (
              <DestinationCard key={destination.id} destination={destination} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
