function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    
    if (isNaN(birthdate)) {
        document.getElementById('result').textContent = 'Please enter a valid date';
        return;
    }

    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    const result = document.getElementById('result');
    result.textContent = `Your age is ${age} years`;
    result.classList.remove('show');
    
    // Force reflow
    void result.offsetWidth;
    
    result.classList.add('show');
}
