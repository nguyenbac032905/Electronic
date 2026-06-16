import { Footer,FooterLinkGroup,FooterLink } from "flowbite-react";
import { MdFacebook } from "react-icons/md";
import { FaDribbble, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const MainContentFooter = () => {
    return (
        <>
            <Footer>
                <div className="flex flex-col items-center gap-y-3 py-2 px-10 lg:flex-row lg:justify-between">
                    <FooterLinkGroup>
                        <FooterLink href="#" className="mr-3">Terms and conditions</FooterLink>
                        <FooterLink href="#" className="mr-3">Privacy Policy</FooterLink>
                        <FooterLink href="#" className="mr-3">Licensing</FooterLink>
                        <FooterLink href="#" className="mr-3">Contact</FooterLink>
                    </FooterLinkGroup>
                    <FooterLinkGroup>
                        <FooterLink href="#" className="text-2xl ml-3 hover:text-black"><MdFacebook /></FooterLink>
                        <FooterLink href="#" className="text-2xl ml-3 hover:text-black"><FaTwitter /></FooterLink>
                        <FooterLink href="#" className="text-2xl ml-3 hover:text-black"><FaGithub /></FooterLink>
                        <FooterLink href="#" className="text-2xl ml-3 hover:text-black"><FaDribbble /></FooterLink>
                    </FooterLinkGroup>
                </div>
            </Footer>
            <p className="text-center my-8 text-sm text-gray-500"> 
                @2019-2022 Flowbite.com. All rights reserved.
            </p>
        </>
    )
}
export default MainContentFooter;