document.addEventListener("DOMContentLoaded", () => {

    // NEWS SLIDER (index.html)
    // Moves the slider track horizontally to show one slide at a time
    const sliderTrack = document.querySelector('.slider-track');
    if (sliderTrack) {
        const slides = document.querySelectorAll('.slide');
        const btnPrev = document.getElementById('btn-prev');
        const btnNext = document.getElementById('btn-next');
        let index = 0;

        // Wraps around when reaching the first or last slide
        function showSlide(i) {
            index = (i + slides.length) % slides.length;
            sliderTrack.style.transform = `translateX(${-index * 100}%)`;
        }

        btnNext.addEventListener('click', () => showSlide(index + 1));
        btnPrev.addEventListener('click', () => showSlide(index - 1));
    }

    //PROGRAM TABS (courses.html)
    // Shows the table matching the clicked tab, hides the others
    const tabBtns = document.querySelectorAll('.tab-btn');
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));

                btn.classList.add('active');
                document.getElementById(btn.dataset.tab).classList.remove('hidden');
            });
        });
    }

    //CONTACT FORM (contact.html) 
    // Validates fields before submitting and shows a confirmation message
    const msgForm = document.getElementById('msg-form');
    if (msgForm) {
        msgForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const userName = document.getElementById('user-name').value.trim();
            const userEmail = document.getElementById('user-email').value.trim();
            const userMessage = document.getElementById('user-message').value.trim();

            if (!userName || !userEmail || !userMessage) {
                alert("Please fill in all required fields.");
            } else if (!userEmail.includes("@")) {
                alert("Please enter a valid email address.");
            } else {
                alert("Thank you! Your message has been sent successfully.");
                msgForm.reset();
            }
        });
    }
});
