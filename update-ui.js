function setup() {
    document.body.style.setProperty('--scrollbar-width', (window.innerWidth - document.body.clientWidth) + 'px')
    update();
}

function update() {
    var earrings = document.getElementById("earrings").checked;
    var glasses = document.getElementById("glasses").checked;
    var hat = document.getElementById("hat").checked;
    var necklace = document.getElementById("necklace").checked;
    var tattoo = document.getElementById("tattoo").checked;
    var hair = document.querySelector('input[name="toggle_option"]:checked').id;
    var image_ids = document.getElementsByClassName("leader");
    for (var i = 0; i < image_ids.length; i++) {
        var image = image_ids[i];
        var earrings_match = (image.getAttribute("data-earrings") == "true") === earrings;
        var glasses_match = (image.getAttribute("data-glasses") == "true") === glasses;
        var hat_match = (image.getAttribute("data-hat") == "true") === hat;
        var necklace_match = (image.getAttribute("data-necklace") == "true") === necklace;
        var tattoo_match = (image.getAttribute("data-tattoo") == "true") === tattoo;
        var hair_match = image.getAttribute("data-hair") == hair || hair == "any";
        if (earrings_match && glasses_match && hat_match && necklace_match && tattoo_match && hair_match) {
            // image.style.display = "flex";
            image.style = "width: var(--leader-image-width); margin: 0 var(--space); opacity: 1;";
        } else {
            // image.style.display = "none";
            image.style = "width: 0; margin: 0 0; opacity: 0;";
        }
    }
}
