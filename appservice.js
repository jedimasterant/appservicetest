const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
    <html>
        <body>
            <form action="/calculate" method="post">
                <input type="text" name="expression">
                <input type="submit" value="Calculate">
            </form>
        </body>
    </html>
    `);
});

app.post('/calculate', (req, res) => {
    const expression = req.body.expression;
    try {
        const result = eval(expression);
        res.send(result.toString());
    } catch (err) {
        res.send('Invalid expression');
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
