import { destinationSearch } from "@/components/apis";

export default async function fetchPlaces(preferences: Set<string>, lng: number, lat: number) {
  const results = [];

  const preferenceArray = Array.from(preferences);

  if (preferenceArray.length === 0) {
    const response = await destinationSearch("tourist_attraction", lng, lat, 25);
    results.push(...response.features);
  } else {
    await Promise.all(
      preferenceArray.map(async (category) => {
        const response = await destinationSearch(category, lng, lat, 10);
        results.push(...response.features);
      })
    );
  }

  return results;
}
