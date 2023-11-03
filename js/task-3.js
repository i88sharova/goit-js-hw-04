 function getElementWidth(content,padding,border)
 {
    let funcContent=Number.parseFloat(content);
    let funcPadding=Number.parseFloat(padding);
    let funcBorder=Number.parseFloat(border);
    return (funcContent+2*funcPadding+2*funcBorder);
 }
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200