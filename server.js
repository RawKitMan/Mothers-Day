const express = require('express'),
    path= require('path');
    PORT=process.env.PORT || 3001,
    app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'mothers-day/build')))
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/mothers-day/build/index.html'))
});

app.listen(PORT, () =>
    console.log(`Listening on port ${PORT}`));