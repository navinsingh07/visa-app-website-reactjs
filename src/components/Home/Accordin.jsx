import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  display:"flex", justifyContent:"center", flexDirection:"column", margin:"0 auto", width:"100%",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  }, width:"100%",
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

 function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const Heading = styled(Typography)`
    font-size:40px;
    font-weight:600;
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 40px 0;
  `;


  const QuesPara = styled(Typography)`
    font-size:20px;
    font-weight:300;
  `;


  const theme = createTheme();

theme.typography.h2 = {
  fontSize: '1rem',
  '@media (min-width:1040px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
  
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
};




  return (
    <div style={{width:"80%", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", margin:"0 auto"}}>

<ThemeProvider theme={theme}>

       <Heading variant='h2'>Frequently Asked Questions!</Heading> 

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
        <QuesPara variant='h1'>What are the 4 types of visa?</QuesPara>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Which type of visa do you need? Probably one of the four main types: tourist, immigration, student, or work.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <QuesPara variant='h1'>How do I know if my visa is rejected?</QuesPara>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Upon visa refusal, you will get a letter from the consulate stating the reason for refusal. This will help you reapply after a specific period of time by rectifying the mistake. Also, some of the consulate websites provide the visa status with the reason for rejection, if any.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <QuesPara variant='h1'>What is visa full form?</QuesPara>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The full form of VISA is “Visitors International Stay Admission.”
          </Typography>
        </AccordionDetails>
      </Accordion>
      </ThemeProvider>
    </div>
  );
}

export default CustomizedAccordions