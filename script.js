// const canvas = document.getElementById("ImageCanvas");
// const canv = canvas.getContext("2d");
function changeText() {
    let catText = document.getElementById("userInput").value.split("\n")
    console.log(catText);
    // let catText = document.getElementById("userInput").value;
    return catText;
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
    text = changeText();
    image = getImage();
    var frame = document.getElementById('ImageCanvas');
    var canvas = frame.getContext('2d');
    // console.log(image);
    // console.log(canvas);
    // console.log(canvas)
    
    let lineMargin = 80;
    image.onload = function() { //buffer to let image load. This took too long to figure out...
        // console.log(this.width + 'x' + this.height);
        frame.width = this.width;
        frame.height = this.height;
        canvas.drawImage(this, 0,0);
        canvas.font = "70px Impact";
        canvas.fillStyle = "white";
        canvas.strokeStyle = "black";
        for (let i = 0; i < text.length; i++) {
            canvas.fillText(text[i],10,lineMargin * (i+1), frame.width-20);
        }
    }
    // console.log(canvas);
}


