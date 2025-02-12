//this is for the date and time shown on the topbar

function showTime(){
    const currTime = new Date()
    const Year = String(currTime.getFullYear())
    const Month = String(currTime.getMonth()+1).padStart(2,"0")
    const Day = String(currTime.getDate()).padStart(2,"0")
    const Hour = String(currTime.getHours()).padStart(2,"0")
    const Min = String(currTime.getMinutes()).padStart(2,"0")

    const date = `${Year}-${Month}-${Day} | ${Hour}:${Min}`

    document.getElementById('dateandtime').textContent = date
}

setInterval(showTime,1000) //update date and time every sec

const colorSet = ['#f5e0dc','#f5e0dc','#a6e3a1','#f5c2e7','#f5c2e7','#89dceb']
let index = 0
let index2 = 0
const ascii = document.getElementById('asciiart')
const text = document.getElementsByClassName('qn')

setInterval(function(){
    ascii.style.color = colorSet[index]
    index = (index+1)%colorSet.length
},1000)

setInterval(function(){
    text[index2].style.color = colorSet[index]
    index = (index+1)%colorSet.length
    index2 = (index2+1)%5
},100)


// const skills = document.getElementById('skills')
// const projects = document.getElementById('projects')
// const socials = document.getElementById('socials')

// const skillsDesc = document.getElementById('skill')
// const projectsDesc = document.getElementById('project')
// const socialsDesc = document.getElementById('social')


// function resetIt(){
//     skillsDesc.classList.add('hidden')
//     projectsDesc.classList.add('hidden')
//     socialsDesc.classList.add('hidden')
//     skills.classList.remove('selected')
//     projects.classList.remove('selected')
//     socials.classList.remove('selected')
// }

// skills.addEventListener('click',function(){
//     resetIt();
//     skills.classList.add('selected')
//     skillsDesc.classList.remove('hidden')
// })
// projects.addEventListener('click',function(){
//     resetIt();
//     projects.classList.add('selected')
//     projectsDesc.classList.remove('hidden')
// })
// socials.addEventListener('click',function(){
//     resetIt();
//     socials.classList.add('selected')
//     socialsDesc.classList.remove('hidden')
// })

// nav using keyboard
const skills = document.getElementById('skills')
const projects = document.getElementById('projects')
const socials = document.getElementById('socials')
const navitem = [skills,projects,socials]

const skillsDesc = document.getElementById('skill')
const projectsDesc = document.getElementById('project')
const socialsDesc = document.getElementById('social')
const Desc = [skillsDesc,projectsDesc,socialsDesc]

function resetAll(){
    navitem.forEach(element => {
        element.classList.remove('selected')
    });
    Desc.forEach(element => {
        element.classList.add('hidden')
    });
}

function showThis(indexeu){
    resetAll()
    navitem[indexeu].classList.add('selected')
    Desc[indexeu].classList.remove('hidden')
}

navitem.forEach((item,index) =>{
    item.addEventListener('click',()=>showThis(index))
})

document.addEventListener('keydown',function(event){
    let currentIndex = Array.from(navitem).findIndex(item => item.classList.contains('selected'))
    if(event.key == 'ArrowRight'){
        if(currentIndex<2){
            showThis(currentIndex+1)
        }
    }
    if(event.key=='ArrowLeft'){
        if(currentIndex>0){
            showThis(currentIndex-1)
        }
    }
})

showThis(0);