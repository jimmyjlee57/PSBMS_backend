import React, { useState } from 'react';
import './../Styles/sidebar.css';
//import './../Styles/npc.css';
import Npcform from './../Components/npcform.js';

function Sidebar(){
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const [visible, setVisible] = useState(false);
    const showVisible = () => setVisible(!visible);

    //const [NPC, setNPC] = useState(false);
    //const showNPC = () => setNPC(!NPC);

    
    return (
//if the button is clicked it changes the sidebars state
        <div className =  {sidebar ? 'sidebar-active' : 'sidebar-nonactive'}>
            <b1 className = {sidebar ? 'mini1' : 'mini1-non'} onClick={showVisible}> Next Payment Calculation</b1>
            <b1 className = {sidebar ? 'mini2' : 'mini2-non'}>Goals</b1>
            <b1 className = {sidebar ? 'mini3' : 'mini3-non'}>Cashflow</b1>
            <b1 className = {sidebar ? 'mini4' : 'mini4-non'}>Inventory</b1>
            <b1 className = {sidebar ? 'mini5' : 'mini5-non'}>Scheduling</b1>
            <button className =  {sidebar ? 'dot' : 'dot-non'} onClick={showSidebar}></button>
            {!visible ? <p/>: <Npcform/>}
        </div>
        //</div2>
        //<form className={NPC ? 'form' : 'form-non'}>
        //<button type='submit' onClick={console.log('1')}>Submit</button>
    //</form>
    )
}

export default Sidebar
