export default function (value) {
    return value.toLocaleString('ru-RU', {
        style: 'currency', currency: 'RUB'
    })
}