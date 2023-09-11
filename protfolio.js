// for nav-bar
gsap.registerPlugin(Flip);
const links=document.querySelectorAll(".link-container a");
const current_nav=document.querySelector(".active-nav");

links.forEach((link) =>{
    link.addEventListener('click',()=>{
        const state=Flip.getState(current_nav);
        links.forEach((otherLink) => {
            gsap.to(otherLink, { color: "#7FFF00" });
          });
        if(document.activeElement === link){
        gsap.to(link, { color: "#385ae0" });
        }
        link.appendChild(current_nav);
        Flip.from(state,{
            duration:0.75,
            absolute:true,
            ease:'elastic.out(1,0.5)'
        })
    });
});

// cards
const cards=document.querySelectorAll(".card");
cards.forEach((card,index)=>{
    card.addEventListener('click',()=>{
        //get state
        const state=Flip.getState(cards);
        //add active class
        const isCardActive=card.classList.contains("active");
        cards.forEach((otherCards,otherIdx)=>{
            otherCards.classList.remove("active");
            otherCards.classList.remove("is-inactive");
            if(!isCardActive && index!== otherIdx){
                otherCards.classList.add("is-inactive");
            }
        });
        if(!isCardActive){
            card.classList.add("active");
        }
        Flip.from(state,{
            duration:1,
            ease:"expo.out",
            absolute:true,
        })
    });
});

//reset submit text
function clean(){
    const inputs=document.querySelectorAll(".clear");
    const input_2=document.querySelector(".clear, .msg");
    const input_3=document.getElementById("myTextarea");
    input_3.value='';
    input_2.textContent='';
    for(let i=0;i<inputs.length;i++){
        inputs[i].value='';
    }
}
const to_top=document.querySelector(".to-top");
window.addEventListener("scroll",()=>{
    if(window.scrollY>100){
        to_top.classList.add("active");
        const opac=document.getElementById("change");
        opac.style.opacity=1;
    }else{
        to_top.classList.remove("active");
        const opac=document.getElementById("change");
        opac.style.opacity=0;
    }
})
