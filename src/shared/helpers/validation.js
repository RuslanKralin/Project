import * as Yup from 'yup'

export const nameValidation = () => {
    return Yup.string()
        .min(3, 'Too short!')
        .max(12, 'Too long!')
        .required('Обязательно имя')
}

export const emailValidation = () => {
    return Yup.string().email('Введите верный email').required('Обязательно')
}

export const passwordValidation = () => {
    return Yup.string()
        .min(6, 'Too short!')
        .max(12, 'Too long!')
        .required('Обязательно')
}
