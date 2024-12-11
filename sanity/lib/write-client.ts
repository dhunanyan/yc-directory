import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, token } from "../env";

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // When set to true - user needs to wait for 60sec to see the updated data if new data is added
  token,
});

if (!writeClient.config().token) {
  throw new Error("Write token not found.");
}
