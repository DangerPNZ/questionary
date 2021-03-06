jQuery(document).ready(function() {
  // Двухстрочный placeholder
  jQuery(document).on('input', '#about-me', function () {
          if (jQuery('#about-me').val()) {
              jQuery('#placeholder').hide();
          } else {
              jQuery('#placeholder').show();
          }
  })


  jQuery(function() {
// описываем поле ввода (тег textarea)
	var messagearea = jQuery('#about-me'),
// создаем элемент-клон
	hiddenDiv = jQuery(document.createElement('div')),
	content = null;
// добавляем класс .noscroll элементу #about-me(эл-т textarea)
	messagearea.addClass('noscroll');
// добавляем класс .hiddendiv элементу-клону
	hiddenDiv.addClass('hiddendiv');
//добавляем элемент-клон в тег  body
	jQuery('body').append(hiddenDiv);
//связываем событие keyup (пользователь отпускает
//клавишу клавиатуры)
//c функцией. Все приминительно к элементу textarea#about-me
	messagearea.bind('keyup', function() {
// возвращаем значение атрибута value  элемента
// #about-me(textarea)
// (вводимые пользователем данные)
	    content = messagearea.val();
// символ перевода каретки (\n), везде (g) меняем на <br>
	    content = content.replace(/\n/g, '<br>');
	    hiddenDiv.html(content);
// назначаем высоту элемену #about-me(эл-т textarea)
	    messagearea.css('height', hiddenDiv.height());

	});
});

})
