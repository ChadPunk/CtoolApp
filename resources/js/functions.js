function checkScript(){
  checkStyle();
  loadCheck();
  checkName();
}

function checkName(){
  if (localStorage.getItem("name") === null) {
      localStorage.setItem("name", "Guest");
      location.reload();
    }
}

function save_data() {
  var input = document.getElementById("saveName");
  localStorage.setItem("name", input.value);
  location.reload();
}

function AskToChange() {
  document.getElementById('black_out').style.display = 'block';
  document.getElementById('change_name').style.display = 'block';
}

function closeDiv2() {
  document.getElementById('change_name').style.display = 'none';
  document.getElementById('black_out').style.display = 'none';
}

function AskToClear() {
  document.getElementById('settings_clear').style.display = 'block';
  document.getElementById('black_out').style.display = 'block';
}

function closeDiv() {
  document.getElementById('settings_clear').style.display = 'none';
  document.getElementById('black_out').style.display = 'none';
}

function clearData() {
  localStorage.clear();
  alert("Data Cleared")
  document.getElementById('settings_clear').style.display = 'none';
  document.getElementById('black_out').style.display = 'none';
  localStorage.setItem("name", "Guest");
  location.reload();
}

function hideWelcome() {
  document.getElementById("welcome_card").style.display = 'none';
  localStorage.setItem("Welcome", "True");
}

function changeCSS(cssFile, cssLinkIndex) {

  var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

  var newlink = document.createElement("link");
  newlink.setAttribute("rel", "stylesheet");
  newlink.setAttribute("type", "text/css");
  newlink.setAttribute("href", cssFile);

  document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}

function checkStyle() {
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "normal");
  } else  if (localStorage.getItem("theme") === "normal") {
            changeCSS('./resources/css/style.css', 0);
  }
  else{
            changeCSS('./resources/css/dark.css', 0);
  }
}

function changeThemeLight(){
  localStorage.setItem("theme", "normal");
  location.reload();
}

function changeThemeDark(){
  localStorage.setItem("theme", "dark");
  location.reload();
}

function loadCheck() {
  if (localStorage.getItem("Welcome") === null) {
    document.getElementById("welcome_card").style.display = 'block';
  } else {
    document.getElementById("welcome_card").style.display = 'none';
  }
}

function chooseTheme(){
  document.getElementById('ask_theme').style.display = 'block';
  document.getElementById('black_out').style.display = 'block';
}

function closeDiv3() {
  document.getElementById('ask_theme').style.display = 'none';
  document.getElementById('black_out').style.display = 'none';
}
