export const accordionStyles = () => ({
  styleOverrides: {
    root: {
      '&.MuiAccordion-root:before': {
        backgroundColor: 'transparent',
      },
      '& .MuiAccordionSummary-expandIconWrapper': {
        transform: 'rotate(-90deg)',
      },
      '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(0deg)',
        marginRight: '10px',
      },
      '& .MuiAccordionSummary-content': {
        marginLeft: '5px',
      },
    },
  },
});
