const chat_menuBtn = document.querySelector('.menu')
const profile_menuBtn = document.querySelector('.profile')

const chat_closeBtn = document.querySelector('.chat_closeBtn')
const profile_closeBtn = document.querySelector('.profile_closeBtn')

const chat_list = document.querySelector('.chat_list')
const profile_area = document.querySelector('.profile_area')

chat_menuBtn.addEventListener('click', ()=>{
    profile_area.style.right = '-100%'
    chat_list.style.left = 0
})

chat_closeBtn.addEventListener('click', ()=>{
    chat_list.style.left = '-100%'
})

profile_menuBtn.addEventListener('click', ()=>{
    chat_list.style.left = '-100%'
    profile_area.style.right = 0
})

profile_closeBtn.addEventListener('click', ()=>{
    profile_area.style.right = '-100%'
})