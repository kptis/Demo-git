function Mouse(name){
	//Thay doi lan 1 
	//Van la lan thay doi 1
	this.name= name;
	this.dead = false;

}
Mouse.prototype.die = function(){
	this.dead = true;
};
//Xem git diff  sau khi them dong nay 
//ca dong nay nua 

module.exports = Mouse;

