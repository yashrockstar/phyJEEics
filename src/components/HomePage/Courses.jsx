import "../css/Courses.css";

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
                  src="src\assets\images\11th phyjeeics.jpg"
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
                      src="./src/assets/images/Aditya_Phyjeeics.jpg"
                      alt="Author"
                    />
                  </div>
                </div>
              </div>
              <div className="item">
                <img
                  src="src\assets\images\12th phyjeeics.jpg"
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
                      src="./src/assets/images/Aditya_Phyjeeics.jpg"
                      alt="Author"
                    />
                  </div>
                </div>
              </div>
              <div className="item">
                <img
                  src="src\assets\images\jee and neet phyjeeics.jpg"
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
                      src="./src/assets/images/Aditya_Phyjeeics.jpg"
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
