const express = require('express');
const next = require('next');
const path = require('path');
const bodyParser = require('body-parser');
const keys = require("./server/config/keys");
const stripe = require('stripe')(keys.stripeSecretKey);

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    // Static image files
    // https://github.com/zeit/next.js/tree/4.2.3#user-content-static-file-serving-eg-images
    server.use('/images', express.static(path.join(__dirname, 'images'), {
        maxAge: dev ? '0' : '365d'
    }));
    // server.use(express.static('/public'));
    // server.use('/public/assets/fonts/HelveticaNeueLTProEx.otf', express.static(path.join(__dirname, 'fonts')));
    // app.use(express.static(path.join(__dirname, '/public/assets/fonts/HelveticaNeueLTProEx.otf')));
    //  server.use(express.static(path.join(__dirname, '/public/assets/fonts/HelveticaNeueLTProEx.otf')));
    // server.use(express.static(path.join(__dirname, '/public/assets/fonts/')));
    // server.use(express.static(path.join(__dirname, '/public')));
    // server.use('/static', express.static(__dirname + '/public'));

    // app.use('/public/assets/fonts/HelveticaNeueLTProEx', express.static('/static'));
    // server.use('/public/assets/fonts/HelveticaNeueLTProEx', express.static('/static'));




    // server.use('/static', express.static('./static'));
    // // server.use('/public/assets/fonts/HelveticaNeueLTProEx.otf',express.static(path.join(__dirname),'fonts'));

    // // app.use('/public/assets/font', express.static(__dirname+'/public'));
    // // server.use('/')
    // server.use('/static',express.static(path.join(__dirname),'./static'));

    server.use(bodyParser.json());

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    server.get('/search/:key/:search/:nearIn', (req, res) => { 
        console.log('REQUEST => ',req)
        const mergedQuery = Object.assign({}, req.query, req.params)
        return app.render(req, res, '/search', mergedQuery);
    })

    server.post('/api/stripe/checkout', async (req, res) => {
        await stripe.charges.create({
            amount: req.body.amount,
            currency: 'usd',
            description: 'React Next eCommerce Templates',
            source: req.body.token.id
        });
        res.send({})
    });

    const PORT = process.env.PORT || 3000;

    server.listen(PORT, (err) => {
        if (err) throw err
        console.log(`> Read on http://localhost:${PORT}`)
    });
})