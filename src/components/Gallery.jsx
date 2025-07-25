import '../styles/Gallery.css'

function Gallery() {

  return (
    <div className="container-damn-gallery">
      <div className="header">
        <h2>GALLERY</h2>
        <hr />
        <div className="damn-gallery-flex">
          <div className="damn-gallery-items">
            <figure>
              <img src="images/1_Japan.png" alt="japan" />
              <figcaption>
                <strong>
                  <em>Visit Japan</em>
                </strong>
              </figcaption>
            </figure>
          </div>
          <div className="damn-gallery-items">
            <figure>
              <img src="images/2_Sydney.png" alt="sydney" />
              <figcaption>
                <strong>
                  <em>Visit Sydney</em>
                </strong>
              </figcaption>
            </figure>
          </div>
          <div className="damn-gallery-items">
            <figure>
              <img src="images/3_Indonesia.png" alt="indonesia" />
              <figcaption>
                <strong>
                  <em>Visit Indonesia</em>
                </strong>
              </figcaption>
            </figure>
          </div>
          <div className="damn-gallery-items">
            <figure>
              <img src="images/4_Korea.png" alt="korea" />
              <figcaption>
                <strong>
                  <em>Visit Korea</em>
                </strong>
              </figcaption>
            </figure>
          </div>
          <div className="damn-gallery-items">
            <figure>
              <img src="images/5_China.png" alt="china" />
              <figcaption>
                <strong>
                  <em>Visit China</em>
                </strong>
              </figcaption>
            </figure>
          </div>
          <div className="damn-gallery-items">
            <figure>
              <img src="images/6_India.png" alt="india" />
              <figcaption>
                <strong>
                  <em>Visit India</em>
                </strong>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery
