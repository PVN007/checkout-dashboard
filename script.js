document.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.querySelectorAll('input[name="offer"]');
    const totalPriceElement = document.querySelector('.total-price span');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            let price;
            if (this.value === '1') {
                price = '$18.00 USD';
            } else if (this.value === '2') {
                price = '$24.00 USD';
            } else if (this.value === '3') {
                price = '$36.00 USD';
            }
            totalPriceElement.textContent = price;
        });
    });
});
