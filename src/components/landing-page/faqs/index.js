import './style.css'

function Faqs() {
  return (
    <div id='section-4' className='main-container'>
      <h3 className='faq-heading'>FAQs</h3>
      <div className="faq-content">
        <div className="faq-question">
          <input id="q1" type="checkbox" className="panel" />
          <div className="plus">+</div>
          <label for="q1" className="panel-title">What is Fast Fuel?</label>
          <div className="panel-content">Fast Fuel is an online platform to provide doorstep delivery of fuel in a safe, reliable, and efficient way. You can place your order online and get fuel delivered at your location. We are making refueling smarter!</div>
        </div>

        <div className="faq-question">
          <input id="q2" type="checkbox" className="panel" />
          <div className="plus">+</div>
          <label for="q2" className="panel-title">Which areas are being served by Fast Fuel right now?</label>
          <div className="panel-content">Our services are available in Lahore, Karachi, Islamabad, and a number of other cites across Pakistan at present.</div>
        </div>

        <div className="faq-question">
          <input id="q3" type="checkbox" className="panel" />
          <div className="plus">+</div>
          <label for="q3" className="panel-title">What are Fast Fuel's hours of operation?</label>
          <div className="panel-content">Our vehicles operate and provide deliveries 24x7 round the clock.</div>
        </div>

        <div className="faq-question">
          <input id="q4" type="checkbox" className="panel" />
          <div className="plus">+</div>
          <label for="q4" className="panel-title">Where does Fast Fuel source its fuel from?</label>
          <div className="panel-content">FuelBuddy sources fuel from authorized and selected dealers of oil companies near your location. We follow a strict quality assurance program to ensure every drop of fuel is checked for quality before it gets loaded into our Refuellers for delivery. We do not purchase or stock fuel prior to delivery. Fuel is sourced only upon receiving orders from customers.</div>
        </div>
      </div>

    </div>
  );
}
export default Faqs;