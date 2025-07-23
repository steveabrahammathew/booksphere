// Global variables
let currentUser = null;
let currentPage = 1;
let totalPages = 10;
let currentFontSize = 18;
let isDarkTheme = false;
let currentAudio = null;

// Sample data
const sampleBooks = [
    // {
    //     id: 1,
    //     title: "Digital Horizons",
    //     author: "Alex Rivera",
    //     category: "fiction",
    //     cover: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400",
    //     rating: 4.5,
    //     content: "Chapter 1: The Digital Awakening\n\nIn the year 2045, Maya Chen stood at the edge of the virtual reality platform, her neural interface humming with anticipation. The digital world before her stretched infinitely, a realm where thoughts became reality and imagination knew no bounds.\n\nThe ReadSphere project had been her life's work - a revolutionary platform that could translate human consciousness into digital experiences. As she prepared to make the first full dive, Maya couldn't help but wonder if she was about to change the very nature of human existence.\n\nThe transition was seamless. One moment she was standing in her laboratory, the next she was floating in a space that defied all physical laws. Colors that had no names in the real world painted the digital sky, and structures of pure light rose from foundations of crystallized data.\n\nThis was more than virtual reality - this was a new form of consciousness, a digital evolution of the human experience. As Maya explored this brave new world, she began to understand that the boundaries between reality and imagination were about to be rewritten forever.\n\nThe implications were staggering. If consciousness could be digitized, what did that mean for humanity's future? Were they on the verge of transcending their physical limitations, or were they about to lose something fundamentally human in the process?"
    // },
    // {
    //     id: 2,
    //     title: "Quantum Mysteries",
    //     author: "Dr. Sarah Kim",
    //     category: "mystery",
    //     cover: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400",
    //     rating: 4.2,
    //     content: "Chapter 1: The Quantum Paradox\n\nDr. Elena Vasquez stared at the impossible data streaming across her holographic displays. The quantum computer had just solved a problem that should have taken millions of years in mere seconds, but the solution defied every law of physics she knew.\n\nThe ReadSphere's quantum processing core wasn't just computing - it was somehow accessing information from parallel realities, pulling knowledge from versions of Earth where different choices had been made, different discoveries achieved.\n\nAs Elena delved deeper into the mystery, she realized that the platform wasn't just a reading device - it was a window into the multiverse itself. Every story, every piece of literature ever written or imagined, existed somewhere in the infinite expanse of parallel worlds.\n\nBut with this revelation came a terrifying question: if they could access these other realities, what was to stop something from those worlds from accessing theirs? The quantum signatures she was detecting suggested that the barrier between realities was becoming increasingly thin.\n\nElena knew she was on the verge of the greatest discovery in human history, but she also feared it might be the last discovery humanity would ever make."
    // },
    // {
    //     id: 3,
    //     title: "Neon Hearts",
    //     author: "Luna Martinez",
    //     category: "romance",
    //     cover: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400",
    //     rating: 4.7,
    //     content: "Chapter 1: Digital Connection\n\nZara had never believed in love at first sight, especially not in a virtual world. But as she navigated the neon-lit streets of Neo-Tokyo within ReadSphere's immersive environment, she found herself drawn to a mysterious figure who seemed to exist between the digital and the real.\n\nKai was a digital artist, crafting experiences that blurred the line between reality and imagination. His avatar was stunning, but it was his mind that captivated Zara - the way he could paint emotions with light, create symphonies from data streams, and make her heart race with nothing more than perfectly crafted words.\n\nTheir first meeting was in a virtual café that existed in a space between dimensions, where the coffee tasted like memories and the music was composed of pure emotion. As they talked through the night, sharing dreams and fears across the digital divide, Zara realized that love in the age of ReadSphere was something entirely new.\n\nBut questions lingered: Was what she felt real if it existed only in the digital realm? Could two souls truly connect when their bodies were worlds apart? And what happened when the line between virtual and reality became so blurred that it ceased to exist at all?\n\nAs dawn broke in the real world, Zara found herself questioning everything she thought she knew about love, connection, and what it meant to be human in an increasingly digital age."
    // },
    // {
    //     id: 4,
    //     title: "The Future Mind",
    //     author: "Dr. Marcus Webb",
    //     category: "non-fiction",
    //     cover: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400",
    //     rating: 4.3,
    //     content: "Chapter 1: The Consciousness Revolution\n\nWe are witnessing the dawn of a new era in human evolution - not biological, but technological. The development of platforms like ReadSphere represents more than just an advancement in entertainment or education; it signals the beginning of humanity's transformation into a hybrid digital-biological species.\n\nThe implications of consciousness-computer interfaces extend far beyond reading and media consumption. We are looking at the potential for direct knowledge transfer, shared experiences across vast distances, and the possibility of preserving human consciousness beyond biological death.\n\nConsider the possibilities: A surgeon could instantly access the combined experience of every medical professional who has ever lived. A student could literally experience historical events through the consciousness of those who lived them. Artists could share not just their creations, but the very emotions and inspirations that drove them to create.\n\nBut this revolution comes with profound challenges. How do we maintain individual identity when consciousness can be shared and merged? What happens to privacy when thoughts themselves can be digitized and transmitted? How do we prevent the technology from creating new forms of inequality between those who can afford consciousness enhancement and those who cannot?\n\nAs we stand on the brink of this transformation, we must carefully consider not just what we can do, but what we should do. The choices we make in the next decade will determine whether this technology becomes humanity's greatest achievement or its final mistake."
    // },
    {
    id: 1,
    title: "12 Rules for Life",
    author: "Jordan B. Peterson",
    category: "non-fiction",
        cover: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.6,
    file: "books2/12_Rules_for_life.pdf"
    },
    {
  id: 2,
  title: "Bhagavad Gita Yatharoop",
  author: "A. C. Bhaktivedanta Swami Prabhupada",
  category: "spiritual",
  cover: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
  rating: 4.8,
  file: "books/Bhagavad_Gita_Yatharoop.pdf"
},
{
  id: 3,
  title: "First, We Make the Beast Beautiful",
  author: "Sarah Wilson",
  category: "mental health",
  cover: "https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg?auto=compress&cs=tinysrgb&w=400",
  rating: 4.5,
  file: "books2/First_We_Make_the_Beast_Beautiful.pdf"
},
{
  id: 4,
  title: "It’s Not How Good You Are, It’s How Good You Want to Be.",
  author: "Paul Arden",
  category: "self-help",
  cover: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=400",
  rating: 4.4,
  file: "books2/It’s_Not_How_Good_You_Are,_It’s_How_Good_You_Want_to_Be.pdf"
},
{
  id: 5,
  title: "Reasons to Stay Alive",
  author: "Matt Haig",
  category: "mental health",
  cover: "https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=400",
  rating: 4.7,
  file: "books2/Reasons_to_Stay_Alive.pdf"
}

];

const sampleAudiobooks = [
     {
        id: 1,
        title: "The Millionare Booklet 1",
        author: "Phoenix Rivera",
        cover: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400",
        duration: "1h 18m 33s",
        audioUrl: "audio2/The Millionaire Booklet 1.mp3"
    },
  
    {
        id: 2,
        title: "The Millionare Booklet 2",
        author: "Dr. Yuki Tanaka",
        cover: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400",
        duration: "17m 39s",
        audioUrl: "audio2/The Millionaire Booklet 2.mp3"
    }
   
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const booksGrid = document.getElementById('booksGrid');
const audiobooksGrid = document.getElementById('audiobooksGrid');
const categoryBtns = document.querySelectorAll('.category-btn');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadBooks();
    loadAudiobooks();
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    // Mobile navigation
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Category filtering
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterBooks(btn.dataset.category);
        });
    });

    // Form submissions
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('registerForm').addEventListener('submit', handleRegister);

    // Modal close events
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
}

// Authentication functions
function showLogin() {
    document.getElementById('loginModal').style.display = 'block';
}

function showRegister() {
    document.getElementById('registerModal').style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function switchToRegister() {
    closeModal('loginModal');
    showRegister();
}

function switchToLogin() {
    closeModal('registerModal');
    showLogin();
}

async function handleLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
        const response = await fetch('api/login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });

        const result = await response.json();
        
        if (result.success) {
            currentUser = result.user;
            updateUIForLoggedInUser();
            closeModal('loginModal');
            showNotification('Login successful!', 'success');
        } else {
            showNotification(result.message || 'Login failed', 'error');
        }
    } catch (error) {
        // Fallback for demo purposes
        if (email && password) {
            currentUser = { id: 1, name: 'Demo User', email: email };
            updateUIForLoggedInUser();
            closeModal('loginModal');
            showNotification('Login successful! (Demo Mode)', 'success');
        } else {
            showNotification('Please fill in all fields', 'error');
        }
    }
}

async function handleRegister(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    if (password !== confirmPassword) {
        showNotification('Passwords do not match', 'error');
        return;
    }

    try {
        const response = await fetch('api/register.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        });

        const result = await response.json();
        
        if (result.success) {
            showNotification('Registration successful! Please login.', 'success');
            closeModal('registerModal');
            showLogin();
        } else {
            showNotification(result.message || 'Registration failed', 'error');
        }
    } catch (error) {
        // Fallback for demo purposes
        if (name && email && password) {
            showNotification('Registration successful! Please login. (Demo Mode)', 'success');
            closeModal('registerModal');
            showLogin();
        } else {
            showNotification('Please fill in all fields', 'error');
        }
    }
}

function updateUIForLoggedInUser() {
    const navAuth = document.querySelector('.nav-auth');
    navAuth.innerHTML = `
        <span style="color: white; margin-right: 16px;">Welcome, ${currentUser.name}!</span>
        <button class="btn btn-outline glass-btn" onclick="logout()">
            <i class="fas fa-sign-out-alt"></i> Logout
        </button>
    `;
}

function logout() {
    currentUser = null;
    const navAuth = document.querySelector('.nav-auth');
    navAuth.innerHTML = `
        <button class="btn btn-outline glass-btn" onclick="showLogin()">
            <i class="fas fa-sign-in-alt"></i> Login
        </button>
        <button class="btn btn-primary glass-btn" onclick="showRegister()">
            <i class="fas fa-user-plus"></i> Sign Up
        </button>
    `;
    showNotification('Logged out successfully', 'success');
}

// Book loading and filtering
function loadBooks(category = 'all') {
    const filteredBooks = category === 'all' ? sampleBooks : sampleBooks.filter(book => book.category === category);
    
    booksGrid.innerHTML = filteredBooks.map(book => `
        <div class="book-card" onclick="openBook(${book.id})">
            <img src="${book.cover}" alt="${book.title}" class="book-cover">
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">by ${book.author}</p>
                <div class="book-rating">
                    <div class="stars">${generateStars(book.rating)}</div>
                    <span class="rating-text">${book.rating}/5</span>
                </div>
                <div class="book-actions">
                    <button class="btn btn-primary btn-small glass-btn" onclick="event.stopPropagation(); openBook(${book.id})">
                        <i class="fas fa-book-open"></i> Read
                    </button>
                    <button class="btn btn-outline btn-small glass-btn" onclick="event.stopPropagation(); addToLibrary(${book.id})">
                        <i class="fas fa-plus"></i> Library
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterBooks(category) {
    loadBooks(category);
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// AudioBook loading
function loadAudiobooks() {
    audiobooksGrid.innerHTML = sampleAudiobooks.map(audiobook => `
        <div class="audiobook-card" onclick="openAudiobook(${audiobook.id})">
            <img src="${audiobook.cover}" alt="${audiobook.title}" class="audiobook-cover">
            <div class="audiobook-info">
                <h3 class="audiobook-title">${audiobook.title}</h3>
                <p class="audiobook-author">by ${audiobook.author}</p>
                <p class="audiobook-duration"><i class="fas fa-clock"></i> ${audiobook.duration}</p>
                <div class="book-actions">
                    <button class="btn btn-primary btn-small glass-btn" onclick="event.stopPropagation(); openAudiobook(${audiobook.id})">
                        <i class="fas fa-play"></i> Listen
                    </button>
                    <button class="btn btn-outline btn-small glass-btn" onclick="event.stopPropagation(); addToLibrary(${audiobook.id}, 'audiobook')">
                        <i class="fas fa-plus"></i> Library
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Book reader functions
async function openBook(bookId) {
    const book = sampleBooks.find(b => b.id === bookId);
    if (!book) return;

    document.getElementById("readerTitle").textContent = book.title;
    document.getElementById("readerModal").style.display = "flex";

    // Toggle fullscreen for PDFs
    if (book.file) {
        document.getElementById('readerModal').classList.add('fullscreen');
        await loadPDF(book.file);
    } else {
        document.getElementById('readerModal').classList.remove('fullscreen');
        document.getElementById("readerBody").innerHTML = book.content.replace(/\n/g, '<br><br>');
        totalPages = 1;
        updatePageInfo();
    }
}



let pdfDoc = null;

async function openBook(bookId) {
    const book = sampleBooks.find(b => b.id === bookId);
    if (!book) return;

    document.getElementById("readerTitle").textContent = book.title;
    document.getElementById("readerModal").style.display = "flex";

    // Toggle fullscreen for PDFs
    if (book.file) {
        document.getElementById('readerModal').classList.add('fullscreen');
        await loadPDF(book.file);
    } else {
        document.getElementById('readerModal').classList.remove('fullscreen');
        document.getElementById("readerBody").innerHTML = book.content.replace(/\n/g, '<br><br>');
        totalPages = 1;
        updatePageInfo();
    }
}


async function loadPDF(url) {
    const loadingTask = pdfjsLib.getDocument(url);
    pdfDoc = await loadingTask.promise;
    currentPage = 1;
    totalPages = pdfDoc.numPages;
    renderPage(currentPage);
}

async function renderPage(pageNum) {
    const page = await pdfDoc.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1.5 });

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    await page.render({ canvasContext: context, viewport }).promise;

    // Responsive sizing
    canvas.style.maxWidth = '90vw';
    canvas.style.maxHeight = '80vh';
    canvas.style.width = 'auto';
    canvas.style.height = 'auto';

    const readerBody = document.getElementById("readerBody");
    readerBody.innerHTML = "";
    readerBody.appendChild(canvas);
    updatePageInfo();
}


function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        renderPage(currentPage);
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
    }
}


function updatePageInfo() {
    document.getElementById('pageInfo').textContent = `Page ${currentPage} of ${totalPages}`;
}

// AudioBook player functions
function openAudiobook(audiobookId) {
    if (!currentUser) {
        showNotification('Please login to listen to audiobooks', 'error');
        showLogin();
        return;
    }

    const audiobook = sampleAudiobooks.find(a => a.id === audiobookId);
    if (!audiobook) return;

    document.getElementById('audioBookCover').src = audiobook.cover;
    document.getElementById('audioBookTitle').textContent = audiobook.title;
    document.getElementById('audioBookAuthor').textContent = `by ${audiobook.author}`;
    
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = audiobook.audioUrl;
    
    document.getElementById('audioPlayerModal').style.display = 'block';
    
    setupAudioPlayer();
}

function setupAudioPlayer() {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.querySelector('.play-pause');
    const progressFill = document.querySelector('.progress-fill');
    const currentTimeSpan = document.getElementById('currentTime');
    const totalTimeSpan = document.getElementById('totalTime');

    audioPlayer.addEventListener('loadedmetadata', () => {
        totalTimeSpan.textContent = formatTime(audioPlayer.duration);
    });

    audioPlayer.addEventListener('timeupdate', () => {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressFill.style.width = progress + '%';
        currentTimeSpan.textContent = formatTime(audioPlayer.currentTime);
    });

    audioPlayer.addEventListener('play', () => {
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    });

    audioPlayer.addEventListener('pause', () => {
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    });
}

function togglePlayPause() {
    const audioPlayer = document.getElementById('audioPlayer');
    
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

function skipBackward() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 15);
}

function skipForward() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.currentTime = Math.min(audioPlayer.duration, audioPlayer.currentTime + 15);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Library functions
async function addToLibrary(itemId, type = 'book') {
    if (!currentUser) {
        showNotification('Please login to add items to your library', 'error');
        showLogin();
        return;
    }

    try {
        const response = await fetch('api/add_to_library.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                userId: currentUser.id, 
                itemId: itemId, 
                type: type 
            })
        });

        const result = await response.json();
        
        if (result.success) {
            showNotification('Added to library successfully!', 'success');
        } else {
            showNotification(result.message || 'Failed to add to library', 'error');
        }
    } catch (error) {
        // Fallback for demo purposes
        showNotification(`${type === 'book' ? 'Book' : 'AudioBook'} added to library! (Demo Mode)`, 'success');
    }
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const icon = type === 'success' ? 'fas fa-check-circle' : 
                 type === 'error' ? 'fas fa-exclamation-circle' : 
                 'fas fa-info-circle';
    
    notification.innerHTML = `
        <i class="${icon}"></i>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;

    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #48bb78, #38a169)' : 
                     type === 'error' ? 'linear-gradient(135deg, #f56565, #e53e3e)' : 
                     'linear-gradient(135deg, #667eea, #764ba2)'};
        color: white;
        padding: 20px 24px;
        border-radius: 12px;
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        display: flex;
        align-items: center;
        gap: 16px;
        animation: slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        font-weight: 500;
        min-width: 300px;
    `;
    
    // Style the close button
    const closeBtn = notification.querySelector('button');
    closeBtn.style.cssText = `
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        font-size: 12px;
    `;
    
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.background = 'rgba(255, 255, 255, 0.3)';
        closeBtn.style.transform = 'scale(1.1)';
    });
    
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.background = 'rgba(255, 255, 255, 0.2)';
        closeBtn.style.transform = 'scale(1)';
    });
    
    // Style the icon
    const iconElement = notification.querySelector('i');
    iconElement.style.cssText = `
        font-size: 18px;
        opacity: 0.9;
    `;

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%) scale(0.8);
                opacity: 0;
            }
            to {
                transform: translateX(0) scale(1);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.15)';
        navbar.style.backdropFilter = 'blur(30px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.1)';
        navbar.style.backdropFilter = 'blur(20px)';
    }
});

// Add floating animation to hero shapes
document.addEventListener('DOMContentLoaded', () => {
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        shape.style.animationDelay = `${index * 2}s`;
        shape.style.animationDuration = `${6 + index * 2}s`;
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.book-card, .audiobook-card, .feature, .stat').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
    
    // Add staggered animation delay
    document.querySelectorAll('.book-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    document.querySelectorAll('.audiobook-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
});