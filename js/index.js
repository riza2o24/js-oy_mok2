const contact = document.querySelector('.contact-item');
const infoBox = document.getElementById('user-info');


contact.addEventListener('mouseenter' ,() =>{
    fetch("https://dummyjson.com/users")
    .then(res => res.json())
    .then(data => {
        infoBox.innerHTML = ''; 

        data.users.slice(0,10).forEach(item =>{
            const div=document.createElement("div")
            div.className="user-card"

            div.innerHTML=`
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
            `
            infoBox.appendChild(div)
        })

        
    })
})


