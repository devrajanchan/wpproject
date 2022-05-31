const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '5434d24419abc5f7555ad22a5570f053',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;