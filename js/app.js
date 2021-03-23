var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=845024cb2f20a2bbaba2bd37eddadafc&language=en-US&page=1", requestOptions)
    .then(response => response.json())
    .then(movies => showMovies(movies.results))
    .catch(error => console.log('error', error));
  
  
  
  showMovies = movies => {
    const movieDiv = document.querySelector(`#movies`);
    var index = 1;
    movies.forEach(movie => {
      const movieElement = document.createElement('div');
      const movieTitle = document.createElement('h6');
      const moviePoster = document.createElement('img');
      
      movieElement.id = 'movie' + index;
      movieElement.className = 'column';
      movieTitle.innerText = movie.title;
      moviePoster.id = "poster";
      moviePoster.src = 'https://image.tmdb.org/t/p/original/' + movie.poster_path;
      
      movieDiv.append(movieElement);
      movieElement.append(moviePoster);
      movieElement.append(movieTitle);
      
      index++;
    });
    
  }
  
  