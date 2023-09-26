require('dotenv').config();
module.exports = {
  showSearchForm: (req, res) => {
    const query = req.query.query || '';
    res.render('search', { query });
  },
  showSearchResults: async (req, res) => {
    try {
      const query = req.query.query || '';
      let articles = [];
  
      if (query) {
        const apiKey = process.env.NEWS_API_KEY;
        const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
      
        const response = await fetch(apiUrl);
        const data = await response.json();
        articles = data.articles;

        res.render('news', { articles, query });
      }else{
        res.redirect('/');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al mostrar resultados.');
    }
  }
};