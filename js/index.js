const contact = document.querySelector('.contact-item');
const infoBox = document.getElementById('user-info');

contact.addEventListener('mouseenter', () => {
    if (infoBox.children.length > 0) return;

    // API so'rovi
    fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data => {
            infoBox.innerHTML = ''; 

            // data.users ichidan birinchi 10 tasini kesib olamiz
            const topTen = data.users.slice(0, 10);

            topTen.forEach(item => {
                const card = document.createElement('div');
                card.className = 'user-card';
                
                card.innerHTML = `
                    <div class="card-header">
                        <img src="${item.image}" alt="user">
                        <div>
                            <b>${item.firstName} ${item.lastName}</b>
                            <div style="font-size: 12px; color: #888;">${item.company.title}</div>
                        </div>
                    </div>
                    <div class="card-body">
                        <p><strong>Email:</strong> ${item.email}</p>
                        <p><strong>Tel:</strong> ${item.phone}</p>
                        <p><strong>Manzil:</strong> ${item.address.city}</p>
                        <span class="badge">Yosh: ${item.age}</span>
                    </div>
                `;
                infoBox.appendChild(card);
            });
        });
}, { once: true });