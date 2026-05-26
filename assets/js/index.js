const btnEnglish = document.getElementById("btnEnglish");
const btnTagalog = document.getElementById("btnTagalog");
const termsCheck = document.getElementById("termsAgree");
const submitBtn = document.getElementById("submitBtn");
const errorMsgDiv = document.getElementById("errorMsg");
const languageScreen = document.getElementById("languageScreen");
const getStartedScreen = document.getElementById("getStartedScreen");
const chooseText = document.getElementById("chooseText");
const tagline = document.getElementById("tagline");
const termsTextSpan = document.getElementById("termsText");
const messageText = document.getElementById("messageText");
const getStartedBtn = document.getElementById("getStartedBtn");

let selectedLanguage = null;
let currentLanguage = "English";

const translations = {
  English: {
    tagline: "Have an agriculture-filled day!",
    chooseText: "Choose your preferred language",
    termsText:
      'I have read and agreed to the <a href="#" id="termsLink">Terms of Use</a> and <a href="#" id="privacyLink">Privacy Policy</a>',
    submitBtn: "Submit",
    messageText:
      "It is our hope to assist you with concerns about your banana leaves, so you can keep your crops healthy and your harvest plentiful.",
    getStarted: "Get Started",
  },
  Tagalog: {
    tagline: "Magkaroon ng araw na puno ng agrikultura!",
    chooseText: "Piliin ang iyong gustong wika",
    termsText:
      'Ako ay sumang-ayon sa <a href="#" id="termsLink">Mga Tuntunin ng Paggamit</a> at <a href="#" id="privacyLink">Patakaran sa Privacy</a>',
    submitBtn: "Isumite",
    messageText:
      "Inaasahan naming matulungan ka sa iyong mga alalahanin tungkol sa iyong dahon ng saging, upang mapanatili mong malusog ang iyong pananim at sagana ang iyong ani.",
    getStarted: "Magsimula",
  },
};

function updateLanguage(lang) {
  currentLanguage = lang;
  tagline.textContent = translations[lang].tagline;
  chooseText.textContent = translations[lang].chooseText;
  termsTextSpan.innerHTML = translations[lang].termsText;
  submitBtn.textContent = translations[lang].submitBtn;
  messageText.textContent = translations[lang].messageText;
  getStartedBtn.textContent = translations[lang].getStarted;

  document.getElementById("termsLink").addEventListener("click", (e) => {
    e.preventDefault();
    alert("Terms of Use would open here.");
  });

  document.getElementById("privacyLink").addEventListener("click", (e) => {
    e.preventDefault();
    alert("Privacy Policy would open here.");
  });
}

function removeActiveClass() {
  btnEnglish.classList.remove("active");
  btnTagalog.classList.remove("active");
}

btnEnglish.addEventListener("click", (e) => {
  e.preventDefault();
  removeActiveClass();
  btnEnglish.classList.add("active");
  selectedLanguage = "English";
  errorMsgDiv.innerText = "";
  updateLanguage("English");
});

btnTagalog.addEventListener("click", (e) => {
  e.preventDefault();
  removeActiveClass();
  btnTagalog.classList.add("active");
  selectedLanguage = "Tagalog";
  errorMsgDiv.innerText = "";
  updateLanguage("Tagalog");
});

function validateAndProceed() {
  let hasError = false;
  if (!selectedLanguage) {
    hasError = true;
    errorMsgDiv.innerText = "Please select a language.";
  } else if (!termsCheck.checked) {
    hasError = true;
    errorMsgDiv.innerText =
      "You must agree to the Terms of Use and Privacy Policy.";
  } else {
    errorMsgDiv.innerText = "";
  }

  if (!hasError) {
    languageScreen.style.display = "none";
    getStartedScreen.style.display = "flex";
  }
}

submitBtn.addEventListener("click", validateAndProceed);

getStartedBtn.addEventListener("click", () => {
  alert(`Proceeding to BananaQ app with ${selectedLanguage} language.`);
});

btnEnglish.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    btnEnglish.click();
  }
});

btnTagalog.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    btnTagalog.click();
  }
});

submitBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    submitBtn.click();
  }
});

getStartedBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    getStartedBtn.click();
  }
});

document.querySelector(".checkbox-inline").addEventListener("click", (e) => {
  if (e.target.tagName !== "INPUT" && e.target.tagName !== "A") {
    const cb = document.getElementById("termsAgree");
    cb.checked = !cb.checked;
  }
});

updateLanguage("English");
