import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "02hq7fcn",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
  token:
    "skdeSna4btSg473u4AALoEAIzXLtYSoVhET95NUqQXjbfvvvKBv1W5YAYKPj21L3JSEvPBgx6FPpubliq77f5QMq9x82gAiEyOYIMG5QB5b70o6F2J6oBQI45Hro09jAIy5pNNKJIEI7qY8etWlQ7bC25XfRn8i6LGfETa0ntrzDLEqQTKRT",
});
export { client as sanityClient };
