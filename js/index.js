let leaves = document.querySelector('.leaves');





let sprite = document.querySelector('.spriteLink');
let fanta = document.querySelector('.fantaLink');
let lipton = document.querySelector('.liptonLink');
let sodaCan = 'sprite';

sprite.addEventListener('click',function(){
    leaves.classList.remove('fantaLeaves');
    leaves.classList.remove('liptonLeaves');
    leaves.classList.add('spriteLeaves');
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


// create array for dynamic data
let sodas = ['sprite','lipton','fanta'];
let x = [1,2,3]
let row = 1;

let sodaArray=[];
sodas.forEach((soda)=>{
  let sodaname=[];
  x.forEach((e)=>{
      char = soda+e;
      let ssoda = document.querySelector('.'+soda+e);
      sodaname.push(ssoda)
  })
  sodaArray.push(sodaname);
})



function scrollDown(){
  for(let y = 0; y<=2;y++){
    switch (sodaCan){
      case sodas[y]:
        switch(row){
            case 1:sodaArray[y][1].scrollIntoView();row = 2;
              leaves.classList.replace(sodas[y]+'Leaves','infoPage')
              menuPages.forEach((e)=>{e.classList.replace('view1','view2')})
              break;

            case 2:sodaArray[y][2].scrollIntoView();row = 3;
              leaves.classList.replace('infoPage','lastPage')
              menuPages.forEach((e)=>{e.classList.replace('view2','view3')})
              break;
            
            case 3:sodaArray[y][2].scrollIntoView();row = 3;
              break;
        };break;
    }
  }
}


function scrollUp(){
  for(let y = 0; y<=2;y++){
    switch (sodaCan){
      case sodas[y]:
        switch(row){
            case 3:sodaArray[y][1].scrollIntoView();row = 2;
              leaves.classList.replace('lastPage','infoPage')
              menuPages.forEach((e)=>{e.classList.replace('view3','view2')})
              break;

            case 2:sodaArray[y][0].scrollIntoView();row = 1;
              leaves.classList.replace('infoPage',sodas[y]+'Leaves')
              menuPages.forEach((e)=>{e.classList.replace('view2','view1')})
              break;
            
            case 1:sodaArray[y][0].scrollIntoView();row = 1;
              break;
        };break;
    }
  }
}





window.onwheel = e => {
    if(e.deltaY >= 0){
      scrollDown()
    } 
    else {
      scrollUp()
    }
  }

