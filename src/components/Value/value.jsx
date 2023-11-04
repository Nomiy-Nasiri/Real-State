import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/es/index";
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
          {/* <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
              {data.map((item,i) => {
                return (
                  <AccordionItem className="AccordionItem">
                    <AccordionItemHeading>

                    </AccordionItemHeading>
                     
                  </AccordionItem>
                )
              })}


          </Accordion> */}
        </div>
      </div>
    </div>
  );
};

export default value;
