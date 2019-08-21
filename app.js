const mailgun = require("mailgun-js");
const DOMAIN = 'https://api.eu.mailgun.net/v3/mg.countdownwow.com';
const mg = mailgun({apiKey: '#####', domain: DOMAIN});
const data = {
	from: 'Excited User <grizlamusic@gmail.com>',
	to: 'andrewcodes404@gmail.com',
	subject: 'Hello',
	text: 'Testing some Mailgun awesomness!'
};
mg.messages().send(data, function (error, body) {
    if (error) {
        console.log(error);
    }
	console.log('body', body);
});