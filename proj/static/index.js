function test(){
    fetch('https://api.abrech.de/test').then(data=>data.json()).then(data=>{console.log(data);});
    setTimeout(() => {
        test();
    }, 3000);
}
