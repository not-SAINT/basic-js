const chainMaker = {
  getLength() {
    if (this.chain)
      return chain.length;
  },
  addLink(value) {
    if (this.chain) 
      this.chain.push(value !== null ? value : 'null');
    else {
      this.chain = [];
      this.chain.push(value !== null ? value : 'null');
    }

    return this;
  },
  removeLink(position) { 
    if (isNaN(position) || position > this.chain.length || position < 1 || position - Math.floor > 0) {
      this.chain = undefined;
      throw new Error;
    }     

    this.chain.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    if (this.chain)
      this.chain.reverse();

    return this;
  },
  finishChain() {
    if (this.chain){
      let res = '( ' + this.chain.join(' )~~( ') + ' )';
      this.chain = undefined;

      return res;
    }
  }
};

module.exports = chainMaker;
