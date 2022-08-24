console.log("anashe");
let slider;
let nm = 0;
let nivelesADN = ["Molécula de ADN", "Nucelosoma", "Solenoide", "Cromosoma"];

let descripciones = ["Es una cadena de doble hélice de la molécula de ADN",
                     
                    "Este nivel esta constituido por nucleosomas,\n las unidades de enrolamiento de la cromatina.\n Estructuralmente esta fibra de cromatina esta constituida\n por una sucesión de nucleosomas. Cada una\n esta formada por histonas donde el ADN\n se enrrolla dando 2 vueltas. Una quinta\n histona, se sella la unidad y permite la conexión entre nucleosomas",
                     
                    "A este nivel lo constituyen solenoides.\n Se forma por el enrollamiento sobre sí misma de la fibra.\n En cada vuelta hay seis nucleosomas y seis histonas\n que se agrupan entre sí y constituyen\n el eje central del solenoide.",
                     
                    "En la fibra anterior se forma una serie de bucles, denominados\n dominios estructurales en forma de bucle.\n Edtos bucles se superenrollan y forman los cromosomas,\n y que consiste en dos moléculas den ADN,\n unidas por una estructura llamada centromero o constricción primaria. "]
let ADN;
let img, img1, img2, img3, imagenes;

function preload() {
  img = loadImage('https://media.istockphoto.com/photos/molecules-picture-id450853983?k=20&m=450853983&s=612x612&w=0&h=jBzIj12NKONTgVA0TNv-InzRnbU_oRMQKxW6t7Qr89k=');
 
  img1 =loadImage('https://media.istockphoto.com/photos/main-epigenetic-modifications-performed-by-the-histone-dna-methyl-picture-id1393830516?k=20&m=1393830516&s=612x612&w=0&h=UMyhSrc-kXLkIrw4glOEyM6Z-jkDH2JmK7XJGdK1Lvw=');
 
  img2 = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhgxDDI6Lm_VFbmYz6VYV4ZegeZzfNe0iUpg&usqp=CAU');
 
  img3 = loadImage('https://static.13.cl/7/sites/default/files/images/ocupload/1630390135_62509.jpeg');
}

function setup() {
  createCanvas(800, 600);

  
 
  imagenes = [img, img1, img2, img3];
 
  desc = createCheckbox('Descripción', false);
  next = createButton('ᐅ');
  next.size(45, 30);
  next.position(width/4 * 3, height/14 );

  next = createButton('ᐊ');
  next.size(45, 30);
  next.position(width/4, height/14);
}

function draw() {
  background(40);
 

 
  opciones();
}

function opciones() {
  if (desc.checked()) {
    descripcion();
  }
}

function descripcion(){
  fill(40);
  noStroke();
  rectMode(RADIUS);
  rect(width/2, height/2, 800 * 0.35, 600 * 0.35);
  fill(220);
  textSize(18);
//  textAlign(RIGHT);
  text("Descripción \n" + descripciones[ADN], width/2, height/2 * 0.35);
}

function empaquetamiento_del_ADN(){
    slider = createSlider(2, 1400, 2, -1);
  slider.position(width/4, height/2 * 1.7);
  slider.style('width', '400px');
    nm = slider.value();
 
    if (nm < 30){
      ADN = 0;
    } else if (nm < 300) {
      ADN = 1;
    } else if (nm < 770) {
      ADN = 2;
    } else {
      ADN = 3;
    }
   
    fill(220);
    imageMode(CENTER);
    image(imagenes[ADN], width/2, height/2, width*0.65, height*0.65);
   
    textSize(32);
    text("nm " + nm, width/2, height/2 * 1.85);
   
    textSize(32);
    textAlign(CENTER);
    text(nivelesADN[ADN], width/2, height/2 * 0.20);
}