function area(largura,altura){
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`);
    } else {
        return area
    }
}

console.log(area(2,2)); // 4
console.log(area(2)); // NaN
console.log(area()); // NaN
console.log(area(2,2,4,4,7)); // ele permite, mas so pega os dois primeiros e ignora o resto
console.log(area(5,5));