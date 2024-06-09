window.onload = function() {
    let randomJokeButton = document.getElementById("get-random-joke");
    randomJokeButton.onclick = getJoke;
}

function getJoke() {
    let randomJokeUrl = "https://v2.jokeapi.dev/joke/Programming?type=single&safe-mode";

    fetch(randomJokeUrl)
    // Get the respond object and return the json data
        .then((response) => response.json())
        .then(
            (jsonData) => {
                console.log(jsonData);
            }
        );

    // // Same fetch as above avoid lambda expressions
    // fetch(randomJokeUrl)
    //     .then(handleResponse)
    //     .then(handleData);
}

function handleResponse(response) {
    return response.json();
}

function handleData(jsonData) {
    console.log(jsonData);
}

// https://v2.jokeapi.dev/joke/Programming?type=single&safe-mode