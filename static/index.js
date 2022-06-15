function test(){
    fetch('http://127.0.0.1:6400/test').then(data=>data.json()).then(data=>console.log(data));
}

test()