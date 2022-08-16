class vector{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    add(v2){
        
        let newVector = new vector()
        newVector.x = this.x + v2.x;
        newVector.y = this.y + v2.y;
        return newVector;
    }
    sub(v2){
        
        let newVector = new vector()
        newVector.x = this.x - v2.x;
        newVector.y = this.y - v2.y;
        return newVector;
    }
    multiply(v2){
        
        let newVector = new vector()
        newVector.x = this.x * v2.x;
        newVector.y = this.y * v2.y;
        return newVector;
    }
    divide(v2){
        
        let newVector = new vector()
        newVector.x = this.x/v2.x;
        newVector.y = this.y/v2.y;
        return newVector;
    }
}

class particle{
    constructor(position,velocity,context){
        this.position = position;
        this.velocity = velocity;
        this.context = context;
    }
    accelerate(acceleration){
        this.velocity = this.velocity.add(acceleration);
    }
    update(){
        this.position = this.position.add(this.velocity);
    }
    
    render(){
        this.context.beginPath();
        this.context.arc(this.position.x,this.position.y,10,0,Math.PI*2);
        this.context.fill();
    }
    
}

class ship{
    constructor(position,velocity,context){
        this.position = position;
        this.velocity = velocity;
        this.context = context;
        this.angle = 0;
    }
    accelerate(acceleration){
       
        this.velocity = this.velocity.add(acceleration);
    }
    update(){
        this.position = this.position.add(this.velocity);
    }
    
    render(){
        console.log(this.position.x)
        this.context.translate(this.position.x,this.position.y);
        this.context.rotate(this.angle);
        this.context.beginPath();
       this.context.moveTo(10,0);
       this.context.lineTo(-10,-7);
    this.context.lineTo(-10,7);
        this.context.lineTo(10,0);
        this.context.stroke();
        this.context.restore();
    }
    
}


