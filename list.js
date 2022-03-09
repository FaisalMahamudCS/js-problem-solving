function list(){
    this.listSize=0;
    this.pos=0;
    this.dataStore=[];
    this.clear =clear;
    this.find=find;
    this.toString=this.toString;
    this.remove=remove;
    this.length=length;
}
function length(){
   return this.listSize;
}