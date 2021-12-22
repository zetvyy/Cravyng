import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import  { useEffect } from 'react'
import { getSalesSummary } from "../../redux/action/profileAction";

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
  const data = useSelector(state => state.profile.data)
  const sales = useSelector(state => state.profile.dataOne)
  const paid = useSelector(state => state.profile.paidTransactions)
  const unPaid = useSelector(state => state.profile.unPaidTransactions)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSalesSummary())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps


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
            {data.length}
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
          { new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" })
            .format(paid[0] ? paid[0]["paid Transactions"] : 0)
          }                  
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
          { new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" })
            .format(unPaid[0] ? unPaid[0]["unpaid Transactions"] : 0)
          }       
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
         { new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" })
            .format(sales[0] ? sales[0]["gross Sales"] : 0)
          }             
          </AmountBox>
        </Box>
      </Grid>
      <Grid item xs={4}>
      <Box sx={{ width: "274", height: "113", padding: '16px', border: '1px solid #D3D9FF',
        boxSizing: 'border-box',
        borderRadius: '7px' }}>
          <TitleBox>
          NET SALES
          </TitleBox>
          <AmountBox >
          { new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" })
            .format(sales[0] ? sales[0]["net Sales"] : 0)
          } 
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
          { new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" })
            .format(Math.floor(sales[0] ? sales[0]["Average Sales Per Transaction"] : 0))
          }          
          </AmountBox>
        </Box>
      </Grid>
    </Grid>
  );
}
