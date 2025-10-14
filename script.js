// === ELEMENTOS PRINCIPAIS ===
const menuBox = document.getElementById("menu-panel-box");
const menuButton = document.getElementById("menu-panel");

const date = new Date();
const time = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
const day = date.toLocaleDateString();
document.getElementById("date-panel").innerHTML = `${time}<br>${day}`;


// === COMPUTER BTN ===
const myComputerBtn = document.getElementById("my-computer");
const explorerMinBtn = document.getElementById("explorer-btn-minimize");
const explorerCloseBtn = document.getElementById("explorer-btn-close");

// === FIREFOX BTN ===
const firefoxBtn = document.getElementById("mozilla-firefox")
const firefoxMinBtn = document.getElementById("firefox-btn-minimize")
const firefoxCloseBtn = document.getElementById("firefox-btn-close")

// === INSTALLER BTN ===
const installerBtn = document.getElementById("installer")
const installerMinBtn = document.getElementById("installer-btn-minimize")
const installerCloseBtn = document.getElementById("installer-btn-close")

// === COMPUTER ITENS ===
const fileWindow = document.getElementById("file-explorer-window");
const titleBar = document.getElementById("file-explorer-title-bar");
const menuBar = document.getElementById("file-explorer-menu-bar");
const sideBar = document.getElementById("file-explorer-side-bar");
const ulList = document.getElementById("ul-list");
const bodyArea = document.getElementById("file-explorer-body");
const appPanel = document.getElementById("apps-panel");

// === FIREFOX ITENS ===
const firefoxWindow = document.getElementById("firefox-window")
const firefoxTitleBar = document.getElementById("firefox-title-bar")
const firefox_html = document.getElementById("firefox_html")

// === INSTALLER ITENS ===
const installerWindow = document.getElementById("installer-window")
const installerTitleBar = document.getElementById("installer-title-bar")
const installerBody = document.getElementById("installerBody")
const upBox = document.getElementById("installer-up-box");


// === SYSTEM VAR ===
let menuIsOpen = false;
let explorerIcon = false;
let firefoxIcon = false;
let installerIcon = false;
let actualDirectoryIndex = 0;

const document_html = `<div class="itemInsideExplorer"><img class="itemInsideExplorerIcon" id="itemInsideExplorerIcon" alt="test" src="images/my_computer.png"><a href="https://github.com/Rian-Batista-Rx4n/">GitHub.url</a></div><div class="itemInsideExplorer"><img class="itemInsideExplorerIcon" id="itemInsideExplorerIcon" alt="test" src="images/my_computer.png">Click On Link.txt</div>`
const download_html = `<div class="itemInsideExplorer"><img class="itemInsideExplorerIcon" id="itemInsideExplorerIcon" alt="test" src="images/my_computer.png"><a href="https://github.com/Rian-Batista-Rx4n/GWS/">GWS.exe</a></div><div class="itemInsideExplorer"><img class="itemInsideExplorerIcon" id="itemInsideExplorerIcon" alt="test" src="images/my_computer.png"><a href="https://github.com/Rian-Batista-Rx4n/fleet-manager/">Fleet Manager.exe</a></div>`
const music_html = `<div class="itemInsideExplorer"><img class="itemInsideExplorerIcon" id="itemInsideExplorerIcon" alt="test" src="images/my_computer.png">Under Construction.txt</div>`
const image_html = `<div class="itemInsideExplorer"><img class="itemInsideExplorerIcon" id="itemInsideExplorerIcon" alt="test" src="images/my_computer.png"><a href="https://www.instagram.com/rx4n.rx4n/">Instagram.png</a></div>`
const video_html = `<div class="itemInsideExplorer"><img class="itemInsideExplorerIcon" id="itemInsideExplorerIcon" alt="test" src="images/my_computer.png"><a href="https://www.youtube.com/@Rx4n_">Youtube.ink</a></div>`

// -----=== EXPLORER ITEMS AND FUNCTIONS ===-----
function documents_directory() {
    actualDirectoryIndex = 1;
    bodyArea.innerHTML = document_html
}
function downloads_directory() {
    actualDirectoryIndex = 2;
    bodyArea.innerHTML = download_html
}
function music_directory() {
    actualDirectoryIndex = 3;
    bodyArea.innerHTML = music_html
}
function images_directory() {
    actualDirectoryIndex = 4;
    bodyArea.innerHTML = image_html}
function videos_directory() {
    actualDirectoryIndex = 5;
    bodyArea.innerHTML = video_html
}


// === EVENTOS ===
menuButton.addEventListener("click", toggleMenu);
myComputerBtn.addEventListener("click", openExplorer);
explorerMinBtn.addEventListener("click", toggleExplorer);
explorerCloseBtn.addEventListener("click", closeExplorer);

firefoxBtn.addEventListener("click", openFirefox)
firefoxMinBtn.addEventListener("click", toggleFirefox)
firefoxCloseBtn.addEventListener("click", closeFirefox)

installerBtn.addEventListener("click", openInstaller)
installerMinBtn.addEventListener("click", toggleInstaller)
installerCloseBtn.addEventListener("click", closeInstaller)

// === FUNÇÕES ===

// =====--- Explorer ---=====

// Alterna o menu Iniciar
function toggleMenu() {
    menuIsOpen = !menuIsOpen;
    menuBox.style.width = menuIsOpen ? "256px" : "0px";
    menuBox.style.height = menuIsOpen ? "358px" : "0px";
    menuBox.style.border = menuIsOpen ? "4px solid #295cd0" : "0px solid transparent";
}

// Abre o Explorer pela primeira vez
function openExplorer() {
    if (explorerIcon) return;
    explorerIcon = true;

    // Cria o ícone na barra
    const explorerApp = document.createElement("div");
    explorerApp.className = "app-panel-icon panel-items panel-icons";
    explorerApp.id = "explorer-app";
    explorerApp.innerHTML += `<img class="panel-items panel-icons" alt="Icone do Explorer" src="images/my_computer.png">`;
    appPanel.appendChild(explorerApp);

    explorerApp.addEventListener("click", toggleExplorer);
    applyExplorerStyles(true);
}

// Fecha o Explorer completamente
function closeExplorer() {
    if (!explorerIcon) return;
    explorerIcon = false;
    removeExplorerContent();
    appPanel.querySelector("#explorer-app")?.remove();
    actualDirectoryIndex = 0;
}

// Minimiza / Restaura o Explorer
function toggleExplorer() {
    explorerIcon = !explorerIcon;
    applyExplorerStyles(explorerIcon);
}

// === Funções auxiliares ===

// Aplica ou remove estilos do Explorer
function applyExplorerStyles(isVisible) {
    const visible = (v) => (isVisible ? v : "0px");
    const bg = (v) => (isVisible ? v : "transparent");
    const border = (v) => (isVisible ? v : "0px solid transparent");

    fileWindow.style.width = isVisible ? "88vw" : "0px";
    fileWindow.style.height = isVisible ? "85%" : "0px";
    fileWindow.style.border = border("2px solid #0a246a");
    fileWindow.style.background = bg("#d4d0c8");

    // Barra de título
    titleBar.style.background = isVisible ? "linear-gradient(to bottom, #3a6ea5, #0a246a)" : "none";
    titleBar.style.fontSize = isVisible ? "14px" : "0px";
    titleBar.style.padding = isVisible ? "2px 6px" : "0px";
    titleBar.style.height = isVisible ? "26px" : "0px";

    // Botões
    document.querySelectorAll(".explorer-btn").forEach((btn) => {
        btn.style.width = visible("22px");
        btn.style.height = visible("20px");
        btn.style.border = border("1px solid #003366");
        btn.style.background = bg(btn.classList.contains("close") ? "red" : "#d4d0c8");
        btn.style.fontSize = visible("14px");
    });

    // Sidebar
    sideBar.style.width = visible("160px");
    sideBar.style.background = bg("#ece9d8");
    sideBar.style.padding = visible("4px");

    // Menu bar
    menuBar.style.background = bg("#d4d0c8");
    menuBar.style.fontSize = isVisible ? "13px" : "0px";
    menuBar.style.padding = isVisible ? "2px 8px" : "0px";
    menuBar.style.borderBottom = border("1px solid #a0a0a0");

    // Body
    bodyArea.style.background = bg("white");
    bodyArea.style.padding = isVisible ? "8px" : "0px";

    // Conteúdo textual
    if (isVisible) {
        menuBar.innerHTML = `
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Favorites</span>
            <span>Tools</span>
            <span>Help</span>
        `;
        ulList.innerHTML = `
            <li id="disc-c-file">Disc C:/</li>
            <li id="documents-file">Documents</li>
            <li id="downloads-file">Downloads</li>
            <li id="music-file">Music</li>
            <li id="images-file">Images</li>
            <li id="videos-file">Videos</li>
        `;
        const documents_btn = document.getElementById("documents-file")
        documents_btn.addEventListener("click", documents_directory)
        const downloads_btn = document.getElementById("downloads-file")
        downloads_btn.addEventListener("click", downloads_directory)
        const music_btn = document.getElementById("music-file")
        music_btn.addEventListener("click", music_directory)
        const images_btn = document.getElementById("images-file")
        images_btn.addEventListener("click", images_directory)
        const videos_btn = document.getElementById("videos-file")
        videos_btn.addEventListener("click", videos_directory)
        if (actualDirectoryIndex == 0) {
            console.log("")
        } else if (actualDirectoryIndex == 1) {
            bodyArea.innerHTML = document_html
        } else if (actualDirectoryIndex == 2) {
            bodyArea.innerHTML = download_html
        } else if (actualDirectoryIndex == 3) {
            bodyArea.innerHTML = music_html
        } else if (actualDirectoryIndex == 4) {
            bodyArea.innerHTML = image_html
        } else if (actualDirectoryIndex == 5) {
	    bodyArea.innerHTML = video_html
        }
    } else {
        menuBar.innerHTML = "";
        ulList.innerHTML = "";
        bodyArea.innerHTML = ``;
    }
}

// Limpa completamente o conteúdo e esconde
function removeExplorerContent() {
    applyExplorerStyles(false);
}

// =====--- firefox ---=====

// Abre o Firefox pela primeira vez
function openFirefox() {
    if (firefoxIcon) return;
    firefoxIcon = true;

    // Cria o ícone na barra
    const firefoxApp = document.createElement("div");
    firefoxApp.className = "app-panel-icon panel-items panel-icons";
    firefoxApp.id = "firefox-app";
    firefoxApp.innerHTML += `<img class="panel-items panel-icons" alt="Icone do Firefox" src="images/mozilla_firefox.png">`;
    appPanel.appendChild(firefoxApp);

    firefoxApp.addEventListener("click", toggleFirefox);
    applyFirefoxStyles(true);
}

// Fecha o Firefox completamente
function closeFirefox() {
    if (!firefoxIcon) return;
    firefoxIcon = false;
    removeFirefoxContent();
    appPanel.querySelector("#firefox-app")?.remove();
}

// Minimiza / Restaura o Explorer
function toggleFirefox() {
    firefoxIcon = !firefoxIcon;
    applyFirefoxStyles(firefoxIcon);
}

// === Funções auxiliares ===

// Aplica ou remove estilos do Firefox
function applyFirefoxStyles(isVisible) {
    const visible = (v) => (isVisible ? v : "0px");
    const bg = (v) => (isVisible ? v : "transparent");
    const border = (v) => (isVisible ? v : "0px solid transparent");

    firefoxWindow.style.width = isVisible ? "90%" : "0px";
    firefoxWindow.style.height = isVisible ? "90%" : "0px";
    firefoxWindow.style.border = border("2px solid #0a246a");
    firefoxWindow.style.background = bg("#ffffff");

    // Barra de título
    firefoxTitleBar.style.background = isVisible ? "linear-gradient(to bottom, #3a6ea5, #0a246a)" : "none";
    firefoxTitleBar.style.fontSize = isVisible ? "14px" : "0px";
    firefoxTitleBar.style.padding = isVisible ? "2px 6px" : "0px";
    firefoxTitleBar.style.height = isVisible ? "26px" : "0px";

    // Botões
    document.querySelectorAll(".firefox-btn").forEach((btn) => {
        btn.style.width = visible("22px");
        btn.style.height = visible("20px");
        btn.style.border = border("1px solid #003366");
        btn.style.background = bg(btn.classList.contains("close") ? "red" : "#d4d0c8");
        btn.style.fontSize = visible("14px");
    });
    if (isVisible) {
	    firefox_html.innerHTML = `             <h2>Hello, i'm Rx4n.</h2>
             <h3>Welcome to my Website!</h3>`
    } else {
	    firefox_html.innerHTML = ``
    }

}

// Limpa completamente o conteúdo e esconde
function removeFirefoxContent() {
    applyFirefoxStyles(false);
}

// =====--- Rx4n Installer ---=====
/* ================= INSTALLER: pages + behavior ================= */

// cache elementos (se já não estiverem)
const installerWindowEl = document.getElementById("installer-window");
const installerPage0 = document.getElementById("installer-page-0");
const installerPage1 = document.getElementById("installer-page-1");
const installerPage2 = document.getElementById("installer-page-2");
const checkboxAccept = document.getElementById("installer-accept-checkbox");
const btnCancel = document.getElementById("installer-cancel-btn");
const btnBack = document.getElementById("installer-back-btn");
const btnNext = document.getElementById("installer-next-btn");
const progressFill = document.getElementById("installer-progress-fill");
const progressPercent = document.getElementById("installer-progress-percent");
const finishedMsg = document.getElementById("installer-finished-msg");

// estado
let installerPageIndex = 0;
let installerProgress = 0;
let installerInterval = null;

// Atualiza visual quando abrir/fechar (mantendo compatibilidade com applyInstallerStyles)
function applyInstallerStyles(isVisible) {
  if (isVisible) {
    installerWindowEl.style.width = "60vw";
    installerWindowEl.style.height = "360px";
    installerWindowEl.style.border = "2px solid #0a246a";
    installerWindowEl.style.background = "#ece9d8";
    installerWindowEl.style.opacity = "1";
    // inicializa UI
    goToInstallerPage(0);
  } else {
    installerWindowEl.style.width = "0px";
    installerWindowEl.style.height = "0px";
    installerWindowEl.style.border = "0px solid transparent";
    installerWindowEl.style.background = "transparent";
    installerWindowEl.style.opacity = "0";
    stopInstallerProcess();
  }
}

// abrir instalador (mantém a criação do ícone no painel como você já fazia)
function openInstaller() {
  if (installerIcon) return;
  installerIcon = true;

  const installerApp = document.createElement("div");
  installerApp.className = "app-panel-icon panel-items panel-icons";
  installerApp.id = "installer-app";
  installerApp.innerHTML = `<img class="panel-items panel-icons" alt="Icone do Gray Wolf System" src="images/graywolf_icon.png">`;
  appPanel.appendChild(installerApp);

  installerApp.addEventListener("click", toggleInstaller);
  applyInstallerStyles(true);

  // ligar listeners dos botões do instalador (apenas uma vez)
  setupInstallerListeners();
}

// fechar instalador e limpar
function closeInstaller() {
  if (!installerIcon) return;
  installerIcon = false;
  appPanel.querySelector("#installer-app")?.remove();
  applyInstallerStyles(false);
  installerPageIndex = 0;
}

// alterna visibilidade
function toggleInstaller() {
  installerIcon = !installerIcon;
  applyInstallerStyles(installerIcon);
}

// configura listeners internos do instalador (Back/Next/Cancel/Checkbox)
function setupInstallerListeners() {
  // evita múltiplas bindings
  btnCancel.onclick = () => { closeInstaller(); };
  btnBack.onclick = () => { goToInstallerPage(installerPageIndex - 1); };
  btnNext.onclick = () => {
    if (installerPageIndex === 0) {
      goToInstallerPage(1);
    } else if (installerPageIndex === 1) {
      if (!checkboxAccept.checked) {
        alert("You must accept the terms to continue.");
        return;
      }
      goToInstallerPage(2);
      startInstallerProcess();
    } else if (installerPageIndex === 2) {
      // se concluído, Finish
      if (installerProgress >= 100) {
        closeInstaller();
        // opcional: abrir algo após instalar
        window.open('https://github.com/Rian-Batista-Rx4n/');
      }
    }
  };

  checkboxAccept.onchange = () => {
    btnNext.disabled = !checkboxAccept.checked;
  };

  // estado inicial
  btnBack.disabled = true;
  btnNext.disabled = false;
  if (checkboxAccept) { checkboxAccept.checked = false; btnNext.disabled = false; }
}

// navega para a página index (0,1,2)
function goToInstallerPage(index) {
  installerPageIndex = Math.max(0, Math.min(2, index));

  // esconder todas
  installerPage0.classList.add("hidden");
  installerPage1.classList.add("hidden");
  installerPage2.classList.add("hidden");
  finishedMsg.classList.add("hidden");

  // lógica de botões
  btnBack.disabled = (installerPageIndex === 0);
  btnNext.textContent = (installerPageIndex === 2) ? "Finish" : "Next";

  if (installerPageIndex === 0) {
    installerPage0.classList.remove("hidden");
  } else if (installerPageIndex === 1) {
    installerPage1.classList.remove("hidden");
    // botão Next só ativo quando aceitar (mas deixamos não obrigatório para teste)
    btnNext.disabled = !checkboxAccept.checked;
  } else if (installerPageIndex === 2) {
    installerPage2.classList.remove("hidden");
    btnNext.disabled = true; // durante instalação desativa Finish até 100%
  }
}

// inicia animação/ processo de instalação
function startInstallerProcess() {
  installerProgress = 0;
  updateInstallerProgress();

  // evita múltiplos intervalos
  if (installerInterval) clearInterval(installerInterval);
  installerInterval = setInterval(() => {
    installerProgress += Math.floor(Math.random() * 12) + 6; // avanço pseudo-randômico
    if (installerProgress >= 100) {
      installerProgress = 100;
      updateInstallerProgress();
      stopInstallerProcess(true);
    } else {
      updateInstallerProgress();
    }
  }, 400);
}

// atualiza barra e percentual
function updateInstallerProgress() {
  const pct = Math.max(0, Math.min(100, installerProgress));
  if (progressFill) progressFill.style.width = pct + "%";
  if (progressPercent) progressPercent.textContent = pct + "%";
}

// para o processo (quando concluído ou cancelado)
function stopInstallerProcess(finished = false) {
  if (installerInterval) { clearInterval(installerInterval); installerInterval = null; }
  if (finished) {
    finishedMsg.classList.remove("hidden");
    btnNext.disabled = false;
    btnNext.textContent = "Finish";
  } else {
    // reset visual se cancelou
    installerProgress = 0;
    updateInstallerProgress();
  }
}


