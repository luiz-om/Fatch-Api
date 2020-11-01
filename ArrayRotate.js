function rotacao(V, Q) {
    let index = 0;
    if (V.length > 0){
        while(index < Q){
            V.unshift(V.pop());
            index++;
        }
        return V;
    } else {
        return V;
    } 
}

console.log(rotacao(["A", "B", "C", "D", "E"], 2))