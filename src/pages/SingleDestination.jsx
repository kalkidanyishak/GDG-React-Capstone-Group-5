import axios from "axios";
import { DestinationDetail } from "../components";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  const response = await axios.get(
    `https://67f8c4c62466325443edb74b.mockapi.io/destinations/${params.id}`
  );

  return response.data;
};

const SingleDestination = () => {
  const destination = useLoaderData();
  return (
    <div>
      <DestinationDetail destination={destination} />
    </div>
  );
};
export default SingleDestination;
