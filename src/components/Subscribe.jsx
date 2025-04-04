import subscribe from "../assets/bg-subscribe.png";
import Button from "./Button";

const Subscribe = () => {
  return (
    <div
      className="flex items-center justify-center bg-center bg-cover"
      style={{ backgroundImage: `url(${subscribe})` }}
    >
      <div
        className={`flex flex-col space-y-6 items-center text-center py-10 px-4 justify-center`}
      >
        <h1 className="text-white text-5xl font-bold capitalize">
          Subscribe to get special price
        </h1>
        <p className="text-white opacity-80">
          Don't wanna miss something? subscribe right now and get special <br />{" "}
          promotion and monthly newsletter
        </p>
        <div className="md:w-[80vh] text-center mb-20 mt-5  py-1.5 px-3 bg-white rounded-full flex items-center justify-between">
          <input
            className="px-2 flex-1 outline-none"
            type="text"
            placeholder="Type your email here"
          />
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
};
export default Subscribe;
