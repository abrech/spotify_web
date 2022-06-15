function test(){
    fetch('spotify-data/test').then(data=>data.json()).then(data=>{console.log(data); console.log('huh')});
    setTimeout(() => {
        test();
    }, 3000);
}

console.log('hä');
test();