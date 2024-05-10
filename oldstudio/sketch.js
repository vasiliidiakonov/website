let img1;
let offset = 0;
let easing = 0.05;
var fade1;
var fadeAmount1=1;



function setup() {
  createCanvas(windowWidth, windowHeight);
  picsCreate1();

  fade1=0;

}

function picsCreate1(){
  let pics1=["https://cdn.glitch.global/cb2683d9-7542-47a3-9caa-215bacfe2645/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202022-11-14%20%D0%B2%2015.10.38.png?v=1668431496879","https://cdn.glitch.me/cb2683d9-7542-47a3-9caa-215bacfe2645/videopainting6.gif?v=1668367522630", "https://cdn.glitch.global/cb2683d9-7542-47a3-9caa-215bacfe2645/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202022-04-20%20%D0%B2%2014.54.40.png?v=1650455720783","https://cdn.glitch.global/cb2683d9-7542-47a3-9caa-215bacfe2645/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202022-11-13%20%D0%B2%2022.10.40.png?v=1668370295777"];
  let pic1=random(pics1);
  img1 = loadImage([pic1]);
  //noLoop();
}



function getRandomInt1(max) {
  return Math.floor(Math.random() * max);
}
function getRandomInt2(max) {
  return Math.floor(Math.random() * max);
}



function draw() {
  background(255);
 // picsCreate();
  //image(img, 0, 0); // Display at full opacity
 // let dx = mouseX - img.width / 2 - offset;
 // offset += dx * easing;
  scale(1);
  tint(255, fade1); // Display at half opacity
  //image(img1, 0+windowWidth/scale-img1.width-(windowWidth/scale-img1.width)/2,0+windowHeight/scale-img1.height-(windowHeight/scale-img1.height)/2,(scale*width),(scale*img1.height*width/img1.width));
  image(img1, (windowWidth-img1.width)/2, (windowHeight-img1.height)/2);
  
  if (fade1<0) fadeAmount1=1; 
 
  if (fade1>255) fadeAmount1=-0.07; 
  
  if (fade1<0) picsCreate1(); 
 
  fade1 += fadeAmount1; 
  print(fade1);
  
  
  //background (0);
 // sleep(2000).then(function() {
  //})
  
  
}