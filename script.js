document.addEventListener('DOMContentLoaded', () => {
    // Функция для развертывания и сворачивания статей в блоге
    const blogArticles = document.querySelectorAll('article');
    
    blogArticles.forEach(article => {
        article.addEventListener('click', () => {
            const content = article.querySelector('p');
            const isExpanded = content.style.display === 'block';

            content.style.display = isExpanded ? 'none' : 'block';
            article.classList.toggle('expanded', !isExpanded);
        });
    });

    // Обработка формы обратной связи
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы

        const name = contactForm.elements['name'].value;
        const email = contactForm.elements['email'].value;
        const message = contactForm.elements['message'].value;

        console.log(`Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`);
        
        // Здесь можно добавить обработку отправки на сервер

        alert('Ваше сообщение отправлено!');
        contactForm.reset(); // Сбрасываем форму
    });
});