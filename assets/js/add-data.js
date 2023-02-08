const validatePic = () => {
    const picture = document.querySelector('#pic');
    const path = picture.value;
    const validExtensionRgx = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    if (!validExtensionRgx.exec(path)) {
        alert("Image is invalid! Uploaded file must be in .jpg, .jpeg, .png, or .gif");
        return false;
    } else {
        if (picture.files && picture.files[0]) {
            const readFile = new FileReader();
            readFile.onload = function(e) {
                const previewImage = document.querySelector('.preview');
                previewImage.innerHTML = '<img src="' + e.target.result + '">';
            };
            readFile.readAsDataURL(picture.files[0]);
        }
    }
}