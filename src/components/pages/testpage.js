import Avatar from '@material-ui/core/Avatar';
import { green } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import 'reactjs-popup/dist/index.css';
import background from '../../asset/1.jpeg';
import './testpage.css';
// import clockpng from '../../asset/clock.gif'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
        display: 'grid',
        paddingTop: theme.spacing(2),
        alignItems: 'right',
        justifyContent: 'center',
    },
    paper: {
        maxWidth: 520,
        margin: `${theme.spacing(1)}px auto`,
        backgroundImage: `url(${background})`,
        paddingTop: theme.spacing(6),
        paddingLeft: theme.spacing(6),
        height: '720px',
    },
    green: {
        color: '#fff',
        backgroundColor: green[500],
    },
    h2: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 50,
        color: 'white',
        height: 48,
        textAlign: "40px",
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingBottom: theme.spacing(1),
    },
    img: {
        height: 60,
    }
    }))

    const message = `Truncation should be conditionally applicable on this long line of text
    as this is a much longer line than what the container can support.`;

    export default function Testpage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h2 className={classes.h2}>questions: 1/20</h2>
            {/* <img src={clockpng} alt='' className={classes.img}/> */}
        <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
            <Avatar className={classes.green}>
                1
            </Avatar>
            </Grid>
            <Grid item xs>
                <Typography>
                    {message}
                </Typography>

            </Grid>
            </Grid>
            <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
            <Avatar className={classes.green}>
                2
            </Avatar>
            </Grid>
            <Grid item xs>
                <Typography>
                    {message}
                </Typography>
            </Grid>
            </Grid>
            <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
            <Avatar className={classes.green}>
                3
            </Avatar>
            </Grid>
            <Grid item xs>
                <Typography>
                    {message}
                </Typography>
            </Grid>
            </Grid>
            <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
            <Avatar className={classes.green}>
                4
            </Avatar>
            </Grid>
            <Grid item xs>
                <Typography>
                    {message}
                </Typography>
            </Grid>
            </Grid>
        </Paper>
        </div>
    );
}