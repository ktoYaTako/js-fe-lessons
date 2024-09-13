let money 
let name 
let time
let price 

function start () {
    money = prompt('Ваш бюджет?');

    while (isNaN(money) || money == '' || money == null) {
        money = prompt('Ваш бюджет?'); 
    }

    name = prompt('Название вашего магазина?').toUpperCase();
    time = 19;
}

start()

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: [],
    opent: false,
    discount: false
}

function salesPrice (price) {
    if (mainList.discount === true) {
        price *= 0.8
    }
}

salesPrice()

function hireEmployer () {
  for (let i = 0; i < 5; i++) {
    let employ = prompt('Укажите номер и имя сотрудника');

    if ((typeof(employ)) === `string`) {
        console.log('Все верно!')
        let employName =  RegExp(/^[A-Za-z]+$/, employ)
        let employObj = {number: parseInt(employ), nameEmployer: employName}
        mainList.employers.push(employObj)
    } else {
        i = i - 1
    }
  }
}
hireEmployer()

function chooseGoods () {
    for (let i = 0; i < 5; i++) {
        let a = prompt('Какой тип товаров будем продавать?');
        
        if ((typeof(a)) === 'string' && (typeof(a)) !== null && (typeof(a)) !== '' && a.length < 20) {
            console.log('Все верно!')
            mainList.shopGoods[i] = a;
        } else {
            i = i - 1
        }
    
    }
}

chooseGoods()


function workTime (time) {
    if (time < 0) {
        console.log('Ты долбаеб?')
    } else if (time > 8 && time < 20) {
        console.log('Время покупать, гнида!')
        }   else if (time < 24) {
            console.log('Иди спать уебок, мы закрыты')
    }           else {
                console.log('Ты долбаеб?')
    }
}
workTime()


alert(mainList.budget / 30)
console.log(mainList)