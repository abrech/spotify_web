function test(){
    fetch('https://172.18.0.6:6400/test').then(data=>data.json()).then(data=>{console.log(data); console.log('huh')});
    setTimeout(() => {
        test();
    }, 3000);
}

console.log('hä');
test();