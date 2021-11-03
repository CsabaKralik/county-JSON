function display_Info() {
    let name = peru.name.official;
    let nameh1 = document.createElement("h1");
    nameh1.textContent = name;
    document.body.append(nameh1);
}
window.addEventListener("load", display_Info);