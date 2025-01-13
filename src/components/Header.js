import '../css/header.css'
import { Link, useNavigate } from "react-router-dom";
import Flexbox from "./Flexbox";
import Logo from "./Logo";
import { Container, IconButton, Typography } from "@mui/material";
import Spacebox from "./styles/Spacebox";
import CustomButton from "./styles/Custombutton";
import { isMobile } from "react-device-detect";
import { useState } from "react";
import { CloseOutlined, Menu } from "@mui/icons-material";
import Grid from './styles/Grid';


const Header = () => {

    const navigate = useNavigate()

    const navs = [
        {
            title: 'Invest',
            action: () => { },
            className: 'invest',
            children: (
                <div className="invest nav-annex">
                    <Grid grid={1} gap="10px">
                        <div style={{ minWidth: isMobile ? '100%' : '300px' }}>
                            <Link to="/cryptocurrency">
                                <Typography>
                                    Cryptocurrency
                                </Typography>
                                <small>Invest in Cryptocurrency 24/7</small>
                            </Link>
                            <Link to="/stocks">
                                <Typography>
                                    Stocks
                                </Typography>
                                <small>Invest in Stocks 24/7</small>
                            </Link>
                            <Link to="/efts">
                                <Typography>
                                    EFTs
                                </Typography>
                                <small>Invest in EFTs 24/7</small>
                            </Link>
                            <Link to="/metals">
                                <Typography>
                                    Metals
                                </Typography>
                                <small>Invest in Metals 24/7</small>
                            </Link>
                            <Link to="/commodities">
                                <Typography>
                                    Commodities
                                </Typography>
                                <small>Invest in Commodities 24/7</small>
                            </Link>
                        </div>
                    </Grid>
                </div>
            )
        },
        {
            title: 'Features',
            action: () => navigate('/features'),
            className: 'features'
        },
        {
            title: 'Company',
            action: () => navigate('/about'),
            className: 'company'
        },
        {
            title: 'Security',
            action: () => navigate('/security'),
            className: 'security'
        },
        {
            title: 'Help',
            action: () => navigate('/helpdesk'),
            className: 'help'
        },
    ]

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="header" style={{ padding: '10px 0px' }}>
            <Container>
                <Flexbox justifyContent="space-between" alignItems="center">
                    <Logo />
                    <Spacebox padding="10px" />
                    {!isMobile && <Flexbox alignItems="center" justifyContent="space-between">
                        {navs.map((nav, index) => (
                            <div onClick={nav.action} key={index} style={{ marginRight: '20px' }} className={`${nav.className}-nav pointer link-hover`}>
                                <Typography fontSize="16px">
                                    {nav.title}
                                </Typography>
                                {nav.children}
                            </div>
                        ))}
                    </Flexbox>}
                    {!isMobile && <Spacebox padding="10px" />}
                    {!isMobile && <Flexbox justifyContent="space-between" alignItems="center">
                        <CustomButton style={{ background: '#f0f0f0', padding: '10px 20px', borderRadius: '5px', color: 'black' }} handleClick={() => { }}>
                            Login
                        </CustomButton>
                        <Spacebox padding="10px" />
                        <CustomButton style={{ background: 'var(--primary)', padding: '10px 20px', borderRadius: '5px', color: 'white' }} handleClick={() => { }}>
                            Sign Up
                        </CustomButton>
                    </Flexbox>}
                    {isMobile && (
                        <IconButton onClick={() => setIsOpen(!isOpen)}>
                            {isOpen && <CloseOutlined />}
                            {!isOpen && <Menu />}
                        </IconButton>
                    )}
                </Flexbox>
            </Container>
            {isOpen && <div className="mobile-menu">
                <Container>
                    <Spacebox padding="20px" />
                    <Logo />
                    <Spacebox padding="30px" />
                    {navs.map((link, index) => (
                        <div key={index} onClick={link.action}>
                            <Typography fontSize="40px">
                                {link.title}
                            </Typography>
                            <Spacebox padding="10px" />
                        </div>
                    ))}
                    <div onClick={() => setIsOpen(false)}>
                        <Typography fontSize="40px">
                            Close
                        </Typography>
                        <Spacebox padding="30px" />
                    </div>
                    <Flexbox justifyContent="space-between" alignItems="center">
                        <CustomButton style={{ width: '100%', background: '#f0f0f0', padding: '10px 20px', borderRadius: '5px', color: 'black' }} handleClick={() => { }}>
                            Login
                        </CustomButton>
                        <Spacebox padding="10px" />
                        <CustomButton style={{ width: '100%', background: 'var(--primary)', padding: '10px 20px', borderRadius: '5px', color: 'white' }} handleClick={() => { }}>
                            Sign Up
                        </CustomButton>
                    </Flexbox>
                </Container>
            </div>}
        </div>
    );
}

export default Header;