let deferredPrompt = null;

function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

function getBlockId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('block');
}

function createHomeGrid() {
  const grid = qs('#homeGrid');
  if (!grid) return;

  grid.innerHTML = HOME_ITEMS.map(item => `
    <a class="menu-card" href="${item.href}" aria-label="${item.title}">
      <span class="menu-index">${item.index}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </a>
  `).join('');
}

function renderResourceCard(item, actionLabel = 'Ireki') {
  return `
    <a class="resource-card" href="${item.url}" target="_blank" rel="noopener noreferrer">
      <div class="resource-meta">
        <div class="badge-row">
          ${item.type ? `<span class="badge adapt">${item.type}</span>` : ''}
        </div>
        <h3>${item.title}</h3>
        <p>${item.description || ''}</p>
      </div>
      <button class="secondary-btn" type="button">${actionLabel}</button>
    </a>
  `;
}

function renderFileList(items, actionLabel = 'Txantiloia Editatu') {
  return `
    <div class="file-list">
      ${items.map(item => `
        <div class="file-item">
          <div class="file-header">
            <div>
              <h3>${item.title}</h3>
              <p>${item.description || ''}</p>
            </div>
            <a class="secondary-btn" href="${item.url}" target="_blank" rel="noopener noreferrer">${actionLabel}</a>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function copyText(text, button) {
  navigator.clipboard.writeText(text).then(() => {
    const original = button.textContent;
    button.textContent = 'Kopiatuta';
    setTimeout(() => { button.textContent = original; }, 1400);
  }).catch(() => {
    alert('Ezin izan da testua kopiatu.');
  });
}

function renderPrompts(prompts) {
  return `
    <div class="prompts-wrapper">
      ${prompts.map((item, idx) => `
        <article class="prompt-card">
          <div class="prompt-header">
            <div>
              <h3>${idx + 1}. ${item.title}</h3>
              <p>${item.description || ''}</p>
            </div>

            ${!item.gptUrl ? `
              <button
                class="copy-btn secondary-btn"
                data-copy-prompt="${encodeURIComponent(item.prompt)}">
                Kopiatu
              </button>
            ` : ''}
          </div>

          ${!item.gptUrl ? `
            <div class="prompt-box">${item.prompt}</div>
          ` : `
            <div class="prompt-gpt-link">
              <a
                class="gpt-btn"
                href="${item.gptUrl}"
                target="_blank"
                rel="noopener noreferrer">
                ${item.gptTitle || 'Ireki GPT hau'}
              </a>
            </div>
          `}
        </article>
      `).join('')}

      <div class="inline-actions">
        <a class="primary-btn"
           href="${CHATGPT_URL}"
           target="_blank"
           rel="noopener noreferrer">
          Joan ChatGPTren webgunera
        </a>
      </div>
    </div>
  `;
}

function renderExamples(examples) {
  return `
    <div class="examples-wrapper">
      <div class="badge-row">
        <span class="badge allowed">Berdea · erabilgarria</span>
        <span class="badge adapt">Horia · egokitu</span>
        <span class="badge forbidden">Gorria · ez erabili</span>
      </div>
      ${examples.map((item, idx) => `
        <article class="example-item">
          <div class="badge-row">
            <span class="badge ${item.type}">${item.label}</span>
          </div>
          <h3>${idx + 1}. Adibidea</h3>
          <div class="example-text ${item.type}">${item.text}</div>
          ${item.type !== 'forbidden' ? `<button class="copy-btn secondary-btn" data-copy-example="${encodeURIComponent(item.text)}">Kopiatu testua</button>` : '<p class="helper-note">Zati hau ez da erabili behar oposizio-dokumentuan.</p>'}
        </article>
      `).join('')}
    </div>
  `;
}

function createAccordion(block) {
  const wrapper = qs('#blockAccordion');
  if (!wrapper) return;



  const items = [];

  if (block.txantiloiak) {
    items.push({
      title: 'Txantiloiak',
      subtitle: 'Drive dokumentuen karpeta moduan',
      content: renderFileList(block.txantiloiak)
    });
  }

  if (block.dokumentazioa) {
    items.push({
      title: 'Dokumentazioa',
      subtitle: 'PDFak edo bestelako erreferentzia-fitxategiak',
      content: renderFileList(block.dokumentazioa, 'Leiho berrian ireki')
    });
  }

  if (block.prompts) {
    items.push({
      title: 'GPT zerrenda',
      subtitle: 'Kopiatu eta erabili zuzenean ChatGPTn',
      content: renderPrompts(block.prompts)
    });
  }

  if (block.examples) {
    items.push({
      title: 'Adibidea',
      subtitle: 'Kolore-kodearekin',
      content: renderExamples(block.examples)
    });
  }

  wrapper.innerHTML = items.map((item) => `
    <article class="accordion-item">
      <button class="accordion-trigger" type="button">
        <span>
          <strong>${item.title}</strong><br />
          <small>${item.subtitle}</small>
        </span>
        <span>▾</span>
      </button>
      <div class="accordion-content">${item.content}</div>
    </article>
  `).join('');

  wrapper.querySelectorAll('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.parentElement.classList.toggle('open');
    });
  });
}

function checklistStorageKey(blockId) {
  return `opeikasi-checklist-${blockId}`;
}

function renderChecklist(blockId, items) {
  const container = qs('#checklistContainer');
  if (!container) return;

  const saved = JSON.parse(localStorage.getItem(checklistStorageKey(blockId)) || '[]');

  container.innerHTML = items.map((item, index) => {
    const checked = Boolean(saved[index]);
    return `
      <label class="checklist-item ${checked ? 'done' : ''}">
        <input type="checkbox" data-check-index="${index}" ${checked ? 'checked' : ''} />
        <span class="check-text">${item}</span>
      </label>
    `;
  }).join('');

  container.querySelectorAll('input[type="checkbox"]').forEach(input => {
    input.addEventListener('change', () => {
      const index = Number(input.dataset.checkIndex);
      saved[index] = input.checked;
      localStorage.setItem(checklistStorageKey(blockId), JSON.stringify(saved));
      input.closest('.checklist-item')?.classList.toggle('done', input.checked);
    });
  });

  const resetBtn = qs('#resetChecklistBtn');
  if (resetBtn) {
    resetBtn.onclick = () => {
      localStorage.removeItem(checklistStorageKey(blockId));
      renderChecklist(blockId, items);
    };
  }
}

function populateBlockPage() {
  const blockId = getBlockId();
  const block = BLOCKS[blockId];
  if (!block) {
    document.body.innerHTML = '<main class="app-shell"><section class="panel"><h1>Blokea ez da aurkitu</h1><p>Mesedez, itzuli hasierara eta aukeratu baliozko bloke bat.</p><a class="primary-btn" href="index.html">Hasierara</a></section></main>';
    return;
  }

  document.title = `OPEIKASI · ${block.title}`;
  qs('#blockTitle').textContent = block.title;
  qs('#blockSubtitle').textContent = block.subtitle;
  qs('#blockMainTitle').textContent = block.title;

  const goals = qs('#helburuakList');
  goals.innerHTML = block.helburuak.map(item => `<li>${item}</li>`).join('');

  if (block.image) {
    const imageContainer = document.createElement('div');
    imageContainer.className = 'block-image';

    imageContainer.innerHTML = `
      <img src="${block.image}" alt="${block.title}">
    `;

    qs('.block-intro').appendChild(imageContainer);
  }

  createAccordion(block);
  renderChecklist(blockId, block.checklist);
}

function populateDocsPage() {
  const container = qs('#docsList');
  if (!container) return;
  container.innerHTML = ADDITIONAL_DOCS.map(item => renderResourceCard(item, 'PDFa ireki')).join('');
}

function populateLinksPage() {
  const container = qs('#linksList');
  if (!container) return;
  container.innerHTML = QUICK_LINKS.map(item => renderResourceCard(item, 'Webgunea ireki')).join('');
}

function bindCopyButtons() {
  document.addEventListener('click', (event) => {
    const promptBtn = event.target.closest('[data-copy-prompt]');
    const exampleBtn = event.target.closest('[data-copy-example]');

    if (promptBtn) {
      copyText(decodeURIComponent(promptBtn.dataset.copyPrompt), promptBtn);
    }
    if (exampleBtn) {
      copyText(decodeURIComponent(exampleBtn.dataset.copyExample), exampleBtn);
    }
  });
}

function setupInstallPrompt() {
  const installBtn = qs('#installBtn');
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (installBtn) installBtn.hidden = false;
  });

  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      installBtn.hidden = true;
    });
  }
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js').catch(console.error);
    });
  }
}

function init() {
  const page = document.body.dataset.page;
  if (page === 'home') createHomeGrid();
  if (page === 'block') populateBlockPage();
  if (page === 'docs') populateDocsPage();
  if (page === 'links') populateLinksPage();

  bindCopyButtons();
  setupInstallPrompt();
  registerServiceWorker();
}

init();
