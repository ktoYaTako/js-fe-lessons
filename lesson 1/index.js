let money 
let name 
let time
let price 

function start () {
    money = prompt('Ваш бюджет?', '');

    while (isNaN(money) || money == '' || money == null) {
        money = prompt('Ваш бюджет?', ''); 
    }

    name = prompt('Название вашего магазина?', '').toUpperCase();
    time = 19;
}




let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: false,
    shopItems: [],
    chooseGoods : function chooseGoods () {
        for (let i = 0; i < 5; i++) {
            let a = prompt('Какой тип товаров будем продавать?', '');
            
            if ((typeof(a)) === 'string' && (typeof(a)) !== null && (typeof(a)) !== '' && a.length < 20) {
                console.log('Все верно!')
                mainList.shopGoods[i] = a;
            } else {
                i = i - 1
            }
        }
    },
    workTime: function workTime (time) {
        if (time < 0) {
            console.log('Ты долбаеб?')
        } else if (time > 8 && time < 20) {
            console.log('Время покупать, гнида!')
            mainList.open = true;
            }   else if (time < 24) {
                console.log('Иди спать уебок, мы закрыты')
        }           else {
                    console.log('Ты долбаеб?')
        }
    },
    dayBudget: function dayBudget () {
        alert('Ежедневный бюджет ' + mainList.budget / 30)
    },
    makeDiscount: function makeDiscount (price) {
        if (mainList.discount === true) {
            price = (price / 100) * 80
        }
    },
    hireEmployer: function hireEmployer () {
        for (let i = 0; i < 5; i++) {
          let name = prompt('Укажите имя сотрудника', '');
          mainList.employers[i] = name
        }
    },
    chooseShopItem: function chooseShopItem () {
        let items = prompt('Перечислите через запятую товары', '');

        mainList.shopItems = items.split(',');
        mainList.shopItems.push(prompt('Подождите еще ',''))
        mainList.shopGoods.sort();
    },
    canBuy: function canBuy () {
        mainList.shopGoods.forEach((elementItems, index) => {
            alert((index + 1) + '. У нас вы можете купить: ' + elementItems);
        })
    },
    includes: function includes () {
        for (let value of mainList.shopItems) {
            console.log(`Наш магазин включает в себя ${value}`)
        }
    }
}
console.log(mainList)






