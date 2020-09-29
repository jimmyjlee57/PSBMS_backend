import React, { useState } from 'react';
import './../Styles/sidebar.css';
import './../Styles/npc.css';
import npcform from './../Components/Sidebar.js';

function Sidebar(){
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const [NPC, setNPC] = useState(false);
    const showNPC = () => setNPC(!NPC);

    return (
//if the button is clicked it changes the sidebars state
        <div className =  {sidebar ? 'sidebar-active' : 'sidebar-nonactive'}>
            <b1 className = {sidebar ? 'mini1' : 'mini1-non'} onClick={showNPC}>Next Payment Calculation</b1>
            <b1 className = {sidebar ? 'mini2' : 'mini2-non'}>Goals</b1>
            <b1 className = {sidebar ? 'mini3' : 'mini3-non'}>Cashflow</b1>
            <b1 className = {sidebar ? 'mini4' : 'mini4-non'}>Inventory</b1>
            <b1 className = {sidebar ? 'mini5' : 'mini5-non'}>Scheduling</b1>
            <button className =  {sidebar ? 'dot' : 'dot-non'} onClick={showSidebar}></button>
            <form className={NPC ? 'form' : 'form-non'}>
                <button type='submit' onClick={console.log('1')}>Submit</button>
            </form>
        </div>
        //</div2>
    )
}

export default Sidebar
