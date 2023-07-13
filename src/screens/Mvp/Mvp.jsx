import React from "react";
import { Csncel } from "../../components/Csncel";
import { Rectangle } from "../../components/Rectangle";
import "./style.css";

export const Mvp = () => {
  return (
    <div className="MVP">
      <div className="div">
        <div className="overlap">
          <img
            className="line"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/2a918e588178fa6ab9966595cba686a5/img/line-1.svg"
          />
          <img
            className="img"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/2a918e588178fa6ab9966595cba686a5/img/line-1.svg"
          />
          <img
            className="line-2"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/2a918e588178fa6ab9966595cba686a5/img/line-1.svg"
          />
        </div>
        <div className="group">
          <div className="rectangle-2" />
        </div>
        <header className="header">
          <div className="icons">
            <img
              className="profile"
              alt="Profile"
              src="https://generation-sessions.s3.amazonaws.com/2a918e588178fa6ab9966595cba686a5/img/profile@2x.png"
            />
          </div>
          <img
            className="rezoomi"
            alt="Rezoomi"
            src="https://generation-sessions.s3.amazonaws.com/2a918e588178fa6ab9966595cba686a5/img/rezoomi-logo2-1@2x.png"
          />
        </header>
        <div className="CV-converter">
          <div className="overlap-group">
            <h1 className="text-wrapper">CV Converter</h1>
          </div>
        </div>
        <div className="overlap-2">
          <img
            className="group-2"
            alt="Group"
            src="https://generation-sessions.s3.amazonaws.com/2a918e588178fa6ab9966595cba686a5/img/group-1337@2x.png"
          />
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <div className="overlap-wrapper">
            <div className="overlap-3">
              <div className="drag-drop-here">Drag &amp; Drop here</div>
              <div className="text-wrapper-2">Upload document</div>
              <img
                className="line-3"
                alt="Line"
                src="https://generation-sessions.s3.amazonaws.com/2a918e588178fa6ab9966595cba686a5/img/line-4.svg"
              />
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="rectangle-5" />
                  <div className="text-wrapper-3">or</div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="group-3"
            alt="Group"
            src="https://generation-sessions.s3.amazonaws.com/2a918e588178fa6ab9966595cba686a5/img/group-1335@2x.png"
          />
        </div>
        <div className="output-greyd">
          <img
            className="screenshot"
            alt="Screenshot"
            src="https://generation-sessions.s3.amazonaws.com/2a918e588178fa6ab9966595cba686a5/img/screenshot-2023-06-28-at-13-13-1.png"
          />
        </div>
        <div className="word-greyed">
          <div className="overlap-4">
            <div className="group-4">
              <img
                className="arrow"
                alt="Arrow"
                src="https://generation-sessions.s3.amazonaws.com/2a918e588178fa6ab9966595cba686a5/img/arrow-3-1.svg"
              />
            </div>
            <div className="rectangle-6" />
            <div className="rectangle-7" />
            <img
              className="icon-microsoftword"
              alt="Icon microsoftword"
              src="https://generation-sessions.s3.amazonaws.com/2a918e588178fa6ab9966595cba686a5/img/---icon--microsoftword-@2x.png"
            />
          </div>
        </div>
        <div className="PDF-greyed">
          <div className="overlap-5">
            <div className="group-4">
              <div className="arrow-wrapper">
                <img
                  className="arrow-2"
                  alt="Arrow"
                  src="https://generation-sessions.s3.amazonaws.com/2a918e588178fa6ab9966595cba686a5/img/arrow-3.svg"
                />
              </div>
            </div>
            <div className="text-wrapper-4">PDF</div>
          </div>
        </div>
        <div className="overlap-6">
          <div className="rectangle-8" />
          <div className="text-wrapper-5">Select type of documents</div>
          <div className="text-wrapper-6">Interview Notes</div>
          <div className="text-wrapper-7">HR Evaluation Form</div>
          <div className="text-wrapper-8">Technical Evaluation results</div>
          <div className="text-wrapper-9">Original CV</div>
          <Rectangle className="rectangle-4480" states="default" />
          <Rectangle className="rectangle-instance" states="default" />
          <Rectangle className="rectangle-4480-instance" states="default" />
          <Rectangle className="design-component-instance-node" states="default" />
        </div>
        <div className="active-analyze">
          <div className="div-wrapper">
            <div className="text-wrapper-10">Convert</div>
          </div>
        </div>
        <Csncel cancelClassName="csncel-2" className="csncel-instance" />
      </div>
    </div>
  );
};
