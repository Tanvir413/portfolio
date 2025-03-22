const contactForm = document.getElementById("contact-form")


emailjs.init("0bfwQ1idt7FiiIRFv")


contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // form input value
const fname = e.target.fname.value;
const lname = e.target.lname.value;
const subject= e.target.subject.value;
const visitorData = {fname, lname, subject};


// send email
emailjs.send('service_go5y62w', 'template_4hsbb3d', visitorData).then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
    alert("email successfully sended...!")
    contactForm.reset()
  },
  (error) => {
    console.log('FAILED...', error);
  },
);

})