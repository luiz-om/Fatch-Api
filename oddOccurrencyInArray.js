function encontraIsolado(vetor){
    let sorted = vetor.sort();
    let odd;
    sorted.forEach((element, index) => {
        let thisElement = sorted[index];
        let nextEle = sorted[index +1];

        if (thisElement == nextEle){
            index++;
        } else {
            odd = thisElement;
        }
    })
    return odd;
    
}
console.log(encontraIsolado(["a", "b", "a", "a", "c", "b"]));