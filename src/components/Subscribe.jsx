import { Form } from "react-router-dom";
import subscribe from "../assets/images/bg-subscribe.png";
import Button from "./Button";
import axios from "axios";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  data.subscribedAt = new Date().toISOString();
  console.log("Data being sent:", data);

  try {
    await axios.post(
      "https://67f8c4c62466325443edb74b.mockapi.io/subscribers",
      data,
      { headers: { "content-Type": "application/json" } }
    );
    toast.success("Thankyou for being a member.");

    return null;
  } catch (error) {
    console.error("Subscription failed:", error);
    return new Response(JSON.stringify({ error: "Subscription failed" }), {
      status: 400,
    });
  }
};

const Subscribe = () => {
  return (
    <div
      className="flex items-center justify-center bg-center bg-cover py-4 md:py-16 lg:h-[542px] "
      style={{ backgroundImage: `url(${subscribe})` }}
    >
      <div
        className={`flex flex-col space-y-6 items-center text-center py-10 px-4 justify-center`}
      >
        <h1 className="text-white text-4xl md:text-5xl font-bold capitalize">
          Subscribe to get special price
        </h1>
        <p className="text-white max-w-lg md:text-lg font-medium opacity-80">
          Don't wanna miss something? subscribe right now and get special
          promotion and monthly newsletter
        </p>
        <Form
          method="POST"
          className="max-w-[80vh] md:w-full text-center py-1.5 px-3 bg-white rounded-full flex items-center justify-between"
        >
          <input
            name="email"
            required
            className="px-2 flex-1 outline-none"
            type="text"
            placeholder="Type your email here"
          />
          <Button type="submit">Subscribe</Button>
        </Form>
      </div>
    </div>
  );
};
export default Subscribe;
