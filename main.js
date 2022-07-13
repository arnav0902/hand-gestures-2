Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);

function modelLoaded(){
    console.log("model is loaded");
}
console.log('ml5 version:',ml5.version);
function takeSnapshot(){    
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'"/>';
    });
}
function speak(){
    var synth=window.SpeechSynthesis;
    speakdata_1="the first prediction is"+prediction_1;
    speakdata_1="the first prediction is"+prediction_1;

    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}
