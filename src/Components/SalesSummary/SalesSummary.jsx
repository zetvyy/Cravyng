import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const TitleBox = styled(Typography) (() => ({
  color: '#868993',
  fontWeight: 'bold',
  fontSize: '14px',
  fontFamily: 'Poppins'

}))

const AmountBox = styled(Typography) (() => ({
  color: '#616BC8',
  fontWeight: 'bold',
  marginTop: '16px',
  fontFamily: 'Poppins'
}))

export default function SalesSummary() {
  return (
    <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
        sx={{marginTop:'44px', padding: '32px 0',  }}>
      
      {/* transactions */}
      <Grid item xs={4}>
        <Box sx={{ width: "274", height: "113", padding: '16px', border: '1px solid #D3D9FF',
        boxSizing: 'border-box',
        borderRadius: '7px' }}>
          <TitleBox>
            TOTAL TRANSACTIONS
          </TitleBox>
          <AmountBox >
            57
          </AmountBox>
        </Box>
      </Grid>
      <Grid item xs={4}>
      <Box sx={{ width: "274", height: "113", padding: '16px', border: '1px solid #D3D9FF',
        boxSizing: 'border-box',
        borderRadius: '7px' }}>
          <TitleBox>
          PAID TRANSACTIONS
          </TitleBox>
          <AmountBox >
          Rp 10.578.500
          </AmountBox>
        </Box>
      </Grid>
      <Grid item xs={4}>
      <Box sx={{ width: "274", height: "113", padding: '16px', border: '1px solid #D3D9FF',
        boxSizing: 'border-box',
        borderRadius: '7px' }}>
          <TitleBox>
          UNPAID TRANSACTIONS
          </TitleBox>
          <AmountBox >
          Rp 3.110.200
          </AmountBox>
        </Box>
      </Grid>

      {/* sales */}
      <Grid item xs={4}>
        <Box sx={{ width: "274", height: "113", padding: '16px', border: '1px solid #D3D9FF',
        boxSizing: 'border-box',
        borderRadius: '7px' }}>
          <TitleBox>
          GROSS SALES
          </TitleBox>
          <AmountBox >
          Rp 17.578.500
          </AmountBox>
        </Box>
      </Grid>
      <Grid item xs={4}>
      <Box sx={{ width: "274", height: "113", padding: '16px', border: '1px solid #D3D9FF',
        boxSizing: 'border-box',
        borderRadius: '7px' }}>
          <TitleBox>
          PAID TRANSACTIONS
          </TitleBox>
          <AmountBox >
          Rp 13.688.700
          </AmountBox>
        </Box>
      </Grid>
      <Grid item xs={4}>
      <Box sx={{ width: "274", height: "113", padding: '16px', border: '1px solid #D3D9FF',
        boxSizing: 'border-box',
        borderRadius: '7px' }}>
          <TitleBox>
          AVERAGE SALES PER TRANSACTION
          </TitleBox>
          <AmountBox >
          Rp 240.152
          </AmountBox>
        </Box>
      </Grid>
    </Grid>
  );
}
