let leaves = document.querySelector('.leaves');





let sprite = document.querySelector('.spriteLink');
let fanta = document.querySelector('.fantaLink');
let lipton = document.querySelector('.liptonLink');
let sodaCan = 'sprite';

sprite.addEventListener('click',function(){
    leaves.classList.remove('fantaLeaves');
    leaves.classList.remove('liptonLeaves');
    leaves.classList.add('spriteLeaves');
    sprite.classList.add('spriteInfo');
    sodaCan= 'sprite';
})
fanta.addEventListener('click',function(){
    leaves.classList.remove('liptonLeaves');
    leaves.classList.remove('spriteLeaves');
    leaves.classList.add('fantaLeaves');
    sodaCan= 'fanta';

})
lipton.addEventListener('click',function(){
    leaves.classList.remove('fantaLeaves');
    leaves.classList.remove('spriteLeaves');
    leaves.classList.add('liptonLeaves');
    sodaCan= 'lipton';
})

let menuPages = document.querySelectorAll('.menuPages');

let sprite1 = document.querySelector('.sprite1');
let sprite2 = document.querySelector('.sprite2');
let sprite3 = document.querySelector('.sprite3');

let fanta1 = document.querySelector('.fanta1');
let fanta2 = document.querySelector('.fanta2');
let fanta3 = document.querySelector('.fanta3');

let lipton1 = document.querySelector('.lipton1');
let lipton2 = document.querySelector('.lipton2');
let lipton3 = document.querySelector('.lipton3');

let row = 1;



window.onwheel = e => {


    if(e.deltaY >= 0){

      switch (sodaCan){

        case 'sprite':
          switch(row){
              case 1:sprite2.scrollIntoView();row = 2;
                leaves.classList.replace('spriteLeaves','infoPage')
                menuPages.forEach((e)=>{e.classList.replace('view1','view2')})
                break;

              case 2:sprite3.scrollIntoView();row = 3;
                leaves.classList.replace('infoPage','lastPage')
                menuPages.forEach((e)=>{e.classList.replace('view2','view3')})
                break;
              
              case 3:sprite3.scrollIntoView();row = 3;
                break;
          };break;

        case 'fanta':
          switch(row){
              case 1:fanta2.scrollIntoView();row = 2;
              leaves.classList.replace('fantaLeaves','infoPage')
              menuPages.forEach((e)=>{e.classList.replace('view1','view2')})
              break;
              case 2:fanta3.scrollIntoView();row= 3;
              leaves.classList.replace('infoPage','lastPage')
              menuPages.forEach((e)=>{e.classList.replace('view2','view3')})
              break;
              case 3:fanta3.scrollIntoView();row= 3;break;
          };break;
        case 'lipton':
          switch(row){
              case 1:lipton2.scrollIntoView();row = 2;
              leaves.classList.replace('liptonLeaves','infoPage')
              menuPages.forEach((e)=>{e.classList.replace('view1','view2')})
              break;
              case 2:lipton3.scrollIntoView();row= 3;
              leaves.classList.replace('infoPage','lastPage')
              menuPages.forEach((e)=>{e.classList.replace('view2','view3')})
              break;
              case 3:lipton3.scrollIntoView();row= 3;break;
          };break;
          
      }
     
    } 
    else {
      switch (sodaCan){

        case 'sprite':
          switch(row){
              case 3:sprite2.scrollIntoView();row = 2;
                leaves.classList.replace('lastPage','infoPage')
                menuPages.forEach((e)=>{e.classList.replace('view3','view2')})
                break;

              case 2:sprite1.scrollIntoView();row = 1;
                leaves.classList.replace('infoPage','spriteLeaves')
                menuPages.forEach((e)=>{e.classList.replace('view2','view1')})
                break;
              
              case 1:sprite1.scrollIntoView();row = 1;
                break;
          };break;

        case 'fanta':
          switch(row){
            case 3:fanta2.scrollIntoView();row = 2;
              leaves.classList.replace('lastPage','infoPage')
              menuPages.forEach((e)=>{e.classList.replace('view3','view2')})
              break;

            case 2:fanta1.scrollIntoView();row = 1;
              leaves.classList.replace('infoPage','fantaLeaves')
              menuPages.forEach((e)=>{e.classList.replace('view2','view1')})
              break;
            
            case 1:fanta1.scrollIntoView();row = 1;
              break;
        };break;          
        case 'lipton':
          switch(row){
            case 3:lipton2.scrollIntoView();row = 2;
              leaves.classList.replace('lastPage','infoPage')
              menuPages.forEach((e)=>{e.classList.replace('view3','view2')})
              break;

            case 2:lipton1.scrollIntoView();row = 1;
              leaves.classList.replace('infoPage','liptonLeaves')
              menuPages.forEach((e)=>{e.classList.replace('view2','view1')})
              break;
            
            case 1:lipton.scrollIntoView();row = 1;
              break;
        };break;
          
          
      }

    }
  }

