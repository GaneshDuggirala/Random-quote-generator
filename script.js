const quote=document.getElementById('nquote');
const author=document.getElementById('author');

let url="https://api.quotable.io/random";

// btn.addEventListener('click',getData);s

async function getData(url){
    fetch(url)
    const response= await fetch(url);
    var data=await response.json();
    console.log(data);
    quote.innerHTML='<span>"</span>'+data.content+'<span>"</span>';
    author.innerHTML="<span>-- </span>"+data.author;
}
getData(url);