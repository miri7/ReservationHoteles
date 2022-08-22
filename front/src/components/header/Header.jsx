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
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"

const Header = () => {
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false)
  return (
    <div className="header">
      <div className="headerContainer">
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
            onClick={()=>setOpenDate(!openDate)}
            className="headersearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")} `}</span>
            {openDate && 
            
            <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />
            }
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className="headersearchText">2 adultos 2 niños 1 cuarto</span>
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">buscar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
