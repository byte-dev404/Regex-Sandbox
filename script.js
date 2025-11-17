// Access required elements
const regexPattern = document.getElementById('pattern');
const stringToTest = document.getElementById('test-string');
const testButton = document.getElementById('test-btn');
const testResult = document.getElementById('result');
const caseInsensitiveFlag = document.getElementById('i');
const globalFlag = document.getElementById('g');

// Function to return flags string
function getFlags() {
    let flags = '';
    if (caseInsensitiveFlag.checked) flags += 'i';
    if (globalFlag.checked) flags += 'g'
    return flags;
}

// On click event
testButton.addEventListener('click', () => {
    try {const regex = new RegExp(`${regexPattern.value}`, getFlags());} 
    catch (e) {testResult.innerText = "Invalid regex pattern"; 
        return;}
    const testStr = stringToTest.textContent;
    
    if (regex.test(testStr)) {
        stringToTest.innerHTML = testStr.replace(regex, m => `<span class="highlight">${m}</span>`);
        testResult.textContent = testStr.match(regex).join(', ');
    } else {
        testResult.textContent = "no match";
    }
});