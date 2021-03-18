import { NextApiRequest, NextApiResponse } from "next";
import { search, categories } from "kijiji-scraper";

const testOptions = {
  maxResults: 50,
};

const testParams = {
  locationId: 1700281, // Same as kijiji.locations.ONTARIO.OTTAWA_GATINEAU_AREA.OTTAWA
  categoryId: categories.REAL_ESTATE.FOR_RENT.LONG_TERM_RENTALS, // Same as kijiji.categories.CARS_AND_VEHICLES
  sortByName: "priceAsc", // Show the cheapest listings first
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  search(testParams, testOptions)
    .then((ads) => {
      console.log("ads", ads);
    })
    .catch((err) => console.error(err));

  //   const requestParams: Request = {
  //     method: method as Method,
  //     url: url.replace('/api/data', ''),
  //     baseURL: process.env.API_URL,
  //   }

  //   const token = await jwt.getToken({
  //     req,
  //     secret: process.env.JWT_TOKEN_SECRET,
  //     raw: 'true',
  //   })

  //   if (token) requestParams.headers = { Authorization: token }
  //   if (body) requestParams.data = body

  //   const { status, data } = await axios(requestParams)
  //     .then(({ status, data }) => ({
  //       status,
  //       data,
  //     }))
  //     .catch(({ response }) => ({
  //       status: response.status,
  //       data: response.data,
  //     }))

  //   return res.status(status).json(data)
};
