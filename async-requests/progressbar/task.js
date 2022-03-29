const inputFile = document.getElementById('file')

inputFile.onchange = function(event) {
    let file = this.files[0];
    const fileName = document.getElementsByClassName('input__wrapper-desc')
    fileName[0].textContent = file.name
    document.getElementById('send').onclick = function() {
        const request = new XMLHttpRequest()
        request.upload.onprogress = function (event) {
            const progress = document.getElementById( 'progress' );
            progress.value = (event.loaded / event.total);
        };
        request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
        request.send(file);
        return false;
    };
};