var world = document.getElementById('world');
var context = world.getContext("2d");

function resize() {
  
    world.width = window.innerWidth;
    world.height = window.innerHeight;
  
};

window.addEventListener('resize', resize, false);


window.onload = function(){
  resize();
}

var fighters = [];
var ship = {

  init:function(){
    this.pos = {x:window.innerWidth / 2, y:window.innerHeight / 2};
    this.vel = {x:0, y:0}
    this.radius = Math.random() * 10;
    this.color = '#FFFFFF';
  },
  
  update:function(){
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    
    this.vel.x += Math.random() * 0.8 - Math.random() * 0.8;
    this.vel.y += Math.random() * 0.8 - Math.random() * 0.8;
    
    if(this.pos.x > window.innerWidth || this.pos.x < 0) {
      this.vel.x *= -1;
    }
    
    if(this.pos.y > window.innerWidth || this.pos.y < 0) {
      this.vel.y *= -1;
    }
    
    this.radius += (Math.random() - Math.random());
    if(this.radius < 0) this.radius = 0;
    
    if(this.radius > 10) this.radius = 0;
    
  }
}

function createFighters(){
  var i = 500;
  
  for(i; i > -1; --i) {
    var fighter = Object.create(ship);
    fighter.init();
    fighters.push(fighter);
  }
}

createFighters();


loop();

function loop(){
  
  updateFighters();
  drawFighters();
  
  window.requestAnimationFrame(loop);
}

function updateFighters() {
  var i = fighters.length - 1;
  
  for(i; i > -1; --i) {
    fighters[i].update();
  }
}

function drawFighters() {
  
  context.globalAlpha = 0.02;
  //context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  
  var i = fighters.length - 1;
  
  for(i; i > -1; --i) {

    var fighter = fighters[i];
    context.beginPath();
    context.arc(fighter.pos.x, fighter.pos.y, fighter.radius, 0, 2 * Math.PI);
    context.closePath();

    context.lineWidth = 3;
    context.strokeStyle = fighter.color;
    context.stroke();

    // the fill color
    context.fillStyle = "#000000";
    context.fill();


  }
}