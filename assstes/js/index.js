 // Tab navigation
 const tabs = document.querySelectorAll('.nav-links button');
 const sections = document.querySelectorAll('main section');

 tabs.forEach(tab => {
   tab.addEventListener('click', () => {
     const target = tab.getAttribute('aria-controls');

     tabs.forEach(t => {
       t.classList.remove('active');
       t.setAttribute('aria-selected', 'false');
     });

     sections.forEach(section => {
       section.classList.remove('active');
       section.setAttribute('tabindex', '-1');
     });

     tab.classList.add('active');
     tab.setAttribute('aria-selected', 'true');
     const targetSection = document.getElementById(target);
     targetSection.classList.add('active');
     targetSection.setAttribute('tabindex', '0');
     targetSection.focus();
   });
 });

 // Contact form handling
 const form = document.getElementById('contactForm');
 const phoneInput = document.getElementById('phone');
 const messageEl = document.getElementById('formMessage');

 form.addEventListener('submit', (e) => {
   e.preventDefault();
   messageEl.textContent = '';
   messageEl.classList.remove('error');
   if (!phoneInput.checkValidity()) {
     messageEl.textContent = 'لطفا شماره تلفن معتبر وارد کنید.';
     messageEl.classList.add('error');
     phoneInput.focus();
     return;
   }
   // Simulate successful submission
   messageEl.textContent = 'ممنون! شماره تلفن شما با موفقیت ارسال شد.';
   form.reset();
 });