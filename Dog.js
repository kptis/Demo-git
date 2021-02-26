function Dog(){
	this.stomach = [];
}
Dog.prototype.eat = function(cat){
	this.stomach.push(cat);
};
//Test using git credential cmd:
// git config --global credential.helper "cache --timeout=18000"
