import "../css/Home.css";

export default function Home() {
  return (
    <>
      <section className="section main-banner" id="section1" data-section="section1">
        <video autoPlay muted loop id="bg-video">
          <source src="./src/assets/images/homeVideo.mp4" type="video/mp4" />
        </video>

        <div className="video-overlay header-text">
          <div className="caption">
            <h2 className="homeHeading">
              Transforming <em>Students</em> into Scholars
            </h2>
          </div>
        </div>
      </section>

     
    </>
  );
}
