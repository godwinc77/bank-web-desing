const searchBotton = document.getElementsByClassName("fa-solid fa-magnifying-glass icon")[0]
const searchCon = document.getElementsByClassName("search-con")[0]
const remove = document.getElementsByClassName("cancel")[0]
const ulList = document.getElementById("navList")
var count = 0
function switchDisplay(){
    var list =ulList.children
   count = 0
   for (let i in list){
       if (count < 6){
            list[count].style.display = "none"
       }
       count +=1
       searchCon.style.display = "block"
       searchBotton.style.display = "none"
   } 
}
function removeDisplay(){
    var list =ulList.children
    searchCon.style.display = "none"
    for (let i in list){
        if(list[i].style.display = "none"){
            list[i].style.display = "block"
            searchCon.style.display = "none"
            searchBotton.style.display = "block"
        }
    }
    
}

searchBotton.addEventListener("click",switchDisplay)
remove.addEventListener("click",removeDisplay)
    