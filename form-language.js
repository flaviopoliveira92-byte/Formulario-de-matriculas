(() => {
  const translations = new Map(Object.entries({
    "Estrelas da manha": "Stars of Tomorrow",
    "Voltar": "Back",
    "← Menu principal": "← Main menu",
    "Formulário de matrícula": "Enrollment form",
    "Preencha os dados abaixo para matricular seu filho na escola de educação infantil Estrelas do Amanhã.": "Fill in the information below to enroll your child at Stars of Tomorrow preschool.",
    "Informações da criança": "Child's information",
    "Nome completo": "Full name",
    "Qual o nome completo da criança": "What is the child's full name?",
    "Data de Nascimento": "Date of birth",
    "Sexo": "Gender",
    "Masculino": "Male",
    "Feminino": "Female",
    "Outro": "Other",
    "Informações Medicas": "Medical information",
    "A criança possui alguma condição médica que a escola deve estar ciente? (Se sim, especifique abaixo)": "Does the child have any medical conditions the school should know about? If so, please describe them below.",
    "Certidão de nascimento": "Birth certificate",
    "Clique aqui para": "Click here to",
    "Selecionar o arquivo": "select a file",
    "Endereço Residencial": "Home address",
    "CEP": "ZIP code",
    "Rua": "Street",
    "Rua das flores": "Flower Street",
    "Número": "Number",
    "Cidade": "City",
    "São Paulo": "São Paulo",
    "Estado": "State",
    "informações do responsável": "Guardian information",
    "Nome do Responsável": "Guardian's name",
    "Principal responsável legal e contato de emergência": "Primary legal guardian and emergency contact",
    "Telefone": "Phone",
    "Email": "Email",
    "Erro": "Error",
    "Por favor, insira um email válido": "Please enter a valid email address",
    "Opções de matricula": "Enrollment options",
    "Selecione o turno de estudo": "Select a study shift",
    "Manha": "Morning",
    "Tarde": "Afternoon",
    "Em qual esporte você gostaria de inscrever seu filho?": "Which sport would you like to enroll your child in?",
    "Futebol": "Soccer",
    "Basquete": "Basketball",
    "Natação": "Swimming",
    "Yoga": "Yoga",
    "Volei": "Volleyball",
    "Boxe": "Boxing",
    "Declaro que li e concordo com os": "I confirm that I have read and agree to the",
    "Termos e Condições": "Terms and Conditions",
    "e com a": "and the",
    "Política de Privacidade": "Privacy Policy",
    "da escola Estrela do Amanhã.": "of Stars of Tomorrow school.",
    "Salvar Respostas": "Save answers",
    "Fazer Matricula": "Submit enrollment",
    "Porque cada momento de": "Because every moment of",
    "aprendizado": "learning",
    "conta": "matters",
    "Inscreva seu filho em nossa escola e veja-o florescer em um ambiente acolhedor, seguro e estimulante.": "Enroll your child in our school and watch them thrive in a welcoming, safe, and stimulating environment.",
    "Logo": "Logo",
    "Ilustração de uma professora com uma aluna": "Illustration of a teacher and student",
    "Ilustração de um sol com uma nuvem": "Illustration of a sun behind a cloud",
    "Ilustração de um sol": "Illustration of a sun",
    "icone de futebol": "Soccer icon",
    "icone de basquete": "Basketball icon",
    "icone de natação": "Swimming icon",
    "icone de yoga": "Yoga icon",
    "icone de volei": "Volleyball icon",
    "icone de boxe": "Boxing icon",
    "Ícone de futebol": "Soccer icon",
    "Ícone de basquete": "Basketball icon",
    "Ícone de natação": "Swimming icon",
    "Ícone de yoga": "Yoga icon",
    "Ícone de vôlei": "Volleyball icon",
    "Ícone de boxe": "Boxing icon"
  }));

  const textOriginals = new WeakMap();
  const attributeOriginals = new WeakMap();
  const script = document.currentScript;
  const homeUrl = script?.dataset.homeUrl;
  const switcher = document.createElement("nav");
  switcher.className = "language-switcher";
  switcher.setAttribute("aria-label", "Idioma / Language");

  if (homeUrl) {
    const homeLink = document.createElement("a");
    homeLink.href = homeUrl;
    homeLink.textContent = "← Menu principal";
    switcher.append(homeLink);
  }

  const languageSelect = document.createElement("select");
  languageSelect.setAttribute("aria-label", "Idioma / Language");
  for (const [value, label] of [["pt-BR", "Português (BR)"], ["en", "English"]]) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    languageSelect.append(option);
  }
  languageSelect.addEventListener("change", () => setLanguage(languageSelect.value, true));
  switcher.append(languageSelect);

  const style = document.createElement("style");
  style.textContent = `.language-switcher{position:relative;z-index:9999;display:flex;align-items:center;justify-content:flex-end;gap:12px;min-height:60px;padding:8px clamp(16px,4vw,36px);font:600 12px/1 "Avenir Next",Avenir,"Segoe UI",sans-serif}.language-switcher a{display:inline-flex;align-items:center;min-height:38px;padding:0 10px;border:1px solid rgba(32,43,42,.18);border-radius:7px;color:#176b68;background:#fbfcfa;text-decoration:none;white-space:nowrap}.language-switcher a:hover{color:#b84d37;background:#fff}.language-switcher select{min-width:142px;min-height:38px;padding:0 32px 0 12px;border:1px solid rgba(32,43,42,.18);border-radius:7px;color:#202b2a;background-color:#fbfcfa;background-image:linear-gradient(45deg,transparent 50%,#40504d 50%),linear-gradient(135deg,#40504d 50%,transparent 50%);background-position:calc(100% - 13px) 16px,calc(100% - 8px) 16px;background-repeat:no-repeat;background-size:5px 5px,5px 5px;font:inherit;appearance:none;cursor:pointer}.language-switcher select:focus-visible,.language-switcher a:focus-visible{outline:2px solid #b84d37;outline-offset:3px}@media(max-width:420px){.language-switcher{gap:8px;padding-inline:12px}.language-switcher select{min-width:132px;font-size:11px}.language-switcher a{font-size:11px}}`;
  document.head.append(style);
  document.body.prepend(switcher);

  function setLanguage(language, persist) {
    const english = language === "en";
    document.documentElement.lang = english ? "en" : "pt-BR";
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!textOriginals.has(node)) textOriginals.set(node, node.nodeValue);
      const original = textOriginals.get(node);
      const normalized = original.trim().replace(/\s+/g, " ");
      if (!normalized) continue;
      const translated = english ? translations.get(normalized) : normalized;
      if (translated === undefined) continue;
      node.nodeValue = `${original.match(/^\s*/)[0]}${translated}${original.match(/\s*$/)[0]}`;
    }

    for (const element of document.querySelectorAll("*")) {
      for (const attribute of ["alt", "title", "placeholder", "aria-label", "value"]) {
        if (!element.hasAttribute(attribute)) continue;
        let originals = attributeOriginals.get(element);
        if (!originals) {
          originals = new Map();
          attributeOriginals.set(element, originals);
        }
        if (!originals.has(attribute)) originals.set(attribute, element.getAttribute(attribute));
        const original = originals.get(attribute);
        element.setAttribute(attribute, english ? (translations.get(original) || original) : original);
      }
    }

    const title = document.querySelector("title");
    if (title) {
      if (!title.dataset.originalTitle) title.dataset.originalTitle = title.textContent;
      const original = title.dataset.originalTitle;
      title.textContent = english ? (translations.get(original) || original) : original;
    }

    switcher.setAttribute("aria-label", english ? "Language and navigation" : "Idioma e navegação");
    languageSelect.setAttribute("aria-label", english ? "Select language" : "Selecionar idioma");
    languageSelect.options[0].textContent = "Português (BR)";
    languageSelect.options[1].textContent = "English";
    languageSelect.value = language;

    if (persist) {
      try {
        localStorage.setItem("rockeseat-language", language);
      } catch {}
    }
  }

  let savedLanguage = "pt-BR";
  try {
    if (localStorage.getItem("rockeseat-language") === "en") savedLanguage = "en";
  } catch {}
  setLanguage(savedLanguage, false);
})();
