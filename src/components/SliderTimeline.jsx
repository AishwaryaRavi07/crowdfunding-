import React, { useState } from "react";
import Slider from "react-input-slider";
import {Tooltip} from "react-tooltip";
import "../App.css";

const SliderTimeline = ({ raised, target }) => {
    const [value, setValue] = useState({ x: raised });
  
    const handleChange = (newValue) => {
      setValue(newValue);
    };

    
  
    return (
      <div className="slider-timeline">
        <div className="slider-timeline-labels">
          <span><strong>Raised So Far:</strong><br/><br/>{value.x}</span>
          <span><strong>Target:</strong><br/><br/>{target}</span>
        </div>
        <div className="slider-wrapper">
        <Slider
          axis="x"
          x={value.x}
          xmin={0}
          xmax={target}
          step={1}
          onChange={handleChange}
          styles={{
            active: { backgroundColor: "#5ae6d5" },
            thumb: { backgroundColor: "#5ae6d5" },
          }}
          tooltip={false}          
          />
          {value.x >= target && (
            <Tooltip id="slider-tooltip" effect="solid" place="top">
              Goal Reached!
            </Tooltip>
          )}
      </div>
      </div>
    );
  };
  
  export default SliderTimeline;
  
