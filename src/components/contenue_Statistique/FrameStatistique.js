import React from 'react';
import "../../assets/styles/stat.css";

const FrameStatistique = () => {
    //const token = sessionStorage.getItem("token");

    return (
        <div class="simple-bar-chart">
            <div class="item">
                <div class="label">Label 1</div>
                <div class="value">80%</div>
            </div>

            <div class="item">
                <div class="label">Label 2</div>
                <div class="value">50%</div>
            </div>
  
            <div class="item">
                <div class="label">Label 3</div>
                <div class="value">100%</div>
            </div>
            
            <div class="item">
                <div class="label">Label 4</div>
                <div class="value">15%</div>
            </div>
            
            <div class="item">
                <div class="label">Label 5</div>
                <div class="value">1%</div>
            </div>
            
            <div class="item">
                <div class="label">Label 6</div>
                <div class="value">90%</div>
            </div>
        </div>
    );
};

export default FrameStatistique;