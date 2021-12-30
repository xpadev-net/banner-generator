class CanvasDrawer {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.backgroundScale=1;
        this.backgroundPosX=0;
        this.backgroundPosY=0;
        this.cardCornerRadius=50;
        this.cardBackground="#ffffff";
        this.cardMargin = 50;
        this.updateCanvas()
    }
    setBackground(img){
        this.backgroundImage = img;
        this.updateCanvas();
    }
    setBackgroundScale(scale){
        this.backgroundScale=scale;
        this.updateCanvas();
    }
    setBackgroundPosX(scale){
        this.backgroundPosX=scale;
        this.updateCanvas();
    }
    setBackgroundPosY(scale){
        this.backgroundPosY=scale;
        this.updateCanvas();
    }
    setCardBackground(color){
        this.cardBackground=color;
        this.updateCanvas();
    }
    setCardMargin(margin){
        this.cardMargin=Number(margin);
        this.updateCanvas();
    }
    setCardRadius(radius){
        this.cardCornerRadius=Number(radius);
        this.updateCanvas();
    }
    drawsq(posX,posY,width,height,radius) {
        this.context.beginPath();
        this.context.lineWidth = 1;
        this.context.moveTo(posX,posY + radius);
        this.context.arc(posX+radius,posY+height-radius,radius,Math.PI,Math.PI*0.5,true);
        this.context.arc(posX+width-radius,posY+height-radius,radius,Math.PI*0.5,0,1);
        this.context.arc(posX+width-radius,posY+radius,radius,0,Math.PI*1.5,1);
        this.context.arc(posX+radius,posX+radius,radius,Math.PI*1.5,Math.PI,1);
        this.context.closePath();
        this.context.stroke();
        this.context.fill();
    }
    updateCanvas(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.context.fillStyle="#c0c0c0";
        this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
        if (this.backgroundImage){
            this.context.drawImage(
                this.backgroundImage,0,0,this.backgroundImage.width,this.backgroundImage.height,
                this.backgroundPosX*this.canvas.width,this.backgroundPosY*this.canvas.height,
                this.backgroundImage.width*this.backgroundScale,
                this.backgroundImage.height*this.backgroundScale);
        }
        this.context.fillStyle=this.cardBackground;
        this.context.strokeStyle=this.cardBackground;
        if (this.cardCornerRadius>0){
            this.drawsq(this.cardMargin,this.cardMargin,this.canvas.width-this.cardMargin*2,this.canvas.height-this.cardMargin*2,this.cardCornerRadius);
        }else{
            this.context.fillRect(this.cardMargin,this.cardMargin,this.canvas.width-this.cardMargin*2,this.canvas.height-this.cardMargin*2)
        }
    }
}
export default CanvasDrawer;