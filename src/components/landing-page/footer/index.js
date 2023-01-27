import './style.css'

function Footer() {
    return (
        <footer id='section-5'>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="quick-links">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#section-1">Home</a></li>
                                <li><a href="#section-2">How it Works</a></li>
                                <li><a href="#section-3">Our Services</a></li>
                                <li><a href="#section-4" >FAQs</a></li>
                                <li><a href="#section-5">Contact Us</a></li>
                            </ul>
                        </div>
                        <div class="contact-us">
                            <h4>Contact Us</h4>
                            <ul>
                                <li>Email: <a href="mailto:contact@example.com">contact@example.com</a></li>
                                <li>Phone: 555-555-5555</li>
                                <li>Address: 123 example,  PAK</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <p class="copyright">Copyright ©2023 Example Inc. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>

    );
}
export default Footer;