import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { EmailIcon, EmailShareButton, WhatsappIcon, WhatsappShareButton, OKShareButton, OKIcon } from "react-share";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
        // paddingTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    Typography: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
        display: 'grid',
        paddingTop: theme.spacing(2),
        alignItems: 'right',
        justifyContent: 'center',
    },
    Button: {
        // display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: theme.spacing(24),
        width: theme.spacing(100),
        '& > *': {
            margin: theme.spacing(4),
        },
    },
    }))

export default function Qusgenetor() {
const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.Typography}  variant="h4" gutterBottom>
                question paper level?
            </Typography>
            <Grid container spacing={3} className={classes.Button}>
                <Grid item xs >
                    <Button variant="contained" color="secondary">
                        EASY
                    </Button>
                </Grid>
                <Grid item xs>
                    <Button variant="contained" color="secondary">
                        MEDIUM
                    </Button>
                </Grid>
                <Grid item xs>
                    <Button variant="contained" color="secondary">
                        HARD
                    </Button>
                </Grid>
            </Grid>
            <Popup trigger={<button> share</button>} position="right center">
                <Typography>
                    Generate question link
                </Typography>
                <EmailShareButton title={"test"}>
                    <EmailIcon size={32} round />
                </EmailShareButton>
                <WhatsappShareButton title={"HEllo bro"} url={"https://web.whatsapp.com/"}>
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
            </Popup>
            <Popup trigger={<button> share</button>} position="right center">
                <Typography>
                    write the test
                </Typography>
                <OKShareButton 	title={"AQG"}>
                    <OKIcon size={32} round />
                </OKShareButton>
            </Popup>
        </div>
    )
}
