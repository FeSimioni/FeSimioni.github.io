function toggleMode() {
    const html = document.documentElement

    html.classList.toggle("light")

    // Pegar a TAG imagem = img
    const img = document.querySelector("#profile img")
    const alt = document.querySelector("#profile img")

    // substituir a imagem (condição IF)
    if (html.classList.contains('light')) {

        //se tiver light mode adicionar a imagem lighr
        img.setAttribute("src", "./avatar-light.png")
        alt.setAttribute("alt", 'Felipe de bigode rindo levemente')

    }
    //se tiver sem light mode manter a imagem de cavanhaque teste do segundo commit 
    else {
        img.setAttribute("src", "./rostoFe.png")
        alt.setAttribute("alt", 'Felipe de cavanhaque e sorrindo levemente')
    }


}