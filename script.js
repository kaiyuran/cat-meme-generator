// const canvas = document.getElementById("ImageCanvas");
// const canv = canvas.getContext("2d");
function changeText() {
    var catText = document.getElementById("userInput").value;
}

function getImage() {
    let imageNum = Math.floor(Math.random() * 500);
    const image = new Image();
    image.src = `CAT\\CAT_${imageNum}.jpg`;
    // document.getElementById("test").src = image.src;

    // console.log("dimensions",image.naturalWidth, image.naturalHeight);
    return image;
}

function generateMeme() {
    image = getImage();
    var canvas = document.getElementById('ImageCanvas').getContext('2d');
    // console.log(image);
    // console.log(canvas);
    // canvas.width = 500;
    // canvas.height = 500;
    // const canvas = canvas.getContext("2d");
    // console.log(canvas)
    
    image.onload = function() { //buffer to let image load. This took too long to figure out...
        console.log(this.width + 'x' + this.height);
        document.getElementById('ImageCanvas').width = this.width;
        document.getElementById('ImageCanvas').height = this.height;
        canvas.drawImage(this, 0,0);

    }
    // canvas.drawImage(image, 0, 0, canvas.width, canvas.height);

    // console.log(canvas);
}


