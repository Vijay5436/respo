import React from 'react';
import {Grid,
    Paper,
    makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles((theme)=> ({
    paper1: {
        height: 50,
        width: 130,
        marginTop:20,
        textAlign:'center',
        backgroundColor:'#ffffff',
      },
      paper2: {
        height: 50,
        width: 320,
        marginTop:20,
        backgroundColor:'#ffffff',
      },
      paperDiv: {
          float:'left',
          textAlign:'center',
          paddingLeft:10,
          paddingRight:10,
          borderRight:'1px solid #ccc5c9'
      },
      paperDivl: {
        float:'left',
        textAlign:'center',
        paddingLeft:10,
        paddingRight:10,
    },
      root: {
        flexGrow: 1,
      },
      mainDiv: {
          float:'left',
          padding:20,
          backgroundColor:'#e6f2ff'
      }
}))
export const MiddleContainer =()=> {
    const classes =useStyles();
    return (
        <div className={classes.mainDiv}>
            <Grid container className={classes.root} spacing={2}>
                <Grid item>
                    <div className={classes.paper1}>
                        <span style={{color:'yellow',fontWeight:'500',fontSize:'20px'}}>8</span><br></br>
                        <span style={{color:'yellow',fontSize:16,fontWeight:'400'}}>New Requests</span>
                    </div>
                </Grid>
                <Grid item>
                    <div className={classes.paper2}>
                        <div className={classes.paperDiv}>
                        <span style={{color:'#000000',fontWeight:'500',fontSize:'20px'}}>20</span><br></br>
                        <span style={{color:'#000000',fontSize:16,fontWeight:'400'}}>Open</span>
                        </div>
                        <div className={classes.paperDiv}>
                        <span style={{color:'green',fontWeight:'500',fontSize:'20px'}}>1/3</span><br></br>
                        <span style={{color:'green',fontSize:16,fontWeight:'400'}}>Warehouse</span>
                        </div>
                        <div className={classes.paperDiv}>
                        <span style={{color:'red',fontWeight:'500',fontSize:'20px'}}>10/10</span><br></br>
                        <span style={{color:'red',fontSize:16,fontWeight:'400'}}>Scanning</span>
                        </div>
                        <div className={classes.paperDivl}>
                        <span style={{color:'#000000',fontWeight:'500',fontSize:'20px'}}>0/7</span><br></br>
                        <span style={{color:'#000000',fontSize:16,fontWeight:'400'}}>CST</span>
                        </div>
                    </div>
                </Grid>
                <Grid item>
                    <div className={classes.paper1}>
                        <span style={{color:'#000000',fontWeight:'500',fontSize:'20px'}}>0/0</span><br></br>
                        <span style={{color:'#000000',fontSize:16,fontWeight:'400'}}>Verified/Stage</span>
                    </div>
                </Grid>
                <Grid item>
                    <div className={classes.paper1}>
                        <span style={{color:'#000000',fontWeight:'500',fontSize:'20px'}}>0/0</span><br></br>
                        <span style={{color:'#000000',fontSize:16,fontWeight:'400'}}>Investigation</span>
                    </div>
                </Grid>
                <Grid item>
                    <div className={classes.paper1}>
                        <span style={{color:'#000000',fontWeight:'500',fontSize:'20px'}}>0/0</span><br></br>
                        <span style={{color:'#000000',fontSize:16,fontWeight:'400'}}>Refresh</span>
                    </div>
                </Grid>
                <Grid item>
                    <div className={classes.paper1}>
                        <span style={{color:'#000000',fontWeight:'500',fontSize:'20px'}}>0</span><br></br>
                        <span style={{color:'#000000',fontSize:16,fontWeight:'400'}}>Shipping</span>
                    </div>
                </Grid>
            </Grid>
           
        </div>
    )
}
