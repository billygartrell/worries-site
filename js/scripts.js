  let showInfo = document.getElementById("show-template").innerHTML;
  let template = Handlebars.compile(showInfo);
  let showTemplate = template ({
    info: showData
  });

  $('#show-list').html(showTemplate);
