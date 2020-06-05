fetch('https://xkcd.now.sh/?comic=latest').then(response => {
    console.log(response);
    return response.json();
}) .then(data => {
    console.log(data);
    let imgSrc = data.img
    let div = document.getElementById("main")
    let image = document.createElement("img")
    div.appendChild(image)
    console.log(imgSrc)
    image.src = imgSrc
})
