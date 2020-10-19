import React, { useState } from 'react';
import './../Styles/sidebar.css';
//import './../Styles/npc.css';
import Npcform from './../Components/npcform.js';
import CashFlow from './../Components/cashflow.js';

function Sidebar(){
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const [Payment, setPayment] = useState(false);
    const showPayment = () => setPayment(!Payment);

    const [Cashflow, setCashflow] = useState(false);
    const showCashflow = () => setCashflow(!Cashflow);

    //const [NPC, setNPC] = useState(false);
    //const showNPC = () => setNPC(!NPC);
    function increaseFont(e) {
        //e.target.style.background = 'white';
        e.target.style.color = 'white';
      }
    function decreaseFont(e) {
        //e.target.style.background = 'white';
        e.target.style.color = 'black';
    }

    
    return (
//if the button is clicked it changes the sidebars state
        <div className =  {sidebar ? 'sidebar-active' : 'sidebar-nonactive'}>
            <b1 className = {sidebar ? 'mini1' : 'mini1-non'} onMouseEnter = {increaseFont} onMouseLeave = {decreaseFont} onClick={showPayment}> Next Payment Calculation</b1>
            <b1 className = {sidebar ? 'mini2' : 'mini2-non'} onMouseEnter = {increaseFont} onMouseLeave = {decreaseFont}>Goals</b1>
            <b1 className = {sidebar ? 'mini3' : 'mini3-non'} onMouseEnter = {increaseFont} onMouseLeave = {decreaseFont} onClick={showCashflow}>Cashflow</b1>
            <b1 className = {sidebar ? 'mini4' : 'mini4-non'} onMouseEnter = {increaseFont} onMouseLeave = {decreaseFont}>Inventory</b1>
            <b1 className = {sidebar ? 'mini5' : 'mini5-non'} onMouseEnter = {increaseFont} onMouseLeave = {decreaseFont}>Scheduling</b1>
            <button className =  {sidebar ? 'dot' : 'dot-non'} onClick={showSidebar}></button>
            {!Payment ? 'hidden' : <Npcform/>}
            {!Cashflow ? 'hidden' : <CashFlow/>}
        </div>
        //</div2>
        //<form className={NPC ? 'form' : 'form-non'}>
        //<button type='submit' onClick={console.log('1')}>Submit</button>
    //</form>
    )
}

export default Sidebar
