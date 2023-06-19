let count=1

// Execute the showMessage function every 3 seconds
const a = setInterval(showMessage, 3000);

function showMessage() {
  console.log(count);
  count++


if(count>5){
  clearInterval(a);
  }
}