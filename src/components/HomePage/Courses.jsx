import "../css/Courses.css";
import Aditya_Phyjeeics from '/src/assets/images/Aditya_Phyjeeics.jpg';
import phyjeeics_12th from '/src/assets/images/12th phyjeeics.jpg';
import jee_and_neet_phyjeeics from '/src/assets/images/jee and neet phyjeeics.jpg';
import phyjeeics_11th from '/src/assets/images/11th phyjeeics.jpg';

export default function Courses() {
  return (
    <>
      <section className="section courses" id="section2" data-section="section2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Choose Your Course</h2>
              </div>
            </div>
            <div className="courses-div">
              <div className="item">
                <img
                  src={phyjeeics_11th}
                  alt="11th Physics"
                  width="100%"
                  height="32%"
                />
                <div className="down-content">
                  <h4>11th</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi consequatur dolorem similique, minima maxime
                    corrupti maiores laudantium cupiditate nulla provident
                    quibusdam quae vel suscipit fugit perspiciatis? Tempora
                    excepturi rem placeat?
                  </p>
                  <div className="author-image">
                    <img
                      src={Aditya_Phyjeeics}
                      alt="Author"
                    />
                  </div>
                </div>
              </div>
              <div className="item">
                <img
                  src={phyjeeics_12th}
                  alt="12th Physics"
                  width="100%"
                  height="32%"
                />
                <div className="down-content">
                  <h4>12th</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi consequatur dolorem similique, minima maxime
                    corrupti maiores laudantium cupiditate nulla provident
                    quibusdam quae vel suscipit fugit perspiciatis? Tempora
                    excepturi rem placeat?
                  </p>
                  <div className="author-image">
                    <img
                      src={Aditya_Phyjeeics}
                      alt="Author"
                    />
                  </div>
                </div>
              </div>
              <div className="item">
                <img
                  src={jee_and_neet_phyjeeics}
                  alt="JEE & NEET Physics"
                  width="100%"
                  height="32%"
                />
                <div className="down-content">
                  <h4>JEE & NEET</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi consequatur dolorem similique, minima maxime
                    corrupti maiores laudantium cupiditate nulla provident
                    quibusdam quae vel suscipit fugit perspiciatis? Tempora
                    excepturi rem placeat?
                  </p>
                  <div className="author-image">
                    <img
                      src={Aditya_Phyjeeics}
                      alt="Author"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
