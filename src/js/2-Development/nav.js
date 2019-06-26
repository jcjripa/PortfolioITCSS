

/* ---------- Active Toggle Menú ---------*/
const NavList = document.getElementById('Nav-list'),
      BtnBurger = document.getElementById('BtnBurger'),
      Container = document.getElementById('Wrapper'),
      IconBurger = document.getElementById('IconBurger'),
      Body = document.getElementById('Body'),
      Header = document.getElementById('Header'),
      Links = Array.from(document.querySelectorAll('.Nav-link')),
      HeaderLogo = document.getElementById('HeaderLogo'),
      BackToTop = document.getElementById('BackToTop')

BtnBurger.addEventListener('click', () => NavActive())

window.addEventListener('scroll', () => {
  if (scrollY > 0) {
    Header.classList.add('is-active')
    BackToTop.classList.add('is-active')


  } else {
    Header.classList.remove('is-active')
    BackToTop.classList.remove('is-active')
  }
})

function NavActive() {
  if (matchMedia('(max-width:991px)').matches) {
    NavList.classList.toggle('is-active')
    Container.classList.toggle('is-active')
    Body.classList.toggle('is-active')
    IconBurger.classList.toggle('fa-times')
    BtnBurger.classList.toggle('is-active')
    HeaderLogo.classList.toggle('is-active')
    }
};

const CloseNav = () => {
  NavList.classList.remove('is-active')
  Container.classList.remove('is-active')
  Body.classList.remove('is-active')
  IconBurger.classList.remove('fa-times')
  BtnBurger.classList.remove('is-active')
  HeaderLogo.classList.remove('is-active')
}
Container.addEventListener('click', CloseNav)



if (matchMedia('(max-width:991px)').matches) {
  for (let i = 0; i < Links.length; i++) {
    Links[i].addEventListener('click', () => NavActive())
  }
}
