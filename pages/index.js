import React, { Component } from 'react';
import Slider from 'react-compound-slider';
import { Handle } from '../components'; // example render components - source below

const sliderStyle = {
  position: 'relative',
  width: '100%',
};

const railStyle = {
  position: 'absolute',
  width: '100%',
  height: 8,
  borderRadius: 4,
  cursor: 'pointer',
  backgroundColor: 'rgb(100,100,100)',
};

class Index extends Component {
  render() {
    return (
      <div style={{ margin: '10%', height: 120, width: '80%' }}>
        <Slider
          rootStyle={sliderStyle}
          domain={[0, 100]}
          step={1}
          mode={2}
          values={[30]}
        >
          <div style={railStyle} />
          <Slider.Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Slider.Handles>
        </Slider>
      </div>
    );
  }
}

export default Index;
