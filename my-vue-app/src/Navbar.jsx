function Navbar ({ Nav }) {

   return (

            <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div class="container-fluid justify-content-center">
        <a class="navbar-brand" href="#">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="https://api.whatsapp.com/message/IR3UFTS6R2G2O1?autoload=1&app_absent=0" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" target="_blank">Produtos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.facebook.com/LagIphoness/?locale=pt_BR" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" target="_blank">Facebook</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.instagram.com/lagphones/" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" target="_blank">Instagram</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://api.whatsapp.com/message/IR3UFTS6R2G2O1?autoload=1&app_absent=0" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" target="_blank">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    
    
    
    
   )
}

export default Navbar