var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=845024cb2f20a2bbaba2bd37eddadafc&language=en-US&page=1", requestOptions)
    .then(response => response.json())
    .then(movies => showMovies(movies.results))
    .catch(error => console.log('error', error));
  
  
  
  let showMovies = movies => {
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

  function openTab(evt, tabName) {
    // Declare all variables
    var i, tabs, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabs = document.getElementsByClassName("tabs");
    for (i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("main-nav-link");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += "active";
  }

 
openTab(onload,  'popular-movies');
  
  