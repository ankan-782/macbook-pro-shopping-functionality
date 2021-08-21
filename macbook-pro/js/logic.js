//promo code functionality
function promoCodeDiscount(){
    const currentPriceField = document.getElementById('discount-price')
    const currentPrice = currentPriceField.innerText;
    const promoCodeField = document.getElementById('promoCode-inputField')
    const promoCode = promoCodeField.value
    if(promoCode.toLowerCase() == 'stevekaku'){
        const discountedPrice = currentPrice - (currentPrice * 20 * 0.01);
        currentPriceField.innerText = discountedPrice;
        document.getElementById('promo-btn').setAttribute('disabled', true);
    }
    promoCodeField.value = '';
}

//total-price functionality
function totalPrice() {
    const costWithExtraMemory = document.getElementById('memory-cost');
    const costWithExtraStorage = document.getElementById('storage-cost');
    const costWithExtraDelivery = document.getElementById('delivery-cost');
    const totalPrice = 1299 + parseFloat(costWithExtraMemory.innerText) + parseFloat(costWithExtraStorage.innerText) + parseFloat(costWithExtraDelivery.innerText);
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('discount-price').innerText = totalPrice;
}

//memory-option buttons functionality
document.getElementById('memory-btn').addEventListener('click', function (event) {
    const extraCostMemory = document.getElementById('memory-cost');
    if (event.target == document.getElementById('btn-8-gb')) {
        extraCostMemory.innerText = '0';
    }
    else if (event.target == document.getElementById('btn-16-gb')) {
        extraCostMemory.innerText = '180';
    }
    totalPrice();

});

//storage-option buttons functionality
document.getElementById('storage-btn').addEventListener('click', function (event) {
    const extraCostStorage = document.getElementById('storage-cost');
    if (event.target == document.getElementById('btn-256-gb')) {
        extraCostStorage.innerText = '0';
    }
    else if (event.target == document.getElementById('btn-512-gb')) {
        extraCostStorage.innerText = '100';
    }
    else if (event.target == document.getElementById('btn-1-tb')) {
        extraCostStorage.innerText = '180';
    }
    totalPrice();
});

//delivery-option buttons functionality
document.getElementById('delivery-btn').addEventListener('click', function (event) {
    const extraCostDelivery = document.getElementById('delivery-cost');
    if (event.target == document.getElementById('btn-aug-25')) {
        extraCostDelivery.innerText = '0';
    }
    else if (event.target == document.getElementById('btn-aug-21')) {
        extraCostDelivery.innerText = '20';
    }
    totalPrice();
});