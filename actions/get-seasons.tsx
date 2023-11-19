import { Season } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/seasons`;

const getSeasons = async (): Promise<Season[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getSeasons;
