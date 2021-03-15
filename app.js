const express = require('express');
const morgan = require('morgan');
// sets up express app
const app = express();

// registers view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// listen for requests
app.listen(3000);

// middleware and static files
app.use(express.static('public'));

app.use(morgan('dev'));



app.get('/', (req, res) => {
    
        const blogs = [
            {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
            {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
            {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
          ];
      

    // renders an ejs view
    res.render('index', { title: 'Home', blogs });


    //res.sendFile('./views/index.html', { root: __dirname });
}); 

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});

    //res.sendFile('./views/about.html', { root: __dirname });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a new blog'});
})

// redirects to /about
// app.get('/about-us', (req, res) => {
//     res.redirect('/about'); 
// });

// 404 page, use acts like a default in a switch
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});

    //res.status(404).sendFile('./views/404.html', { root: __dirname });
})
