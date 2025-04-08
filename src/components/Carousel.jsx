import whyUsBg from "../assets/images/whyus-bg.png";

const Carousel = () => {
  return (
    <div className="carousel w-full min-h-64 md:min-h-[633px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={whyUsBg} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide4"
            className="bg-gray-50 px-4 py-2 rounded-md hover:bg-gray-200 shadow-2xl"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="bg-gray-50 px-4 py-2 rounded-md hover:bg-gray-200 shadow-2xl"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide1"
            className="bg-gray-50 px-4 py-2 rounded-md hover:bg-gray-200 shadow-2xl"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="bg-gray-50 px-4 py-2 rounded-md hover:bg-gray-200 shadow-2xl"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide2"
            className="bg-gray-50 px-4 py-2 rounded-md hover:bg-gray-200 shadow-2xl"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="bg-gray-50 px-4 py-2 rounded-md hover:bg-gray-200 shadow-2xl"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide3"
            className="bg-gray-50 px-4 py-2 rounded-md hover:bg-gray-200 shadow-2xl"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="bg-gray-50 px-4 py-2 rounded-md hover:bg-gray-200 shadow-2xl"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
