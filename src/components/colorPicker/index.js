import React, { Component } from "react";
import "./index.css";
const classNames = require('classnames');

export default class ColorPicker extends Component {

  constructor(props){
    super(props);
    this.state ={
      selectedColor : '',
    }
  }

  render() {
    let selectedColor = this.state.selectedColor;
    console.log(selectedColor)
    var _this = this;
    console.log(this.props.colorPickerOptions)
    return (
      <div>
        <div className="layout-row justify-content-center">
          <div className="card mt-75">
            <div className="canvas" data-testid="selectedColor" style={{backgroundColor: selectedColor}}>
              <p className="text-center mx-auto px-5">{selectedColor}</p>
            </div>
            <div className="card-actions">
              <div className="layout-row justify-content-center align-items-center" data-testid="colorPickerOptions">
                {this.props.colorPickerOptions.map((color, index) => {
                  return (
                    <div
                    onClick={()=>{
                      _this.setState({
                        selectedColor : color
                      })
                    }}
                    style={{backgroundColor:color}}
                      className={
                        classNames({
                          'color-box': true,
                          'mx-8': true,
                          'my-15': true,
                          'selected': selectedColor === color
                        })
                      }
                      key={color}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
