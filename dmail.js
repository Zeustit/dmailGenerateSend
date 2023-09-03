function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function inputText(field, text){
	// Находим поле ввода по его ID или другому селектору
	var inputField = field; // Замените 'inputFieldId' на реальный идентификатор вашего поля ввода

	// Создаем событие ввода
	var event = new Event('input', {
	  bubbles: true,
	  cancelable: true,
	});
	// Задаем значение, которое вы хотите ввести в поле
	var inputValue = text;
	// Устанавливаем значение поля ввода
	inputField.value = inputValue;

	// Диспатчим событие ввода, чтобы симулировать ввод
	inputField.dispatchEvent(event);

}

// Переход во вкладку с отправкой сообщения
getElementByXpath('//*[@id="root"]/div/div[1]/div[1]/div[2]/div[1]/div').click();

//Ищем почту и заполняем её
inputText(getElementByXpath('//*[@id="__guide_compose_mobile_to"]/div[1]/input'), makeid(5) + '@gmail.com')
//Заполняем тему письма
inputText(getElementByXpath('//*[@id="root"]/div/div[2]/div[2]/div/div/div[1]/div[1]/div[4]/div/input'), makeid(10))
//Пишем текст письма
getElementByXpath('//*[@id="root"]/div/div[2]/div[2]/div/div/div[1]/div[1]/div[5]/div/div/div/div[2]/div[1]/p[1]').textContent = makeid(20)
