const fetch = require('node-fetch');

exports.getRandomMeme = async function () {
    let result;
    await fetch('http://strefa-beki.pl/random.php')
        .then(res => res.text())
        .then(body => {
            try {
                let id = Number(body.split('<meta property="og:url" content="http://strefa-beki.pl/img.php?id=')[1].toString().split('"')[0]);
                let url = body.split('<!-- Begin Object -->')[1].toString().split('<img src="')[1].toString().split('"')[0].toString();
                let name = body.split('<!-- Begin Object -->')[1].toString().split('title="')[1].toString().split('"')[0].toString();
                result = {
                    id: id,
                    name: name,
                    url: url
                }
            } catch (err) {
                throw new Error(`Something broke while scraping the page! ${err.message}`);
            }
        });
    return result;
}

exports.getMemeById = async function(id) {
    let result
    await fetch(`http://strefa-beki.pl/img.php?id=${id}`)
    .then(res => res.text())
    .then(body => {
        if (!body.toString().includes('og:url')) throw new Error(`No such meme: ${id}`);
        try {
            let id = Number(body.split('<meta property="og:url" content="http://strefa-beki.pl/img.php?id=')[1].toString().split('"')[0]);
            let url = body.split('<!-- Begin Object -->')[1].toString().split('<img src="')[1].toString().split('"')[0].toString();
            let name = body.split('<!-- Begin Object -->')[1].toString().split('title="')[1].toString().split('"')[0].toString();
            result = {
                id: id,
                name: name,
                url: url
            };
        } catch (err) {
            throw new Error(`Something broke while scraping the page! ${err.message}`);
        };
    });
    return result
}