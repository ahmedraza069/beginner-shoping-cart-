// case part
function handleProductChange(product, isIncrease){
    const productInput = document.getElementById(product + '-count');
    const productCount = getInputValue(product);
    // const caseNewCount = caseCount - 1;
    let productNewCount = productCount;
    if(isIncrease == true){
        productNewCount = productCount + 1;
    }
    if(isIncrease == false && productCount > 0){
        productNewCount = productCount - 1;
    }   
    productInput.value = productNewCount;
    // const caseTotal = caseNewCount * 60;
    let productTotal = 0;
    if(product == 'phone'){
        productTotal = productNewCount * 1259;
    }
    if(product == 'case'){
        productTotal = productNewCount * 60;
    }
    document.getElementById(product + '-price').innerText = '$' + productTotal;
    calculateTotalBalance();
}


function calculateTotalBalance(){
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');

    const totalPrice = phoneCount * 1259 + caseCount * 60;
    document.getElementById('total-price').innerText = '$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;

}

function getInputValue(product){
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}

document.getElementById('checkButton').addEventListener('click', function(){
    document.getElementById('cart').style.display = 'none';
    document.getElementById('none').style.display = 'block';
})

// // case part
// function handleProductChange(isIncrease){
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     // const caseNewCount = caseCount - 1;
//     let caseNewCount = caseCount;
//     if(isIncrease == true){
//         caseNewCount = caseCount + 1;
//     }
//     if(isIncrease == false && caseCount > 0){
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 60;
//     document.getElementById('case-price').innerText = '$' + caseTotal;
// }
// // //////////////////////////////////////////////////
// function handlePhoneProductChange(isDecrease){
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     // const phoneNewCount = phoneCount - 1;
//     let phoneNewCount = phoneCount;
//     if(isDecrease == true && phoneCount > 0){
//         phoneNewCount = phoneCount - 1;
//     }
//     if(isDecrease == false){
//         phoneNewCount = phoneCount + 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1259;
//     document.getElementById('phone-price').innerText = '$' + phoneTotal;
// }

// upper two part add




// first part down

// document.getElementById('phone-increase').addEventListener('click', function(){
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount + 1;
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1259;
//     document.getElementById('phone-price').innerText = '$' + phoneTotal; 
//  })
//  document.getElementById('phone-decrease').addEventListener('click', function(){
//      const phoneInput = document.getElementById('phone-count');
//      const phoneCount = parseInt(phoneInput.value);
//      const phoneNewCount = phoneCount - 1;
//      phoneInput.value = phoneNewCount;
//      const phoneTotal = phoneNewCount * 1259;
//      document.getElementById('phone-price').innerText = '$' + phoneTotal;
//  })
 

// document.getElementById('case-increase').addEventListener('click', function(){
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount +1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 60;
//     document.getElementById('case-price').innerText = '$' +  caseTotal
// })

// document.getElementById('case-decrease').addEventListener('click', function(){
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 60;
//     document.getElementById('case-price').innerText = '$' + caseTotal
// })