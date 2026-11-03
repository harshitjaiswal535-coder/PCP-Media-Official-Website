const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav-links');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
const current=location.pathname.split('/').pop()||'index.html';document.querySelectorAll('.nav-links a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active')});


// Scrollable client feedback carousel: add more .testimonial-card elements in index.html as needed.
const testimonialTrack=document.querySelector('#testimonial-track');
document.querySelectorAll('[data-scroll-testimonials]').forEach(button=>button.addEventListener('click',()=>{
  if(!testimonialTrack)return;
  const direction=button.dataset.scrollTestimonials==='right'?1:-1;
  const card=testimonialTrack.querySelector('.testimonial-card');
  const distance=card?card.getBoundingClientRect().width+18:320;
  testimonialTrack.scrollBy({left:direction*distance,behavior:'smooth'});
}));

// Enquiry forms: open WhatsApp with the enquiry pre-written.
const WHATSAPP_NUMBER='917839492298';
document.querySelectorAll('form[data-whatsapp-form]').forEach(form=>{
  const status=form.querySelector('.form-help');
  form.addEventListener('submit',event=>{
    event.preventDefault();
    const labels={name:'Name',business:'Business / brand',email:'Email',service:'Service needed',budget:'Budget / timeline',message:'Project details'};
    const lines=['Hello PCP Media, I would like to make an enquiry.',''];
    Object.entries(labels).forEach(([field,label])=>{
      const input=form.elements[field];
      const value=input&&input.value.trim();
      if(value)lines.push('*'+label+':* '+value);
    });
    const url='https://wa.me/'+WHATSAPP_NUMBER+'?text='+encodeURIComponent(lines.join('\n'));
    const opened=window.open(url,'_blank','noopener');
    if(!opened)location.href=url;
    if(status){status.textContent='WhatsApp is opening with your enquiry. Press send there to complete it.';status.classList.remove('is-error');status.classList.add('is-success');}
    form.reset();
  });
});
