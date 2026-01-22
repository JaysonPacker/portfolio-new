import { socialImgs } from "../constants";

const Footer = () => {
    return (
        <footer className="footer" style={{ backgroundColor: '#0B0B0B' }}>
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    <p></p>
                </div>
                <div className="socials">
                    {socialImgs.map((socialImg, index) => (
                        <div key={index} className="icon">
                            <img src={socialImg.imgPath} alt="social icon" />
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Jayson Packer. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;