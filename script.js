function changeText() {
    var catText = document.getElementById("userInput").value.split("\n")
    // console.log(catText);
    return catText;
}

function getImage() {
    let imageNum = Math.floor(Math.random() * 500);
    const image = new Image();
    image.src = `CAT\\CAT_${imageNum}.jpg`;
    // document.getElementById("test").src = image.src;
    return image;
}

function generateMeme() {
    text = changeText();
    if (document.getElementById("imgURL").value == "") {
        image = getImage();
    }
    else {
        image = new Image();
        image.src = document.getElementById("imgURL").value;
        image.onerror = function() {
            alert("Invalid URL");
        }
    };

    var frame = document.getElementById('ImageCanvas');
    var canvas = frame.getContext('2d');
    // console.log(image);
    // console.log(canvas);
    
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


