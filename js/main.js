/* inputs verification in QUIZ */
function verifyInput(fieldset){
    let requiredElems = Array.from(fieldset.querySelectorAll('input[required]'));
    if(requiredElems.length == 0){
      return;
    } else {
      let flag = requiredElems.every(notNull);
      if (flag){
        fieldset.querySelector('.verifiable-btn').removeAttribute('disabled');
      } else {
        fieldset.querySelector('.verifiable-btn').setAttribute('disabled', 'disabled');
      }
    }
    function notNull(element) {
      if(element.type == 'radio' || element.type == 'checkbox'){
        let name = element.name;
        let arrBtns = Array.from(fieldset.querySelectorAll('input[name="'+name+'"]'));
        if(arrBtns.some(isChecked)){return element;}
      } else if (element.value.trim() != ''){
        return element;
      }
    }
    function isChecked(el){
      if(el.checked && el.value.trim() != ''){
        return el;
      }
    }
  }