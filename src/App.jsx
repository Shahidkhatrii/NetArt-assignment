import "./App.css";
import Header from "./components/Header";
import trophy from "./assets/1.png";
import mainImg from "./assets/2.png";
import equipmentImg from "./assets/3.png";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />

      <section className="hero-section flex">
        <div className="left-con">
          <img src={trophy} alt="trophy" />
        </div>
        <div className="right-con">
          <h1>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h1>
          <div className="list-con">
            <ul>
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
          </div>

          <img src={mainImg} alt="img" />
          <p>
            Government of India has awarded the{" "}
            <span>"National Energy Conservation Award 2018"</span>. Mr. G.
            Selvaraj, Joint Managing Director of C.R.I. Group received the award
            from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
            Singh, Honorable Minister of State.
          </p>
        </div>
      </section>

      <section className="bottom-section flex">
        <h1>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </h1>
        <div className="equipment-img-con">
          <img src={equipmentImg} alt="img" />
          <p>
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors{" "}
          </p>
        </div>
        <hr />
        <h1 className="bottom-text">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </h1>

        <div className="services">
          <span>CHEMICALS & PROCESS</span>
          <span>POWER</span>
          <span>WATER & WASTE WATER</span>
          <span>OILS & GAS </span>
          <span>PHARMA</span>
          <span>SUGARS & DISTILLERIES</span>
          <span>PAPER & PULP</span>
          <span>MARINE & DEFENCE</span>
          <span>METAL & MINING</span>
          <span>FOOD & BEVERAGE</span>
          <span>PETROCHEMICAL & REFINERIES</span>
          <span>SOLAR</span>
          <span>BUILDING</span>
          <span>HVAC</span>
          <span>FIRE FIGHTING</span>
          <span>AGRICULTURE & RESIDENTIAL</span>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
