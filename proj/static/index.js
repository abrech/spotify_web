API = "https://api.abrech.de/"
function get_top_songs(){
    limit = document.getElementById('limit-input').value;
    fetch(API + 'get_top_songs/'+limit).then(data=>data.json()).then(data=>{
        ctn = document.getElementById('embed-container');
        ctn.innerHTML = "";
        uris = data['songs'];
        for (let i = 0; i < uris.length; i++){
            ctn.innerHTML += `<p class="top-p">
                <span class="flex-place">${i+1}</span>
                <img src="${uris[i][7]}" class="flex-img"/>
                <span class="flex-song">${uris[i][1]} by ${uris[i][2]}</span>
                <span class="flex-timesplayed">${uris[i][8]} mal</span>
                </p>`
        }
    
        });
}

function get_genres(){
    fetch(API + 'get_genres').then(data => data.json()).then(genres_raw => {
        select = document.getElementById('genres');
        checkboxes = document.getElementById('checkboxes');
        checkboxes.innerHTML = "";
        genres = genres_raw['genres'];
        for(let i = 0; i < genres.length; i++)
        {
            checkboxes.innerHTML +=
           `<label for="${genres[i]}">
           <input type="checkbox" id="${genres[i]}" />${genres[i]}</label>`;
        }

    })
}

var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

get_top_songs();
get_genres();



// {%for i, entry in enumerate(top_songs)%}
// <p class="top-p">
//     <span class="grid-place">{{i+1}}</span>
//     <iframe class="grid-song" style="border-radius:12px" src="https://open.spotify.com/embed/track/{{entry.split(':')[-1]}}?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
//     <span class="grid-timesplayed">{{entry[-1]}}</span>
// </p>
// {%endfor%}