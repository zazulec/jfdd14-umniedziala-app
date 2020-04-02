import React from 'react';
import '../Range/Range.css';


function Range(props) {
  
    return (
        <div className="range__wrapper">
            <input 
                className={props.className}
                type={props.type}
                min={props.min}
                max={props.max}
                step={props.step}
                value={props.value}
                onChange={props.onChange}
                
            />
            <div className="range__text">
                <p>Darmowe</p>
                <p>Tanio</p>
                <p>Umiarkowanie</p>
                <p>Drogo</p>
                <p>Wszystkie</p>

            </div>

        </div>
    )
}

export default Range 