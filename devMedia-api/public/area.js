function Square(a){
    function area(){
        return a*a;
    }

    return {
        area:area
    }
}

module.exports=Square