const jsConfetti = new JSConfetti()
console.log(jsConfetti)

function changeTopText() {
    var topText = document.getElementById("topText").value.split("\n")
    return topText;
}

function changeBotText() {
    var botText = document.getElementById("botText").value.split("\n")
    return botText;
}

function getImage() {
    let imageNum = Math.floor(Math.random() * 500);
    const image = new Image();
    image.src = `CAT\\CAT_${imageNum}.jpg`;
    // image.src = "test500.png"
    // document.getElementById("test").src = image.src;
    return image;
}

function generateMeme() {
    topText = changeTopText();
    botText = changeBotText();
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
    
    image.onload = function() { //buffer to let image load. This took too long to figure out...
        // console.log(this.width + 'x' + this.height);

        frame.width = this.width;
        frame.height = this.height;
        canvas.drawImage(this, 0,0);
        let fontSize = (40/500)*frame.height;


        canvas.font = `${fontSize}px Impact`;
        canvas.fillStyle = "white";
        canvas.strokeStyle = "black";
        //top text
        for (let i = 0; i < topText.length; i++) {
            canvas.fillText(topText[i],10,(fontSize * i)+fontSize, frame.width-20);
        }
        
        //bottom text
        botText.reverse(); //need to reverse to properly display text in order
        for (let i = 0; i < botText.length; i++) {
            canvas.fillText(botText[i],10, frame.height - (fontSize * i), frame.width-20);
        }
    }
    console.log(jsConfetti)
    jsConfetti.addConfetti({
        emojis: ['🐈', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '🐱', '🐈‍⬛']
    });
}

function downloadMeme() {
    var canvas = document.getElementById('ImageCanvas');
    var image = canvas.toDataURL("image/jpg");
    var link = document.createElement('a');
    link.href = image;
    link.download = "meme.jpg";
    link.click().then(() => console.log("conf"));
}
