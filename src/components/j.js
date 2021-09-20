const persons = [{ name: "A" }, { name: "B" }, { name: "C" }];

if (persons.some((person) => person.name === "A")) {
  console.log("Object found inside the array.");
} else {
  console.log("Object not found.");
}
