// Тексты для каждого продукта
const ecoMessages1 = [
    "При производстве сократили выброс СО2 на 200 грамм",
    "Замедлили таяние ледников на 2 секунды",
    "Снижено влияние на окружающую среду благодаря эко-технологиям",
    "При производстве использовалось только возобновляемое дерево"
];

const ecoMessages2 = [
    "При производстве сократили выброс СО2 на 150 грамм",
    "Товар помог уменьшить загрязнение вод на 1 литр",
    "Использованы экологически чистые ингредиенты и упаковка",
    "При производстве не использовались вредные добавки"
];

const ecoMessages3 = [
    "Этот товар сохраняет природные ресурсы",
    "При производстве сократили выброс СО2 на 300 грамм",
    "Использованы переработанные материалы",
    "При производстве сократили вырубку лесов"
];

const ecoMessages4 = [
    "При производстве сократили выброс СО2 на 250 грамм",
    "Использованы экологически чистые ингредиенты для производства",
    "Процесс изготовления требует на 1 литр меньше воды",
    "При изготовлении замедлили таяние ледников на 1 секунду"
];

const ecoMessages5 = [
    "При производстве сократили выброс СО2 на 500 грамм",
    "Этот продукт на 100% перерабатывается",
    "Изготовлен с использованием переработанных материалов",
    "Минимизированы отходы и влияние на природу"
];


function changeMessage(ecoTextElement, messages) {
    let currentMessageIndex = 0;
  
    ecoTextElement.style.position = "relative";
    ecoTextElement.style.transition = "transform 1s ease-in-out"; 
  
    function updateMessage() {
      ecoTextElement.style.transform = "translateY(-250%)";
  
      setTimeout(() => {
        ecoTextElement.textContent = messages[currentMessageIndex];
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        ecoTextElement.style.opacity = "0";
  
        ecoTextElement.style.transition = "none"; 
        ecoTextElement.style.transform = "translateY(300%)";
  
        setTimeout(() => {
          ecoTextElement.style.transition = "transform 1s ease-in-out"; 
          ecoTextElement.style.transform = "translateY(0)";
          ecoTextElement.style.opacity = "1";
        }, 100); 
      }, 600); 
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
  changeMessage(ecoText3, ecoMessages3); 
  changeMessage(ecoText4, ecoMessages4); 
  changeMessage(ecoText5, ecoMessages5); 
  
  

  // Функция для скрытия/раскрытия контента
function toggleContent(buttonId, contentId) {
    const button = document.getElementById(buttonId);
    const hiddenContent = document.getElementById(contentId);

    button.addEventListener('click', function(event) {
        event.preventDefault();

        if (hiddenContent.classList.contains('show')) {
            hiddenContent.style.height = hiddenContent.scrollHeight + 'px';
            setTimeout(() => {
                hiddenContent.style.height = '0';
                hiddenContent.style.opacity = '0'; 
            }, 10);

            setTimeout(() => {
                hiddenContent.classList.remove('show');
            }, 350);
        } else {
            hiddenContent.classList.add('show');
            hiddenContent.style.height = 'auto';
            const height = hiddenContent.scrollHeight + 'px';
            hiddenContent.style.height = '0';
            hiddenContent.style.opacity = '0';

            setTimeout(() => {
                hiddenContent.style.height = height;
                hiddenContent.style.opacity = '1';
            }, 10);
        }
    });
}

// Применяем функцию для каждого товара
toggleContent('toggle-button', 'hidden-content');  
toggleContent('toggle-button-2', 'hidden-content-2');  
toggleContent('toggle-button-3', 'hidden-content-3');
toggleContent('toggle-button-4', 'hidden-content-4');
toggleContent('toggle-button-5', 'hidden-content-5');


