import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import NotesIcon from "@material-ui/icons/Notes";
import ShareIcon from "@material-ui/icons/Share";
import React from "react";
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
// import ModalDialog from "./ModalDialog";

const useStyles = makeStyles((theme) => ({
	menuButton: {
		marginRight: theme.spacing(2),
		position: "fixed",
		top: "1",
		left: "1",
	},
	title: {
		flexGrow: 1,
	},
	login: {
		position: "absolute",
		top: "2px",
		right: "1px",
	},
}));

const StyledMenu = withStyles({
	paper: {
		border: "1px solid #d3d4d5",
	},
})((props) => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "center",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "center",
		}}
		{...props}
	/>
));

const StyledMenuItem = withStyles((theme) => ({
	root: {
		"&:focus": {
			backgroundColor: theme.palette.primary.main,
			"& .MuiListItemIcon-root, & .MuiListItemText-primary": {
				color: theme.palette.common.white,
			},
		},
	},
}))(MenuItem);

const Homepage = () => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Toolbar>
			<Button
				variant="contained"
				color="primary"
				className={classes.login}
				endIcon={<MenuIcon />}
			>
				<MenuItem component={Link} to={"/sign_in"}>
					Login
				</MenuItem>
			</Button>
			<IconButton
				edge="start"
				color="#fff"
				aria-label="menu"
				className={classes.menuButton}
			>
				<MenuIcon onClick={handleClick} />
				<StyledMenu
					id="customized-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<StyledMenuItem>
						<ListItemIcon>
							<HomeIcon fontSize="small" />
						</ListItemIcon>
						<MenuItem component={Link} to={"/home"}>
							Home
						</MenuItem>
					</StyledMenuItem>
					<StyledMenuItem>
						<ListItemIcon>
							<ShareIcon fontSize="small" />
						</ListItemIcon>
						<MenuItem component={Link} to={"/share"}>
							Share
						</MenuItem>
					</StyledMenuItem>
					<StyledMenuItem>
						<ListItemIcon>
							<NotesIcon fontSize="small" />
						</ListItemIcon>
						<MenuItem component={Link} to={"/test"}>
							Write Test
						</MenuItem>
					</StyledMenuItem>
				</StyledMenu>
			</IconButton>
		</Toolbar>
	);
};

export default Homepage;
