import './style.css'


function Faqs() {
  return (
   
    <div id='section-4'>
      <h3 className='faqText'>FAQs</h3>
      <div className="faqs">
      <div class="container">
        <div class="accordion">
          <div class="accordion-item" id="question1">
            <a class="accordion-link" href="#question1">
              <div class="flex">
                <h3>What is Fast Fuel?</h3>
              </div>
            </a>
            <div class="answer">
              <p> Fast Fuel is an online platform to provide doorstep delivery of fuel in a safe, reliable, and efficient way. You can place your order online and get fuel delivered at your location. We are making refueling smarter!</p>
            </div>
            <hr/>
        </div>
          <div class="accordion-item" id="question2">
            <a class="accordion-link" href="#question2">
              <div class="flex">
                <h3>Which areas are being served by Fast Fuel right now?</h3>
              </div>
            </a>
            <div class="answer">
              <p>Our services are available in Lahore, Karachi, Islamabad, and a number of other cites across Pakistan at present.</p>
            </div>
            <hr/>
        </div>
          <div class="accordion-item" id="question3">
            <a class="accordion-link" href="#question3">
              <div class="flex">
                <h3>What are Fast Fuel's hours of operation?</h3>
              </div>
            </a>
            <div class="answer">
              <p>Our vehicles operate and provide deliveries 24x7 round the clock.</p>
            </div>
            <hr/>
        </div>
          <div class="accordion-item" id="question4">
            <a class="accordion-link" href="#question4">
              <div>
                <h3>Where does Fast Fuel source its fuel from?</h3>
              </div>
            </a>
            <div class="answer">
              <p>FuelBuddy sources fuel from authorized and selected dealers of oil companies near your location. We follow a strict quality assurance program to ensure every drop of fuel is checked for quality before it gets loaded into our Refuellers for delivery. We do not purchase or stock fuel prior to delivery. Fuel is sourced only upon receiving orders from customers.</p>
            </div>
            <hr/>
        </div>
       </div>
      </div>
    </div>
    </div>
  );
}
export default Faqs;