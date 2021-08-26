import { Grid } from '@material-ui/core';
import Header from './../../widgets/pageHeader';


export default function Layout({ children }) {

  return (
      <Grid container direction='column'>
      <Grid item>
        <Header/>
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2}/>
        <Grid item xs={12} sm={8}>
          {children}
        </Grid>
        <Grid item xs={false} sm={2}/>
      </Grid>
    </Grid>
  )
}