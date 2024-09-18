let clickornot = true;
// I was trying to use clickcount, but not working.
let button;
let image;
let text;
let text02;
let text03;

button = document.getElementById('button');
image = document.getElementById('image');
text = document.getElementById('text');
text02 = document.getElementById('text02');
text03 = document.getElementById('text03');

button.addEventListener("click", function() {
    if (clickornot === true) {  
        image.src = "1701.jpg";
        text.textContent = "The 2002 Chinese football team: ";
        text02.textContent = "This is our first time in the World Cup, a great start! ";
        text03.textContent = "";
    } else {
        image.src = "1702.jpg"; 
        text.textContent = "The 2024 Chinese football team:";
        text02.textContent = "We lost 0-7 to the Japanese team. ";
        text03.textContent = "It must be because I didn’t eat enough sea cucumbers";
    }
    clickornot = !clickornot; 
});