import React from 'react';
import './home.css';

export default function Home() {
  const handleReservationClick = (e) => {
    e.stopPropagation(); // Detener la propagación del evento de clic
    // Lógica para el botón de reservar
  };

  const handleOrderOnlineClick = (e) => {
    e.stopPropagation(); // Detener la propagación del evento de clic
    // Lógica para el botón de pedir en línea
  };

  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjS3uHBwJpdFjA5gBHbPUP8l7944OY9QuKP7lhb_7HFoXNAukjwFSFcEU2344UvrKDeU_Yw0Z2pMcz4FVewqfM57vGWiFKnEqwJ54cIpQs2mYie0fErXZepGkJds0toRkcKkMZQKcd5fDMbfTtEu9PtJDiu9Q9Ceg1IKLo8VUljGaYYyqoa6qeX7XBxMA/s736/garrobo.jpg" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h3>Pollos Asados</h3>
              <p>Encuatra la variedad de pollos Asados al carbon</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://cache.marriott.com/marriottassets/marriott/VSACY/vsacy-restaurant-0015-hor-feat.jpg" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h3>Variedad de Tacos</h3>
              <p>Encuatremtra el mejor guizo para tus tacos</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/1c/b5/28/f6/salon-principal.jpg" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h3>Variedad de Pizas</h3>
              <p>Encuentra la variedad de pizzas a tu gusto</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="restaurant-profile">
        <div className="restaurant-info">
          <h2>Vuelve Carmela</h2>
          <p>64 opiniones · Abierto ahora</p>
          <p>Mexicana, Contemporánea · $$$$ · 30.4 km</p>
          <p>Villahermosa</p>
          <div className="restaurant-reviews">
            <p>“Visita desde la Ciudad de México.”</p>
            <p>“Excelente atención”</p>
          </div>
          <div className="restaurant-actions">
            <button onClick={handleReservationClick}>Reservar</button>
            <button onClick={handleOrderOnlineClick}>Pedir en línea</button>
          </div>
        </div>
        <div className="restaurant-image">
          <img src="https://th.bing.com/th/id/R.4900bd010c402a16b41e74ade33298f1?rik=xdtMkkwlnIB2Og&riu=http%3a%2f%2fwww.zonaturistica.com%2ffiles%2frestaurantes%2f19%2fR19.jpg&ehk=9gvTfhBkSq3Yv2VydE4fEbBGEooCj8BRGERddFB1XRY%3d&risl=&pid=ImgRaw&r=0" alt="Interior del restaurante Vuelve Carmela" />
        </div>
      </div>
      <div className="restaurant-profile">
        <div className="restaurant-image">
            <img src="https://th.bing.com/th/id/R.4900bd010c402a16b41e74ade33298f1?rik=xdtMkkwlnIB2Og&riu=http%3a%2f%2fwww.zonaturistica.com%2ffiles%2frestaurantes%2f19%2fR19.jpg&ehk=9gvTfhBkSq3Yv2VydE4fEbBGEooCj8BRGERddFB1XRY%3d&risl=&pid=ImgRaw&r=0" alt="Interior del restaurante Vuelve Carmela" />
          </div>
        <div>
          <p></p>
        </div>

        <div className="restaurant-info">
          <h2>Vuelve Carmela</h2>
          <p>64 opiniones · Abierto ahora</p>
          <p>Mexicana, Contemporánea · $$$$ · 30.4 km</p>
          <p>Villahermosa</p>
          <div className="restaurant-reviews">
            <p>“Visita desde la Ciudad de México.”</p>
            <p>“Excelente atención”</p>
          </div>
          <div className="restaurant-actions">
            <button onClick={handleReservationClick}>Reservar</button>
            <button onClick={handleOrderOnlineClick}>Pedir en línea</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
