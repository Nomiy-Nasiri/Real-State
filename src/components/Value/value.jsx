import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "./Value.css";
import data from "../../utils/accordion";

const value = () => {
  return (
    <div className="v-Wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        <div className="flexColStart v-right">
          <span className="orangeText">Our Values</span>
          <span className="primaryText">Offers We Give to you</span>
          <span className="SecondaryText">
            Welcome to your new family haven! This charming home is the perfect
            blend of comfort and functionality. Enjoy cozy evenings by the
            fireplace
          </span>
          <Accordion>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span className="orangeText">What harsh truths do you prefer to ignore?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="SecondaryText">
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                <span className="orangeText">  Is free will real or just an illusion?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="SecondaryText">
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span className="orangeText">Is free will real or just an illusion?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="SecondaryText">
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default value;
