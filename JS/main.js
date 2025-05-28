
var quote = [
  "“Be yourself; everyone else is already taken.” <br> ― Oscar Wilde",
  "“So many books, so little time.”  <br> ― Frank Zappa",
  "“A room without books is like a body without a soul.” <br> ― Marcus Tullius Cicero",
  "“You've gotta dance like there's nobody watching, <br> Love like you'll never be hurt, <br> Sing like there's nobody listening,  <br> And live like it's heaven on earth.”<br> ― William W. Purkey",
  "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”  <br> ― Dr. Seuss",
  "“You only live once, but if you do it right, once is enough.” <br> ― Mae West",
  "“In three words I can sum up everything I've learned about life: it goes on.” <br> ― Robert Frost",
  "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”<br> ― Maya Angelou",
  "“To live is the rarest thing in the world. Most people exist, that is all.” <br> ― Oscar Wilde",
  "“A friend is someone who knows all about you and still loves you.” <br> ― Elbert Hubbard",
  "“Always forgive your enemies; nothing annoys them so much.” <br> ― Oscar Wilde",
  "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.” <br> ― Martin Luther",
  "“Live as if you were to die tomorrow. Learn as if you were to live forever.” <br> ― Mahatma Gandhi",
  "“We accept the love we think we deserve.” <br> ― Stephen Chbosky",
  "“Without music, life would be a mistake.” <br> ― Friedrich Nietzsche",
  "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.” <br> ― Ralph Waldo Emerson",
  "“It is better to be hated for what you are than to be loved for what you are not.” <br> ― Andre Gide",
  "“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.” <br> ― Marilyn Monroe",
  "“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.” <br> ― Albert Einstein",
  "“Good friends, good books, and a sleepy conscience: this is the ideal life.” <br> ― Mark Twain",
  "“Life is what happens to us while we are making other plans.” <br> ― Allen Saunders",
  "“I have not failed. I've just found 10,000 ways that won't work.” <br> ― Thomas A. Edison"
];
var lastIndex = -1
function content(){
    do{
var i = Math.floor(Math.random() * quote.length);
    }while(i === lastIndex);
        lastIndex = i;
document.getElementById("quote-content").innerHTML= `<div class="content">${quote[i]}</div>`; 

}

