
document.getElementById('upper-case').onclick = function() {
    let element = document.querySelector("textarea");
    element.value = element.value.toUpperCase();
    document.getElementById('my-text').innerHTML = element.toUpperCase();
}

document.getElementById('lower-case').onclick = function() {
    let element = document.querySelector("textarea");
    element.value = element.value.toLowerCase();
    document.getElementById('my-text').innerHTML = element.toLowerCase();
}

document.getElementById('proper-case').onclick = function() {
    let text = document.querySelector("textarea");
    text.value = text.value.toLowerCase();
    const arr = text.value.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    //Join all the elements of the array back into a string
    //using a blank space as a separator
    document.querySelector ("textarea").value = arr.join(" ");
}

document.getElementById('sentence-case').onclick = function() {
    let text = document.getElementById("my-text");
    text.value = text.value.toLowerCase();
    const arr = text.value.split(". ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    //Join all the elements of the array back into a string
    //using a blank space as a separator
    document.querySelector ("textarea").value = arr.join(". ");
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById('save-text-file').onclick = function() {
//document.getElementById("save-text-file").addEventListener("click", download, false);
    download("text.txt", document.querySelector("textarea").value);
}