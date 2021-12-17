const fetch = require("node-fetch");
fetch(
    "https://www.example.com/get-data"
)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));