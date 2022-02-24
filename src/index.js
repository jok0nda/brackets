module.exports = 
function check(str, bracketsConfig) {
  let arr = str.split('');
  let open = [];
  let close = {};
  let stack = [];

  if (arr.length % 2 !== 0) {
    return false
  } else {
    for (let i = 0; i < bracketsConfig.length; i++) {
        open.push(bracketsConfig[i][0])
        close[bracketsConfig[i][1]] = bracketsConfig[i][0]
    }
    
    for (let i = 0; i < arr.length; i++) {
      let currentSymbol = arr[i];
      
      if (currentSymbol === close[currentSymbol] && stack[stack.length - 1] === currentSymbol) {
        stack.pop();
      } else  if (open.includes(currentSymbol)) {
        stack.push(currentSymbol)
      } else {
        if (stack.length === 0) {
          return false
        }
        let topElement = stack[stack.length - 1];

        if (close[currentSymbol] === topElement) {
          stack.pop();
        } else {
          return false
        }
      }
    } 
    return stack.length === 0

  } 
}

