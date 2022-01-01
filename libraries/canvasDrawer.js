class CanvasDrawer {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.backgroundImage=null;
        this.backgroundScale=1;
        this.backgroundPosX=0;
        this.backgroundPosY=0;
        this.cardCornerRadius=50;
        this.cardBackground="#ffffff";
        this.cardMargin = 50;
        this.cardShadowColor="#000000";
        this.cardShadowBlur=50;
        this.cardShadowOffsetX=0;
        this.cardShadowOffsetY=0;
        this.iconImage=null;
        this.iconRadius=50;
        this.iconScale=1;
        this.iconOffsetX=0;
        this.iconOffsetY=0;
        this.iconBorder=5;
        this.iconShadowColor="#000000";
        this.iconShadowBlur=50;
        this.iconShadowOffsetX=0;
        this.iconShadowOffsetY=0;
        this.nameBig="名前(上)";
        this.nameBigColor="#000000";
        this.nameBigFont=`normal 500 100px MPlusMedium,Arial, "ＭＳ Ｐゴシック", "MS PGothic", MSPGothic, MS-PGothic`;
        this.nameSmall="名前(下)";
        this.nameSmallColor="#000000";
        this.nameSmallFont=`normal 100 20px MPlusLight,Arial, "ＭＳ Ｐゴシック", "MS PGothic", MSPGothic, MS-PGothic`;
        this.links=[{image:null,text:""}];
        this.linksSize=70;
        this.linksFont=`normal 100 35px MPlusLight,Arial, "ＭＳ Ｐゴシック", "MS PGothic", MSPGothic, MS-PGothic`;
        this.skills=[];
        this.context.textBaseline="middle";
        this.updateCanvas();
    }
    drawsq(posX,posY,width,height,radius) {
        if (radius<0){
            radius=0;
        }
        this.context.moveTo(posX,posY + radius);
        this.context.arc(posX+radius,posY+height-radius,radius,Math.PI,Math.PI*0.5,true);
        this.context.arc(posX+width-radius,posY+height-radius,radius,Math.PI*0.5,0,true);
        this.context.arc(posX+width-radius,posY+radius,radius,0,Math.PI*1.5,true);
        this.context.arc(posX+radius,posY+radius,radius,Math.PI*1.5,Math.PI,true);
    }
    updateCanvas(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.context.fillStyle="#c0c0c0";
        this.context.shadowBlur=0;
        this.context.shadowOffsetX=0;
        this.context.shadowOffsetY=0;
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
        this.context.shadowColor=this.cardShadowColor;
        this.context.shadowBlur=this.cardShadowBlur;
        this.context.shadowOffsetX=this.cardShadowOffsetX;
        this.context.shadowOffsetY=this.cardShadowOffsetY;
        if (this.cardCornerRadius>0){
            this.context.beginPath();
            this.context.lineWidth = 1;
            this.drawsq(this.cardMargin,this.cardMargin,this.canvas.width-this.cardMargin*2,this.canvas.height-this.cardMargin*2,this.cardCornerRadius);
            this.context.closePath();
            this.context.stroke();
            this.context.fill();
        }else{
            this.context.fillRect(this.cardMargin,this.cardMargin,this.canvas.width-this.cardMargin*2,this.canvas.height-this.cardMargin*2)
        }
        this.context.shadowColor=this.iconShadowColor;
        this.context.shadowBlur=this.iconShadowBlur;
        this.context.shadowOffsetX=this.iconShadowOffsetX;
        this.context.shadowOffsetY=this.iconShadowOffsetY;
        this.context.beginPath();
        this.context.lineWidth = 1;
        this.drawsq(200,100,300,300,this.iconRadius);
        this.context.closePath();
        this.context.stroke();
        this.context.fill();
        if (this.iconImage){
            this.context.save();
            this.context.beginPath();
            this.context.lineWidth = 1;
            this.drawsq(200+this.iconBorder,100+this.iconBorder,300-this.iconBorder*2,300-this.iconBorder*2,this.iconRadius-this.iconBorder);
            this.context.clip();
            this.context.drawImage(this.iconImage,0,0,this.iconImage.width,this.iconImage.height,200+this.iconOffsetX*this.iconImage.width,100+this.iconOffsetY*this.iconImage.height,this.iconImage.width*this.iconScale,this.iconImage.height*this.iconScale);
            this.context.restore();
        }
        this.context.shadowBlur=0;
        this.context.shadowOffsetX=0;
        this.context.shadowOffsetY=0;
        this.context.fillStyle=this.nameBigColor;
        this.context.font=this.nameBigFont;
        this.context.fillText(this.nameBig,600,250);
        this.context.fillStyle=this.nameSmallColor;
        this.context.font=this.nameSmallFont;
        this.context.fillText(this.nameSmall,600,330);
        this.context.font=this.linksFont;
        let basePoxY = 250-(this.links.length)*this.linksSize/2;
        for (let i in this.links){
            let value = this.links[i];
            this.context.fillStyle="#ffffff";
            this.context.shadowBlur=5;
            this.context.shadowOffsetX=0;
            this.context.shadowOffsetY=0;
            this.context.beginPath();
            this.context.lineWidth = 1;
            this.drawsq(1075,basePoxY+i*this.linksSize+10,this.linksSize-20,this.linksSize-20,5);
            this.context.closePath();
            this.context.fill();
            if (value.image){
                this.context.save();
                this.context.beginPath();
                this.context.lineWidth = 1;
                this.drawsq(1075,basePoxY+i*this.linksSize+10,this.linksSize-20,this.linksSize-20,5);
                this.context.clip();
                this.context.drawImage(value.image,0,0,value.image.width,value.image.height,1075+value.offsetX*value.image.width,(basePoxY+i*this.linksSize+10)+value.offsetY*value.image.height,value.image.width*value.scale,value.image.height*value.scale);
                this.context.restore();
            }
            this.context.shadowBlur=0;
            this.context.shadowOffsetX=0;
            this.context.shadowOffsetY=0;
            this.context.fillStyle="#000000";
            this.context.fillText(value.text,1140,basePoxY+i*this.linksSize+this.linksSize/2);
        }
    }
}
export default CanvasDrawer;