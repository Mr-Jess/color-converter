//Input two Primary colors to get its secondary color outcome.
function toCombined(Prim1, Prim2) {
    if (color1==='red' && color2==='yellow'|| color1==='yellow' && color2==='red') {
        return 'Orange'
    } else if (color1==='red' && color2==='blue' || color1==='blue' && color2==='red') {
        return 'Purple'
    } else if (color1==='yellow' && color2==='blue' || color1==='blue' && color2==='yellow') {
        return 'Green'
    } else if (color1===undefined || color2===undefined) {
        return 'Enter two primary colors!'
    }
    return;
}

//Breaks down one secondary color to its two primary colors.
function toBreakDown(Sec1) {
    if (color3==='orange') {
        return 'Red & Yellow'
    } else if (color3==='purple') {
        return 'Red & Blue'
    } else if (color3==='green') {
        return 'Yellow & Blue'
    } else if (color3===undefined) {
        return 'Must enter two primary colors or one secondary color!'
    }
    return;  
}

let color1 = process.argv[2]
let color2 = process.argv[3]
let color3 = process.argv[2]

console.log('Color1: ', color1)
console.log('Color2: ', color2)  
console.log(toCombined(color1, color2));
console.log('Color3:', color3)
console.log(toBreakDown(color3));