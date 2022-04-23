import React from "react";
import { Footer } from '../components';


export function FooterContainer(){
    return (
        <Footer>
            <Footer.Title>Question? Contact Us.</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link herf="#">FAQ</Footer.Link>
                    <Footer.Link herf="#">Investor Relations</Footer.Link>
                    <Footer.Link herf="#">Ways to Watch</Footer.Link>
                    <Footer.Link herf="#">Coporate Information</Footer.Link>
                    <Footer.Link herf="#">Netflix Originals</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link herf="#">Help Center</Footer.Link>
                    <Footer.Link herf="#">Jobs</Footer.Link>
                    <Footer.Link herf="#">Terms of Use</Footer.Link>
                    <Footer.Link herf="#">Contact Us</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link herf="#">Account</Footer.Link>
                    <Footer.Link herf="#">Redeem Gift Cards</Footer.Link>
                    <Footer.Link herf="#">Privacy</Footer.Link>
                    <Footer.Link herf="#">Speed Test</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link herf="#">Meida Center</Footer.Link>
                    <Footer.Link herf="#">Buy Gift Cards</Footer.Link>
                    <Footer.Link herf="#">Cookie Preferences</Footer.Link>
                    <Footer.Link herf="#">Legal Notices</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>Netflix United Kingdom</Footer.Text>
        </Footer>
    )
}