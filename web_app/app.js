// =============================================================================
// SOMBRAS EN LA FORTALEZA PROHIBIDA: EL CASTILLO DE LOS HORRORES
// Motor de Juego Interactivo con Enigmas Visuales y Sistema de Anillo Mágico:
// 1. Laberinto con suelo limpio y 2 únicas puertas de llegada
// 2. Salón del Gran Banquete desierto con 11 trampas
// 3. 3 Salas de búsqueda de objetos para continuar (Armería, Alquimia, Biblioteca)
// 4. Bloqueo estricto de botones de continuar hasta resolver cada sala
// 5. 4 Pantallas de Fracaso / Fin de Aventura con uso único de Anillo Mágico
// =============================================================================

class GameEngine {
  constructor() {
    // Iniciar por defecto con el catálogo de libros
    this.activeBookId = 'castillo';
    this.story = (window.LIBRARY_BOOKS && window.LIBRARY_BOOKS['castillo']) || window.STORY_DATA;
    
    this.sound = window.sound;
    this.currentSceneId = 'cover';
    this.rescuedFriends = [];
    this.collectedKeys = [];
    this.discoveredDifferences = [];
    this.discoveredBanquetTraps = [];
    this.foundObjectsPerScene = {};
    this.foundGameOverItems = {};
    this.riddleSolved = false;
    this.solvedRiddles = {};
    this.clockworkSolved = false;
    this.magicRingAvailable = true;
    this.monsterDefeated = false;
    this.history = [];
    this.activeMobileTab = 'both';
    this.toastTimeout = null;

    // Estado del laberinto por arrastre
    this.isMazeDrawing = false;
    this.mazePathPoints = [];
    this.mazeCompletedExit = null;

    window.gameEngine = this;
    this.initElements();
    this.bindEvents();
    
    // SIEMPRE mostrar la Biblioteca Fantástica (5 libros) como pantalla de inicio
    this.showLibraryView();
  }

  initElements() {
    // Vistas principales
    this.libraryViewEl = document.getElementById('library-view');
    this.readerViewEl = document.getElementById('reader-view');
    this.booksGridEl = document.getElementById('books-grid');
    this.btnBackToLibrary = document.getElementById('btn-back-to-library');

    this.bookSpreadEl = document.getElementById('book-spread');
    this.bookHeaderTitleEl = document.getElementById('book-header-title');
    this.companionNameEl = document.getElementById('companion-name');
    this.companionIconLabelEl = document.getElementById('companion-icon-label');
    this.friendsLabelEl = document.getElementById('friends-label');
    this.keysLabelEl = document.getElementById('keys-label');
    this.statKeysBoxEl = document.getElementById('stat-keys-box');

    this.spreadTitleEl = document.getElementById('spread-title');
    this.friendsCountEl = document.getElementById('friends-count');
    this.keysCountEl = document.getElementById('keys-count');
    this.btnRing = document.getElementById('btn-ring');
    this.viewportEl = document.getElementById('spread-viewport');
    this.imageContainerEl = document.getElementById('spread-image-container');
    this.spreadImageEl = document.getElementById('spread-image');
    this.mazeCanvasEl = document.getElementById('maze-canvas');
    this.hotspotsOverlayEl = document.getElementById('hotspots-overlay');
    this.narrativeLeftEl = document.getElementById('narrative-left');
    this.narrativeRightEl = document.getElementById('narrative-right');
    this.choicesContainerEl = document.getElementById('choices-container');
    
    // Toast de Compañero
    this.rufoToastEl = document.getElementById('rufo-toast');
    this.rufoToastTextEl = document.getElementById('rufo-toast-text');

    // Modales y herramientas
    this.modalMap = document.getElementById('modal-map');
    this.historyListEl = document.getElementById('history-list');
    this.btnMap = document.getElementById('btn-map');
    this.btnCloseMap = document.getElementById('btn-close-map');
    this.btnAudio = document.getElementById('btn-audio');
    this.btnRestart = document.getElementById('btn-restart');

    // Botones de navegación móvil
    this.mobileNavBtns = document.querySelectorAll('.mobile-nav-btn');
  }

  bindEvents() {
    // Inicializar sintetizador de audio al primer clic
    document.addEventListener('click', () => {
      if (this.sound) this.sound.init();
    }, { once: true });

    if (this.btnRing) {
      this.btnRing.addEventListener('click', () => {
        const scene = this.story.nodes[this.currentSceneId];
        const itemName = (this.story && this.story.salvationItemName) || 'El Anillo Mágico de Salvación';
        const itemIcon = (this.story && this.story.badgeIcon) || '✨';
        if (this.magicRingAvailable) {
          if (scene && scene.isGameOver) {
            this.useMagicRingRevive(scene);
          } else if (scene && scene.isRiddle && !this.isConditionMet(scene)) {
            if (confirm(`¿Deseas invocar ${itemName} para resolver este acertijo inmediatamente?`)) {
              this.useSalvationOnRiddle(scene);
            }
          } else if (scene && scene.isDiceChallenge && !this.isConditionMet(scene)) {
            if (confirm(`¿Deseas invocar ${itemName} para superar esta tirada con una puntuación perfecta de 12?`)) {
              this.useSalvationOnDice(scene);
            }
          } else if (scene && scene.isSpikesGrid && !this.isConditionMet(scene)) {
            if (confirm(`¿Deseas invocar ${itemName} para desactivar los pinchos y cruzar la sala sin peligro?`)) {
              this.useSalvationOnSpikes(scene);
            }
          } else if (scene && scene.isDifferences && !this.isConditionMet(scene)) {
            if (confirm(`¿Deseas invocar ${itemName} para descubrir todas las diferencias ocultas al instante?`)) {
              this.useSalvationOnDifferences(scene);
            }
          } else if (scene && scene.isClockwork && !this.isConditionMet(scene)) {
            if (confirm(`¿Deseas invocar ${itemName} para sincronizar los engranajes mecánicos?`)) {
              this.useSalvationOnClockwork(scene);
            }
          } else if (scene && scene.isObjectSearch && !this.isConditionMet(scene)) {
            if (confirm(`¿Deseas invocar ${itemName} para encontrar los objetos ocultos de la búsqueda?`)) {
              this.useSalvationOnObjectSearch(scene);
            }
          } else if (scene && scene.id === 'scene_monster' && !this.isConditionMet(scene)) {
            if (confirm(`¿Deseas invocar ${itemName} para neutralizar al monstruo eléctrico?`)) {
              this.useSalvationOnMonster(scene);
            }
          } else {
            alert(`${itemIcon} ${itemName} está cargado y listo (1 disponible).\n\nPuedes invocarlo en cualquier momento si fallas en un acertijo, tirada de dados o caes en una trampa mortal.`);
          }
        } else {
          alert(`⚠️ ${itemName} ya ha sido consumido en esta partida.`);
        }
      });
    }
    
    if (this.btnBackToLibrary) {
      this.btnBackToLibrary.addEventListener('click', () => {
        this.showLibraryView();
      });
    }

    this.btnMap.addEventListener('click', () => this.openMapModal());
    this.btnCloseMap.addEventListener('click', () => this.modalMap.classList.remove('open'));

    this.btnAudio.addEventListener('click', () => {
      if (this.sound) {
        const isMuted = this.sound.toggleMute();
        this.btnAudio.innerHTML = isMuted ? '🔇 Silenciado' : '🔊 Sonido';
      }
    });

    this.btnRestart.addEventListener('click', () => {
      if (confirm('¿Deseas reiniciar la aventura desde la portada?')) {
        this.restartGame();
      }
    });

    // Pestañas móviles
    this.mobileNavBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.mobileNavBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.setMobileTab(e.target.dataset.tab);
      });
    });

    // Clic sobre la imagen para enigmas
    this.spreadImageEl.addEventListener('click', (e) => this.handleImageClick(e));

    // Eventos de ratón / táctiles para el laberinto
    this.bindMazeEvents();

    window.addEventListener('resize', () => {
      this.resizeMazeCanvas();
    });
  }

  // ===========================================================================
  // RENDERIZADO DE ESCENAS
  // ===========================================================================
  renderScene(sceneId, isBacktracking = false) {
    if (sceneId === 'library') {
      this.showLibraryView();
      return;
    }
    const scene = this.story.nodes[sceneId];
    if (!scene) return;

    if (!isBacktracking && this.currentSceneId !== sceneId && !scene.isGameOver) {
      this.history.push(this.currentSceneId);
    }
    this.currentSceneId = sceneId;

    if (this.sound) this.sound.playPageTurn();

    // Modo Portada vs Pliego Interior
    if (this.bookSpreadEl) {
      if (scene.type === 'cover' || scene.id === 'cover') {
        this.bookSpreadEl.classList.add('is-cover-mode');
      } else {
        this.bookSpreadEl.classList.remove('is-cover-mode');
      }
    }

    // Actualizar cabecera
    this.spreadTitleEl.textContent = `${scene.title} (${scene.pageNumbers ? 'Págs. ' + scene.pageNumbers.join('-') : (scene.isGameOver ? '¡Fracaso!' : 'Portada')})`;

    // Actualizar imagen principal
    this.spreadImageEl.src = scene.image;
    this.spreadImageEl.alt = scene.title;

    // Limpiar capa interactiva y canvas
    this.hotspotsOverlayEl.innerHTML = '';
    this.clearMazeCanvas();

    // Textos narrativos
    this.narrativeLeftEl.innerHTML = scene.textLeft || '';
    this.narrativeRightEl.innerHTML = scene.textRight || '';

    // Configurar minijuego o estado de escena
    this.setupCurrentSceneInteractions(scene);

    // Renderizar opciones (con bloqueo estricto si no está resuelto)
    this.renderChoices(scene);

    // Actualizar barra de inventario
    this.updateStats();

    // Restablecer vista móvil
    this.setMobileTab('both');
  }

  setupCurrentSceneInteractions(scene) {
    // 1. PANTALLAS DE FRACASO (GAME OVER) CON ACTIVIDAD DE ESCAPE
    if (scene.isGameOver) {
      this.updateGameOverUI(scene);
      this.renderDiscoveredGameOverItems(scene);
      this.setupGameOverUI(scene);
      return;
    }

    // 2. LABERINTO CON ARRASTRE DE RATÓN
    if (scene.isMaze) {
      this.mazeCanvasEl.classList.add('active');
      this.resizeMazeCanvas();
      this.renderMazePortals(scene);
      return;
    } else {
      this.mazeCanvasEl.classList.remove('active');
    }

    // 3. EL BANQUETE DESIERTO Y LAS 11 TRAMPAS
    if (scene.isBanquetTraps) {
      this.updateBanquetTrapsUI(scene);
      this.renderDiscoveredBanquetTraps(scene);
      return;
    }

    // 4. SALAS DE BÚSQUEDA DE OBJETOS (Armería, Alquimia, Biblioteca)
    if (scene.isObjectSearch) {
      this.updateObjectSearchUI(scene);
      this.renderFoundObjects(scene);
      return;
    }

    // 5. ENCUENTRA LAS DIFERENCIAS
    if (scene.isDifferences) {
      this.updateDifferencesUI(scene);
      this.renderDiscoveredDifferences();
      return;
    }

    // 6. ACERTIJO DE LA ESFINGE
    if (scene.isRiddle) {
      this.setupRiddleUI(scene);
      return;
    }

    // 7. SALA DE ENGRANAJES
    if (scene.isClockwork) {
      this.setupClockworkUI(scene);
      return;
    }

    // 8. SALA DE LAS 5 LLAVES Y CALABOZOS
    if (scene.isDungeonKeys) {
      this.updateDungeonStatusUI();
      this.renderDiscoveredKeys(scene);
      return;
    }

    // 9. MONSTRUO ELÉCTRICO Y DADOS
    if (scene.id === 'scene_monster') {
      this.setupMonsterDice();
      return;
    }

    // 10. RETO GENÉRICO DE DADOS (COMBATES Y PRUEBAS)
    if (scene.isDiceChallenge) {
      this.setupGenericDiceChallenge(scene);
      return;
    }

    // 11. SUELO DE PINCHOS INVISIBLES
    if (scene.isSpikesGrid) {
      this.setupSpikesGrid(scene);
      return;
    }
  }

  // ===========================================================================
  // COMPROBACIÓN ESTRICTA DE RESOLUCIÓN DE CADA SALA
  // ===========================================================================
  isSceneSolved(scene) {
    if (!scene) return true;
    if (scene.type === 'cover' || scene.id === 'cover' || scene.id === 'scene_victory') {
      return true;
    }
    if (scene.isGameOver && scene.gameOverChallenge) {
      const found = this.foundGameOverItems[scene.id] || [];
      return found.length >= (scene.gameOverChallenge.items ? scene.gameOverChallenge.items.length : 3);
    }
    if (scene.isMaze) {
      return this.mazeCompletedExit !== null;
    }
    if (scene.isBanquetTraps) {
      return this.discoveredBanquetTraps.length >= (scene.banquetTrapsList ? scene.banquetTrapsList.length : 11);
    }
    if (scene.isObjectSearch) {
      const found = this.foundObjectsPerScene[scene.id] || [];
      return found.length >= (scene.requiredItems ? scene.requiredItems.length : 3);
    }
    if (scene.isDifferences) {
      return this.discoveredDifferences.length >= (scene.differencesList ? scene.differencesList.length : 6);
    }
    if (scene.isRiddle) {
      return !!((this.solvedRiddles && this.solvedRiddles[scene.id]) || (scene.id === 'scene_riddle' && this.riddleSolved));
    }
    if (scene.isClockwork) {
      return this.clockworkSolved === true;
    }
    if (scene.isDungeonKeys) {
      return this.rescuedFriends.length >= 5;
    }
    if (scene.id === 'scene_monster') {
      return this.monsterDefeated === true;
    }
    if (scene.isDiceChallenge) {
      return (this.solvedDiceChallenges && this.solvedDiceChallenges[scene.id]) === true;
    }
    if (scene.isSpikesGrid) {
      return (this.solvedSpikesGrids && this.solvedSpikesGrids[scene.id]) === true;
    }
    return true;
  }

  // ===========================================================================
  // OPCIONES DE SALTO DE PÁGINA (BLOQUEADAS HASTA RESOLVER)
  // ===========================================================================
  renderChoices(scene) {
    this.choicesContainerEl.innerHTML = '';

    // Manejo especial de pantallas de Fracaso / Game Over
    if (scene && scene.isGameOver) {
      this.renderGameOverChoices(scene);
      return;
    }

    const isSolved = this.isSceneSolved(scene);

    if (!isSolved) {
      // Mensaje de bloqueo estricto si no está resuelto
      const notice = document.createElement('div');
      notice.className = 'choices-locked-notice';
      notice.innerHTML = '🔒 <strong>CAMINO BLOQUEADO:</strong> Resuelve el enigma de esta página para abrir el paso.';
      this.choicesContainerEl.appendChild(notice);
      return;
    }

    // Si está resuelto, mostrar botones de continuación
    const choices = scene.choices || [];
    choices.forEach(choice => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';

      btn.innerHTML = `
        <span>${choice.text}</span>
        <span class="choice-target-badge">${choice.pageDisplay}</span>
      `;

      btn.addEventListener('click', () => {
        this.renderScene(choice.target);
      });

      this.choicesContainerEl.appendChild(btn);
    });
  }

  getSafePreviousScene() {
    let previousScene = 'cover';
    while (this.history.length > 0) {
      const candidate = this.history.pop();
      const node = this.story && this.story.nodes ? this.story.nodes[candidate] : null;
      if (node && !node.isGameOver && candidate !== this.currentSceneId) {
        previousScene = candidate;
        break;
      }
    }
    if (previousScene === 'cover' && this.story && this.story.nodes) {
      const firstPage = Object.keys(this.story.nodes).find(k => k !== 'cover' && !this.story.nodes[k].isGameOver);
      if (firstPage) previousScene = firstPage;
    }
    return previousScene;
  }

  renderGameOverChoices(scene) {
    this.choicesContainerEl.innerHTML = '';

    const companionName = (this.story && this.story.companionName) || 'tu compañero';
    const companionIcon = (this.story && this.story.companionIcon) || '✨';
    const itemName = (this.story && this.story.salvationItemName) || 'el Anillo Mágico de Salvación';

    const panel = document.createElement('div');
    panel.className = 'gameover-salvation-panel';
    panel.style.cssText = 'width: 100%; display: flex; flex-direction: column; gap: 10px; margin-top: 8px;';

    // 1. Si el desafío de escape en la imagen fue resuelto sin usar el anillo:
    if (scene.gameOverChallenge && this.isSceneSolved(scene)) {
      const escapeBtn = document.createElement('button');
      escapeBtn.className = 'choice-btn';
      escapeBtn.style.cssText = 'width: 100%; justify-content: center; background: #1e5c3a; color: #fff; border: 2px solid #52b788; font-weight: 700;';
      escapeBtn.innerHTML = `<span>🧗 ¡ESCAPAR POR EL ASIDERO SECRETO!</span> <span class="choice-target-badge" style="background:#52b788; color:#0f2e1e;">Salvarse sin gastar anillo</span>`;
      escapeBtn.addEventListener('click', () => {
        const prev = this.getSafePreviousScene();
        if (this.sound) this.sound.playVictoryFanfare();
        this.showRufoToast("🧗", `¡Has evitado la muerte gracias a tu agudeza visual! Regresas a salvo.`);
        this.renderScene(prev, true);
      });
      panel.appendChild(escapeBtn);
    }

    // 2. BOTÓN PRINCIPAL DE ANILLO MÁGICO / SALVACIÓN
    if (this.magicRingAvailable) {
      const ringBtn = document.createElement('button');
      ringBtn.className = 'choice-btn ring-revive-btn';
      ringBtn.style.cssText = 'width: 100%; justify-content: center; padding: 12px 14px; font-weight: 700; font-size: 1.02rem; background: linear-gradient(135deg, #7b1e1e, #9e2a2b); border: 2px solid #ffd700; color: #fff; box-shadow: 0 0 14px rgba(255,215,0,0.5);';
      ringBtn.innerHTML = `<span>💍 ¡USAR ${itemName.toUpperCase()}! (1 disponible)</span>`;
      ringBtn.title = `Invoca el artefacto sagrado para salvar tu vida y deshacer tu error fatal`;
      ringBtn.addEventListener('click', () => {
        this.useMagicRingRevive(scene);
      });
      panel.appendChild(ringBtn);
    } else {
      const ringExhausted = document.createElement('div');
      ringExhausted.style.cssText = 'padding: 8px 12px; background: rgba(0,0,0,0.18); border: 1px dashed #8f2828; border-radius: 6px; color: #8f2828; font-weight: 700; text-align: center; font-size: 0.9rem;';
      ringExhausted.innerHTML = `💍 El <em>${itemName}</em> ya fue consumido en esta aventura. No tienes más salvaciones mágicas.`;
      panel.appendChild(ringExhausted);
    }

    // 3. REINTENTAR / REBOBINAR A LA DECISIÓN ANTERIOR
    const rewindBtn = document.createElement('button');
    rewindBtn.className = 'choice-btn';
    rewindBtn.style.cssText = 'width: 100%; justify-content: center;';
    rewindBtn.innerHTML = `<span>🔄 Reintentar desde la decisión anterior</span> <span class="choice-target-badge">Rebobinar</span>`;
    rewindBtn.addEventListener('click', () => {
      const prev = this.getSafePreviousScene();
      if (this.sound) this.sound.playPageTurn();
      this.renderScene(prev, true);
    });
    panel.appendChild(rewindBtn);

    // 4. REINICIAR LIBRO
    const restartBtn = document.createElement('button');
    restartBtn.className = 'choice-btn';
    restartBtn.style.cssText = 'width: 100%; justify-content: center;';
    const bookTitleShort = (this.story && this.story.title ? this.story.title.split(' y ')[0] : 'este libro');
    restartBtn.innerHTML = `<span>📖 Reiniciar «${bookTitleShort}» desde la Portada</span>`;
    restartBtn.addEventListener('click', () => {
      this.restartGame();
    });
    panel.appendChild(restartBtn);

    // 5. VOLVER A LA BIBLIOTECA
    const libBtn = document.createElement('button');
    libBtn.className = 'choice-btn';
    libBtn.style.cssText = 'width: 100%; justify-content: center; border-color: var(--accent-gold); font-weight: 700;';
    libBtn.innerHTML = `<span>🏛️ Volver a la Biblioteca (5 Libros)</span>`;
    libBtn.addEventListener('click', () => {
      this.showLibraryView();
    });
    panel.appendChild(libBtn);

    this.choicesContainerEl.appendChild(panel);
  }

  // ===========================================================================
  // 1. LABERINTO CON SUELO LIMPIO Y 2 PUERTAS
  // ===========================================================================
  resizeMazeCanvas() {
    const rect = this.spreadImageEl.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      this.mazeCanvasEl.width = rect.width;
      this.mazeCanvasEl.height = rect.height;
    }
  }

  clearMazeCanvas() {
    if (!this.mazeCanvasEl) return;
    const ctx = this.mazeCanvasEl.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, this.mazeCanvasEl.width, this.mazeCanvasEl.height);
    }
    this.mazePathPoints = [];
    this.mazeCompletedExit = null;
  }

  renderMazePortals(scene) {
    this.hotspotsOverlayEl.innerHTML = '';

    // Marcador de ENTRADA
    if (scene.mazeStart) {
      const startPortal = document.createElement('div');
      startPortal.className = 'maze-portal';
      startPortal.style.left = `${scene.mazeStart.x}%`;
      startPortal.style.top = `${scene.mazeStart.y}%`;
      startPortal.innerHTML = `
        <div class="maze-portal-icon" style="color: #ffd700; border-color: #ffd700;">🚪</div>
        <div class="maze-portal-label">ENTRADA (INICIA AQUÍ)</div>
      `;
      startPortal.addEventListener('click', () => {
        if (this.sound) this.sound.playDogBark();
        this.showRufoToast("🐕", "¡Aquí empieza el laberinto! Mantén pulsado y arrastra el ratón por los corredores.");
      });
      this.hotspotsOverlayEl.appendChild(startPortal);
    }

    // Marcadores de las 2 ÚNICAS SALIDAS
    if (scene.mazeExits) {
      scene.mazeExits.forEach(exit => {
        const exitPortal = document.createElement('div');
        exitPortal.className = 'maze-portal';
        exitPortal.style.left = `${exit.x}%`;
        exitPortal.style.top = `${exit.y}%`;
        exitPortal.innerHTML = `
          <div class="maze-portal-icon" style="color: ${exit.color}; border-color: ${exit.color};">${exit.icon}</div>
          <div class="maze-portal-label">${exit.label}</div>
        `;
        exitPortal.addEventListener('click', () => {
          this.triggerMazeExit(exit, scene);
        });
        this.hotspotsOverlayEl.appendChild(exitPortal);
      });
    }
  }

  bindMazeEvents() {
    const canvas = this.mazeCanvasEl;
    if (!canvas) return;

    const startDraw = (e) => {
      const scene = this.story.nodes[this.currentSceneId];
      if (!scene || !scene.isMaze) return;

      this.resizeMazeCanvas();
      const pos = this.getCanvasCoords(e);
      if (!pos) return;

      this.isMazeDrawing = true;
      this.mazePathPoints = [pos];
      if (this.sound) this.sound.playMagicDraw();
      this.drawMazePath();
    };

    const moveDraw = (e) => {
      if (!this.isMazeDrawing) return;
      const scene = this.story.nodes[this.currentSceneId];
      if (!scene || !scene.isMaze) return;

      const pos = this.getCanvasCoords(e);
      if (!pos) return;

      this.mazePathPoints.push(pos);
      this.drawMazePath();

      // Comprobar si el trazo alcanza alguna de las dos salidas
      if (scene.mazeExits && !this.mazeCompletedExit) {
        const pctX = (pos.x / canvas.width) * 100;
        const pctY = (pos.y / canvas.height) * 100;

        for (const exit of scene.mazeExits) {
          const dx = pctX - exit.x;
          const dy = pctY - exit.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist <= (exit.radius || 9)) {
            this.mazeCompletedExit = exit.id;
            this.triggerMazeExit(exit, scene);
            break;
          }
        }
      }
    };

    const endDraw = () => {
      this.isMazeDrawing = false;
    };

    canvas.addEventListener('mousedown', startDraw);
    window.addEventListener('mousemove', moveDraw);
    window.addEventListener('mouseup', endDraw);

    canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      startDraw(e.touches[0]);
    }, { passive: false });

    window.addEventListener('touchmove', (e) => {
      if (this.isMazeDrawing && e.touches.length > 0) {
        moveDraw(e.touches[0]);
      }
    });

    window.addEventListener('touchend', endDraw);
  }

  getCanvasCoords(e) {
    const rect = this.mazeCanvasEl.getBoundingClientRect();
    if (!rect || rect.width === 0) return null;
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  drawMazePath() {
    const canvas = this.mazeCanvasEl;
    const ctx = canvas.getContext('2d');
    if (!ctx || this.mazePathPoints.length < 2) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.strokeStyle = 'rgba(255, 215, 0, 0.45)';
    ctx.lineWidth = 14;
    ctx.shadowBlur = 16;
    ctx.shadowColor = '#ffd700';

    ctx.beginPath();
    ctx.moveTo(this.mazePathPoints[0].x, this.mazePathPoints[0].y);
    for (let i = 1; i < this.mazePathPoints.length; i++) {
      ctx.lineTo(this.mazePathPoints[i].x, this.mazePathPoints[i].y);
    }
    ctx.stroke();

    ctx.strokeStyle = '#fff8db';
    ctx.lineWidth = 5;
    ctx.shadowBlur = 6;
    ctx.shadowColor = '#ffffff';

    ctx.beginPath();
    ctx.moveTo(this.mazePathPoints[0].x, this.mazePathPoints[0].y);
    for (let i = 1; i < this.mazePathPoints.length; i++) {
      ctx.lineTo(this.mazePathPoints[i].x, this.mazePathPoints[i].y);
    }
    ctx.stroke();

    const lastPoint = this.mazePathPoints[this.mazePathPoints.length - 1];
    ctx.fillStyle = '#ffea75';
    ctx.beginPath();
    ctx.arc(lastPoint.x, lastPoint.y, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  triggerMazeExit(exit, scene) {
    if (this.sound) {
      this.sound.playVictoryFanfare();
    }
    this.showRufoToast(exit.icon, `¡Llegaste a la ${exit.label}! Rufo celebra con entusiasmo.`);
    
    const feedbackEl = document.getElementById('maze-feedback');
    if (feedbackEl) {
      feedbackEl.innerHTML = `✨ <strong>¡Recorrido completado!</strong> Has alcanzado la <em>${exit.label}</em>. ¡El camino queda abierto!`;
    }

    // Revelar opciones y desbloquear salto
    this.renderChoices(scene);

    setTimeout(() => {
      this.renderScene(exit.target);
    }, 1400);
  }

  // ===========================================================================
  // 2. SALÓN DEL GRAN BANQUETE DESIERTO (11 TRAMPAS)
  // ===========================================================================
  handleBanquetTrapsClick(clickX, clickY, scene) {
    let foundTrap = null;
    for (const trap of scene.banquetTrapsList) {
      if (this.discoveredBanquetTraps.includes(trap.id)) continue;
      const dx = clickX - trap.x;
      const dy = clickY - trap.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist <= (trap.radius || 6.5)) {
        foundTrap = trap;
        break;
      }
    }

    if (foundTrap) {
      this.discoveredBanquetTraps.push(foundTrap.id);
      if (this.sound) this.sound.playClueFound();
      this.showRufoToast("☠️", `¡Trampa detectada! ${foundTrap.name}: ${foundTrap.desc}`);
      this.updateBanquetTrapsUI(scene);
      this.renderDiscoveredBanquetTraps(scene);

      if (this.discoveredBanquetTraps.length >= scene.banquetTrapsList.length) {
        if (this.sound) {
          setTimeout(() => this.sound.playVictoryFanfare(), 300);
        }
        this.showRufoToast("🏆", "¡Has descubierto las 11 trampas del banquete! La sala queda neutralizada y el paso se abre.");
        this.renderChoices(scene);
      }
    } else {
      if (this.sound) this.sound.playDogSniff();
      const hints = [
        "Rufo huele el peligro en la sala solitaria: revisa la silla con pinchos, los pasteles con dientes, la soga del techo y bajo el mantel.",
        "¡Cuidado con la calavera humeante a la derecha, la ballesta y las copas con veneno!",
        "Rufo husmea la mesa vacía: ¡aún quedan trampas mortales por señalar!"
      ];
      this.showRufoToast("🐕", hints[Math.floor(Math.random() * hints.length)]);
    }
  }

  updateBanquetTrapsUI(scene) {
    const counterBadge = document.getElementById('banquet-traps-counter');
    const feedbackText = document.getElementById('banquet-feedback-text');
    const total = scene.banquetTrapsList.length;
    const found = this.discoveredBanquetTraps.length;

    if (counterBadge) {
      counterBadge.textContent = `Trampas descubiertas: ${found} / ${total}`;
    }

    if (feedbackText) {
      if (found >= total) {
        feedbackText.innerHTML = `🎉 <strong>¡LAS 11 TRAMPAS HAN SIDO DESACTIVADAS!</strong> El salón desierto es seguro y el pasadizo hacia la armería o mazmorras ha sido desbloqueado.`;
      } else {
        feedbackText.innerHTML = `Llevas <strong>${found} de ${total}</strong> trampas detectadas. Fíjate en los detalles macabros de la mesa, el suelo y el techo.`;
      }
    }
  }

  renderDiscoveredBanquetTraps(scene) {
    this.hotspotsOverlayEl.innerHTML = '';
    if (!scene.banquetTrapsList) return;

    scene.banquetTrapsList.forEach(trap => {
      if (this.discoveredBanquetTraps.includes(trap.id)) {
        const pin = document.createElement('div');
        pin.className = 'discovered-mark';
        pin.style.background = 'rgba(143, 40, 40, 0.9)';
        pin.style.boxShadow = '0 0 10px rgba(143, 40, 40, 0.9)';
        pin.style.left = `${trap.x}%`;
        pin.style.top = `${trap.y}%`;
        pin.innerHTML = '☠️';
        pin.title = `${trap.name}: ${trap.desc}`;
        this.hotspotsOverlayEl.appendChild(pin);
      }
    });
  }

  // ===========================================================================
  // 3. SALAS DE BÚSQUEDA DE OBJETOS (Armería, Alquimia, Biblioteca, Cabinas)
  // ===========================================================================
  handleObjectSearchClick(clickX, clickY, scene) {
    const found = this.foundObjectsPerScene[scene.id] || [];
    const companionName = (this.story && this.story.companionName) || 'Tu compañero';
    const companionIcon = (this.story && this.story.companionIcon) || '🐾';
    let hitItem = null;

    for (const item of scene.requiredItems) {
      if (found.includes(item.id)) continue;
      const dx = clickX - item.x;
      const dy = clickY - item.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist <= (item.radius || 6.5)) {
        hitItem = item;
        break;
      }
    }

    if (hitItem) {
      if (!this.foundObjectsPerScene[scene.id]) {
        this.foundObjectsPerScene[scene.id] = [];
      }
      this.foundObjectsPerScene[scene.id].push(hitItem.id);

      if (this.sound) this.sound.playKeyUnlock();
      this.showRufoToast(hitItem.icon || "✨", `¡Objeto conseguido! ${hitItem.name}: ${hitItem.desc}`);
      this.updateObjectSearchUI(scene);
      this.renderFoundObjects(scene);

      if (this.foundObjectsPerScene[scene.id].length >= scene.requiredItems.length) {
        if (this.sound) {
          setTimeout(() => this.sound.playVictoryFanfare(), 300);
        }
        if (scene.id === 'park_ride_2') {
          this.showRufoToast(companionIcon, `¡${companionName} salta de alegría! Has encontrado la barquilla del farol azul. ¡El camino queda desbloqueado!`);
        } else {
          this.showRufoToast("🏆", "¡Todos los objetos de esta sala han sido reunidos! El paso a la siguiente página queda desbloqueado.");
        }
        this.renderChoices(scene);
      }
    } else {
      if (this.sound) this.sound.playDogSniff();
      if (scene.id === 'park_ride_2') {
        this.showRufoToast(companionIcon, `¡${companionName} te susurra: Busca la barquilla más alta en la cúspide de la noria, cerca de las estrellas y los fuegos artificiales!`);
      } else {
        this.showRufoToast(companionIcon, `${companionName} busca atentamente... pero aquí no hay ningún objeto clave. ¡Mira en los rincones sospechosos!`);
      }
    }
  }

  updateObjectSearchUI(scene) {
    const counterBadge = document.getElementById('items-counter');
    const feedbackText = document.getElementById('items-feedback-text');
    const total = scene.requiredItems.length;
    const found = (this.foundObjectsPerScene[scene.id] || []).length;

    if (counterBadge) {
      counterBadge.textContent = `Objetos encontrados: ${found} / ${total}`;
    }

    if (feedbackText) {
      if (found >= total) {
        if (scene.id === 'park_ride_2') {
          feedbackText.innerHTML = `🎉 <strong>¡BARQUILLA PACÍFICA ENCONTRADA!</strong> Subes a la barquilla más alta, el pulpo sonríe apaciguado y de su corona brota la <strong>Llave 2</strong>.`;
          feedbackText.style.background = 'rgba(39, 174, 96, 0.2)';
          feedbackText.style.borderColor = '#27ae60';
          feedbackText.style.borderStyle = 'solid';
        } else {
          feedbackText.innerHTML = `🎉 <strong>¡TODOS LOS OBJETOS ENCONTRADOS!</strong> Tienes todo lo necesario para continuar tu incursión.`;
        }
      } else {
        if (scene.id === 'park_ride_2') {
          feedbackText.innerHTML = `🎡 <strong>Examina la noria del pulpo</strong> en la ilustración y haz clic directamente sobre la cabina pacífica en lo alto.`;
        } else {
          feedbackText.innerHTML = `Tienes <strong>${found} de ${total}</strong> objetos. Te faltan <strong>${total - found}</strong> por localizar.`;
        }
      }
    }
  }

  renderFoundObjects(scene) {
    this.hotspotsOverlayEl.innerHTML = '';
    const found = this.foundObjectsPerScene[scene.id] || [];

    scene.requiredItems.forEach(item => {
      if (found.includes(item.id)) {
        const pin = document.createElement('div');
        pin.className = 'item-found-mark';
        pin.style.left = `${item.x}%`;
        pin.style.top = `${item.y}%`;
        pin.innerHTML = item.icon || '✨';
        pin.title = `${item.name}: ${item.desc}`;
        this.hotspotsOverlayEl.appendChild(pin);
      }
    });
  }

  // ===========================================================================
  // 4. ENCUENTRA LAS DIFERENCIAS
  // ===========================================================================
  handleDifferencesClick(clickX, clickY, scene) {
    let foundDiff = null;

    for (const diff of scene.differencesList) {
      if (this.discoveredDifferences.includes(diff.id)) continue;

      const dxL = clickX - diff.left.x;
      const dyL = clickY - diff.left.y;
      const distL = Math.sqrt(dxL * dxL + dyL * dyL);

      const dxR = clickX - diff.right.x;
      const dyR = clickY - diff.right.y;
      const distR = Math.sqrt(dxR * dxR + dyR * dyR);

      const rad = diff.radius || 7;
      if (distL <= rad || distR <= rad) {
        foundDiff = diff;
        break;
      }
    }

    if (foundDiff) {
      this.discoveredDifferences.push(foundDiff.id);
      if (this.sound) this.sound.playClueFound();
      this.showRufoToast("🪞", `¡Diferencia hallada! ${foundDiff.name}: ${foundDiff.desc}`);
      this.updateDifferencesUI(scene);
      this.renderDiscoveredDifferences();

      if (this.discoveredDifferences.length >= scene.differencesList.length) {
        if (this.sound) {
          setTimeout(() => this.sound.playVictoryFanfare(), 400);
        }
        this.showRufoToast("🏆", "¡Has descubierto las 6 diferencias! El encantamiento se ha disipado.");
        this.renderChoices(scene);
      }
    } else {
      if (this.sound) this.sound.playDogSniff();
      this.showRufoToast("🐕", "Rufo mira atentamente... pero aquí ambos lados son idénticos. ¡Sigue comparando!");
    }
  }

  updateDifferencesUI(scene) {
    const counterBadge = document.getElementById('diff-counter');
    const statusText = document.getElementById('diff-status-text');
    const total = scene.differencesList.length;
    const found = this.discoveredDifferences.length;

    if (counterBadge) {
      counterBadge.textContent = `Diferencias encontradas: ${found} / ${total}`;
    }

    if (statusText) {
      if (found >= total) {
        statusText.innerHTML = `🎉 <strong>¡TODAS LAS DIFERENCIAS ENCONTRADAS!</strong> El espejo ha perdido su poder engañoso y los accesos quedan expeditos.`;
      } else {
        statusText.innerHTML = `Te faltan <strong>${total - found}</strong> diferencias por hallar. Fíjate en los detalles minuciosos.`;
      }
    }
  }

  renderDiscoveredDifferences() {
    const scene = this.story.nodes[this.currentSceneId];
    if (!scene || !scene.differencesList) return;

    this.hotspotsOverlayEl.innerHTML = '';

    scene.differencesList.forEach(diff => {
      if (this.discoveredDifferences.includes(diff.id)) {
        const ringL = document.createElement('div');
        ringL.className = 'difference-ring';
        ringL.style.left = `${diff.left.x}%`;
        ringL.style.top = `${diff.left.y}%`;
        ringL.title = diff.name;
        this.hotspotsOverlayEl.appendChild(ringL);

        const ringR = document.createElement('div');
        ringR.className = 'difference-ring';
        ringR.style.left = `${diff.right.x}%`;
        ringR.style.top = `${diff.right.y}%`;
        ringR.title = diff.name;
        this.hotspotsOverlayEl.appendChild(ringR);
      }
    });
  }

  // ===========================================================================
  // 5. ACERTIJOS Y ENIGMAS (GENÉRICOS Y ESFINGE)
  // ===========================================================================
  setupRiddleUI(scene) {
    this.solvedRiddles = this.solvedRiddles || {};
    const isSolved = !!((this.solvedRiddles && this.solvedRiddles[scene.id]) || (scene.id === 'scene_riddle' && this.riddleSolved));

    // Si la escena define opciones de enigma genéricas (como en los 5 libros nuevos)
    if (scene.riddleOptions && scene.riddleOptions.length > 0) {
      const riddleBox = document.getElementById('riddle-box') || document.querySelector('.riddle-container');
      if (riddleBox) {
        let html = `
          <div class="riddle-options-wrapper" style="display:flex; flex-direction:column; gap:10px; margin:14px 0;">
        `;
        scene.riddleOptions.forEach((opt, idx) => {
          const isCorrect = opt.isCorrect;
          const activeClass = isSolved && isCorrect ? 'active-correct' : '';
          html += `
            <button class="choice-btn riddle-option-btn ${activeClass}" data-opt-id="${opt.id || idx}" style="text-align:left; justify-content:flex-start; padding:12px 16px; font-size:0.95rem; line-height:1.4; width:100%;">
              ${opt.text}
            </button>
          `;
        });
        html += `
          </div>
          <div id="riddle-feedback" class="riddle-feedback-box" style="margin-top:10px; padding:12px 14px; border-radius:8px; font-size:0.95rem; line-height:1.4; display:${isSolved ? 'block' : 'none'}; background:rgba(39,174,96,0.18); border:1px solid #27ae60; color:#1e824c;">
            ${isSolved ? '✅ <strong>¡Enigma resuelto!</strong> El camino hacia la siguiente atracción queda completamente abierto.' : ''}
          </div>
        `;
        riddleBox.innerHTML = html;

        const feedbackBox = document.getElementById('riddle-feedback');
        const optionButtons = riddleBox.querySelectorAll('.riddle-option-btn');
        optionButtons.forEach(btn => {
          btn.onclick = () => {
            const optId = btn.dataset.optId;
            const option = scene.riddleOptions.find((o, i) => (o.id || i.toString()) === optId);
            if (option) {
              this.submitGenericRiddleAnswer(option, btn, feedbackBox, scene);
            }
          };
        });
      }
      return;
    }

    // Comportamiento clásico para el acertijo de la Esfinge con pedestales
    const buttons = document.querySelectorAll('.pedestal-btn');
    const feedbackBox = document.getElementById('riddle-feedback');

    buttons.forEach(btn => {
      btn.onclick = () => {
        const pedId = btn.dataset.pedestal;
        const pedestal = scene.pedestals && scene.pedestals.find(p => p.id === pedId);
        if (pedestal) {
          this.submitRiddleAnswer(pedestal, feedbackBox, scene);
        }
      };
    });

    if (isSolved) {
      if (feedbackBox) {
        feedbackBox.innerHTML = `✅ <strong>¡Acertijo ya resuelto!</strong> El gran portón permanece abierto.`;
      }
    }
  }

  handleRiddleClick(clickX, clickY, scene) {
    const companionName = (this.story && this.story.companionName) || 'Tu compañero';
    const companionIcon = (this.story && this.story.companionIcon) || '🐾';
    const feedbackBox = document.getElementById('riddle-feedback');

    // 1. Zonas interactivas con pedestales explícitos
    if (scene.pedestals && Array.isArray(scene.pedestals) && scene.pedestals.length > 0) {
      for (const ped of scene.pedestals) {
        const dx = clickX - ped.x;
        const dy = clickY - ped.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist <= (ped.radius || 8)) {
          this.submitRiddleAnswer(ped, feedbackBox, scene);
          return;
        }
      }
    }

    // 2. Interacción al pinchar directamente sobre las cabinas de la noria del pulpo (park_ride_2)
    if (scene.id === 'park_ride_2' && scene.riddleOptions) {
      // Las cabinas de la gran noria del pulpo abarcan x: 44% a 82%, y: 5% a 54%
      if (clickX >= 44 && clickX <= 82 && clickY >= 5 && clickY <= 54) {
        const correctOpt = scene.riddleOptions.find(o => o.isCorrect);
        if (correctOpt) {
          const btn = document.querySelector(`.riddle-option-btn[data-opt-id="${correctOpt.id || '0'}"]`);
          this.submitGenericRiddleAnswer(correctOpt, btn, feedbackBox, scene);
          return;
        }
      } else if (clickX >= 44 && clickX <= 82 && clickY > 54 && clickY <= 75) {
        // Tentáculos de la base
        const wrongOpt = scene.riddleOptions.find(o => !o.isCorrect);
        if (wrongOpt) {
          this.submitGenericRiddleAnswer(wrongOpt, null, feedbackBox, scene);
          return;
        }
      }

      if (this.sound) this.sound.playDogSniff();
      this.showRufoToast(companionIcon, `¡${companionName} te señala las cabinas iluminadas de la noria del pulpo, o pulsa una opción en la Página 6!`);
      return;
    }

    // 3. Soporte genérico para escenas con riddleOptions al hacer clic en la imagen
    if (scene.riddleOptions && scene.riddleOptions.length > 0) {
      // Si el clic es en el área central destacada
      if (clickX >= 35 && clickX <= 75 && clickY >= 15 && clickY <= 75) {
        const correctOpt = scene.riddleOptions.find(o => o.isCorrect);
        if (correctOpt) {
          const btn = document.querySelector(`.riddle-option-btn[data-opt-id="${correctOpt.id || '0'}"]`);
          this.submitGenericRiddleAnswer(correctOpt, btn, feedbackBox, scene);
          return;
        }
      }
      if (this.sound) this.sound.playDogSniff();
      this.showRufoToast(companionIcon, `${companionName} examina la escena: ¡Elige tu respuesta en la lista de opciones de la página!`);
      return;
    }

    if (this.sound) this.sound.playDogSniff();
    this.showRufoToast(companionIcon, `${companionName} te anima a resolver el enigma para abrir el camino.`);
  }

  submitRiddleAnswer(pedestal, feedbackBox, scene, isMagic = false) {
    this.solvedRiddles = this.solvedRiddles || {};
    const companionName = (this.story && this.story.companionName) || 'Tu compañero';
    const companionIcon = (this.story && this.story.companionIcon) || '🐾';
    const itemName = (this.story && this.story.salvationItemName) || 'el Objeto Mágico de Salvación';
    const itemIcon = (this.story && this.story.badgeIcon) || '✨';

    if (pedestal.isCorrect) {
      this.solvedRiddles[scene.id] = true;
      this.riddleSolved = true;
      if (this.sound) {
        if (isMagic) {
          this.sound.playMagicWish();
          setTimeout(() => this.sound.playVictoryFanfare(), 300);
        } else {
          this.sound.playStoneDoorOpen();
          setTimeout(() => this.sound.playVictoryFanfare(), 300);
        }
      }
      this.showRufoToast(companionIcon, isMagic ? `¡${companionName} celebra! El poder de ${itemName} abre el portal sagrado.` : pedestal.feedback);
      if (feedbackBox) {
        feedbackBox.style.display = 'block';
        feedbackBox.style.background = 'rgba(39,174,96,0.18)';
        feedbackBox.style.borderColor = '#27ae60';
        feedbackBox.style.color = '#1e824c';
        feedbackBox.innerHTML = `🎉 <strong>${isMagic ? 'ENIGMA RESUELTO CON MAGIA' : (pedestal.name || '¡Correcto!')}:</strong> ${pedestal.feedback}`;
      }

      document.querySelectorAll('.pedestal-btn').forEach(b => {
        if (b.dataset.pedestal === pedestal.id) b.classList.add('active-correct');
      });

      this.renderChoices(scene);
    } else {
      if (this.sound) this.sound.playDogSniff();
      this.showRufoToast("❌", pedestal.feedback);
      if (feedbackBox) {
        feedbackBox.style.display = 'block';
        feedbackBox.style.background = 'rgba(192,57,43,0.18)';
        feedbackBox.style.borderColor = '#c0392b';
        feedbackBox.style.color = '#e74c3c';

        let failHtml = `<div>⚠️ <strong>${pedestal.name || 'Atención'}:</strong> ${pedestal.feedback}</div>`;
        if (this.magicRingAvailable) {
          failHtml += `
            <div style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed rgba(255,255,255,0.25); text-align: center;">
              <p style="font-size: 0.9rem; margin-bottom: 8px; color: #f5eedc;">¿La Esfinge te confunde? Invoca tu objeto sagrado:</p>
              <button id="btn-salvation-riddle-ped" class="choice-btn ring-revive-btn" style="width: 100%; justify-content: center; font-weight: 700;">
                ${itemIcon} ¡USAR ${itemName.toUpperCase()}! (Resolver el acertijo al instante)
              </button>
            </div>
          `;
        }
        feedbackBox.innerHTML = failHtml;

        const salvBtn = document.getElementById('btn-salvation-riddle-ped');
        if (salvBtn) {
          salvBtn.onclick = () => {
            this.useSalvationOnRiddle(scene);
          };
        }
      }
    }
  }

  submitGenericRiddleAnswer(option, buttonEl, feedbackBox, scene, isMagic = false) {
    this.solvedRiddles = this.solvedRiddles || {};
    const companionIcon = (this.story && this.story.companionIcon) || '✨';
    const companionName = (this.story && this.story.companionName) || 'Tu compañero';
    const itemName = (this.story && this.story.salvationItemName) || 'el Objeto Mágico de Salvación';
    const itemIcon = (this.story && this.story.badgeIcon) || '✨';

    if (option.isCorrect) {
      this.solvedRiddles[scene.id] = true;
      this.riddleSolved = true;

      if (this.sound) {
        if (isMagic) {
          this.sound.playMagicWish();
          setTimeout(() => this.sound.playVictoryFanfare(), 300);
        } else {
          this.sound.playStoneDoorOpen();
          setTimeout(() => this.sound.playVictoryFanfare(), 300);
        }
      }
      this.showRufoToast(companionIcon, isMagic ? `¡${companionName} celebra! El poder de ${itemName} resuelve el enigma.` : (option.feedback || "¡Respuesta correcta! El camino queda abierto."));

      if (feedbackBox) {
        feedbackBox.style.display = 'block';
        feedbackBox.style.background = 'rgba(39,174,96,0.18)';
        feedbackBox.style.borderColor = '#27ae60';
        feedbackBox.style.color = '#1e824c';
        feedbackBox.innerHTML = `🎉 <strong>¡${isMagic ? 'ENIGMA RESUELTO CON MAGIA' : 'CORRECTO'}!</strong> ${option.feedback}`;
      }

      const allBtns = document.querySelectorAll('.riddle-option-btn');
      allBtns.forEach(b => {
        if (b.dataset.optId === (option.id || '0') || b === buttonEl) {
          b.classList.add('active-correct');
          b.style.borderColor = '#27ae60';
          b.style.background = 'rgba(39,174,96,0.2)';
        }
      });

      this.renderChoices(scene);
    } else {
      if (this.sound) this.sound.playDogSniff();
      this.showRufoToast("⚠️", option.feedback || "¡Opción incorrecta! Inténtalo de nuevo.");

      if (feedbackBox) {
        feedbackBox.style.display = 'block';
        feedbackBox.style.background = 'rgba(192,57,43,0.18)';
        feedbackBox.style.borderColor = '#c0392b';
        feedbackBox.style.color = '#e74c3c';

        let failHtml = `<div>⚠️ <strong>¡Cuidado!</strong> ${option.feedback}</div>`;
        if (this.magicRingAvailable) {
          failHtml += `
            <div style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed rgba(255,255,255,0.25); text-align: center;">
              <p style="font-size: 0.9rem; margin-bottom: 8px; color: #f5eedc;">¿Te has atascado en este enigma? Puedes invocar tu salvación mística:</p>
              <button id="btn-salvation-riddle-gen" class="choice-btn ring-revive-btn" style="width: 100%; justify-content: center; font-weight: 700;">
                ${itemIcon} ¡USAR ${itemName.toUpperCase()}! (Resolver el acertijo al instante)
              </button>
            </div>
          `;
        }
        feedbackBox.innerHTML = failHtml;

        const salvBtn = document.getElementById('btn-salvation-riddle-gen');
        if (salvBtn) {
          salvBtn.onclick = () => {
            this.useSalvationOnRiddle(scene);
          };
        }
      }
    }
  }

  useSalvationOnRiddle(scene) {
    if (!this.magicRingAvailable) return;
    this.magicRingAvailable = false;
    this.updateStats();

    const companionName = (this.story && this.story.companionName) || 'tu compañero';
    const companionIcon = (this.story && this.story.companionIcon) || '✨';
    const itemName = (this.story && this.story.salvationItemName) || 'el Objeto Mágico de Salvación';

    if (scene.riddleOptions && scene.riddleOptions.length > 0) {
      const correctOpt = scene.riddleOptions.find(o => o.isCorrect);
      const feedbackBox = document.getElementById('riddle-feedback');
      const btn = correctOpt ? document.querySelector(`.riddle-option-btn[data-opt-id="${correctOpt.id || '0'}"]`) : null;
      if (correctOpt) {
        this.submitGenericRiddleAnswer(correctOpt, btn, feedbackBox, scene, true);
      }
    } else if (scene.pedestals && scene.pedestals.length > 0) {
      const correctPed = scene.pedestals.find(p => p.isCorrect);
      const feedbackBox = document.getElementById('riddle-feedback');
      if (correctPed) {
        this.submitRiddleAnswer(correctPed, feedbackBox, scene, true);
      }
    } else {
      this.solvedRiddles = this.solvedRiddles || {};
      this.solvedRiddles[scene.id] = true;
      this.riddleSolved = true;
      if (this.sound) {
        this.sound.playMagicWish();
        setTimeout(() => this.sound.playVictoryFanfare(), 300);
      }
      this.showRufoToast(companionIcon, `¡${companionName} celebra! El poder de ${itemName} resuelve el enigma.`);
      this.renderChoices(scene);
    }
  }

  useSalvationOnDice(scene) {
    if (!this.magicRingAvailable) return;
    this.magicRingAvailable = false;
    this.updateStats();
    if (!this.solvedDiceChallenges) this.solvedDiceChallenges = {};
    this.solvedDiceChallenges[scene.id] = true;

    const companionName = (this.story && this.story.companionName) || 'tu compañero';
    const companionIcon = (this.story && this.story.companionIcon) || '🐾';
    const itemName = (this.story && this.story.salvationItemName) || 'el Objeto Mágico de Salvación';
    const challenge = scene.diceChallenge || {};

    if (this.sound) {
      this.sound.playMagicWish();
      setTimeout(() => this.sound.playVictoryFanfare(), 350);
    }

    const die1 = document.getElementById('gen-die-1');
    const die2 = document.getElementById('gen-die-2');
    const resultEl = document.getElementById('gen-dice-result');
    const btnRoll = document.getElementById('btn-roll-gen-dice');
    const failureBox = document.getElementById('gen-dice-failure-box');

    if (die1) die1.textContent = "⚅";
    if (die2) die2.textContent = "⚅";
    if (resultEl) resultEl.innerHTML = `✨ <strong>¡EL PODER DE ${itemName.toUpperCase()} RESPLANDECE!</strong> Los dados se transforman en una tirada perfecta de 12. ¡${challenge.successTitle || '¡Desafío superado con éxito!'}!`;
    if (btnRoll) {
      btnRoll.textContent = "✅ ¡DESAFÍO SUPERADO CON MAGIA!";
      btnRoll.disabled = true;
    }
    if (failureBox) failureBox.innerHTML = '';

    this.showRufoToast(companionIcon, `¡${companionName} celebra el milagro! El poder de ${itemName} te ha otorgado la victoria.`);
    this.renderChoices(scene);
  }

  useSalvationOnSpikes(scene) {
    if (!this.magicRingAvailable) return;
    this.magicRingAvailable = false;
    this.updateStats();
    if (!this.solvedSpikesGrids) this.solvedSpikesGrids = {};
    this.solvedSpikesGrids[scene.id] = true;

    const companionName = (this.story && this.story.companionName) || 'tu compañero';
    const companionIcon = (this.story && this.story.companionIcon) || '✨';
    const itemName = (this.story && this.story.salvationItemName) || 'el Objeto Mágico de Salvación';

    if (this.sound) {
      this.sound.playMagicWish();
      setTimeout(() => this.sound.playVictoryFanfare(), 350);
    }

    const gridContainer = document.getElementById('spikes-grid-container');
    if (gridContainer) {
      gridContainer.innerHTML = `
        <div style="padding: 14px; background: rgba(44,110,73,0.3); border: 2px solid #52b788; border-radius: 8px; text-align: center; color: #d8f3dc; font-weight: 700;">
          ✨ ¡EL PODER DE ${itemName.toUpperCase()} DESACTIVA TODOS LOS PINCHOS! El suelo se ilumina con luz esmeralda y el camino queda seguro.
        </div>
      `;
    }
    this.showRufoToast(companionIcon, `¡${companionName} respira aliviado! Las trampas de pinchos se han retraído para siempre.`);
    this.renderChoices(scene);
  }

  useSalvationOnDifferences(scene) {
    if (!this.magicRingAvailable) return;
    this.magicRingAvailable = false;
    this.updateStats();

    const companionName = (this.story && this.story.companionName) || 'tu compañero';
    const companionIcon = (this.story && this.story.companionIcon) || '🪞';
    const itemName = (this.story && this.story.salvationItemName) || 'el Objeto Mágico de Salvación';

    if (scene.differencesList) {
      this.discoveredDifferences = scene.differencesList.map(d => d.id);
    }
    if (this.sound) {
      this.sound.playMagicWish();
      setTimeout(() => this.sound.playVictoryFanfare(), 350);
    }
    this.updateDifferencesUI(scene);
    this.renderDiscoveredDifferences();
    this.showRufoToast(companionIcon, `¡El resplandor de ${itemName} revela todas las ilusiones y diferencias al instante!`);
    this.renderChoices(scene);
  }

  useSalvationOnClockwork(scene) {
    if (!this.magicRingAvailable) return;
    this.magicRingAvailable = false;
    this.updateStats();
    this.clockworkSolved = true;

    const companionName = (this.story && this.story.companionName) || 'tu compañero';
    const companionIcon = (this.story && this.story.companionIcon) || '⚙️';
    const itemName = (this.story && this.story.salvationItemName) || 'el Objeto Mágico de Salvación';

    if (this.sound) {
      this.sound.playMagicWish();
      setTimeout(() => this.sound.playVictoryFanfare(), 350);
    }

    const feedback = document.getElementById('clockwork-feedback');
    const prompt = document.getElementById('clockwork-prompt');
    if (feedback) {
      feedback.innerHTML = `✨ <strong>¡ENGRANAJES AJUSTADOS POR MAGIA!</strong> El poder de ${itemName} sincroniza la maquinaria.`;
    }
    if (prompt) {
      prompt.textContent = "¡Rastrillo alzado! El camino hacia los calabozos está expedito.";
    }
    this.showRufoToast(companionIcon, `¡${companionName} se maravilla! La magia ha alineado los engranajes sin esfuerzo.`);
    this.renderChoices(scene);
  }

  useSalvationOnObjectSearch(scene) {
    if (!this.magicRingAvailable) return;
    this.magicRingAvailable = false;
    this.updateStats();

    const companionName = (this.story && this.story.companionName) || 'tu compañero';
    const companionIcon = (this.story && this.story.companionIcon) || '✨';
    const itemName = (this.story && this.story.salvationItemName) || 'el Objeto Mágico de Salvación';

    if (!this.foundObjectsPerScene) this.foundObjectsPerScene = {};
    if (scene.requiredItems) {
      this.foundObjectsPerScene[scene.id] = scene.requiredItems.map(it => it.id);
    } else {
      this.foundObjectsPerScene[scene.id] = ['salvation_found'];
    }

    if (this.sound) {
      this.sound.playMagicWish();
      setTimeout(() => this.sound.playVictoryFanfare(), 350);
    }

    this.showRufoToast(companionIcon, `¡El resplandor de ${itemName} localiza todos los objetivos de la búsqueda!`);
    this.renderChoices(scene);
  }

  useSalvationOnMonster(scene) {
    if (!this.magicRingAvailable) return;
    this.magicRingAvailable = false;
    this.updateStats();
    this.monsterDefeated = true;

    const companionName = (this.story && this.story.companionName) || 'tu compañero';
    const companionIcon = (this.story && this.story.companionIcon) || '🐾';
    const itemName = (this.story && this.story.salvationItemName) || 'el Objeto Mágico de Salvación';

    if (this.sound) {
      this.sound.playMagicWish();
      setTimeout(() => this.sound.playVictoryFanfare(), 350);
    }

    const resultEl = document.getElementById('dice-result');
    const btnRoll = document.getElementById('btn-roll-dice');
    const failureActions = document.getElementById('monster-failure-actions');
    if (resultEl) resultEl.innerHTML = `✨ <strong>¡EL PODER DE ${itemName.toUpperCase()} DESCARGA SU LUZ!</strong> El monstruo queda desconectado y pacificado.`;
    if (btnRoll) {
      btnRoll.textContent = "✅ ¡MONSTRUO DERROTADO CON ÉXITO!";
      btnRoll.disabled = true;
    }
    if (failureActions) failureActions.remove();

    this.showRufoToast(companionIcon, `¡${companionName} salta de alegría! El poder de ${itemName} ha triunfado.`);
    this.renderChoices(scene);
  }

  // ===========================================================================
  // 6. SALA DE ENGRANAJES Y PÉNDULO
  // ===========================================================================
  setupClockworkUI(scene) {
    const dials = [
      document.getElementById('dial-1'),
      document.getElementById('dial-2'),
      document.getElementById('dial-3')
    ];
    const btnCrank = document.getElementById('btn-activate-crank');
    const feedback = document.getElementById('clockwork-feedback');
    const prompt = document.getElementById('clockwork-prompt');

    const romanNumerals = ["Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ"];

    dials.forEach(dial => {
      if (!dial) return;
      dial.onclick = () => {
        let val = parseInt(dial.dataset.val, 10);
        val = (val % 4) + 1;
        dial.dataset.val = val;
        dial.textContent = romanNumerals[val - 1];
        dial.style.transform = `rotate(${(val - 1) * 90}deg)`;
        if (this.sound) this.sound.playKeyUnlock();
      };
    });

    if (btnCrank) {
      btnCrank.onclick = () => {
        this.clockworkSolved = true;
        if (this.sound) {
          this.sound.playStoneDoorOpen();
          setTimeout(() => this.sound.playVictoryFanfare(), 300);
        }
        if (feedback) {
          feedback.innerHTML = `🎉 <strong>¡MECANISMO ACTIVADO!</strong> El cristal zumba y el rastrillo se alza.`;
        }
        if (prompt) {
          prompt.textContent = "¡Rastrillo alzado! El camino hacia los calabozos está expedito.";
        }
        this.showRufoToast("⚙️", "¡Engranajes sincronizados! El rastrillo de la torre se ha abierto.");
        this.renderChoices(scene);
      };
    }
  }

  // ===========================================================================
  // 7. ENCONTRAR LAS 5 LLAVES Y RESCATAR A LOS 5 AMIGOS
  // ===========================================================================
  handleDungeonKeysClick(clickX, clickY, scene) {
    let foundKey = null;

    for (const key of scene.hiddenKeys) {
      if (this.collectedKeys.includes(key.id)) continue;

      const dx = clickX - key.x;
      const dy = clickY - key.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist <= (key.radius || 6.5)) {
        foundKey = key;
        break;
      }
    }

    if (foundKey) {
      this.collectedKeys.push(foundKey.id);
      if (foundKey.friendName && !this.rescuedFriends.includes(foundKey.friendName)) {
        this.rescuedFriends.push(foundKey.friendName);
      }

      if (this.sound) this.sound.playKeyUnlock();
      this.showRufoToast("🗝️", foundKey.feedback);
      this.updateStats();
      this.updateDungeonStatusUI();
      this.renderDiscoveredKeys(scene);

      if (this.rescuedFriends.length >= 5) {
        if (this.sound) {
          setTimeout(() => this.sound.playVictoryFanfare(), 300);
        }
        this.showRufoToast("🎉", "¡TODOS LOS 5 AMIGOS HAN SIDO RESCATADOS! El camino al monstruo está abierto.");
        this.renderChoices(scene);
      }
    } else {
      if (this.sound) this.sound.playDogSniff();
      const hints = [
        "Rufo huele el hierro viejo: busca en los barriles, cornisas altas y en el suelo de piedra.",
        "El carcelero duerme plácidamente... ¡mira cerca de sus botas y en las paredes!",
        "¡Agudiza la mirada! Hay 5 llaves de forja dorada repartidas por la sala de celdas."
      ];
      this.showRufoToast("🐕", hints[Math.floor(Math.random() * hints.length)]);
    }
  }

  updateDungeonStatusUI() {
    const keysText = document.getElementById('dungeon-keys-text');
    const friendsText = document.getElementById('dungeon-friends-text');
    const freedList = document.getElementById('freed-friends-list');

    if (keysText) {
      keysText.innerHTML = `🗝️ Llaves doradas encontradas: <strong>${this.collectedKeys.length} / 5</strong>`;
    }
    if (friendsText) {
      friendsText.innerHTML = `👥 Amigos liberados: <strong>${this.rescuedFriends.length} / 5</strong>`;
    }
    if (freedList) {
      if (this.rescuedFriends.length > 0) {
        freedList.innerHTML = `Amigos a salvo: <strong>${this.rescuedFriends.join(', ')}</strong>`;
      } else {
        freedList.innerHTML = `<em>Ningún amigo liberado todavía. ¡Busca las llaves!</em>`;
      }
    }
  }

  renderDiscoveredKeys(scene) {
    this.hotspotsOverlayEl.innerHTML = '';
    if (!scene.hiddenKeys) return;

    scene.hiddenKeys.forEach(key => {
      if (this.collectedKeys.includes(key.id)) {
        const pin = document.createElement('div');
        pin.className = 'discovered-mark';
        pin.style.left = `${key.x}%`;
        pin.style.top = `${key.y}%`;
        pin.innerHTML = '🗝️';
        pin.title = `${key.name}: Abrió la celda de ${key.friendName}`;
        this.hotspotsOverlayEl.appendChild(pin);
      }
    });
  }

  // ===========================================================================
  // 8. MONSTRUO ELÉCTRICO Y COMBATE CON DADOS
  // ===========================================================================
  setupMonsterDice() {
    const btnRoll = document.getElementById('btn-roll-dice');
    const die1 = document.getElementById('die-1');
    const die2 = document.getElementById('die-2');
    const diceResultText = document.getElementById('dice-result-text');
    const nextPrompt = document.getElementById('monster-next-prompt');

    // Limpiar contenedor de fallos previo si existía
    const oldFailure = document.getElementById('monster-failure-actions');
    if (oldFailure) oldFailure.remove();

    if (btnRoll) {
      if (this.monsterDefeated) {
        diceResultText.innerHTML = "⚡ <strong>¡Monstruo ya derrotado!</strong> Los generadores están cortados.";
        btnRoll.disabled = true;
        btnRoll.style.display = 'inline-flex';
        btnRoll.textContent = "✅ ¡MONSTRUO DESACTIVADO!";
        if (nextPrompt) nextPrompt.style.display = 'block';
      } else {
        btnRoll.disabled = false;
        btnRoll.style.display = 'inline-flex';
        btnRoll.textContent = "🎲 ¡TIRAR LOS DADOS CONTRA EL MONSTRUO!";
        btnRoll.onclick = () => {
          this.rollDiceAgainstMonster(die1, die2, diceResultText, btnRoll, nextPrompt);
        };
      }
    }
  }

  rollDiceAgainstMonster(die1, die2, resultEl, btnRoll, nextPrompt) {
    btnRoll.disabled = true;
    if (this.sound) this.sound.playDiceRoll();

    // Eliminar acciones de fallo previas
    const existingFailure = document.getElementById('monster-failure-actions');
    if (existingFailure) existingFailure.remove();

    die1.classList.add('rolling');
    die2.classList.add('rolling');
    resultEl.textContent = "Los dados ruedan por el suelo de piedra...";

    setTimeout(() => {
      die1.classList.remove('rolling');
      die2.classList.remove('rolling');

      const val1 = Math.floor(Math.random() * 6) + 1;
      const val2 = Math.floor(Math.random() * 6) + 1;
      const total = val1 + val2;

      const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
      die1.textContent = diceEmojis[val1 - 1];
      die2.textContent = diceEmojis[val2 - 1];

      if (total >= 7 || (val1 === 6 && val2 === 6)) {
        this.monsterDefeated = true;
        if (this.sound) {
          this.sound.playElectricShock();
          setTimeout(() => this.sound.playVictoryFanfare(), 400);
        }
        resultEl.innerHTML = `🎉 <strong>¡TIRADA DE ${total}!</strong> ¡Los cables maestros se cortan y el monstruo cae desconectado!`;
        btnRoll.textContent = "✅ ¡MONSTRUO DERROTADO CON ÉXITO!";
        btnRoll.style.display = 'inline-flex';
        this.showRufoToast("🏆", "¡Rufo salta victorioso! La criatura ha sido desactivada.");
        if (nextPrompt) nextPrompt.style.display = 'block';
        this.renderChoices(this.story.nodes['scene_monster']);
      } else {
        // FALLO EN LA TIRADA: Derrota a menos que se use el Anillo Mágico o se reinicie
        if (this.sound) this.sound.playElectricShock();
        btnRoll.style.display = 'none';

        const diceBox = document.getElementById('monster-dice-box');
        let failureContainer = document.getElementById('monster-failure-actions');
        if (!failureContainer) {
          failureContainer = document.createElement('div');
          failureContainer.id = 'monster-failure-actions';
          diceBox.appendChild(failureContainer);
        }

        if (this.magicRingAvailable) {
          resultEl.innerHTML = `⚡ <strong>¡TIRADA DE ${total} (necesitabas 7+)!</strong><br>Una violenta descarga eléctrica os derriba al suelo. ¡Habéis caído derrotados a menos que invoques el poder del Anillo Mágico!`;
          this.showRufoToast("⚡", "¡Una descarga mortal os alcanza! ¿Usarás el Anillo Mágico para salvarte?");

          failureContainer.innerHTML = `
            <div style="margin-top:14px; padding:12px; background:rgba(143,40,40,0.12); border:2px dashed #8f2828; border-radius:8px; text-align:center;">
              <p style="font-weight:700; color:#8f2828; margin-bottom:10px;">💀 ¡HAS SIDO DERROTADO POR EL MONSTRUO!</p>
              <button id="btn-monster-ring" class="choice-btn ring-revive-btn" style="width:100%; justify-content:center; margin-bottom:8px;">
                💍 ¡USAR EL ANILLO MÁGICO DE SALVACIÓN! (Revivir y reintentar tirada)
              </button>
              <button id="btn-monster-restart" class="choice-btn" style="width:100%; justify-content:center; background:#4a1515; color:#fff; border-color:#8f2828;">
                💀 ACEPTAR LA DERROTA Y VOLVER AL PRINCIPIO
              </button>
            </div>
          `;

          const ringBtn = document.getElementById('btn-monster-ring');
          const restartBtn = document.getElementById('btn-monster-restart');

          ringBtn.onclick = () => {
            this.magicRingAvailable = false;
            this.updateStats();
            if (this.sound) {
              this.sound.playMagicWish();
              setTimeout(() => this.sound.playVictoryFanfare(), 300);
            }
            this.showRufoToast("💍", "¡El Anillo Mágico absorbe el rayo y te revive milagrosamente!");
            resultEl.innerHTML = `✨ <strong>¡REVIVIDO POR EL ANILLO MÁGICO!</strong> El halo sagrado restaura tus fuerzas. ¡Lanza los dados de nuevo con valor!`;
            failureContainer.remove();
            btnRoll.style.display = 'inline-flex';
            btnRoll.disabled = false;
            btnRoll.textContent = "🎲 ¡VOLVER A TIRAR LOS DADOS!";
          };

          restartBtn.onclick = () => {
            if (this.sound) this.sound.playElectricShock();
            alert('💀 Has sucumbido ante el Monstruo Eléctrico. La aventura recomienza desde el principio.');
            this.restartGame();
          };
        } else {
          resultEl.innerHTML = `⚡ <strong>¡TIRADA DE ${total} (necesitabas 7+)!</strong><br>¡El rayo destructor os fulmina! Ya habías utilizado el Anillo Mágico de Salvación anteriormente en tu viaje, por lo que no queda magia para reviviros.`;
          this.showRufoToast("💀", "¡El monstruo te ha vencido y el Anillo ya está agotado!");

          failureContainer.innerHTML = `
            <div style="margin-top:14px; padding:12px; background:rgba(143,40,40,0.18); border:2px solid #8f2828; border-radius:8px; text-align:center;">
              <p style="font-weight:700; color:#8f2828; margin-bottom:8px;">💀 ¡FIN DE LA AVENTURA: MONSTRUO INVICTO!</p>
              <p style="font-size:0.95rem; margin-bottom:12px;">Sin el poder del Anillo Mágico, tu aventura ha terminado. Debes volver al principio.</p>
              <button id="btn-monster-restart-dead" class="choice-btn" style="width:100%; justify-content:center; background:#4a1515; color:#fff; border-color:#8f2828;">
                💀 VOLVER AL PRINCIPIO DE LA AVENTURA
              </button>
            </div>
          `;

          const restartBtn = document.getElementById('btn-monster-restart-dead');
          restartBtn.onclick = () => {
            this.restartGame();
          };
        }
      }
    }, 700);
  }

  // ===========================================================================
  // 8B. SISTEMA UNIVERSAL DE RETO CON DADOS (COMBATES Y PRUEBAS)
  // ===========================================================================
  setupGenericDiceChallenge(scene) {
    const diceBox = document.getElementById('generic-dice-box');
    if (!diceBox) return;

    const challenge = scene.diceChallenge || {
      target: 7,
      name: "Prueba de Valor",
      buttonText: "🎲 ¡TIRAR LOS DADOS!",
      successTitle: "¡Prueba superada con éxito!",
      failureTitle: "¡Tirada insuficiente!"
    };

    const isAlreadySolved = (this.solvedDiceChallenges && this.solvedDiceChallenges[scene.id]) === true;

    diceBox.innerHTML = `
      <div style="background: rgba(35, 27, 20, 0.9); border: 2px solid var(--accent-gold); border-radius: 8px; padding: 16px; margin: 15px 0; text-align: center;">
        <h4 style="color: var(--accent-gold); font-family: 'Cinzel', serif; margin-bottom: 8px;">⚔️ ${challenge.name}</h4>
        <p style="font-size: 0.95rem; margin-bottom: 12px; color: #ecd8be;">Necesitas obtener una tirada de <strong>${challenge.target} o más</strong> con dos dados para avanzar.</p>
        <div style="display: flex; justify-content: center; gap: 20px; font-size: 3.5rem; margin: 12px 0;">
          <div id="gen-die-1" class="dice-face" style="display:inline-block; transition: transform 0.5s;">⚀</div>
          <div id="gen-die-2" class="dice-face" style="display:inline-block; transition: transform 0.5s;">⚀</div>
        </div>
        <div id="gen-dice-result" style="min-height: 28px; font-weight: 700; margin: 10px 0; color: #f5eedc;">
          ${isAlreadySolved ? `✅ ¡Desafío superado con éxito!` : `Esperando tu tirada...`}
        </div>
        <button id="btn-gen-roll" class="choice-btn" style="width: 100%; justify-content: center; background: #8f5028; border-color: var(--accent-gold); color: #fff; font-size: 1.05rem;" ${isAlreadySolved ? 'disabled' : ''}>
          ${isAlreadySolved ? '✅ ¡DESAFÍO COMPLETADO!' : challenge.buttonText}
        </button>
        <div id="gen-failure-actions"></div>
      </div>
    `;

    const btnRoll = document.getElementById('btn-gen-roll');
    const die1 = document.getElementById('gen-die-1');
    const die2 = document.getElementById('gen-die-2');
    const resultEl = document.getElementById('gen-dice-result');
    const failureBox = document.getElementById('gen-failure-actions');

    if (!isAlreadySolved) {
      btnRoll.onclick = () => {
        btnRoll.disabled = true;
        failureBox.innerHTML = '';
        if (this.sound) this.sound.playDiceRoll();

        die1.classList.add('rolling');
        die2.classList.add('rolling');
        resultEl.textContent = "Los dados ruedan sobre la piedra...";

        setTimeout(() => {
          die1.classList.remove('rolling');
          die2.classList.remove('rolling');

          const val1 = Math.floor(Math.random() * 6) + 1;
          const val2 = Math.floor(Math.random() * 6) + 1;
          const total = val1 + val2;
          const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
          die1.textContent = diceEmojis[val1 - 1];
          die2.textContent = diceEmojis[val2 - 1];

          if (total >= challenge.target || (val1 === 6 && val2 === 6)) {
            if (!this.solvedDiceChallenges) this.solvedDiceChallenges = {};
            this.solvedDiceChallenges[scene.id] = true;
            if (this.sound) {
              this.sound.playVictoryFanfare();
            }
            resultEl.innerHTML = `🎉 <strong>¡TIRADA DE ${total}!</strong> ${challenge.successTitle}`;
            btnRoll.textContent = "✅ ¡DESAFÍO SUPERADO!";
            btnRoll.disabled = true;
            this.renderChoices(scene);
          } else {
            resultEl.innerHTML = `⚠️ <strong>¡TIRADA DE ${total} (necesitabas ${challenge.target}+)!</strong> ${challenge.failureTitle}`;
            if (this.sound && this.sound.playTrapAlarm) this.sound.playTrapAlarm();

            const companionName = (this.story && this.story.companionName) || 'tu compañero';
            const companionIcon = (this.story && this.story.companionIcon) || '🐾';
            const itemName = (this.story && this.story.salvationItemName) || 'el Objeto Mágico de Salvación';
            const itemIcon = (this.story && this.story.badgeIcon) || '✨';

            let failureHtml = `
              <div style="margin-top: 14px; padding: 12px; background: rgba(143,40,40,0.25); border: 2px dashed #8f2828; border-radius: 8px; text-align: center;">
                <p style="font-size: 0.95rem; margin-bottom: 10px; color: #f5eedc;">¡La tirada no ha sido suficiente! Puedes volver a tirar los dados o invocar tu objeto mágico de salvación:</p>
                <button id="btn-retry-gen-dice" class="choice-btn" style="width: 100%; justify-content: center; background: #6b2222; color: #fff; margin-bottom: 8px;">
                  🔄 VOLVER A TIRAR LOS DADOS
                </button>
            `;

            if (this.magicRingAvailable) {
              failureHtml += `
                <button id="btn-salvation-gen-dice" class="choice-btn ring-revive-btn" style="width: 100%; justify-content: center; font-weight: 700; margin-top: 4px;">
                  ${itemIcon} ¡USAR ${itemName.toUpperCase()}! (Superar la prueba al instante)
                </button>
              `;
            } else {
              failureHtml += `
                <div style="margin-top: 6px; font-size: 0.85rem; color: #e74c3c;">
                  ⚠️ ${itemName} ya fue utilizado en esta aventura.
                </div>
              `;
            }

            failureHtml += `</div>`;
            failureBox.innerHTML = failureHtml;

            const retryBtn = document.getElementById('btn-retry-gen-dice');
            if (retryBtn) {
              retryBtn.onclick = () => {
                btnRoll.disabled = false;
                failureBox.innerHTML = '';
                resultEl.textContent = "Preparado para una nueva tirada...";
              };
            }

            const salvationBtn = document.getElementById('btn-salvation-gen-dice');
            if (salvationBtn) {
              salvationBtn.onclick = () => {
                this.useSalvationOnDice(scene);
              };
            }
          }
        }, 700);
      };
    }
  }

  // ===========================================================================
  // 8C. SISTEMA DEL SUELO DE PINCHOS INVISIBLES (DAVID)
  // ===========================================================================
  setupSpikesGrid(scene) {
    const gridContainer = document.getElementById('spikes-grid-container');
    if (!gridContainer) return;

    const isAlreadySolved = (this.solvedSpikesGrids && this.solvedSpikesGrids[scene.id]) === true;
    if (isAlreadySolved) {
      gridContainer.innerHTML = `
        <div style="padding: 14px; background: rgba(44,110,73,0.3); border: 2px solid #52b788; border-radius: 8px; text-align: center; color: #d8f3dc; font-weight: 700;">
          🛡️ ¡Camino seguro memorizado! Los pinchos de acero están desactivados bajo las losas.
        </div>
      `;
      return;
    }

    const config = scene.spikesConfig || {
      path: [0, 3, 4, 7],
      tiles: [
        { id: 0, rune: "🌙", name: "Luna Llena" },
        { id: 1, rune: "💀", name: "Calavera" },
        { id: 2, rune: "⚡", name: "Rayo" },
        { id: 3, rune: "💧", name: "Gota de Agua" },
        { id: 4, rune: "🛡️", name: "Escudo Azul" },
        { id: 5, rune: "🔥", name: "Fuego" },
        { id: 6, rune: "🕷️", name: "Telaraña" },
        { id: 7, rune: "🗝️", name: "Piedra Segura" },
        { id: 8, rune: "🦂", name: "Escorpión" }
      ]
    };

    let step = 0;
    gridContainer.innerHTML = `
      <div style="background: rgba(25, 20, 16, 0.95); border: 2px solid #a87932; border-radius: 8px; padding: 14px; margin: 12px 0;">
        <p style="font-size: 0.9rem; color: #ecd8be; text-align: center; margin-bottom: 10px;">
          👣 <em>Pisa en orden las losas mágicas:</em> <strong>🌙 Luna ➔ 💧 Agua ➔ 🛡️ Escudo ➔ 🗝️ Salida</strong>
        </p>
        <div id="spikes-tiles-box" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;"></div>
        <div id="spikes-status-msg" style="margin-top: 10px; font-size: 0.9rem; text-align: center; min-height: 24px; color: #f5eedc;">
          Da el primer paso con cuidado...
        </div>
      </div>
    `;

    const tilesBox = document.getElementById('spikes-tiles-box');
    const statusMsg = document.getElementById('spikes-status-msg');

    config.tiles.forEach(tile => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.style.cssText = 'height: 64px; flex-direction: column; justify-content: center; align-items: center; background: #2f2319; border: 2px solid #5a422a; border-radius: 6px; color: #f5eedc; font-size: 1.4rem; cursor: pointer; transition: all 0.2s;';
      btn.innerHTML = `<span>${tile.rune}</span><span style="font-size: 0.7rem; color: #c4b5a5;">${tile.name}</span>`;

      btn.onclick = () => {
        const expected = config.path[step];
        if (tile.id === expected) {
          btn.style.background = '#1e5c3a';
          btn.style.borderColor = '#52b788';
          btn.disabled = true;
          if (this.sound) this.sound.playDiscovery();
          step++;

          if (step >= config.path.length) {
            if (!this.solvedSpikesGrids) this.solvedSpikesGrids = {};
            this.solvedSpikesGrids[scene.id] = true;
            statusMsg.innerHTML = "🎉 <strong>¡PERFECTO!</strong> Has cruzado el salón sin rozar ningún pincho.";
            statusMsg.style.color = "#52b788";
            if (this.sound) setTimeout(() => this.sound.playVictoryFanfare(), 300);
            this.renderChoices(scene);
          } else {
            statusMsg.innerHTML = `👣 ¡Paso seguro! Llevas ${step} de ${config.path.length} losas.`;
          }
        } else {
          btn.style.background = '#801818';
          btn.style.borderColor = '#ff4d4d';
          if (this.sound) this.sound.playTrapAlarm();
          statusMsg.innerHTML = `💥 <strong>¡CLANG!</strong> ¡Pinchos metálicos emergen del suelo! Vuelve a empezar.`;
          statusMsg.style.color = "#ff6b6b";
          setTimeout(() => {
            this.setupSpikesGrid(scene);
          }, 800);
        }
      };
      tilesBox.appendChild(btn);
    });

    if (this.magicRingAvailable) {
      const itemName = (this.story && this.story.salvationItemName) || 'el Objeto Mágico de Salvación';
      const itemIcon = (this.story && this.story.badgeIcon) || '✨';
      const salvBox = document.createElement('div');
      salvBox.style.cssText = 'margin-top: 10px; text-align: center;';
      salvBox.innerHTML = `
        <button id="btn-salvation-spikes-grid" class="choice-btn ring-revive-btn" style="width: 100%; justify-content: center; font-weight: 700;">
          ${itemIcon} ¡USAR ${itemName.toUpperCase()}! (Desactivar pinchos y pasar seguro)
        </button>
      `;
      const wrapper = gridContainer.querySelector('div');
      if (wrapper) wrapper.appendChild(salvBox);
      const salvSpikesBtn = document.getElementById('btn-salvation-spikes-grid');
      if (salvSpikesBtn) {
        salvSpikesBtn.onclick = () => {
          this.useSalvationOnSpikes(scene);
        };
      }
    }
  }

  // ===========================================================================
  // 9. PANTALLAS DE FRACASO (GAME OVER) Y ANILLO MÁGICO DE SALVACIÓN
  // ===========================================================================
  setupGameOverUI(scene) {
    const ringBox = document.getElementById('gameover-ring-box');
    if (!ringBox) return;

    ringBox.innerHTML = '';
    const companionName = (this.story && this.story.companionName) || 'tu compañero';
    const itemName = (this.story && this.story.salvationItemName) || 'el Anillo Mágico de Salvación';

    if (this.magicRingAvailable) {
      const ringBtn = document.createElement('button');
      ringBtn.className = 'choice-btn ring-revive-btn';
      ringBtn.style.width = '100%';
      ringBtn.style.justifyContent = 'center';
      ringBtn.innerHTML = `💍 ¡USAR ${itemName.toUpperCase()}! (Revivir y volver atrás)`;
      
      ringBtn.addEventListener('click', () => {
        this.useMagicRingRevive(scene);
      });

      ringBox.appendChild(ringBtn);
    } else {
      ringBox.innerHTML = `
        <div style="padding:10px; background:rgba(0,0,0,0.1); border-radius:6px; color:#8f2828; font-weight:700; text-align:center;">
          💍 El ${itemName} ya ha sido consumido en esta aventura. No puedes volver a invocarlo.
        </div>
      `;
    }
  }

  handleGameOverClick(clickX, clickY, scene) {
    if (!scene.gameOverChallenge || !scene.gameOverChallenge.items) return;
    const found = this.foundGameOverItems[scene.id] || [];
    let hitItem = null;

    for (const item of scene.gameOverChallenge.items) {
      if (found.includes(item.id)) continue;
      const dx = clickX - item.x;
      const dy = clickY - item.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist <= (item.radius || 6.5)) {
        hitItem = item;
        break;
      }
    }

    if (hitItem) {
      if (!this.foundGameOverItems[scene.id]) {
        this.foundGameOverItems[scene.id] = [];
      }
      this.foundGameOverItems[scene.id].push(hitItem.id);

      if (this.sound) this.sound.playKeyUnlock();
      this.showRufoToast("🧗", `¡Punto de salvación hallado! ${hitItem.name}: ${hitItem.desc}`);
      this.updateGameOverUI(scene);
      this.renderDiscoveredGameOverItems(scene);

      if (this.foundGameOverItems[scene.id].length >= scene.gameOverChallenge.items.length) {
        if (this.sound) {
          setTimeout(() => this.sound.playVictoryFanfare(), 300);
        }
        this.showRufoToast("🏆", "¡Has completado el desafío de escape en la imagen! Puedes salvarte sin gastar el Anillo Mágico.");
        this.setupGameOverUI(scene);
        this.renderChoices(scene);
      }
    } else {
      if (this.sound) this.sound.playDogSniff();
      const companionName = (this.story && this.story.companionName) || 'Tu compañero';
      this.showRufoToast("🔍", `${companionName} busca un asidero o contrahechizo... ¡Haz clic en los puntos clave de la imagen!`);
    }
  }

  updateGameOverUI(scene) {
    const counterBadge = document.getElementById('gameover-items-counter');
    const feedbackText = document.getElementById('gameover-feedback-text');
    if (!scene.gameOverChallenge || !scene.gameOverChallenge.items) return;
    const total = scene.gameOverChallenge.items.length;
    const found = (this.foundGameOverItems[scene.id] || []).length;

    if (counterBadge) {
      counterBadge.textContent = `Puntos de escape: ${found} / ${total}`;
    }

    if (feedbackText) {
      if (found >= total) {
        feedbackText.innerHTML = `🎉 <strong>¡DESAFÍO SUPERADO!</strong> Has demostrado tu ingenio ante la trampa mortal. Puedes escapar usando el asidero secreto o mediante el Anillo Mágico.`;
      } else {
        feedbackText.innerHTML = `Tienes <strong>${found} de ${total}</strong> puntos señalados. Encuentra los <strong>${total - found}</strong> restantes para escapar sin gastar tu salvación mágica.`;
      }
    }
  }

  renderDiscoveredGameOverItems(scene) {
    this.hotspotsOverlayEl.innerHTML = '';
    if (!scene.gameOverChallenge || !scene.gameOverChallenge.items) return;
    const found = this.foundGameOverItems[scene.id] || [];

    scene.gameOverChallenge.items.forEach(item => {
      if (found.includes(item.id)) {
        const pin = document.createElement('div');
        pin.className = 'discovered-mark';
        pin.style.background = 'rgba(143, 40, 40, 0.9)';
        pin.style.boxShadow = '0 0 10px rgba(143, 40, 40, 0.9)';
        pin.style.left = `${item.x}%`;
        pin.style.top = `${item.y}%`;
        pin.innerHTML = '✨';
        pin.title = `${item.name}: ${item.desc}`;
        this.hotspotsOverlayEl.appendChild(pin);
      }
    });
  }

  useMagicRingRevive(scene) {
    if (!this.magicRingAvailable) return;
    this.magicRingAvailable = false;
    this.updateStats();

    if (this.sound) {
      this.sound.playMagicWish();
      setTimeout(() => this.sound.playVictoryFanfare(), 400);
    }

    if (this.btnRing) {
      this.btnRing.disabled = true;
      this.btnRing.textContent = '💍 Anillo (0)';
    }

    // Obtener la escena anterior válida antes de caer en la trampa mortal
    const previousScene = this.getSafePreviousScene();
    const companionName = (this.story && this.story.companionName) || "tu compañero";
    const companionIcon = (this.story && this.story.companionIcon) || "✨";
    const itemName = (this.story && this.story.salvationItemName) || "el Anillo Mágico de Salvación";

    this.showRufoToast("💍", `¡El poder supremo de ${itemName} resplandece! La trampa se desvanece y tú y ${companionName} volvéis a salvo.`);
    alert(`💍 ¡HAS INVOCADO EL PODER DE SALVACIÓN!\n\nUn resplandor celestial os envuelve a ti y a ${companionName}. La trampa queda desactivada, el peligro se disipa y retrocedes a salvo a la decisión previa.\n\n¡Has regresado sano y salvo! Recuerda que ${itemName} solo puede utilizarse una única vez en toda la aventura.`);

    this.renderScene(previousScene, true);
  }

  // ===========================================================================
  // MANEJADOR GENERAL DE CLIC EN IMAGEN
  // ===========================================================================
  handleImageClick(e) {
    const scene = this.story.nodes[this.currentSceneId];
    if (!scene) return;

    const rect = this.spreadImageEl.getBoundingClientRect();
    const clickX = ((e.clientX - rect.left) / rect.width) * 100;
    const clickY = ((e.clientY - rect.top) / rect.height) * 100;

    this.createRipple(e.clientX - rect.left, e.clientY - rect.top);

    if (scene.isGameOver && scene.gameOverChallenge) {
      this.handleGameOverClick(clickX, clickY, scene);
      return;
    }

    if (scene.isBanquetTraps) {
      this.handleBanquetTrapsClick(clickX, clickY, scene);
      return;
    }

    if (scene.isObjectSearch) {
      this.handleObjectSearchClick(clickX, clickY, scene);
      return;
    }

    if (scene.isDifferences) {
      this.handleDifferencesClick(clickX, clickY, scene);
      return;
    }

    if (scene.isRiddle) {
      this.handleRiddleClick(clickX, clickY, scene);
      return;
    }

    if (scene.isDungeonKeys) {
      this.handleDungeonKeysClick(clickX, clickY, scene);
      return;
    }
  }

  createRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.className = 'click-ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    this.imageContainerEl.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  }

  showRufoToast(icon, message) {
    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.rufoToastEl.querySelector('.toast-icon').textContent = icon;
    this.rufoToastTextEl.textContent = message;
    this.rufoToastEl.classList.add('visible');

    this.toastTimeout = setTimeout(() => {
      this.rufoToastEl.classList.remove('visible');
    }, 4200);
  }

  updateStats() {
    const maxFriends = (this.story && this.story.totalFriends !== undefined) ? this.story.totalFriends : 5;
    const maxKeys = (this.story && this.story.totalKeys !== undefined) ? this.story.totalKeys : 5;
    this.friendsCountEl.textContent = `${this.rescuedFriends.length} / ${maxFriends}`;
    if (this.keysCountEl) {
      this.keysCountEl.textContent = `${this.collectedKeys.length} / ${maxKeys}`;
    }
    if (this.btnRing) {
      const ringName = (this.story && this.story.salvationItemShort) || 'Anillo Mágico';
      this.btnRing.textContent = this.magicRingAvailable ? `💍 ${ringName} (1)` : `💍 ${ringName} (0)`;
      this.btnRing.disabled = !this.magicRingAvailable;
    }
  }

  setMobileTab(tab) {
    this.activeMobileTab = tab;
    if (tab === 'left') {
      this.narrativeLeftEl.style.display = 'block';
      this.narrativeRightEl.style.display = 'none';
      this.imageContainerEl.style.transform = 'translateX(20%) scale(1.15)';
    } else if (tab === 'right') {
      this.narrativeLeftEl.style.display = 'none';
      this.narrativeRightEl.style.display = 'block';
      this.imageContainerEl.style.transform = 'translateX(-20%) scale(1.15)';
    } else {
      this.narrativeLeftEl.style.display = 'block';
      this.narrativeRightEl.style.display = 'block';
      this.imageContainerEl.style.transform = 'none';
    }
  }

  openMapModal() {
    this.historyListEl.innerHTML = '';
    if (this.history.length === 0) {
      this.historyListEl.innerHTML = '<li style="padding:10px;">Aún no has recorrido ninguna sala anterior con Rufo.</li>';
    } else {
      this.history.forEach((sceneId, index) => {
        const scene = this.story.nodes[sceneId];
        const li = document.createElement('li');
        li.className = 'history-item';
        li.innerHTML = `
          <div>
            <strong>Paso ${index + 1}:</strong> ${scene ? scene.title : sceneId}
          </div>
          <button class="btn-rewind" data-scene="${sceneId}">Rebobinar aquí</button>
        `;

        li.querySelector('.btn-rewind').addEventListener('click', (e) => {
          const target = e.target.dataset.scene;
          this.modalMap.classList.remove('open');
          this.renderScene(target, true);
        });

        this.historyListEl.appendChild(li);
      });
    }

    this.modalMap.classList.add('open');
  }


  // ===========================================================================
  // GESTIÓN DE LA BIBLIOTECA FANTÁSTICA (5 LIBROS-JUEGO)
  // ===========================================================================
  showLibraryView() {
    if (this.libraryViewEl && this.readerViewEl) {
      this.libraryViewEl.style.display = 'flex';
      this.readerViewEl.style.display = 'none';
    }
    document.title = "Biblioteca Fantástica de Aventuras - 10 Libros-Juego";
    this.renderLibraryGrid();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openBook(bookKey) {
    if (!window.LIBRARY_BOOKS || !window.LIBRARY_BOOKS[bookKey]) return;
    this.activeBookId = bookKey;
    this.story = window.LIBRARY_BOOKS[bookKey];

    if (this.libraryViewEl && this.readerViewEl) {
      this.libraryViewEl.style.display = 'none';
      this.readerViewEl.style.display = 'flex';
      this.readerViewEl.style.flexDirection = 'column';
    }

    this.updateBookHeader();
    this.restartGame();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (this.sound) this.sound.playPageTurn();
    this.showRufoToast(this.story.companionIcon || '📖', `¡Has abierto «${this.story.title}»! ¡Buena suerte, valiente aventurero!`);
  }

  updateBookHeader() {
    if (this.bookHeaderTitleEl) {
      const icon = this.story.badgeIcon || '🏰';
      this.bookHeaderTitleEl.textContent = `${icon} ${this.story.title.toUpperCase()}`;
    }
    if (this.companionNameEl) {
      this.companionNameEl.textContent = this.story.companionName || 'Rufo';
    }
    if (this.companionIconLabelEl) {
      const icon = this.story.companionIcon || '🐕';
      this.companionIconLabelEl.textContent = `${icon} Compañero:`;
    }
    if (this.friendsLabelEl) {
      this.friendsLabelEl.textContent = this.story.objectiveName || '👥 Amigos:';
    }
    if (this.keysLabelEl) {
      this.keysLabelEl.textContent = this.story.keyName || '🗝️ Llaves:';
    }
    document.title = `${this.story.title} - Biblioteca Fantástica`;
  }

  renderLibraryGrid() {
    if (!this.booksGridEl || !window.LIBRARY_BOOKS) return;
    this.booksGridEl.innerHTML = '';

    const books = window.LIBRARY_BOOKS;
    Object.keys(books).forEach(bookKey => {
      const book = books[bookKey];
      const card = document.createElement('div');
      card.className = 'lib-book-item';
      
      const badgeStyle = `background: ${book.themeColor || '#8f2828'};`;
      const mechanicsHtml = (book.mechanics || []).map(m => `<span style="display:inline-block; font-size:0.75rem; background:rgba(201,147,59,0.18); border:1px solid rgba(201,147,59,0.35); border-radius:4px; padding:2px 6px; margin:2px 3px 2px 0; color:#ecd8be;">${m}</span>`).join('');

      card.innerHTML = `
        <div>
          <img src="${book.cover}" alt="${book.title}" class="lib-book-cover">
          <span class="lib-book-badge" style="${badgeStyle}">
            ${book.badgeIcon || '📖'} ${book.category || 'Aventura'} • ${book.difficulty || '⭐⭐'}
          </span>
          <h3 class="lib-book-title">${book.title}</h3>
          <p class="lib-book-desc">${book.tagline || ''}</p>
          <div style="margin-bottom:12px;">${mechanicsHtml}</div>
        </div>
        <div>
          <button class="btn-select-book" data-book="${bookKey}">
            📖 JUGAR ESTA AVENTURA
          </button>
        </div>
      `;

      card.querySelector('.btn-select-book').addEventListener('click', (e) => {
        e.stopPropagation();
        this.openBook(bookKey);
      });

      card.addEventListener('click', () => {
        this.openBook(bookKey);
      });

      this.booksGridEl.appendChild(card);
    });
  }

  restartGame() {
    this.rescuedFriends = [];
    this.collectedKeys = [];
    this.discoveredDifferences = [];
    this.discoveredBanquetTraps = [];
    this.foundObjectsPerScene = {};
    this.foundGameOverItems = {};
    this.riddleSolved = false;
    this.solvedRiddles = {};
    this.clockworkSolved = false;
    this.monsterDefeated = false;
    this.magicRingAvailable = true;
    this.solvedRiddles = {};
    this.solvedDiceChallenges = {};
    this.solvedSpikesGrids = {};
    this.history = [];
    this.mazeCompletedExit = null;
    this.clearMazeCanvas();
    this.updateStats();
    this.renderScene('cover');
  }
}

// Inicializar al cargar el DOM
window.addEventListener('DOMContentLoaded', () => {
  window.gameEngine = new GameEngine();
});
