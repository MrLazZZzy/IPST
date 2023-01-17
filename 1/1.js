let month = Math.floor(Math.random() * 13)
let year = Math.floor(Math.random() * 2022)

if ((month === 12) || (month === 1) || (month === 2))  {
    console.log('Месяц', month, 'зимний')
}
if ((month === 3) || (month === 4) || (month === 5))  {
    console.log('Месяц', month, 'весенний')
}
if ((month === 6) || (month === 7) || (month === 8))  {
    console.log('Месяц', month, 'летний')
}
if ((month === 9) || (month === 10) || (month === 11))  {
    console.log('Месяц', month, 'осенний')
}

if (year % 4 === 0) {
    console.log('Год', year, 'високосный')
}
else {
    console.log('Год', year, 'не високосный')
}
