
const Footer = () => {
    return (
        <footer class="bg-dark text-light pt-4 mt-4">
            <div class="container">
                <div class="row">

                    <div class="col-md-4 mb-3">
                        <h5 class="text-uppercase">Noticias Hoy</h5>
                        <p>Las últimas noticias de Argentina y el mundo, actualizadas al instante.</p>
                    </div>


                    <div class="col-md-4 mb-3">
                        <h5 class="text-uppercase">Secciones</h5>
                        <ul class="list-unstyled">
                            <li><a href="#" class="text-light text-decoration-none">Inicio</a></li>
                            <li><a href="#" class="text-light text-decoration-none">Política</a></li>
                            <li><a href="#" class="text-light text-decoration-none">Deportes</a></li>
                            <li><a href="#" class="text-light text-decoration-none">Economía</a></li>
                            <li><a href="#" class="text-light text-decoration-none">Internacional</a></li>
                        </ul>
                    </div>


                    <div class="col-md-4 mb-3">
                        <h5 class="text-uppercase">Seguinos</h5>
                        <a href="" class="text-light me-3"><i class="bi bi-facebook"></i></a>
                        <a href="" class="text-light me-3"><i class="bi bi-twitter"></i></a>
                        <a href="" class="text-light me-3"><i class="bi bi-instagram"></i></a>
                        <a href="" class="text-light"><i class="bi bi-youtube"></i></a>
                    </div>
                </div>

                <div class="text-center py-3 border-top">
                    <small>© 2025 Noticias App - Todos los derechos reservados</small>
                </div>
            </div>
        </footer>
    )
}

export default Footer