/**Social */
const socialul = document.getElementById("social1")
const socials = document.getElementsByClassName("sociallist")[0]
const remove = document.getElementsByClassName("erase1")[0]
const socialli =document.getElementsByClassName("socialdiv")[0]

/**Transition */
const trans =document.getElementById("transition1")
const remove2 =document.getElementsByClassName("erase2")[0]
const transitionli = document.getElementsByClassName("transition")[0]

/**Transfer*/
const send =document.getElementById("transfer1")
const remove3 =document.getElementsByClassName("erase3")[0]
const transferli = document.getElementsByClassName("transferdiv")[0]
/**Profile */
const profilename = document.getElementById("profile1")
const remove4 = document.getElementsByClassName("erase4")[0]
const profilediv = document.getElementsByClassName("managementdiv")[0]

/**Social */
function openSocial(){
    
    socials.style.width ="60%"
    socials.style.transition = "1s"
    closeTransition()
    closeTransfer()
    closeProfile()
}
function closeSocial(){
    socials.style.width ="0%"
    socials.style.transition = "1s"
}
/**Transition */
function openTransition(){
    transitionli.style.width ="60%"
    transitionli.style.transition = "1s"
    closeSocial()
    closeTransfer()
    closeProfile()
}
function closeTransition(){
    transitionli.style.width ="0%"
    transitionli.style.transition = "1s"
}
/**Transfer*/
function openTransfer(){
    transferli.style.width ="60%"
    transferli.style.transition = "1s"
    closeTransition()
    closeSocial()
    closeProfile()
}
function closeTransfer(){
    transferli.style.width ="0%"
    transferli.style.transition = "1s"
}
/**Profile */
function openProfile(){
    profilediv.style.width = "60%"
    profilediv.style.transition = "1s"
    closeTransfer()
    closeTransition()
    closeSocial()
}
function closeProfile(){
    profilediv.style.width = "0%"
    profilediv.style.transition = "1s"
}

/**Social */
socialul.addEventListener("click",openSocial)
remove.addEventListener("click",closeSocial)
/**Transition */
trans.addEventListener("click",openTransition)
remove2.addEventListener("click",closeTransition)
/**Transfer*/
send.addEventListener("click",openTransfer)
remove3.addEventListener("click",closeTransfer)
/**Profile */
profilename.addEventListener("click",openProfile)
remove4.addEventListener("click",closeProfile)