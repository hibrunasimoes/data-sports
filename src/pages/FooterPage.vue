<template>
  <footer class="footer-area">
    <div class="footer-widget pt-30 pb-80">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="footer-about mt-50">
              <h5>DataEL<span>{</span>AS<span>}</span></h5> 
              <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quaerat quo obcaecati excepturi, iste nisi.</p>
            </div>
          </div>
          <div class="col-lg-5 col-md-6">
            <div class="footer-link d-flex flex-wrap">
              <div class="footer-link-wrapper mt-45">
                <div class="footer-title">
                  <h4 class="title">Links Rápidos</h4>
                </div>
                <ul class="link">
                  <li><a href="">Inicio</a></li>
                  <li><a href="">Servicos</a></li>
                  <li><a href="">Espotes</a></li>
                </ul>
              </div>
              <div class="footer-link-wrapper mt-45">
                <div class="footer-title">
                  <h4 class="title">Redes Sociais</h4>
                </div>
                <ul class="social">
                  <li><a href=""> <i class="fab fa-twitter">  </i></a></li>
                  <li><a href=""> <i class="fab fa-instagram"> </i></a></li>
                  <li><a href=""> <i class="fab fa-linkedin-in">  </i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="footer-contact mt-45">
              <div class="footer-title">
                <h4 class="title">Contato</h4>
              </div>
              <ul class="contact-list">
                <li>
                  <div class="contact-info">
                    <div class="info-content media-body">
                      <p class="text"><i class="fas fa-phone-alt"></i> +809272561823 </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="contact-info">
                    <div class="info-content media-body">
                      <p class="text"><a href=""><i class="far fa-envelope"></i> dataelas@gmail.com </a></p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="contact-info">
                    <div class="info-content media-body">
                      <p class="text"><a href=""><i class="fas fa-globe"></i> www.dataelas.com </a></p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="contact-info">
                    <div class="info-content media-body">
                      <p class="text"><i class="fas fa-map-marker-alt"></i> Rua tres de dezembro, 188. Pelotas - RS </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterPage"
}
</script>

<style scoped>
.footer-area {
  background-color: #c0c0c080;
}
footer a{
  font-weight: bold;
  font-size: 14px;
  
  line-height: 18px;
}
footer .copy{
  margin-top: 32px;
  font-size: 14px;
  color: var(--gray-1);
  line-height: 17px;
  font-weight: 400;
}
footer .social {
  margin-top: 32px;
  display: inline-block;
  margin-right: 25px;
  font-size: 20px;
  color: #747e88;
  transition: all .3s ease-out 0s;
}
.footer-area {
  position: relative;
  overflow: hidden;
  padding: 45px;
}


.footer-about {
  max-width: 320px;
}

.footer-about .text {
  margin-top: 30px;
}

.footer-title .social {
  margin-top: 30px;
}

.footer-title .social li {
  display: inline-block;
  margin-right: 25px;
}

.footer-title .social li a {
  font-size: 20px;
  color: #747e88;
  transition: all .3s ease-out 0s;
}

.footer-title .social li a:hover {
  color: #0898e7;
}

.footer-link-wrapper {
  width: 50%;
}

@media only screen and (min-width: 768px) and (max-width: 991px),
(max-width: 767px) {
  .footer-link {
      padding-top: 30px;
  }
}

.footer-link .link {
  padding-top: 10px;
}

.footer-link .link li {
  margin-top: 10px;
}

.footer-link .link li a {
  text-decoration: none;
  font-size: 18px;
  color: #747e88;
  transition: all .3s ease-out 0s;
}

.footer-link .link li a:hover {
  color: #0898e7;
}

.footer-title .title {
  font-size: 20px;
  font-weight: 500;
}

@media only screen and (min-width: 768px) and (max-width: 991px),
(max-width: 767px) {
  .footer-contact {
      padding-top: 30px;
  }
}

.footer-contact .contact-list li .contact-info .info-content .text a {
  color: #747e88;
  transition: all .3s ease-out 0s;
}

.footer-contact .contact-list li .contact-info .info-content .text a:hover {
  color: #0898ef;
}

.footer-copyright .copyright {
  border-top: 2px solid #747e88;
  padding-top: 10px;
  padding-bottom: 25px;
}

.footer-copyright .copyright .copyright-text .text a {
  color: #747e88;
}
</style>