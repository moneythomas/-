function createBars(arr) {
    const container = document.getElementById('arrayContainer');
    container.innerHTML = '';
    arr.forEach((value) => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = value * 5 + 'px';
        bar.textContent = value;
        container.appendChild(bar);
    });
}

async function bubbleSort(arr) {
    let len = arr.length;
    let bars = document.getElementsByClassName('bar');
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            bars[j].style.background = '#e33';
            bars[j+1].style.background = '#e33';
            await sleep(200);
            if (arr[j] > arr[j+1]) {
                // swap
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                bars[j].style.height = arr[j] * 5 + 'px';
                bars[j].textContent = arr[j];
                bars[j+1].style.height = arr[j+1] * 5 + 'px';
                bars[j+1].textContent = arr[j+1];
            }
            bars[j].style.background = '#4CAF50';
            bars[j+1].style.background = '#4CAF50';
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById('startBtn').addEventListener('click', () => {
    const array = [];
    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * 50) + 1);
    }
    createBars(array);
    bubbleSort(array);
});
