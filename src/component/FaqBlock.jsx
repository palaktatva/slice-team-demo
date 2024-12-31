import React from "react";
import Accordion, { accordionClasses } from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails, {
  accordionDetailsClasses,
} from "@mui/material/AccordionDetails";


const FaqBlock = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <section className="faq-section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="accordion-wrapper">
          <Accordion
            expanded={expanded}
            onChange={handleExpansion}
            sx={[
              expanded
                ? {
                    [`& .${accordionClasses.region}`]: {
                      height: "auto",
                    },
                    [`& .${accordionDetailsClasses.root}`]: {
                      display: "block",
                    },
                  }
                : {
                    [`& .${accordionClasses.region}`]: {
                      height: 0,
                    },
                    [`& .${accordionDetailsClasses.root}`]: {
                      display: "none",
                    },
                  },
            ]}
          >
            <AccordionSummary aria-controls="panel1-content" id="panel1-header">
              <Typography component="span">
                Custom transition using Fade
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary aria-controls="panel2-content" id="panel2-header">
              <Typography component="span">
                Default transition using Collapse
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqBlock;
