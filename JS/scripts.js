// Тексты для каждого продукта
const ecoMessages1 = [
    "При изготовлении предотвратили выброс 200 грамм углекислого газа",
    "Отодвинули таяние ледников на 2 секунды",
    "Снижено влияние на окружающую среду благодаря эко-технологиям",
    "При производстве использовалось только возобновляемое дерево"
];

const ecoMessages2 = [
    "Этот продукт сократил углеродный след на 150 грамм",
    "Товар помог уменьшить загрязнение вод на 1 литр",
    "Использованы экологически чистые ингредиенты и упаковка",
    "При производстве не использовались вредные добавки"
];

const ecoMessages3 = [
    "Этот товар сохраняет природные ресурсы",
    "Сокращены выбросы CO2 на 300 грамм",
    "Использованы переработанные материалы",
    "При производстве сократили вырубку лесов"
];

const ecoMessages4 = [
    "Сокращены выбросы на 250 грамм CO2",
    "Использованы экологически чистые ингредиенты для производства",
    "Процесс изготовления требует на 1 литр меньше воды",
    "При изготовлении отодвинули таяние ледников на 1 секунду"
];

const ecoMessages5 = [
    "При производстве сократили выбросы на 500 грамм",
    "Этот продукт на 100% перерабатывается",
    "Изготовлен с использованием переработанных материалов",
    "Минимизированы отходы и влияние на природу"
];


function changeMessage(ecoTextElement, messages) {
    let currentMessageIndex = 0;
  
    // Ensure that the element is positioned relatively for sliding effect
    ecoTextElement.style.position = "relative";
    ecoTextElement.style.transition = "transform 1s ease-in-out"; // Smooth transition for the sliding effect
  
    function updateMessage() {
      // Slide the element up out of view
      ecoTextElement.style.transform = "translateY(-250%)";
  
      setTimeout(() => {
        // Update the message content and reset the element below the view
        ecoTextElement.textContent = messages[currentMessageIndex];
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        ecoTextElement.style.opacity = "0";
  
        // Move the element below the visible area without animation
        ecoTextElement.style.transition = "none"; // Disable transition for reset
        ecoTextElement.style.transform = "translateY(300%)";
  
        // Short delay before moving the element back into view
        setTimeout(() => {
          ecoTextElement.style.transition = "transform 1s ease-in-out"; // Re-enable transition
          ecoTextElement.style.transform = "translateY(0)"; // Slide back into view
          ecoTextElement.style.opacity = "1"; // Fade in effect
        }, 100); // Short delay for transition reset to take effect
      }, 600); // Delay for slide-out transition to complete
    }
  
    setInterval(updateMessage, 4000); // Run the update every 4 seconds
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
                hiddenContent.style.opacity = '0'; // Плавно скрываем
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


