// const header = document.querySelector('.main-header');

// window.addEventListener('scroll', () => {
//    const scrollPos = window.scrollY;
//    if(scrollPos > 30){
//       header.classList.add('scrolled');
//    } else {
//       header.classList.remove('scrolled')
//    }
// })

// const navbarTopScrolled = document.querySelector('.navbar-top-row');

// window.addEventListener('scroll', () => {
//    const scrollPos = window.scrollY;
//    if(scrollPos > 30){
//       navbarTopScrolled.classList.add('navbar-top-row-scrolled');
//    } else {
//       navbarTopScrolled.classList.remove('navbar-top-row-scrolled')
//    }
// })

const header = document.querySelector('.main-header');
const navTop = document.querySelector('.navbar-top-row');
const mainBlock = document.querySelector('.main__block');
window.addEventListener('scroll', () => {
   const scrollPos = window.scrollY;
   if(scrollPos > 25){
      header.style.position = 'fixed';
      // header.style.borderBottom ='1px solid rgb(230, 236, 242)';
      header.style.boxShadow= '0 3px 6px 0 rgb(0 0 0 / 15%)';
      navTop.style.display = 'none';
      mainBlock.style.margin = '120px 0 0 0';
   } else {
      header.style.position = '';
      // header.style.borderBottom =''
      header.style.boxShadow= '';
      navTop.style.display = ''
      mainBlock.style.margin = '10px 0 0 0';
   }
})

//navbar search select 
const select = document.querySelectorAll('.selectBtn');
const option = document.querySelectorAll('.option');
const navbarSearchInput = document.getElementById('navbar-search-input')
      let index = 1;
      
      select.forEach(a => {
         a.addEventListener('click', b => {
            const next = b.target.nextElementSibling;
            next.classList.toggle('toggle');
            next.style.zIndex = index++;
         })
      })
      option.forEach(a => {
         a.addEventListener('click', b => {
            b.target.parentElement.classList.remove('toggle');
            
            const parent = b.target.closest('.select').children[0];
            parent.setAttribute('data-type', b.target.getAttribute('data-type'));
            parent.innerText = b.target.innerText;
            //меняю placeholder инпута поисковика в навбаре
            if(parent.getAttribute('data-type') == 'selectedComp'){
               navbarSearchInput.placeholder = "Search Companies...";
            } else if(parent.getAttribute('data-type') == 'selectedProd'){
               navbarSearchInput.placeholder = "Search Products...";
            } else{
               navbarSearchInput.placeholder = "Search Trade Leads...";
            }
         })
      });
   
//language search select 
const selectLang = document.querySelectorAll('.select-lang__btn');
const optionLang = document.querySelectorAll('.option-lang');
      let indexLang = 1;
      selectLang.forEach(a => {
         a.addEventListener('click', b => {
            const next = b.target.nextElementSibling;
            next.classList.toggle('toggle');
            next.style.zIndex = indexLang++;
         })
      })
      optionLang.forEach(a => {
         a.addEventListener('click', b => {
            b.target.parentElement.classList.remove('toggle');
            
            const parent = b.target.closest('.select-lang').children[0];
            parent.setAttribute('data-type', b.target.getAttribute('data-type'));
            parent.innerText = b.target.innerText;
            // //меняю placeholder инпута поисковика в навбаре
            // if(parent.getAttribute('data-type') == 'selectedComp'){
            //    navbarSearchInput.placeholder = "Search Companies...";
            // } else if(parent.getAttribute('data-type') == 'selectedProd'){
            //    navbarSearchInput.placeholder = "Search Products...";
            // } else{
            //    navbarSearchInput.placeholder = "Search Trade Leads...";
            // }
         })
      })


const compSelected = document.querySelector(".form__link-comp");
const tranSelected = document.querySelector(".form__link-tran");
const tenderSelected = document.querySelector(".form__link-tender");
const arrowChanged = document.getElementById("form-arrow");
compSelected.addEventListener("click", function() {
   arrowChanged.classList.add('comp-selected');
  });
tranSelected.addEventListener("click", function() {
 arrowChanged.classList.add('trans-selected');
   });
tenderSelected.addEventListener("click", function() {
 arrowChanged.classList.add('tender-selected');
   });


function cfListMore(id) {
   cfMore = document.getElementById('cf-more_'+id);
   cfBtn = document.getElementById('cf-btn_'+id);
     if (cfMore.style.display=='block') {
      cfMore.style.display='none';
      cfBtn.innerHTML='<i class="fas fa-chevron-down"></i>';
     }
     else {
      cfMore.style.display='block';
      cfBtn.innerHTML='<i class="fas fa-chevron-up"></i>';
   }
}
// function sblListCityMore() {
//    const sblMoreArrow = document.querySelector(".sbl-city-more-arrow");
//    const sblLessArrow = document.querySelector(".sbl-city-less-arrow");
//    const btnMore = document.querySelector(".sbl-city-btn-more");
//    const sblMore = document.querySelector(".sbl-city-list-more");

//    if(sblMoreArrow.style.display == "none"){
//       sblMoreArrow.style.display = "inline"
//       sblLessArrow.style.display = "none"
//       btnMore.innerHTML = "More";
//       sblMore.style.display = "none"
//    }
//    else {
//       sblMoreArrow.style.display = "none"
//       sblLessArrow.style.display = "inline"
//       btnMore.innerHTML = "Less";
//       sblMore.style.display = "block"
//    }
// }



function showicon(){
   const navbarSerachInput = document.querySelector(".nsi-input").value;
   const nsiRemove =  document.querySelector(".nsi-remove");

   if (navbarSearchInput.length <= 0) document.body.classList.remove("nsi-active"); 
   else nsiRemove.classList.add("nsi-active");

   nsiRemove.addEventListener("click", () =>{
      document.querySelector(".nsi-input").value = "";
      nsiRemove.classList.remove("nsi-active");
   });

}





// const select = document.querySelectorAll('.selectBtn');
// const option = document.querySelectorAll('.option');
// const navbarSearchInput = document.getElementById('navbar-search-input')
//       let index = 1;
      
//       select.forEach(a => {
//          a.addEventListener('click', b => {
//             const next = b.target.nextElementSibling;
//             next.classList.toggle('toggle');
//             next.style.zIndex = index++;
//          })
//       })
//       option.forEach(a => {
//          a.addEventListener('click', b => {
//             b.target.parentElement.classList.remove('toggle');
            
//             const parent = b.target.closest('.select').children[0];
//             parent.setAttribute('data-type', b.target.getAttribute('data-type'));
//             parent.innerText = b.target.innerText;
//             //меняю placeholder инпута поисковика в навбаре
//             if(parent.getAttribute('data-type') == 'selectedComp'){
//                navbarSearchInput.placeholder = "Search Companies...";
//             } else if(parent.getAttribute('data-type') == 'selectedProd'){
//                navbarSearchInput.placeholder = "Search Products...";
//             } else{
//                navbarSearchInput.placeholder = "Search Trade Leads...";
//             }
//          })
//       })
















