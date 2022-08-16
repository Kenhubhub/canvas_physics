
let canvas = document.querySelector("canvas"),
    c = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    newVector = new vector(100,100);
    let acceleration = new vector(0,0);
    let particles = [];
    let position = new vector(width/2,height/2);
    let velocity = new vector(0,0);
    let newParticle = new particle(position,velocity,c);
    let thrust = new vector(0,0);
    let angle =0;
document.body.addEventListener("keydown", e =>{
    console.log(e.key)
    switch(e.key){
        case "ArrowDown":
            thrust.y = 0.1;
            break;
        case "ArrowUp":
            thrust.y = -0.1;
            break;
        case "ArrowLeft":
            thrust.x = -0.1;
            break;
        case "ArrowRight":
            thrust.x = 0.1;
            break;
    }
})
document.body.addEventListener("keyup", e =>{
    
    switch(e.key){
        case "ArrowDown":
            thrust.y = 0;
            break;
        case "ArrowUp":
            thrust.y = 0;
            break;
        case "ArrowLeft":
            thrust.x = 0;
            break;
        case "ArrowRight":
            thrust.x = 0;
            break;
    }
    
})
let newShip = new ship(position,velocity,c,0);
const render = ()=>{
    c.clearRect(0,0,width,height);
    c.save();
    // newParticle.accelerate(thrust);
    
    if(newShip.position.x < 0){
       
        newShip.position.x = width;
    }else if(newShip.position.x > width){
        newShip.position.x = 0;
    }
    if(newShip.position.y < 0){
        newShip.position.y = height;
    }else if(newShip.position.y > height){
        newShip.position.y = 0;
    }
    // newParticle.update();
    // newParticle.render();
    newShip.render();
    newShip.accelerate(thrust);
    newShip.update();
    requestAnimationFrame(render);
}
render();
