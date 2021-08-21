var likes = 3
var likesOne = 12
var likesTwo = 9
var countLikes = document.querySelector("#numOfLikes");
var countLikes1 = document.querySelector("#numOfLikes1");
var countLikes2 = document.querySelector("#numOfLikes2");

console.log(countLikes);

function likeButton(){
    likes++
    countLikes.innerText = likes + " Like(s)"
}
function likeButton1(){
    likesOne++
    countLikes1.innerText = likesOne + " Like(s)"
}
function likeButton2(){
    likesTwo++
    countLikes2.innerText = likesTwo + " Like(s)"
}
