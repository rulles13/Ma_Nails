import React from 'react';
import { Carousel } from 'react-carousel-minimal';

const Galery = () => {
    const data = [
        {
          image: "./img/galerie/manails_1.jpg",
          caption: "Mix rose"
        },
        {
          image: "./img/galerie/manails_2.jpg",
          caption: "Mix rose"
        },
        {
          image: "./img/galerie/manails_3.jpg",
          caption: "Mix rose"
        },
        {
          image: "./img/galerie/manails_4.jpg",
          caption: "Mix rose"
        },
        {
          image: "./img/galerie/manails_5.jpg",
          caption: "Mix rose"
        },
        {
          image: "./img/galerie/manails_6.jpg",
          caption: "Mix rose"
        },
        {
          image: "./img/galerie/manails_7.jpg",
          caption: "Mix rose"
        },
      ];
    
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
      return (
        <div className="App">
          <div style={{ textAlign: "center" }}>
            <h2>Realisations</h2>
            <div style={{
              padding: "0 20px 0 20px"
            }}>
              <Carousel
                data={data}
                time={2000}
                width="850px"
                height="500px"
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={false}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={false}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                  textAlign: "center",
                  maxWidth: "850px",
                  maxHeight: "500px",
                  margin: "40px auto",
                }}
              />
            </div>
          </div>
        </div>
      );
}

export default Galery