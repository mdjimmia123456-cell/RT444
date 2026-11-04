// Function to launch games
function launchGame(gameName) {
    alert(gameName + " গেমটি লোড হচ্ছে... অনুগ্রহ করে অপেক্ষা করুন!");
}

// Sidebar toggle function
function toggleSidebar() {
    let sideCat = document.getElementById('sideCategory');
    if (sideCat.style.display === 'none') {
        sideCat.style.display = 'flex';
    } else {
        sideCat.style.display = 'none';
    }
}

// Navigation between views
function showHome() {
    document.querySelector('.main-container').style.display = 'flex';
    document.querySelector('.banner-section').style.display = 'block';
    document.querySelector('.quick-actions').style.display = 'flex';
    
    document.getElementById('account-section').classList.add('hidden');
    document.getElementById('withdraw-section').classList.add('hidden');
}

function openPage(pageName) {
    document.querySelector('.main-container').style.display = 'none';
    document.querySelector('.banner-section').style.display = 'none';
    document.querySelector('.quick-actions').style.display = 'none';
    
    document.getElementById('account-section').classList.add('hidden');
    document.getElementById('withdraw-section').classList.add('hidden');

    if (pageName === 'account') {
        document.getElementById('account-section').classList.remove('hidden');
    } else if (pageName === 'withdraw' || pageName === 'deposit') {
        document.getElementById('withdraw-section').classList.remove('hidden');
    } else if (pageName === 'wallet') {
        alert("আপনার বিকাশ (bKash) ও নগদ (Nagad) ওয়ালেট যুক্ত করা রয়েছে।");
    }
}
