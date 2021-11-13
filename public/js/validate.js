
function getValidation () {
  'use strict'
  let forms = document.querySelectorAll('.needs-validation')
  if(forms.length > 0) {
    forms = document.querySelectorAll('.needs-validation')
  }
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
};
setTimeout(() => {
  getValidation()
}, 2000);