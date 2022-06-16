function test(){
    fetch('https://api.abrech.de/get_top_uris/30').then(data=>data.json()).then(data=>{console.log(data);});
    setTimeout(() => {
        test();
    }, 3000);
}
