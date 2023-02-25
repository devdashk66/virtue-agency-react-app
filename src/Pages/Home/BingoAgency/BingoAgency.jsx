import React from 'react'
import './BingoAgency.css'
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import Button from '../../Common_Components/Button/Button';
import BingoImg from '../../../images/about-2.png'
import { NavLink } from 'react-router-dom';
const BingoAgency = () => {
  return (
    <div className='container'>
        <div className="bingoAgency">
            <div className="bingoImage">
                <img src={BingoImg} alt="Bingo" />
            </div>
            <div className="bingoInformation">
                <ul>
                    <li><TaskAltRoundedIcon/>Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem laca quam venenatis vestibulum.</li>
                    <li><TaskAltRoundedIcon/>Aenean quam. Pellentesque ornare sem laca quam venenatis vestibulum.</li>
                    <li><TaskAltRoundedIcon/>Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem laca quam venenatis vestibulum.</li>
                    <li><TaskAltRoundedIcon/>Etiam porta sem multipage evint landing magna mollis euismod a pharetra augue.</li>
                    <li><TaskAltRoundedIcon/>Aenean quam. Pellentesque ornare sem laca quam venenatis vestibulum.</li>
                    <br />
                    <NavLink to='/about'><Button title='learn More'/></NavLink>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default BingoAgency
