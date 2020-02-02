const searchMovie = query => {
    const baseUrl = 'http://api.themoviedb.org/3/search/movie';
    const apiKey = 'e42a273d02161e819c4941fdc0263975'
    const safeQuery = encodeURIComponent(query.trim());

    if (safeQuery) {
        const url = `${baseUrl}?api_key=${apiKey}&query=${safeQuery}`;

        return fetch(url)
            .then(res => res.json())
            .then(jsonRes => normaliseData(jsonRes.results))
            .catch(err => {
                console.log(err);
                return [];
            });
    }
}

const imageUrl = path => (`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${path}`);

const normaliseData = data => {
    return data.map(item => ({
        title: item.title,
        rating: item.vote_average,
        popularity: item.popularity,
        releaseDate: item.release_date,
        image: imageUrl(item.poster_path),
        description: item.overview,
        id: toString(item.id),
    }));
}

export default searchMovie;
