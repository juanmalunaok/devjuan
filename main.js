// Scroll fade-up observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Track WhatsApp clicks (GA4 + Google Ads conversion)
function trackWhatsAppClick(source) {
    if (typeof gtag === 'function') {
        gtag('event', 'whatsapp_click', {
            event_category: 'conversion',
            event_label: source || 'unknown',
            value: 500
        });
        gtag('event', 'conversion', {
            send_to: 'AW-XXXXXXXXX/XXXXXXXXXXXXXXXXX',
            value: 500,
            currency: 'USD'
        });
    }
    return true;
}
window.trackWhatsAppClick = trackWhatsAppClick;
