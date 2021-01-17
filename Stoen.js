class Stone {
    constructor(x,y)
    {

        var option ={
            isStatic:false,
            restitution :0,
            friction :1,
            dencity :1.2
            }
        this.x=x;
        this.y=y;
        this.image = loadImage("stone.png");
        this.body =Bodies .circle(this.x, this.y, this.r, option)
        World.add(world, this.body);

       }
       display(){ 
           push(); 
            translate(this.body.position.x, this.body.position.y); 
            rotate(this.body.angle)
            fill(255,0,255) 
            imageMode(CENTER);
            ellipseMode(CENTER);
            image(this.image, 0,0,this.r*2, this.r*2) 
            pop(); 
            }































}