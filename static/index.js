function test(){
    fetch('http://spotify-data:6400/test').then(data=>data.json()).then(data=>console.log(data));
}

test()