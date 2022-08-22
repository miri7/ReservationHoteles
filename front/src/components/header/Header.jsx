import "./Header.css";
import {
  faBed,
  faCalendarDay,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adulto: 1,
    nino: 0,
    cuarto: 1,
  });

  const handleOption = (nombre, operacion) => {
    setOptions((prev) => {
      return {
        ...prev,
        [nombre]: operacion === "i" ? options[nombre] + 1 : options[nombre] - 1,
      };
    });
  };
  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"} >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Quedarse</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>vuelo</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Renta de Carros</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Atracciones</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi para Aeropuerto</span>
          </div>
        </div>
        {type !== "list" &&
        <>
        
        <h1 className="headerTitle"> toda una vida de descuentos? es genial</h1>
        <p className="headerDesc">
          obtenga recompensas por sus viajes: desbloquee ahorros instantáneos
          del 10%
        </p>
        <button className="headerBtn"> Registrarse / Sign In </button>
        <div className="headerSearch">
          <div className="headerSearchInput">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Adonde vas"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDay} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headersearchText"
            >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
              date[0].endDate,
              "dd/MM/yyyy"
            )} `}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span 
            onClick={()=>setOpenOptions(!openOptions)}
             className="headersearchText">{`${options.adulto} adulto ${options.nino} niño ${options.cuarto} cuarto `}</span>
            {openOptions && 
            
            <div className="options">
              <div className="optionItem">
                <span className="optionText">adulto</span>
                <div className="optionCounter">
                  <button
                    className="optionCounterButton"
                    disabled={options.adulto <= 1}
                    onClick={() => handleOption("adulto", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.adulto}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("adulto", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">niño</span>
                <div className="optionCounter">
                  <button
                    disabled={options.nino <= 0}
                    className="optionCounterButton"
                    onClick={() => handleOption("nino", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.nino}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("nino", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">cuarto</span>
                <div className="optionCounter">
                  <button
                    disabled={options.cuarto <= 1}
                    className="optionCounterButton"
                    onClick={() => handleOption("cuarto", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.cuarto}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("cuarto", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            }
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">buscar</button>
          </div>
        </div>
        </>
        }


      </div>
    </div>
  );
};

export default Header;
