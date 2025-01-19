import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <section class="header">
          <div class="nav-link">
            <a href="">About</a>
            <a href="">Menu</a>
            <a href="">Info</a>
            <a href="">Booking</a>
          </div>
          <div class="logo">LATTE CAFE</div>
          <div class="nav-img">
            
            <a href=""><img src="/face.png" alt="" /></a>
            <a href=""><img src="/inst.png" alt="" /></a>
            <a href=""><img src="/mail.png" alt="" /></a>
            
            
          </div>
        </section>
        <section>
          <img src="/bg.png" alt="" />
        </section>
      </header>
      <main>
        <section class="about">
           <div>
              <p class="text600">About us</p>
              <p>Tucked away in the corner of Wellington, Latte Cafe is a</p>
              <p>local neighbourhood cafe and bar. Latte is all about doing</p>
              <p>what we love, in a city that we love. We keep stocked</p>
              <p>with local produce and pastries. Bring your family for a</p>
              <p>bite, or meet your friends for a coffee or warm drink</p>
           </div>
        </section>
        <section class="menu">
            <div>
              <div class="text600">Menu</div>
              <p class="text32">We change our menu every season.</p>
              <p class="text32">Here is what we are currently</p>
              <p class="text32">dishing up.</p>
              <div class="menu-btn">
                <button>Food Menu</button>
                <button>Drinks Menu</button>
                <button>Takeaway Menu</button>
              </div>
            </div>
            <div>
              <img src="/menu.png" alt="" />
            </div>
        </section>
        <section class="hour">
          <div>
            <div class="text600">Location</div>
            <p>101 Cuba St,</p>
            <p>Te Aro, Wellington</p>
          </div>
          <div>
            <div class="text600">Hours</div>
            <p>Tuesday to Friday</p>
            <p>7AM - 3PM</p>
            <p class="sat">Saturday to Sunday</p>
            <p>8AM - 3PM</p>
          </div>
          <div>
            <div class="text600">Mondays?</div>
            <p>We are closed on Mondays </p>
            <p>to reflect and refuel</p>
          </div>
        </section>
        <section class="main-img">
          <div class="main-img1">
            <img src="/1.png" alt="" /><img src="/2.png" alt="" />
          </div>
          <div>
            <img src="/3.png" alt="" />
          </div>
        </section>
        <section class="text">
          <div class="text1">
            <p>Award winning</p>
            <p>cafe and bar.</p>
          </div>
          <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
           <p>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p> <p>ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p><p>aliquip ex ea commodo consequat. Duis aute irure dolor in </p><p>reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p> <p>pariatur. Excepteur sint occaecat cupidatat non proident, sunt in</p> <p>culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </section>
      </main>
      <footer>
        <div>
          <a href="">Home</a><a href="">About</a><a href="">Menu</a><a href="">Info</a><a href="">Contact</a><a href="">Bookings</a><a href="">Privacy Policy</a>
        </div>
        <div><a href="">Style Guide</a><a href="">Licenses</a><a href="">Instructions</a><a href="">Changelog</a><a href="">Password</a><a href="">Tgweb</a></div>
        <div></div>
      </footer>
    </>
  )
}

export default App
