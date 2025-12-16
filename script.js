// =======================================================
// script.js (Versi Universal untuk Family, Friends, & Education)
// =======================================================

// --- 1. DATA SEDIA ADA (FAMILY) ---
const familyData = {
    'father-card': {
        title: "FATHER: The Cornerstone of Strength",
        pic: "father.jpg",
        desc: `<p>My father is a hardworking and caring person who has always supported and guided me in my life. He teaches me the importance of discipline, responsibility, and never giving up. Through his actions, he inspires me to work hard and become a better person every day.</p>`
    },
    'mother-card': {
        title: "MOTHER: Lightfull on Family's",
        pic: "mother.jpg",
        desc: `<p>My mother is a loving and patient person who always supports and cares for our family. She teaches me kindness, understanding, and the importance of staying strong during difficult times. Her encouragement motivates me to do my best in everything I do.</p>`
    },
    'sibling-card': {
        title: "SIBLINGS: Cheerfull and Outstanding",
        pic: "sibling.jpg",
        desc: `<p>My siblings are supportive and fun to be around, making my life more meaningful and joyful. They motivate me to grow, learn, and face challenges with confidence. Together, we share strong bonds, laughter, and unforgettable memories.</p>`
    }
};

// --- 2. DATA SEDIA ADA (FRIENDS) ---
const friendsData = {
    'friend1-card': {
        title: "Childhood Buddy: The Crazier Catalyst",
        pic: "friend1.jpg",
        desc: `
            <p>My childhood buddy is someone who has been by my side since a young age, sharing many memories and experiences together. They have supported me through different stages of life and always bring positivity and encouragement. Our friendship remains strong and meaningful as we grow and learn together.</p>
        `
    },
    'friend2-card': {
        title: "Classmate Buddy: The Creative Innovator",
        pic: "friend2.jpg",
        desc: `
            <p>My classmate buddy is someone who has shared the same learning journey with me throughout my studies. We support each other in academics and personal growth, making school life more enjoyable and meaningful.</p>
        `
    },
    'friend3-card': {
        title: "Brotherhood: The Tech Specialist",
        pic: "friend3.jpg",
        desc: `
            <p>Brotherhood represents a strong bond built on trust, loyalty, and shared experiences. Together, we stand by each other through challenges and successes, creating a connection that feels like family.</p>
        `
    },
    'friend4-card': {
        title: "Komander's Buddy: The Motivational Pillar",
        pic: "friend4.jpg",
        desc: `
            <p>My Komander’s buddy is someone who stands together with me in leadership, discipline, and responsibility. Through teamwork and mutual respect, we support one another in carrying out duties and facing challenges with confidence.</p>
        `
    }
};

// --- 3. DATA BARU UNTUK EDUCATION ---
const educationData = {
    'edu1-card': {
        title: "PRIMARY SCHOOL: The Foundation Phase",
        pic: "education1.jpg", 
        desc: `
            <p>Primary education is an important phase where the foundation of knowledge and discipline begins to develop. I learned the value of teamwork through sports activities and gained early exposure to responsibility. This was the place where my interest in outdoor activities first started.</p>
            <ul>
                <li><strong>Institution:</strong> Sekolah Kebangsaan Selayang Baru 1 - Sekolah Kebangsaan Sungai Soi</li>
                <li><strong>Year:</strong> 2012 - 2017</li>
            </ul>
        `
    },
    'edu2-card': {
        // Tajuk Awal Detail View (SSEMJ)
        title: "SECONDARY SCHOOL: The Early Secondary Phase", 
        // Tajuk Penuh Detail View (SMK SUNGAI SOI)
        fullTitle: "SMK SUNGAI SOI - SSEMJ: Leadership and Academic Balance", 
        pic: "education2.jpg", 
        desc: `
            <p>During secondary school, my focus shifted towards balancing academic excellence with leadership. As a Student, I developed my organizational, communication, and pressure-handling skills. This period played an important role in shaping my character.</p>
            <ul>
                <li><strong>School:</strong> Sekolah Seni Malaysia Johor - Sekolah Menengah Kebangsaan Sungai Soi</li>
                <li><strong>Year:</strong> 2018 - 2022</li>
                <li><strong>Achievment:</strong> Active on Kor Kadet Remaja Sekolah, Sport olahraga and SPM.</li>
            </ul>
        `,
        isTransition: true 
    },
    'edu3-card': {
        title: "UNIVERSITY: Bridging Tech and Sports",
        pic: "education3.jpg", 
        desc: `
            <p>At the university level, I am pursuing studies in Information Management. I am currently learning how to use web technologies such as HTML, CSS, and JavaScript to build platforms like this blog, combining technical skills with my passion for sports.</p>
            <ul>
                <li><strong>Institution:</strong> Universiti Teknologi MARA (UiTM)</li>
                <li><strong>Year:</strong> 2023 - Present</li>
                <li><strong>Programe:</strong> Pengurusan Maklumat (Information Management)</li>
            </ul>
        `
    }
};


// Gabungkan semua data ke dalam satu objek
const allData = {...familyData, ...friendsData, ...educationData};


// --- 4. PENYESUAIAN LOGIK UNIVERSAL ---
const cardViewContainer = document.getElementById('card-view-container');
let backButton, detailContent, clickableCards;

// Dapatkan ID Elemen berdasarkan halaman semasa
if (document.querySelector('.friends-layout')) {
    backButton = document.getElementById('back-button-friends');
    detailContent = document.getElementById('detail-content-friends');
    // Guna kelas yang betul untuk Friends
    clickableCards = document.querySelectorAll('.friend-card-clickable');
} else if (document.querySelector('.family-layout')) {
    backButton = document.getElementById('back-button');
    detailContent = document.getElementById('detail-content');
    // Guna kelas yang betul untuk Family
    clickableCards = document.querySelectorAll('.family-member');
} else if (document.querySelector('.education-layout')) {
    // --- Lojik BARU untuk Education ---
    backButton = document.getElementById('back-button-education');
    detailContent = document.getElementById('detail-content-education');
    clickableCards = document.querySelectorAll('.education-card-clickable');
}

const detailViewContainer = document.getElementById('detail-view-container');


// --- 5. Fungsi Utama: Menampilkan Detail (Universal) ---
function showDetail(cardId) {
    const data = allData[cardId];
    // Pastikan data wujud
    if (!data || !cardViewContainer || !detailViewContainer || !detailContent) return;

    // Isikan kandungan Detail View
    detailContent.innerHTML = `
        <div class="detail-pic-box">
            <img src="${data.pic}" alt="${data.title}">
        </div>
        <div class="detail-text-box">
            <h2 id="detail-title-education">${data.title}</h2>             ${data.desc}
        </div>
    `;

    // Tukar Tampilan
    cardViewContainer.style.display = 'none';      // Sembunyikan kad
    detailViewContainer.style.display = 'block';   // Tunjukkan detail
    window.scrollTo(0, 0);

    // Logik Transisi Khas untuk edu2-card
    if (cardId === 'edu2-card' && data.isTransition) {
        const titleElement = document.getElementById('detail-title-education');
        if (titleElement) {
            // Fasa 1: Mulakan dengan SSEMJ (sudah dimuatkan)
            // Fasa 2: Tukar Tajuk ke SMK SUNGAI SOI selepas kelewatan
            setTimeout(() => {
                titleElement.style.opacity = 0; // Pudar keluar (guna CSS transition)
                setTimeout(() => {
                    titleElement.textContent = data.fullTitle; // Tukar teks
                    titleElement.style.opacity = 1; // Pudar masuk
                }, 300); // Tunggu 300ms (sama dengan tempoh transisi CSS)
            }, 1500); // 1.5 saat kelewatan sebelum memulakan transisi
        }
    }
}


// --- 6. Event Listeners (Klik pada setiap kad) ---
if (clickableCards) {
    clickableCards.forEach(card => {
        card.addEventListener('click', function() {
            showDetail(this.id);
        });
    });
}


// --- 7. Fungsi Tombol Kembali ---
if (backButton) {
    backButton.addEventListener('click', function() {
        detailViewContainer.style.display = 'none';
        // Gunakan 'flex' kerana semua layout anda menggunakan flexbox
        cardViewContainer.style.display = 'flex';
    });
}