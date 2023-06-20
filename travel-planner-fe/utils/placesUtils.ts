import { destinationSearch } from "../components/apis";

async function fetchPlaces(preferences: Set<string>, lng: number, lat: number) {
  const results = [];

  const preferenceArray = Array.from(preferences);

  if (preferences.size === 0) {
    const response = await destinationSearch(
      "tourist_attraction",
      lng,
      lat,
      25
    );
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

async function fetchRestaurants(lng: number, lat: number) {
  const results = [];

  const response = await destinationSearch("restaurant", lng, lat, 25);
  results.push(...response.features);

  return results;
}

function removeDuplicates(array) {
  const uniqueNames = new Set();
  const uniqueArray = [];

  for (const item of array) {
    const name = item.properties.name;

    if (!uniqueNames.has(name)) {
      uniqueArray.push(item);
      uniqueNames.add(name);
    }
  }

  return uniqueArray;
}

function getRandomValuesFromArray(array, count) {
  const shuffledArray = [...removeDuplicates(array)];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[i],
    ];
  }

  return shuffledArray.slice(0, count);
}

function transformData(numDays: number, places: Array<object>) {
  const placesAmount = numDays * 3;

  const selectedPlaces = getRandomValuesFromArray(places, placesAmount);

  const transformedData = selectedPlaces.map(({ properties }) => {
    const { name, full_address, coordinates, poi_category } = properties;
    return { name, full_address, coordinates, poi_category };
  });

  return transformedData;
}

export { fetchPlaces, fetchRestaurants, transformData };
