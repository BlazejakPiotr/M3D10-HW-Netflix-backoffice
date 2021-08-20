const endpoint = "https://striveschool-api.herokuapp.com/api/movies/";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjYyZjJkNTI2MjAwMTViNmRjOTUiLCJpYXQiOjE2MjkyODc5ODMsImV4cCI6MTYzMDQ5NzU4M30.nNXVsU3Xm3rtBjwRiDZJUn8LcZawq-ItVaCq0cX5GZs";

window.onload = () => {
  loadComedy();
  loadAction();
  loadScifi();
};

const loadAction = async () => {
  let response = await fetch(endpoint + "Action", {
    headers: {
      Authorization: token,
    },
  });
  let data = await response.json();

  for (let display of data) {
    let currentGenere = document.getElementById(display.category);
    // MOVIE NODE
    let movieNode = document.createElement("div");
    movieNode.classList.add("col", "px-1");
    movieNode.style.position = "relative";
    movieNode.innerHTML = `
     <a href="#">
            <div class="col px-1" style="position: relative">
           
            <img
              src="/assets/netflix_logo.png"
              class="netflix-logo"
              height="40px"
              alt="Netflix Logo"
            />
            <img src="${display.imageUrl}" alt="${display.name}" style="max-height: 250px;" />
          </div>
           <a>
    `;
    currentGenere.appendChild(movieNode);
  }
};

const loadScifi = async () => {
  let response = await fetch(endpoint + "Sci-Fi", {
    headers: {
      Authorization: token,
    },
  });
  let data = await response.json();

  for (let display of data) {
    let currentGenere = document.getElementById(display.category);
    // MOVIE NODE
    let movieNode = document.createElement("div");
    movieNode.classList.add("col", "px-1");
    movieNode.style.position = "relative";
    movieNode.innerHTML = `
     <a href="#">
            <div class="col px-1" style="position: relative">
           
            <img
              src="/assets/netflix_logo.png"
              class="netflix-logo"
              height="40px"
              alt="Netflix Logo"
            />
            <img src="${display.imageUrl}" alt="${display.name}" style="max-height: 250px;" />
          </div>
           <a>
    `;
    currentGenere.appendChild(movieNode);
  }
};

const loadComedy = async () => {
  let response = await fetch(endpoint + "Comedy", {
    headers: {
      Authorization: token,
    },
  });
  let data = await response.json();

  for (let display of data) {
    let currentGenere = document.getElementById(display.category);
    // MOVIE NODE
    let movieNode = document.createElement("div");
    movieNode.classList.add("col", "px-1");
    movieNode.style.position = "relative";
    movieNode.innerHTML = `
     <a href="#">
            <div class="col px-1" style="position: relative">
           
            <img
              src="/assets/netflix_logo.png"
              class="netflix-logo"
              height="40px"
              alt="Netflix Logo"
            />
            <img src="${display.imageUrl}" alt="${display.name}" style="max-height: 250px;" />
          </div>
           <a>
    `;
    currentGenere.appendChild(movieNode);
  }
};
