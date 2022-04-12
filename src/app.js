const express = require("express");
const app = express();
const port = 3000;
const hbs = require("hbs");
const path = require("path");



staticPath = path.join(__dirname , "../public");
template_path=path.join(__dirname, "../templates/view");
partial_path=path.join(__dirname, "../templates/partials");

app.use(express.static(staticPath));

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partial_path);

app.get("/" , (req, res) =>
{
    res.render('index');
})

app.get("/about" , (req, res) =>
{
    res.render('about');
})

app.get("/weather" , (req, res) =>
{
    res.render('weather');
})

app.get("/*" , (req, res) =>
{
    res.render('404error', {
        errorMsg : "OOps! Page not found..",
    } );
})


app.listen(port , () => {
    console.log(`Listening to port no ${port}..`);
})