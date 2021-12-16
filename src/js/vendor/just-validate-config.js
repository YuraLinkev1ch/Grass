import JustValidate from 'just-validate';

const validation = new JustValidate('.contacts-form', {
    errorFieldCssClass: 'is-invalid',
    errorLabelCssClass: 'is-label-invalid',
    focusInvalidField: false,
});

validation
.addField('.contacts-form__input-name', [
    {
        rule: 'required',
        errorMessage: 'Введите ваше имя',
    },
    {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Слишком короткое имя',
    },
    {
        rule: 'maxLength',
        value: 25,
        errorMessage: 'Слишком длинное имя',
    },
    {
        rule: 'customRegexp',
        value: /^[А-Яа-яЁё\s]+$/,
        errorMessage: 'Введены неккоректные символы',
    },
])
.addField('.contacts-form__input-tel', [
    {
        rule: 'required',
        errorMessage: 'Введите ваш номер телефона',
    },
])
.addField('.contacts-form__textarea-text', [
    {
        rule: 'required',
        errorMessage: 'Введите ваш вопрос',
    },
])
.onSuccess((event) => {
    console.log('Validation passes and form submitted', event);
});



const validation2 = new JustValidate('.modal-form', {
    errorFieldCssClass: 'is-invalid',
    errorLabelCssClass: 'is-label-invalid',
    focusInvalidField: false,
});

validation2
.addField('.modal-form__input-name', [
    {
        rule: 'required',
        errorMessage: 'Введите ваше имя',
    },
    {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Слишком короткое имя',
    },
    {
        rule: 'maxLength',
        value: 25,
        errorMessage: 'Слишком длинное имя',
    },
    {
        rule: 'customRegexp',
        value: /^[А-Яа-яЁё\s]+$/,
        errorMessage: 'Введены неккоректные символы',
    },
])
.addField('.modal-form__input-tel', [
    {
        rule: 'required',
        errorMessage: 'Введите ваш номер телефона',
    },
])
.onSuccess((event) => {
    console.log('Validation passes and form submitted', event);
});
