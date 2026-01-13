function toggleMode() {
  const html = document.documentElement

  //if (html.classList.contains("light")) {
  //html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar imagem4
    img.setAttribute("src", "./assets/assets/avatar4.png")
  } else {
    //se tiver sem light mode, manter imagem3
    img.setAttribute("src", "./assets/assets/Avatar3.png")
  }

  const alt = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    alt.setAttribute("alt", "./assets/assets/avatar4.png")
  } else {
    alt.setAttribute("alt", "./assets/assets/Avatar3.png")
  }
}
