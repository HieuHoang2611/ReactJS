import { useNavigate, useParams,Outlet } from "react-router-dom";
//import "./Home.css";
import Employee from './Employee';
//mport { Expenses } from "./Expenses";
export const Home = () => {


  



  let { id } = useParams();
  let navigate = useNavigate();
  return (
    <>
      <h1>This is house's {id}</h1>
      {/* <div className="house" id="house" data-rooms="6">
        <div className="house-wings" data-flip-key="wings">
          <div className="house-left-wing">
            <div className="house-window"></div>
            <div className="house-window"></div>
            <div className="house-sparkle">
              <div className="house-sparkle-dots"></div>
            </div>
          </div>
          <div className="house-right-wing">
            <div className="house-window"></div>
            <div className="house-window"></div>
            <div className="house-sparkle">
              <div className="house-sparkle-dots"></div>
            </div>
          </div>
          <div className="house-roof">
            <div className="house-ledge"></div>
          </div>
        </div>
        <div className="house-front" data-flip-key="front">
          <div className="house-chimney"></div>
          <div className="house-facade"></div>
          <div className="house-window">
            <div className="house-sparkle">
              <div className="house-sparkle-dots"></div>
            </div>
          </div>
          <div className="house-doorway">
            <div className="house-stairs"></div>
            <div className="house-door"></div>
          </div>
          <div className="house-gable">
            <div className="house-roof">
              <div className="house-ledge"></div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="d-flex justify-content-center">
        <button onClick={() => navigate('/')} className="btn btn-primary mt-2">
          Back home
        </button>
      </div>
      <Employee/>
    </>
  );
};
