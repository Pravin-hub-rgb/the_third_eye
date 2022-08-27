const btn = document.querySelector('#dadJokeBtn');
const ul = document.querySelector('.jokeUl');
btn.addEventListener('click',async () => {
    try{
        const config = { headers: {Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/',config)
        console.log(res)
        const li = document.createElement('li');
        li.textContent=res.data.joke;
        ul.append(li);
    } catch (e) {
        console.log(e)
        console.log('jokes are not loading');
    }
    
})