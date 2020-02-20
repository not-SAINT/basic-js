module.exports = class DepthCalculator {

    calculateDepth(arr, res = [], d = 1) {

        if (res.length == 0)
            res.push(d);
    
        arr.forEach(element => {
            if (Object.prototype.toString.apply(element) == '[object Array]') {
                res.push(d + 1);
                this.calculateDepth(element, res, d + 1);
            }
        });
    
        return Math.max(...res);        
    }
};