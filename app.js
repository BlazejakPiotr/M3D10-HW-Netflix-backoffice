const loadMovies = async () => {
  let genereArr = ["Comedy", "Sci-Fi", "Action"];
  for (let genere of genereArr) {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/movies/" + genere,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjYyZjJkNTI2MjAwMTViNmRjOTUiLCJpYXQiOjE2MjkyODc5ODMsImV4cCI6MTYzMDQ5NzU4M30.nNXVsU3Xm3rtBjwRiDZJUn8LcZawq-ItVaCq0cX5GZs",
        },
      }
    );
    let data = await response.json();
    showMovies(data);
  }
};

function showMovies(data) {
  let list = document.getElementById("list");
  data.forEach((element) => {
    let movieNode = document.createElement("li");
    movieNode.classList.add("list-group-item");
    movieNode.innerHTML = `
       <h6>${element.name}</h6><i class="fas fa-edit"></i> <i class="fas fa-trash-alt"></i>
       <small><i>Genere: ${element.category}</i></small>
      
       `;
    list.appendChild(movieNode);
  });
}

window.onload = () => {
  loadMovies();
};

const addMovie = async (event) => {
  event.preventDefault();

  const movie = {
    category: document.getElementById("genere").value,
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    imageUrl: document.getElementById("img").value,
  };

  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/",
    {
      method: "POST",
      body: JSON.stringify(movie),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjYyZjJkNTI2MjAwMTViNmRjOTUiLCJpYXQiOjE2MjkyODc5ODMsImV4cCI6MTYzMDQ5NzU4M30.nNXVsU3Xm3rtBjwRiDZJUn8LcZawq-ItVaCq0cX5GZs",
      }),
    }
  );
};
