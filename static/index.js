function test(){
    fetch('https://api.abrech.de/test').then(data=>data.json()).then(data=>{console.log(data); console.log('huh')});
    setTimeout(() => {
        test();
    }, 3000);
}

console.log('hä');
test();