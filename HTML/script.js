function pageLoad() {
    let btn = document.getElementById("count");
    btn.addEventListener("click", (ev) => {
        let o = document.getElementById("output");
        o.value = parseInt(o.value) + 1;
    });
}