import React from "react";
import { Button, Navbar } from "react-bootstrap";

// This component renders the Navbar of our application
export function NavBar(props) {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Messagerie</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Button
                        style={{ display: props.showButton }}
                        variant="success"
                        onClick={async () => {
                            props.login();
                        }}
                    >
                        Se connecter à Metamask
                    </Button>
                    <div
                        style={{ display: props.showButton === "none" ? "block" : "none" }}
                    >
                        Utilisateur connecté :
                        <a href="#"> {props.username} </a>
                    </div>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}