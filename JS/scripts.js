// Тексты для каждого продукта
const ecoMessages1 = [
    "При производстве предотвратили выброс 200 грамм углекислого газа",
    "При производстве отодвинули таяние ледников на 1 секунду",
    "При производстве отодвинули кислотный дождь на 1 секунду",
    "При производстве не пострадали животные"
];

const ecoMessages2 = [
    "Этот продукт сократил углеродный след на 150 грамм",
    "Товар помог уменьшить загрязнение вод на 1 литр",
    "Эти материалы подлежат полной переработке",
    "Этот продукт не содержит опасных химикатов"
];

const ecoMessages3 = [
    "Этот товар сохраняет природные ресурсы",
    "Сокращены выбросы CO2 на 300 грамм",
    "Продукт с использованием вторичных материалов",
    "Сохранение лесов при производстве"
];

const ecoMessages4 = [
    "Сокращены выбросы на 250 грамм CO2",
    "Экологически чистые материалы использованы в производстве",
    "Снижено использование воды на 1 литр",
    "Этот продукт способствует сохранению природы"
];

const ecoMessages5 = [
    "При производстве сократили выбросы на 500 грамм",
    "Этот продукт на 100% перерабатывается",
    "Изготовлен из вторсырья",
    "Этот продукт минимизирует отходы"
];

function changeMessage(ecoTextElement, messages) {
    let currentMessageIndex = 0;
    function updateMessage() {
        ecoTextElement.style.opacity = '0';
        setTimeout(() => {
            ecoTextElement.textContent = messages[currentMessageIndex];
            currentMessageIndex = (currentMessageIndex + 1) % messages.length;
            ecoTextElement.style.opacity = '1';
        }, 500);
    }
    setInterval(updateMessage, 4000);
}

const ecoText1 = document.getElementById("eco-text-1");
const ecoText2 = document.getElementById("eco-text-2");
const ecoText3 = document.getElementById("eco-text-3");
const ecoText4 = document.getElementById("eco-text-4");
const ecoText5 = document.getElementById("eco-text-5");

changeMessage(ecoText1, ecoMessages1); //Для первого продукта
changeMessage(ecoText2, ecoMessages2); //Для второго продукта
changeMessage(ecoText3, ecoMessages3); //Для третьего продукта
changeMessage(ecoText4, ecoMessages4); //Для четвертого продукта
changeMessage(ecoText5, ecoMessages5); //Для пятого продукта
