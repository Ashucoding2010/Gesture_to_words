Webcam.set({

    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera")
Webcam.attach("#camera")

function click_me() {

    Webcam.snap(

        function (data_uri) {
            document.getElementById("result").innerHTML = "<img id='captured_image' src= ' " + data_uri + " ' > ";
        }


    )

}

console.log("ml5", ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/x59_rIP94/model.json", modelLoaded)

function modelLoaded() {

    console.log("model loaded sucessfulley")


}

function check() {

    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);


}

function gotResult(error, results) {

    if (error) {

        console.error(error)
    } else {

        console.log(results)
        document.getElementById("result_emotion_name").innerHTML = results[0].label
        a1 = results[0].label
        if (a1 == "thumbs up") {
            document.getElementById("update_emoji").innerHTML = "&#128077;";

        }

        if (a1 == "victory or peace") {
            document.getElementById("update_emoji").innerHTML = "&#9996;";

        }

        if (a1 == "punch or fist") {
            document.getElementById("update_emoji").innerHTML = "&#9994;";

        }


        if (a1 == "Hi - five") {
            document.getElementById("update_emoji").innerHTML = "&#9995;";

        }



    }
}