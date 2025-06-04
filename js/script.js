let menu = document.querySelector('.header .menu');

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
   inputNumber.oninput = () =>{
      if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
   };
});

document.querySelectorAll('.view-property .details .thumb .small-images img').forEach(images =>{
   images.onclick = () =>{
      src = images.getAttribute('src');
      document.querySelector('.view-property .details .thumb .big-image img').src = src;
   }
});





document.querySelector('#menu-btn').onclick = () =>{
   menu.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
   inputNumber.oninput = () =>{
      if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
   };
});

document.querySelectorAll('.view-property .details .thumb .small-images img').forEach(images =>{
   images.onclick = () =>{
      src = images.getAttribute('src');
      document.querySelector('.view-property .details .thumb .big-image img').src = src;
   }
});

document.querySelectorAll('.faq .box-container .box h3').forEach(headings =>{
   headings.onclick = () =>{
      headings.parentElement.classList.toggle('active');
   }
});



// login/registration
const authForm = document.querySelector('.form-container form');
if (authForm) {
   authForm.addEventListener('submit', (e) => {

      const title = authForm.querySelector('h3')?.textContent.toLowerCase() || '';

      if (title.includes('welcome back')) {
         alert('You entered your account!✅');           
      } else if (title.includes('create an account')) {
         alert('Registration was succesful! Welcome!😊'); 
      }
   });
}


const saveForm = document.querySelector('form'); // Or use more specific selector if needed

if (saveForm) {
  saveForm.addEventListener('submit', (e) => {
    const saveBtn = saveForm.querySelector('button[type="submit"]');
    if (saveBtn?.textContent.toLowerCase().includes('save property')) {
      e.preventDefault(); // prevent real submission (remove this if you're submitting to backend)
      alert('✅ Your property has been successfully saved!');
    }
  });
}

document.querySelectorAll('form').forEach(form => {
   form.addEventListener('submit', e => {
     const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
     const value = submitBtn?.value?.toLowerCase() || submitBtn?.textContent?.toLowerCase() || '';
 
     if (value.includes('save property')) {
       e.preventDefault();
       alert('✅ Your property has been successfully saved!');
     } else if (value.includes('send message')) {
       e.preventDefault();
       alert('📨 Your message has been sent successfully!');
     }
   });
 });
 

















// $(document).ready(function () {
//    let menu = $('.header .menu');


//    $('input[type="number"]').on('input', function () {
//       if ($(this).val().length > this.maxLength) {
//          $(this).val($(this).val().slice(0, this.maxLength));
//       }
//    });


//    $('.view-property .details .thumb .small-images img').on('click', function () {
//       let src = $(this).attr('src');
//       $('.view-property .details .thumb .big-image img').attr('src', src);
//    });


//    const $authForm = $('.form-container form');
//    if ($authForm.length) {
//       $authForm.on('submit', function (e) {
//          e.preventDefault();
//          const title = $authForm.find('h3').text().toLowerCase();

//          if (title.includes('welcome back')) {
//             alert('You entered your account!✅');
//          } else if (title.includes('create an account')) {
//             alert('Registration was succesful! Welcome!😊');
//          }
//       });
//    }


//    $('#propertyForm').on('submit', function (e) {
//       e.preventDefault();
//       calculatePrice();
//    });


//    function calculatePrice() {
//       const basePrice = Number($('#calc-basePrice').val());
//       const rooms = Number($('#calc-rooms').val());
//       const roomPrice = Number($('#calc-roomPrice').val());
//       const roomDiscount = Number($('#calc-roomDiscount').val());

//       if (
//          isNaN(basePrice) || basePrice <= 0 ||
//          isNaN(rooms) || rooms < 1 || rooms > 10 ||
//          isNaN(roomPrice) || roomPrice < 0 ||
//          isNaN(roomDiscount) || roomDiscount < 0
//       ) {
//          showResult("Пожалуйста, введите корректные значения во все поля.", true);
//          return;
//       }

//       let priceAdjustment = 0;
//       if (rooms > 3) {
//          priceAdjustment = roomPrice * (rooms - 3);
//       } else if (rooms < 3) {
//          priceAdjustment = -roomDiscount * (3 - rooms);
//       }

//       const totalPrice = basePrice + priceAdjustment;
//       showResult(`Общая стоимость: ${totalPrice.toLocaleString('ru-RU')} ₽ (Для ${rooms} комнат)`);
//    }


//    function showResult(message, isError = false) {
//       const $resultBox = $('#calc-result-box');
//       const $resultText = $('#calc-result');

//       $resultText.text(message);
//       if (isError) {
//          $resultText.css('color', '#e74c3c');
//          $resultBox.css('border-color', '#e74c3c');
//       } else {
//          $resultText.css('color', '#b36400');
//          $resultBox.css('border-color', '#d68c2c');
//       }

//       $resultBox.addClass('visible');
//    }
// });


