console.log("js loaded!");

let fileNameArray = [
    {
        "name": "Inception"
    },
    {
        "name": "Fun"
    },
    {
        "name": "Batman"
    },
    {
        "name": "War"
    },
    {
        "name": "Avengers"
    },
    {
        "name": "Titanic"
    },
    {
        "name": "The Matrix"
    },
    {
        "name": "Iron Man"
    },
    {
        "name": "Spider-Man"
    },
    {
        "name": "Frozen"
    },
    {
        "name": "The Lion King"
    },
    {
        "name": "Jurassic Park"
    }
];


function mainLoad() {
    const setProduct = document.getElementById("product");
    for (let i = 0; i < fileNameArray.length; i++) {
        setProduct.innerHTML += `
             <div class="card h-100 shadow-sm">
                <img src="" class="card-img-top" alt="Product 3" id="${"image" + i}">
                <div class="card-body">
                    <h5 class="card-title" id="${"name" + i}">Inception</h5>
                    <p class="card-text" id = "${"date" + i}"></p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="h5 mb-0" id = "${"rated" + i}"></span>
                        <a href="view.html"><button class="btn btn-outline-primary" onclick="downloadBtn(this.id)" id = "${"download" + i}"><i class="bi bi-cart-plus"></i>Download</button></a>                        
                    </div>
                </div>
            </div>
        `;
    }
}

function ar(index, data) {
    document.getElementById("image" + index).src = data.Poster;
    document.getElementById("name" + index).innerText = data.Title;
    document.getElementById("date" + index).innerText = data.Released;
    document.getElementById("rated" + index).innerText = data.Rated;

}


function main() {
    mainLoad();
    for (let i = 0; i < fileNameArray.length; i++) {
        fetch("https://www.omdbapi.com/?apikey=1c768e4f&t=" + fileNameArray[i].name)
            .then(response => response.json())
            .then(data => {
                ar(i, data);

            });
    }
}




if (window.location.pathname.endsWith("index.html")) {
    main();
}


function downloadBtn(id) {
    console.log(id);
    localStorage.setItem('movieId', id)
    console.log(localStorage.getItem('movieId'))
}

window.onload = function () {
    localStorage.getItem("movieId");
    let number = parseInt(localStorage.getItem("movieId").substring(8));
    fetch("https://www.omdbapi.com/?apikey=1c768e4f&t=" + fileNameArray[number].name)
        .then(response => response.json())
        .then(data => {
            document.getElementById("movieName").innerText = data.Title;
            document.getElementById("movieYear").innerText = `Year - ` + data.Year;
            document.getElementById("movieImage").src = data.Poster;
            document.getElementById("movieGenre").innerText = data.Genre;
            document.getElementById("movieDirector").innerText = data.Director;
            document.getElementById("rateing").innerText = data.Rated;
            document.getElementById("moviePlot").innerText = data.Plot;
        });
}



function searchBtn(name) {
    fetch("https://www.omdbapi.com/?apikey=1c768e4f&t=" + name)
        .then(response => response.json())
        .then(data => {
            if (data.Response == "True") {
                document.getElementById("hmovieName").innerText = data.Title;
                document.getElementById("hmovieYear").innerText = `Year - ` + data.Year;
                document.getElementById("hmovieImage").src = data.Poster;
                document.getElementById("hmovieGenre").innerText = `Genre - ` +data.Genre;
                document.getElementById("hmovieDirector").innerText = `Director - ` +data.Director;
                document.getElementById("hrateing").innerText = `Rating - ` +data.Rated;
                document.getElementById("hmoviePlot").innerText = data.Plot;
            }else{
                document.getElementById("hmovieName").innerText = `Film name is not valid`;
                document.getElementById("hmovieYear").innerText = "";
                document.getElementById("hmovieImage").src = "";
                document.getElementById("hmovieGenre").innerText = "";
                document.getElementById("hmovieDirector").innerText = "";
                document.getElementById("hrateing").innerText = "";
                document.getElementById("hmoviePlot").innerText = "";
            }
        });
}


searchName.addEventListener("keypress", e => {
    if (e.key == 'Enter') {
        console.log(searchName.value);
        searchBtn(searchName.value);
    }
})




