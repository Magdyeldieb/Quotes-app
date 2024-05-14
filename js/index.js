
var parentQuote=document.getElementById("parent-quote");

var i=0;
function changeQuote(){
    var arrQuotes =[` <p>“Be yourself; everyone else is already taken.”</p>
    <p>― Oscar Wilde</p>`,
    ` <p>“So many books, so little time.”</p>
    <p>― Bernard M. Baruch</p>`,    
    ` <p>“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”</p>
    <p>― William W. Purkey</p>`,    
    ` <p>“A friend is someone who knows all about you and still loves you.”</p>
    <p>― Dr. Seuss</p>`,    
    ` <p>“Always forgive your enemies; nothing annoys them so much.”</p>
    <p>― Mahatma Gandhi</p>`,    
    ` <p>“Live as if you were to die tomorrow. Learn as if you were to live forever.”</p>
    <p>― Robert Frost</p>`,    
    ` <p>“Without music, life would be a mistake.”</p>
    <p>― Albert Camus</p>`,    
    ` <p>“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”</p>
    <p>― Mark Twain</p>`,    
]
    parentQuote.innerHTML=arrQuotes[i];i++;

    if(i> arrQuotes.length-1){
        i=0;
    }


parentQuote.innerHTML=arrQuotes[Math.floor(Math.random() * arrQuotes.length)];
}

