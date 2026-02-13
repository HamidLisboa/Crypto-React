export const baseUrl =
  "https://rest.coincap.io/v3/assets?limit=20";

export const detailsUrl = (id) => {
  return `https://rest.coincap.io/v3/assets/${id}`;
}