/* eslint-disable react/no-unescaped-entities */

import Aditya_Phyjeeics from "/src/assets/images/Aditya_Phyjeeics.jpg";
import phyeeics_insta1 from "/src/assets/images/phyeeics insta1.png";
import phyeeics_insta2 from "/src/assets/images/phyeeics insta1.png";
import phyjeeics_logo from "/src/assets/images/phyjeeics_logo (1).jpg";

export default function AboutUs() {
  let marginStyle0 = {
    marginTop: "0px",
  };

  let marginStyle01 = {
    marginBottom: "0px",
  };

  let marginStyle40 = {
    marginTop: "40px",
  };

  let marginStyle20 = {
    marginTop: "20px",
  };

  let marginStyle80 = {
    marginTop: "80px",
  };

  let textUnderline = {
    textDecoration: "underline",
  };

  return (
    <>
      <section className="section why-us" id="section3" data-section="section3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading" style={marginStyle01}>
                <h2 style={marginStyle0}>About Us</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div id="tabs">
                <section className="tabs-content">
                  <article id="tabs-1">
                    <div className="row">
                      <div className="col-md-4">
                        <img src={Aditya_Phyjeeics} alt="" />
                      </div>
                      <div className="col-md-8">
                        <h4 style={marginStyle0}>📌 Meet Your Mentor</h4>
                        <p>
                          Aditya Narayan, our dedicated Physics maestro, is more
                          than just an instructor; he's a mentor on a mission.
                          With a background as an educator at some of India's
                          premier coaching institutes in Hyderabad, Jaipur, and
                          Kota, Aditya has nurtured countless young minds,
                          guiding them to success in their academic journeys.
                          His deep-rooted passion for physics, coupled with his
                          extensive teaching experience.
                        </p>
                      </div>
                    </div>
                    <div className="row" style={marginStyle40}>
                      <div className="col-md-4">
                        <img src={phyeeics_insta1} alt="" />
                      </div>
                      <div className="col-md-8">
                        <h4 style={marginStyle0}>📌 PhyjEEics</h4>
                        <p>
                          PhyJEEics is your one-stop destination for unlocking
                          the mysteries of physics. Led by the brilliant Aditya
                          Narayan, an accomplished IITian and seasoned educator
                          with over 5 years of teaching experience, our channel
                          is designed to make physics accessible, engaging, and
                          downright fascinating!
                        </p>
                      </div>
                    </div>
                    <div className="row" style={marginStyle40}>
                      <div className="col-md-4">
                        <img src={phyeeics_insta2} alt="" />
                      </div>
                      <div className="col-md-8">
                        <h4 style={marginStyle0}>📌 What You'll Find:</h4>
                        <p>
                          🌌 In-Depth Physics Lessons
                          <br />
                          🔬 Practical Problem-Solving Techniques
                          <br />
                          🧠 Conceptual Clarity
                          <br />
                          🌟 Exam Tips and Strategies
                          <br />
                          💡 Mind-Blowing Experiments
                          <br />
                          🌐 Live Q&A Sessions
                        </p>
                      </div>
                    </div>
                    <div className="row" style={marginStyle20}>
                      <div className="col-md-4" style={marginStyle80}>
                        <img src={phyjeeics_logo} alt="" />
                      </div>
                      <div className="col-md-8">
                        <h4 style={marginStyle0}>📌 Why Choose Us?</h4>
                        <p>
                          <strong style={textUnderline}>
                            Comprehensive Physics Content:
                          </strong>
                          Our meticulously crafted physics curriculum is
                          designed to empower students with the knowledge and
                          skills needed to excel in NEET and JEE exams. From
                          fundamentals to advanced concepts, we cover it all.
                          <br />
                          <strong style={textUnderline}>
                            Expert Educators:
                          </strong>
                          Our team of experienced and passionate educators
                          comprises renowned physics experts who have a proven
                          track record of success in coaching students for
                          competitive exams.
                          <br />
                          <strong style={textUnderline}>
                            Interactive Learning:
                          </strong>
                          We believe in making learning engaging and effective.
                          Our interactive online platform ensures that students
                          can learn at their own pace, with access to video
                          lectures, quizzes, and practice exams.
                          <br />
                          <strong style={textUnderline}>
                            Results that Speak:
                          </strong>
                          Our success stories are a testament to our commitment
                          to excellence. Many of our students have secured top
                          ranks in NEET and JEE exams, opening doors to
                          prestigious institutions.
                        </p>
                      </div>
                    </div>
                  </article>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
