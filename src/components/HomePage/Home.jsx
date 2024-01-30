import "../css/Home.css";
import homeVideo from '/src/assets/images/homeVideo.mp4';

export default function Home() {
  return (
    <>
      <section className="section main-banner" id="section1" data-section="section1">
        <video autoPlay muted loop id="bg-video">
          <source src={homeVideo} type="video/mp4" />
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
