# strefabeki.js
## bad polish memes right in your node.js project
i don't know what else to say lol, title speaks for itself.


# functions or something
this wonderful package has two functions:
- `getRandomMeme()`
- `getMemeById(id)`


both of them - if successful - return a object.
```js
{
  id: 2137,
  name: 'Już grzeją :D',
  url: 'http://strefa-beki.pl/upload/20150304085056uid1.jpg'
}
```
i'm bad at explaining things lol


# example usage
```js
const strefabeki = require('strefabeki.js')

strefabeki.getRandomMeme().then(meme => {
    console.log(`ID: ${meme.id}`)
    console.log(`Name: ${meme.name}`)
    console.log(`URL: ${meme.url}`)
})
```

or, if you prefer:
```js
const strefabeki = require('strefabeki.js')

async function main() {
    const meme = await strefabeki.getRandomMeme()

    console.log(`ID: ${meme.id}`)
    console.log(`Name: ${meme.name}`)
    console.log(`URL: ${meme.url}`)
}

main()
```