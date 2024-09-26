function xss() {
    var user = document.getElementById("userinput").value;

    const text = document.createElement("div");
    text.innerHTML = user;
    text.id = "box"

    document.cookie = "id=pull this";

    // Append to body:
    document.body.appendChild(text);
}

function colors(){
    var R = document.getElementById("R").value;
    var G = document.getElementById("G").value;
    var B = document.getElementById("B").value;

    //let C = color(R,G,B);

    document.getElementById("divvywivvy").innerHTML = 'current rgb value is: ' + R + ',' + G + ',' + B;

    document.body.className = redBackground
}

function instagram() {
    const img = document.createElement("img");
    img.src = "";

    document.body.appendChild(img);

}

function me() {
    var text = document.getElementById("sigma")
    text.innerText = "Me"
}

function Code() {
    var text = document.getElementById("sigma")
    text.innerText = "code"
}

function guthib() {
    var text = document.getElementById("sigma")
    text.innerText = "guthib"
}
