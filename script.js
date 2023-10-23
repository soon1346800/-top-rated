const APIURL =
  "https://api.themoviedb.org/3/movie/top_rated?&api_key=8172f03c96ba74084086d2a8724c2989&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w500";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=8172f03c96ba74084086d2a8724c2989&query=";

  const main = document.getElementById("main");
  const form = document.getElementById("form");
  const search = document.getElementById("search");
  
  const getMovies = async (url) => {
    const resp = await fetch(url);
    const respData = await resp.json();
  
    console.log(respData);
  
    showMovies(respData.results);
  };
  
  const showMovies = (movies) => {
    main.innerHTML = "";
  
    movies.forEach((movie) => {
      const { poster_path, title, vote_average, overview } = movie;
  
      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");
  
      movieEl.innerHTML = `
        <img
          src="${IMGPATH + poster_path}"
          alt="${title}"
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span>${vote_average}</span>
        </div>
        <div class="overview">
          ${overview}
        <div>`;
      main.appendChild(movieEl);
    });
  };
  
  getMovies(APIURL);
  
  function functionAlert() {
    alert("영화 ID : ")}
