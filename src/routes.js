const router = require('express').Router()
const youtubers = require('./controllers/api.js')

let novo = new youtubers();

router.get('/', (request, response) => {
	response.json({
		"resposta":"ok"
	})
});

router.get('/youtubers', (request, response) => {
	response.json(novo.youtubers())
});


module.exports = router;

