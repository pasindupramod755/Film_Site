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
                    <p class="card-text" id = "${"date"+i}"></p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="h5 mb-0">$29.99</span>
                        <button class="btn btn-outline-primary"><i class="bi bi-cart-plus"></i> Add to Cart</button>
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

main();







