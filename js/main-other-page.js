const header = document.querySelector('.main-header');
const navTop = document.querySelector('.navbar-top-row');
const scrollMargin = document.querySelector('.scroll-margin');
window.addEventListener('scroll', () => {
   const scrollPos = window.scrollY;
   if(scrollPos > 50){
      header.style.position = 'fixed';
      // header.style.borderBottom ='1px solid rgb(230, 236, 242)';
      header.style.boxShadow= '0 3px 6px 0 rgb(0 0 0 / 15%)';
      navTop.style.display = 'none';
      scrollMargin.style.margin = '105px 0 0 0';
   } else {
      header.style.position = '';
      // header.style.borderBottom =''
      header.style.boxShadow= '';
      navTop.style.display = ''
      scrollMargin.style.margin = '10px 0 0 0';
   }
})

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
      })
