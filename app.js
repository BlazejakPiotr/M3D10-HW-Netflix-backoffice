const endpoint = "https://striveschool-api.herokuapp.com/api/movies/";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjYyZjJkNTI2MjAwMTViNmRjOTUiLCJpYXQiOjE2MjkyODc5ODMsImV4cCI6MTYzMDQ5NzU4M30.nNXVsU3Xm3rtBjwRiDZJUn8LcZawq-ItVaCq0cX5GZs";
const genereArr = ["Comedy", "Sci-Fi", "Action"];
const movieId = new URLSearchParams(location.search).get("id");

const loadMovies = async () => {
  for (let genere of genereArr) {
    let response = await fetch(endpoint + genere, {
      headers: {
        Authorization: token,
      },
    });
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
       <h6>${element.name}</h6><a onclick="editMovie('${element._id}')"><i class="fas fa-edit"></i></a> <a onclick="deleteMovie('${element._id}')"><i class="fas fa-trash-alt"></button></i>
       <small><i>Genere: ${element.category}</i></small>
       `;
    list.appendChild(movieNode);
  });
}

window.onload = async () => {
  loadMovies();
  if (movieId) {
    document.getElementById("subtitle").innerText = "Edit Movie";
    document.getElementById("submit").innerText = "Edit Movie";
    const response = await fetch(endpoint + movieId, {
      method: "PUT",
      headers: {
        Authorization: token,
      },
    });

    const movieDetails = await response.json();
    document.getElementById("genere").value = movieDetails.category;
    document.getElementById("name").value = movieDetails.name;
    document.getElementById("description").value = movieDetails.description;
    document.getElementById("img").value = movieDetails.imageUrl;
    let form = document.getElementsByTagName("form")[1];
    form.setAttribute("onsubmit", "");
  } else {
    document.getElementById("subtitle").innerText = "Add new movie";
  }
};

const deleteMovie = async (id) => {
  try {
    const response = await fetch(endpoint + id, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });
    if (response.ok) {
      const deletedMovie = await response.json();
      alert("success" + deletedMovie._id);
    }
  } catch (err) {
    console.log("something went wrong");
  }
};

const editMovie = async (id) => {
  alert("hi");
  window.location.assign("./backoffice.html?id=" + id);
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
