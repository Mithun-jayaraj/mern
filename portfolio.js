
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});


const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  let valid = true;
  const formData = {};
  Array.from(contactForm.elements).forEach(el => {
    if(el.required && !el.value.trim()) valid = false;
    formData[el.name] = el.value;
  });

  if(!valid) {
    alert('Please fill all fields.');
    return;
  }


  const msg = document.getElementById('successMsg');
  msg.style.display = 'block';
  msg.innerHTML = `<strong>Thank you for your message!</strong><br>
    <b>Name:</b> ${formData.name}<br>
    <b>Email:</b> ${formData.email}<br>
    <b>Subject:</b> ${formData.subject}<br>
    <b>Message:</b> ${formData.message}`;
  contactForm.reset();
});