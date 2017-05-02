import React from 'react';
import './PopupMenu.css';

function PopupMenu(props){    
    return (        
        <div id="popup-menu">
            <div id="popup-header">
                <button className = "btn-header" id="btn-back"></button>
                <button className = "btn-header" id="btn-close"></button>
            </div>                            
        </div>    
    );
}

export default PopupMenu;