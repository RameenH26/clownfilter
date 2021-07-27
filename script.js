function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(485, 100);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/WxATueILz/model.json', modelLoaded);
}
function draw() {
image(video, 0, 0, 300, 300);
classifier.classify(video, gotResult);
}
function modelLoaded() {
    console.log("model is loaded");
}
function gotResult(error, results) {
 if(error) {
     console.log(error);
 } else {
     console.log(results);
     document.getElementById("object_result_name").innerHTML = results[0].label;
     document.getElementById("object_accuracy_name").innerHTML = results[0].confidence.toFixed(3);
 }
}