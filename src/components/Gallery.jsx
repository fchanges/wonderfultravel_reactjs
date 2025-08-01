import '../styles/Gallery.css'

function Gallery() {

  return (
    <div className="container-damn-gallery">
      <div className="header">
        <h2>GALLERY</h2>
        <hr/>
        <div className="damn-gallery-flex">
          <div className="damn-gallery-items">
            <figure className="japan-fig">
              <img className="jpn-gall-img" src="images/1_Japan.png" alt="japan" />
              <figcaption>
                <strong className="visit"><em>Visit</em></strong>&nbsp;Japan
                </figcaption>
            </figure>
          </div>
          <div className="damn-gallery-items">
            <figure className="sydney-gallery">
              <img className="sdny-gall-img" src="images/2_Sydney.png" alt="sydney" />
              <figcaption>
                <strong className="visit"><em>Visit</em></strong>&nbsp;Sydney
              </figcaption>
            </figure>
          </div>
          <div className="damn-gallery-items">
            <figure className="indo-gallery">
              <img className="indo-gall-img" src="images/3_Indonesia.png" alt="indonesia" />
              <figcaption>
                <strong className="visit"><em>Visit</em></strong>&nbsp;Indonesia
              </figcaption>
            </figure>
          </div>
          <div className="damn-gallery-items">
            <figure className="kor-gallery">
              <img className="kor-gall-img" src="images/4_Korea.png" alt="korea" />
              <figcaption>
                <strong className="visit"><em>Visit</em></strong>&nbsp;Korea
              </figcaption>
            </figure>
          </div>
          <div className="damn-gallery-items">
            <figure className="chn-gallery">
              <img className="chn-gall-img" src="images/5_China.png" alt="china" />
              <figcaption>
                <strong className="visit"><em>Visit</em></strong>&nbsp;China
              </figcaption>
            </figure>
          </div>
          <div className="damn-gallery-items">
            <figure className="india-gallery">
              <img className="india-gall-img" src="images/6_India.png" alt="india" />
              <figcaption>
                <strong className="visit"><em>Visit</em></strong>&nbsp;India
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery
