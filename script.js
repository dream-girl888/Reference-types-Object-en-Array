let person = {
    age: 30,
    name: "dream-girl888"
}

console.log(person);

//alleen log value name en age
console.log(person.name);
console.log(person.age);

//punt notatie 
person.name = "dream-girl888";
person.age = 30;

//bracket notatie
let selection = "name";
person[selection] = "dream-girl888";

let evaluations = [7, 10, 9];
console.log(evaluations);
//waarde van evaluations is 7,10, 9

//array maken en selecteren
let selectedColors = ["groen", "blauw", "rood"];
console.log(selectedColors);

//lengte van array
console.log(selectedColors.length);

//log eerste element van je array
console.log(selectedColors[0]);

//log laatste element van je array. nadeel moet indexnr weten
console.log(selectedColors[2]);

//geel toevoegen aan array
selectedColors.push("geel");
console.log(selectedColors);

//nummer 5 toevoegen aan array
selectedColors.push(5);
console.log(selectedColors[4]);

//log laatste element van je array, als je niet weet welk indexnr. lengte is 6 items, indexnr is altijd-1
let greeting = "greeting: hi ik ben een object";
selectedColors.push(greeting);
console.log(selectedColors);
console.log(selectedColors[selectedColors.length - 1]);




const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
        favourite_food: "fish",
        medium_liked_food: "dried fruits",
        disliked_food: "walnuts"
    }
},
{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
        favourite_food: "tuna",
        medium_liked_food: "canned food",
        disliked_food: "all fruits"
    }
},
{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
        favourite_food: "meaty things",
        medium_liked_food: "tuna",
        disliked_food: "canned food"
    }
}
]

//log naam van het laatste kattenras
console.log("Naam kattensoort 3", catBreeds[2].name);

//log energie levels van de eerste kat
console.log("Energylevel kattensoort 1", catBreeds[0].energy_level);

//log eerste temperament van tweede kat, niet alle
console.log("Eerste temperament kat2", catBreeds[1].temperament[0]);

//log laatste temperament van derde kat, niet alle
console.log(catBreeds[2].temperament.length);
console.log("Laatste temperament kat3", catBreeds[2].temperament[4]);

//log favoriete voedsel van de derde kat
console.log("Laatste temperament kat3", catBreeds[2].food.favourite_food);

