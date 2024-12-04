// merge the two objects in one call it userDetails

const userPersonalInfo = { name: "Alice", age: 25 };
const userLocation = { city: "Wonderland", country: "Fictional" };

const userDetails = { ...userPersonalInfo, ...userLocation };

console.log(userDetails);
