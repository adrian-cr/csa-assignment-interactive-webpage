const buttons = document.getElementsByClassName("toggle-button");

const toggleShow = (id) => {
  const button = document.getElementById(id);
  const paragraph = document.querySelector(`#${id}`).previousElementSibling;
  const style = paragraph.style.display;
  paragraph.style.display = style=="none"? "block" : "none";
  button.innerText = style=="none"? "See Less" : "See More";
}

Array.from(buttons).forEach(element => {
  element.addEventListener("click", e =>toggleShow(e.target.id))
});
