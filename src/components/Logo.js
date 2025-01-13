import { Typography } from "@mui/material";

const Logo = () => {
    return (
        <div className="logo-text">
            <Typography className="logo-text" style={{ lineHeight: "0.5em", fontSize: '28px' }}>
                mercuryo
            </Typography>
            <small style={{ letterSpacing: '3px', fontSize: '8px' }}>INVESTMENT • PAL</small>
        </div>
    );
}

export default Logo;