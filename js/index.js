let leaves = document.querySelector('.leaves');





let sprite = document.querySelector('.spriteLink');
let fanta = document.querySelector('.fantaLink');
let lipton = document.querySelector('.liptonLink');
let soda = 'sprite';

sprite.addEventListener('click',function(){
    leaves.classList.remove('fantaLeaves');
    leaves.classList.remove('liptonLeaves');
    leaves.classList.add('spriteLeaves');
    sprite.classList.add('spriteInfo');
    soda= 'sprite';
})
fanta.addEventListener('click',function(){
    leaves.classList.remove('liptonLeaves');
    leaves.classList.remove('spriteLeaves');
    leaves.classList.add('fantaLeaves');
    soda= 'fanta';

})
lipton.addEventListener('click',function(){
    leaves.classList.remove('fantaLeaves');
    leaves.classList.remove('spriteLeaves');
    leaves.classList.add('liptonLeaves');
    soda= 'lipton';
})


let menuPages =document.querySelectorAll('.menuPages');
let vh = window.innerHeight;

window.onwheel = e => {
    if(e.deltaY >= 0){
      // Scrolling Down with mouse
      leaves.classList.remove('fantaLeaves');
      leaves.classList.remove('liptonLeaves');
      leaves.classList.remove('spriteLeaves');
      leaves.classList.replace('infoPage','lastPage');
      leaves.classList.add('infoPage');
      window.scrollBy(0,vh);

      menuPages.forEach((e)=>{
            e.classList.replace('view2','view3')
            e.classList.replace('view1','view2')
      })
      

    } else {
      // Scrolling Up with mouse
      window.scrollBy(0,-vh);
      leaves.classList.remove('infoPage');
      leaves.classList.replace('lastPage', 'infoPage');
        menuPages.forEach((e)=>{
            e.classList.replace('view2','view1')
            e.classList.replace('view3','view2')
            
        })

      switch(soda){
        case 'sprite':
            leaves.classList.add('spriteLeaves');
            break;
        case 'fanta':
            leaves.classList.add('fantaLeaves');
        break;
        case 'lipton':
            leaves.classList.add('liptonLeaves');
        break;
      }

    }
  }

