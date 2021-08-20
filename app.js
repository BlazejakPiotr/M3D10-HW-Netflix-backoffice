const loadData = async () => {
  let response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjYyZjJkNTI2MjAwMTViNmRjOTUiLCJpYXQiOjE2MjkyODc5ODMsImV4cCI6MTYzMDQ5NzU4M30.nNXVsU3Xm3rtBjwRiDZJUn8LcZawq-ItVaCq0cX5GZs",
      },
    }
  );
  let data = await response.json();
  console.log(data);
};

window.onload = () => {
  loadData();
};
