
'use strict';

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

let allServicePrices;
let fullPrice;
let servicePercentPrice;
let rollback = 10;


const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;
}

const getFullPrice = function () {
    return screenPrice + allServicePrices
}

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollback / 100));
}

const getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
}

const showTypeof = function (variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return "Даем скидку в 10%";
    } else if (price >= 15000) {
        return "Даем скидку в 5%";
    } else if (price >= 0) {
        return "Скидка не предусмотрена";
    } else {
        return "Что то пошло не так";
    }

}

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeof(title);
showTypeof(screenPrice);
showTypeof(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(servicePercentPrice);
console.log("Стоимость верстки экранов " + screenPrice + " рублей" + "Стоимость разработки сайта " + fullPrice + " рублей");