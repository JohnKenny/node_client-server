const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
//const { result } = require('lodash');
const blogRoutes = require('./routes/blogRoutes');

// connect to mongodb
const dbURI = 'mongodb+srv://user34:Termina34@cluster0.xq4sd.mongodb.net/node-blogs?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true}) 
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// sets up express app
const app = express();

// registers view engine
app.set('view engine', 'ejs');
app.set('views', 'views');



// middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true } ));
app.use(morgan('dev'));

//mongo and mongoose routing
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new',
//         snippet: 'about new',
//         body: 'more about'
//     });

//     blog.save()
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// });

// app.get('/all-blogs', (req, res) => {
//    Blog.find()
//    .then((result) => {
//        res.send(result);
//    })
//    .catch((err) => {
//        console.log(err);
//    })
// })

// app.get('/single-blog', (req, res) => {
//     Blog.findById('6050ee6e768ecb2cc4d017af')
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// })

// routes

app.get('/', (req, res) => {
    
        res.redirect('/blogs');
    //res.sendFile('./views/index.html', { root: __dirname });
}); 

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});

    //res.sendFile('./views/about.html', { root: __dirname });
});

// blog routes
app.use('/blogs', blogRoutes);

// redirects to /about
// app.get('/about-us', (req, res) => {
//     res.redirect('/about'); 
// });

// 404 page, use acts like a default in a switch
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});

    //res.status(404).sendFile('./views/404.html', { root: __dirname });
});
