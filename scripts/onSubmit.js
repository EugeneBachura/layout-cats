function onSubmit() {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let address = document.querySelector('#submit-form > input').value;
    let checked_sub = document.querySelector('#submit-form > .subscribe > input').checked;
    if (reg.test(address) == false) {
       //alert('Введите корректный e-mail');
       mess('Введите корректный e-mail');
       return false;
    };
    if (!checked_sub) {
       alert('Вы не подтвердили рассылку');
       return false;
    }
    alert('Спасибо! Вы подписались на рассылку');
    document.querySelector('#submit-form > input').value = "";
    document.querySelector('#submit-form > .subscribe > input').checked = true;
    return false;
}