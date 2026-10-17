// =============================================================================
// BIBLIOTECA FANTÁSTICA DE AVENTURAS - CATÁLOGO COMPLETO DE 5 LIBROS-JUEGO
// 1. El Castillo de los Horrores (Versión íntegra y fiel de Netlify)
// 2. El Circo de los Horrores y las Ilusiones (Ilustraciones y objetos 100% reales)
// 3. La Cueva del Tiempo (Ilustraciones y objetos 100% reales)
// 4. El Castillo Medieval y el Dragón Dormido (Ilustraciones y objetos 100% reales)
// 5. El Mundo Imaginario y las Islas Flotantes (Ilustraciones y objetos 100% reales)
// =============================================================================

const CASTILLO_DATA = {
  title: "El Castillo de los Horrores",
  subtitle: "Un libro-juego interactivo de enigmas visuales, decisiones y dados",
  companionName: "Rufo el Sabueso",
  companionIcon: "🐕",
  salvationItemName: "Anillo Mágico de Salvación",
  totalFriends: 5,
  totalKeys: 5,
  
  nodes: {
    // -------------------------------------------------------------------------
    // PORTADA Y PRÓLOGO
    // -------------------------------------------------------------------------
    "cover": {
      id: "cover",
      type: "cover",
      pageNumbers: [1, 2],
      title: "El Castillo de los Horrores",
      image: "assets/images/book_cover.jpg",
      isSpread: false,
      textLeft: `
        <span class="page-badge">Portada & Prólogo</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:#8f2828;">¡LA GRAN INCURSIÓN DE RESCATE!</h3>
        <p>Una noche de tormenta y truenos, las siniestras huestes del Brujo del Castillo de los Horrores raptaron a tus <strong>cinco mejores amigos</strong> (Lucas, Elena, Tomás, Mateo y Vera) y los encerraron en las mazmorras subterráneas.</p>
        <p>Acompañado de tu fiel perro sabueso <strong>Rufo</strong>, has penetrado en los dominios del castillo. En esta aventura te esperan pruebas clásicas de ingenio:</p>
        <ul style="margin: 8px 0 8px 20px; font-size: 0.95rem; line-height: 1.6;">
          <li>🌀 <strong>El Laberinto Trazado:</strong> Arrastra el ratón por los pasillos eligiendo entre la Puerta de la Serpiente o la del Dragón.</li>
          <li>🍗 <strong>El Banquete Desierto:</strong> Descubre las 11 trampas mortales y cómicas en la gran mesa solitaria.</li>
          <li>⚔️ <strong>Las Salas de Objetos:</strong> Encuentra armas, reactivos y grimorios indispensables para abrir los pasadizos.</li>
          <li>🪞 <strong>El Espejo de las Ilusiones:</strong> Descubre las 6 diferencias entre el reflejo encantado y la realidad.</li>
          <li>🗿 <strong>El Acertijo de la Esfinge:</strong> Resuelve el enigma milenario eligiendo la reliquia correcta.</li>
          <li>🗝️ <strong>Las 5 Llaves:</strong> Encuéntralas en los calabozos para liberar a tus 5 camaradas.</li>
          <li>🎲 <strong>El Monstruo Eléctrico:</strong> Derrótalo en un lance de dados para alcanzar la libertad.</li>
        </ul>
      `,
      textRight: `
        <span class="page-badge">Instrucciones & Consejos</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:#2c6e49;">CONSEJOS DE RUFO</h3>
        <p>🐕 <strong>Tu Compañero Canino:</strong> Rufo posee un olfato infalible. Cuando explores una imagen, te dará pistas y avisará si hay trampas mortales.</p>
        <p>🔒 <strong>Regla de Oro:</strong> Los botones para continuar a la siguiente página <strong>no aparecerán hasta que resuelvas el enigma de cada sala</strong>.</p>
        <p>💍 <strong>El Anillo Mágico:</strong> Cuentas con un único anillo de resurrección de emergencia. Si caes en una trampa mortal y la historia termina, ¡podrás usarlo <strong>una sola vez</strong> para revivir y deshacer tu error!</p>
        <p>🗺️ <strong>Diario de Aventura:</strong> Pulsa el botón superior para revisar las salas recorridas.</p>
      `,
      choices: [
        {
          text: "⚔️ Abrir el libro y adentrarse en el Laberinto de las Catacumbas",
          target: "scene_maze",
          pageDisplay: "Págs. 4 - 5"
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 1. LABERINTO CON SUELO LIMPIO Y EXACTAMENTE 2 PUERTAS (Páginas 4 - 5)
    // -------------------------------------------------------------------------
    "scene_maze": {
      id: "scene_maze",
      isMaze: true,
      pageNumbers: [4, 5],
      title: "El Laberinto de las Catacumbas Gemelas",
      image: "assets/images/scene_maze.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 4</span>
        <p>Descendéis por una vieja escalera y os encontráis ante un intrincado laberinto de piedra medieval. Corredores de losas limpias se entrecruzan en la penumbra.</p>
        <p><em>—¡Guau! —avisa Rufo—. Desde esta entrada parten pasajes hacia dos puertas colosales. ¡El suelo no tiene marcas, debemos buscar el rumbo nosotros mismos!</em></p>
        <div class="maze-instructions">
          <strong>🌀 PRUEBA INTERACTIVA DE LABERINTO:</strong>
          <p>Haz clic en el arco de la <strong>ENTRADA</strong> (abajo a la izquierda). <strong>Mantén pulsado y arrastra el ratón</strong> por los corredores:</p>
          <ul style="margin: 6px 0 0 18px; font-size: 0.9rem;">
            <li>🐍 Hacia arriba a la <strong>Puerta de la Serpiente Esmeralda</strong> (arriba a la izquierda).</li>
            <li>🐉 Hacia abajo a la <strong>Puerta del Dragón Rubí</strong> (abajo a la derecha).</li>
          </ul>
          <p style="margin-top:6px; font-style:italic;">¡El camino sólo se abrirá cuando alcances una de las dos puertas con el trazo!</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 5</span>
        <p>Frente a vosotros solo existen dos salidas posibles:</p>
        <p>🐍 <strong>La Puerta de la Serpiente Esmeralda (Noroeste):</strong> Conduce a la <em>Bóveda de la Esfinge de Piedra</em> y su enigma ancestral.</p>
        <p>🐉 <strong>La Puerta del Dragón Rubí (Sureste):</strong> Conduce al silencioso y temible <em>Salón del Gran Banquete Macabro</em>.</p>
        <div id="maze-feedback" style="margin: 8px 0; font-weight:600; color:#2c6e49;"></div>
        <p class="decision-prompt" id="maze-prompt">Arrastra el ratón por el laberinto para franquear uno de los dos portales.</p>
      `,
      mazeStart: { x: 13.0, y: 80.0, radius: 8, label: "ENTRADA", icon: "🚪" },
      mazeExits: [
        {
          id: "exit_snake",
          x: 17.0,
          y: 15.0,
          radius: 9,
          color: "#2cba5a",
          label: "Puerta de la Serpiente",
          icon: "🐍",
          target: "scene_riddle",
          pageDisplay: "Págs. 6 - 7",
          feedback: "¡Has alcanzado la mística Puerta de la Serpiente Esmeralda!"
        },
        {
          id: "exit_dragon",
          x: 88.0,
          y: 76.0,
          radius: 9,
          color: "#e63946",
          label: "Puerta del Dragón",
          icon: "🐉",
          target: "scene_banquet",
          pageDisplay: "Págs. 8 - 9",
          feedback: "¡Has completado el sendero hasta la llameante Puerta del Dragón Rubí!"
        }
      ],
      choices: [
        {
          text: "🐍 Entrar por la Puerta de la Serpiente (Hacia el Acertijo)",
          target: "scene_riddle",
          pageDisplay: "Págs. 6 - 7"
        },
        {
          text: "🐉 Entrar por la Puerta del Dragón (Hacia el Banquete Macabro)",
          target: "scene_banquet",
          pageDisplay: "Págs. 8 - 9"
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 2. EL SALÓN DEL GRAN BANQUETE DESIERTO: 11 TRAMPAS (Páginas 8 - 9)
    // -------------------------------------------------------------------------
    "scene_banquet": {
      id: "scene_banquet",
      isBanquetTraps: true,
      pageNumbers: [8, 9],
      title: "El Salón del Gran Banquete Desierto",
      image: "assets/images/scene_banquet.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 8</span>
        <p>Al cruzar el arco del dragón llegáis a un gigantesco salón de banquetes <strong>completamente desierto</strong>. No hay nadie en la estancia: las sillas de madera están vacías, pero la mesa sigue cargada de platos humeantes bajo la luz de las velas.</p>
        <p>Rufo husmea con desconfianza erizando el lomo: <em>—¡Cuidado! Este festín es una trampa. Hay <strong>11 artilugios mortales</strong> preparados para aniquilar a los intrusos.</em></p>
        <div class="enigma-box" style="border-left-color: #8f2828;">
          <strong>☠️ MISIÓN: ENCONTRAR LAS 11 TRAMPAS MORTALES:</strong>
          <p>Explora la ilustración vacía y <strong>haz clic sobre cada una de las 11 trampas</strong>: clavos en el asiento, comida con dientes, copas corrosivas, víboras, armas flotantes, trampillas...</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 9</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="banquet-traps-counter" class="diff-counter-badge" style="border-color:#8f2828; color:#8f2828;">Trampas descubiertas: 0 / 11</span>
        </div>
        <div id="banquet-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>OLFATO DE RUFO:</strong>
          <p id="banquet-feedback-text">Inspecciona la silla del primer plano, las viandas sobre la mesa, debajo del mantel, el techo y la mesita auxiliar de la derecha.</p>
        </div>
        <p class="decision-prompt" id="banquet-next-prompt">
          Al neutralizar las 11 trampas, el mecanismo de la pared se destraba para permitirte avanzar.
        </p>
      `,
      banquetTrapsList: [
        {
          id: "trap_chair_spikes",
          name: "Silla con Pinchos de Hierro",
          desc: "¡Una silla trampa con clavos afilados en el asiento colocada en primer plano!",
          x: 17.5,
          y: 77.0,
          radius: 7.0
        },
        {
          id: "trap_carnivorous_pie",
          name: "Pastel Carnívoro con Colmillos",
          desc: "¡Un pastel de carne que abre una boca con colmillos puntiagudos!",
          x: 38.5,
          y: 66.0,
          radius: 6.5
        },
        {
          id: "trap_acid_goblet",
          name: "Copa de Veneno Ácido",
          desc: "¡Una copa que derrama un corrosivo líquido verde que abrasa el mantel!",
          x: 48.0,
          y: 67.0,
          radius: 6.0
        },
        {
          id: "trap_snake_flagon",
          name: "Jarra con Víbora Venenosa",
          desc: "¡Una serpiente venenosa enroscada en el cántaro de barro!",
          x: 56.5,
          y: 59.5,
          radius: 6.0
        },
        {
          id: "trap_hanging_chandelier",
          name: "Candelabro con Cuerda Cortada",
          desc: "¡La pesada lámpara de rueda cuelga de una soga rota a punto de desplomarse!",
          x: 39.5,
          y: 22.0,
          radius: 7.5
        },
        {
          id: "trap_flying_knife",
          name: "Cuchillo Mágico Volador",
          desc: "¡Un afilado cuchillo encantado flotando en el aire en silencio!",
          x: 46.5,
          y: 39.0,
          radius: 6.0
        },
        {
          id: "trap_boar_eyes",
          name: "Jabalí con Ojos Rojos Embrujados",
          desc: "¡La cabeza de jabalí asado os vigila con ojos demoníacos!",
          x: 65.5,
          y: 54.5,
          radius: 6.5
        },
        {
          id: "trap_purple_apples",
          name: "Manzanas Púrpuras Ponzoñosas",
          desc: "¡Frutas impregnadas de un veneno mortal que desprende un halo morado!",
          x: 71.5,
          y: 56.5,
          radius: 6.0
        },
        {
          id: "trap_crossbow",
          name: "Ballesta Oculta bajo el Mantel",
          desc: "¡Una ballesta de acero armada con virote disimulada bajo la tela!",
          x: 62.5,
          y: 75.0,
          radius: 7.0
        },
        {
          id: "trap_trapdoor",
          name: "Trampilla Falsa en las Losas",
          desc: "¡Una trampilla con aro de hierro en el suelo de piedra!",
          x: 82.5,
          y: 88.0,
          radius: 6.5
        },
        {
          id: "trap_toxic_skull",
          name: "Calavera con Vapores Tóxicos",
          desc: "¡En la mesita lateral, una calavera humana expulsa una nube de gas verde letal!",
          x: 94.5,
          y: 59.0,
          radius: 7.0
        }
      ],
      choices: [
        {
          text: "🛡️ Penetrar en la Armería Secreta (Buscar Equipo de Asalto)",
          target: "scene_armory",
          pageDisplay: "Págs. 10 - 11"
        },
        {
          text: "⚠️ Pisar la trampilla secreta apresuradamente sin comprobarla",
          target: "gameover_pit",
          pageDisplay: "¡Peligro!"
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 3. SALA DE OBJETOS 1: LA ARMERÍA SECRETA (Páginas 10 - 11)
    // -------------------------------------------------------------------------
    "scene_armory": {
      id: "scene_armory",
      isObjectSearch: true,
      pageNumbers: [10, 11],
      title: "La Armería Secreta de la Guardia",
      image: "assets/images/scene_armory.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 10</span>
        <p>Llegáis a un arsenal subterráneo con armeros de madera, estantes de hierro y una chimenea encendida. Para enfrentaros a los peligros de las mazmorras necesitáis pertrecharos.</p>
        <p>Rufo olfatea los rincones: <em>—¡Guau! En esta sala hay <strong>4 piezas de equipo legendarias</strong> indispensables para el asalto.</em></p>
        <div class="enigma-box" style="border-left-color: #275278;">
          <strong>⚔️ MISIÓN: ENCONTRAR 4 OBJETOS DE COMBATE:</strong>
          <p>Haz clic en la imagen para encontrar: <strong>La Espada de Acero</strong>, <strong>El Escudo del León Dorado</strong>, <strong>El Yelmo Alado</strong> y <strong>La Antorcha Eterna de Fuego Azul</strong>.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 11</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#275278; color:#275278;">Objetos encontrados: 0 / 4</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>EQUIPAMIENTO DEL HÉROE:</strong>
          <p id="items-feedback-text">Busca en los barriles de madera, junto a la chimenea, en los estantes altos y sobre los arcones.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          ¡Equipado y protegido! La puerta reforzada del ala norte ya puede ser franqueada.
        </p>
      `,
      requiredItems: [
        {
          id: "item_sword",
          name: "Espada de Acero de Valquiria",
          desc: "¡Una hoja templada en el fuego que descansa dentro del barril frontal!",
          x: 35.0,
          y: 79.0,
          radius: 6.5
        },
        {
          id: "item_shield",
          name: "Escudo con el León Dorado",
          desc: "¡Un escudo pesado con blasón que aguarda apoyado junto a la chimenea!",
          x: 39.0,
          y: 59.0,
          radius: 6.5
        },
        {
          id: "item_helmet",
          name: "Yelmo Alado de Caballero",
          desc: "¡Un casco de acero con alas relucientes en la repisa superior derecha!",
          x: 88.0,
          y: 11.0,
          radius: 6.5
        },
        {
          id: "item_torch",
          name: "Antorcha Eterna de Llama Azul",
          desc: "¡Una antorcha mágica que arde sin consumirse sobre el arcón de madera!",
          x: 86.0,
          y: 61.0,
          radius: 6.5
        }
      ],
      choices: [
        {
          text: "🗝️ Descender a la Cámara de los Calabozos (Rescatar Amigos)",
          target: "scene_dungeon_keys",
          pageDisplay: "Págs. 14 - 15"
        },
        {
          text: "⚠️ Ir a ciegas por el corredor oscuro de las armaduras silenciosas",
          target: "gameover_ambush",
          pageDisplay: "¡Peligro!"
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 4. RESOLVER UN ACERTIJO: LA ESFINGE Y LOS 3 PEDESTALES (Páginas 6 - 7)
    // -------------------------------------------------------------------------
    "scene_riddle": {
      id: "scene_riddle",
      isRiddle: true,
      pageNumbers: [6, 7],
      title: "La Bóveda de la Esfinge de Piedra",
      image: "assets/images/scene_riddle.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 6</span>
        <p>Frente a vosotros se alza una colosal puerta de bóveda con el rostro esculpido de una <strong>Esfinge Faraónica de Piedra</strong>, cuyos ojos resplandecen con una llama sobrenatural.</p>
        <p>Una voz pétrea retumba en los cimientos del santuario:</p>
        <div class="riddle-speech-bubble">
          <em>«Viajero que pisas el suelo prohibido, escucha mi enigma si no quieres quedar aquí sumido:<br><br>
          <strong>No tengo alas pero vuelo con el humo,<br>
          nací de la chispa y el bosque consumo.<br>
          Quien me alimenta me da más vigor,<br>
          pero si bebo agua, perezco de dolor.</strong><br><br>
          ¿Qué reliquia debes ofrendar en mi altar para franquear el umbral?»</em>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 7</span>
        <p>Frente al portón se yerguen tres pedestales de piedra con reliquias sagradas:</p>
        <div class="riddle-pedestals-grid">
          <button class="pedestal-btn" data-pedestal="sun">
            <span class="pedestal-icon">☀️</span>
            <span class="pedestal-name">Pedestal 1: El Sol Dorado</span>
          </button>
          <button class="pedestal-btn" data-pedestal="moon">
            <span class="pedestal-icon">🌙</span>
            <span class="pedestal-name">Pedestal 2: El Cáliz Lunar</span>
          </button>
          <button class="pedestal-btn" data-pedestal="fire">
            <span class="pedestal-icon">🔥</span>
            <span class="pedestal-name">Pedestal 3: El Rubí de Fuego</span>
          </button>
        </div>
        <div id="riddle-feedback" class="enigma-box" style="margin-top:10px;">
          Haz clic en uno de los 3 pedestales (en la ilustración o botones) para dar tu respuesta a la Esfinge.
        </div>
        <p class="decision-prompt" id="riddle-next-prompt">
          La colosal puerta de la Esfinge cruje pesadamente abriéndose al acertar la ofrenda.
        </p>
      `,
      pedestals: [
        {
          id: "sun",
          x: 18.5,
          y: 68.0,
          radius: 8,
          name: "El Sol Dorado (Pedestal 1)",
          isCorrect: false,
          feedback: "La Esfinge resopla con decepción: «El sol brilla en lo alto sin devorar la arboleda ni extinguirse por una gota de agua. ¡Esa no es la respuesta!»"
        },
        {
          id: "moon",
          x: 31.0,
          y: 68.0,
          radius: 8,
          name: "El Cáliz Lunar de Plata (Pedestal 2)",
          isCorrect: false,
          feedback: "La Esfinge niega con la cabeza: «La luna atrae las mareas y la noche húmeda. ¡No sufre con el agua! Vuelve a pensarlo.»"
        },
        {
          id: "fire",
          x: 41.5,
          y: 68.0,
          radius: 8,
          name: "El Rubí de Fuego Ardiente (Pedestal 3)",
          isCorrect: true,
          feedback: "¡CORRECTO! Rufo ladra de júbilo. «¡Has comprendido la llama!», retumba la Esfinge. ¡Los ojos del rostro pétreo se iluminan y la colosal puerta se abre de par en par!"
        }
      ],
      choices: [
        {
          text: "⚗️ Entrar en el Laboratorio de Alquimia (Buscar Reactivos Mágicos)",
          target: "scene_alchemy",
          pageDisplay: "Págs. 8 - 9"
        },
        {
          text: "⚠️ Mirar de cerca el espejo con cabeza de Medusa tallada",
          target: "gameover_petrified",
          pageDisplay: "¡Peligro!"
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 5. SALA DE OBJETOS 2: EL LABORATORIO DE ALQUIMIA (Páginas 8 - 9)
    // -------------------------------------------------------------------------
    "scene_alchemy": {
      id: "scene_alchemy",
      isObjectSearch: true,
      pageNumbers: [8, 9],
      title: "El Laboratorio de Alquimia y Pociones",
      image: "assets/images/scene_alchemy.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 8</span>
        <p>Penetráis en un húmedo laboratorio subterráneo repleto de alambiques de cobre, hierbas aromáticas secándose y un caldero humeante sobre el fuego.</p>
        <p>Para disolver las cadenas mágicas del Brujo debéis destilar el <strong>Elixir de Apertura</strong> encontrando <strong>4 ingredientes místicos</strong>.</p>
        <div class="enigma-box" style="border-left-color: #2c6e49;">
          <strong>⚗️ MISIÓN: ENCONTRAR 4 INGREDIENTES MÁGICOS:</strong>
          <p>Haz clic en la imagen para hallar: <strong>La Seta Azul Luminiscente</strong>, <strong>El Frasco de Rocío Esmeralda</strong>, <strong>La Raíz Viva de Mandrágora</strong> y <strong>La Pluma Ardiente de Fénix</strong>.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 9</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#2c6e49; color:#2c6e49;">Ingredientes encontrados: 0 / 4</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>CALDERO DEL ALQUIMISTA:</strong>
          <p id="items-feedback-text">Busca en el suelo cerca del caldero, en las repisas de piedra, dentro de la cesta de mimbre y sobre el atril del gran libro.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          ¡El caldero hierve con un resplandor dorado! El elixir de apertura está listo.
        </p>
      `,
      requiredItems: [
        {
          id: "item_mushroom",
          name: "Seta Azul Luminiscente",
          desc: "¡Un hongo fluorescente que crece en la roca húmeda junto al caldero!",
          x: 14.0,
          y: 85.0,
          radius: 6.5
        },
        {
          id: "item_potion",
          name: "Frasco de Rocío Esmeralda",
          desc: "¡Una botella de cuello largo con líquido verde en la repisa de piedra alta!",
          x: 74.5,
          y: 23.5,
          radius: 9.0
        },
        {
          id: "item_mandrake",
          name: "Raíz Viva de Mandrágora",
          desc: "¡Una mandrágora con forma humana que descansa en la cesta de mimbre!",
          x: 63.0,
          y: 77.0,
          radius: 6.5
        },
        {
          id: "item_feather",
          name: "Pluma Ardiente de Fénix",
          desc: "¡Una pluma dorada que despide fuego sobre el atril abierto!",
          x: 79.0,
          y: 50.0,
          radius: 6.5
        }
      ],
      choices: [
        {
          text: "🪞 Pasar al Gabinete del Brujo y el Espejo de las Ilusiones",
          target: "scene_differences",
          pageDisplay: "Págs. 10 - 11"
        },
        {
          text: "📚 Subir hacia la Gran Biblioteca Arcana",
          target: "scene_library",
          pageDisplay: "Págs. 12 - 13"
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 6. ENCONTRAR LAS 6 DIFERENCIAS (Páginas 10 - 11)
    // -------------------------------------------------------------------------
    "scene_differences": {
      id: "scene_differences",
      isDifferences: true,
      pageNumbers: [10, 11],
      title: "El Gabinete del Brujo y el Espejo de las Ilusiones",
      image: "assets/images/scene_differences.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 10</span>
        <p>Al cruzar el pasaje llegáis al gabinete secreto del Brujo. Frente a vosotros se alza un cristal mágico que proyecta un reflejo casi idéntico a la sala real.</p>
        <p>Rufo gruñe con insistencia: <em>—¡Guau! El reflejo tiene trucos engañosos. Para desactivar la barrera mágica debemos hallar las <strong>6 diferencias</strong>.</em></p>
        <div class="enigma-box">
          <strong>🪞 ENCUENTRA LAS 6 DIFERENCIAS:</strong>
          <p>Compara ambos lados del pliego. <strong>Haz clic sobre cualquier detalle diferente</strong> (búho, pergamino, bola de cristal, gato, reloj, pócimas).</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 11</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="diff-counter" class="diff-counter-badge">Diferencias encontradas: 0 / 6</span>
        </div>
        <p id="diff-status-text">Fíjate bien en la percha del búho, los papeles sobre el escritorio, la bola de cristal y el suelo bajo la mesa.</p>
        <p class="decision-prompt" id="diff-prompt">Al descubrir las 6 diferencias, el encantamiento se disipa.</p>
      `,
      differencesList: [
        {
          id: "diff_owl_glasses",
          name: "Gafas del Búho Sabio",
          desc: "¡El búho del lado derecho lleva gafas de sabio, mientras que el búho original no las tiene!",
          left: { x: 23.0, y: 18.5 },
          right: { x: 73.0, y: 18.5 },
          radius: 8.5
        },
        {
          id: "diff_scroll_symbol",
          name: "Símbolo del Pergamino",
          desc: "¡A la izquierda hay una estrella mágica y a la derecha una serpiente ouroboros!",
          left: { x: 13.0, y: 69.0 },
          right: { x: 63.0, y: 69.0 },
          radius: 9.0
        },
        {
          id: "diff_crystal_orb",
          name: "Vórtice de la Esfera de Cristal",
          desc: "¡La bola izquierda despide niebla violeta y la derecha un remolino espiral amarillo!",
          left: { x: 16.0, y: 48.0 },
          right: { x: 66.0, y: 48.0 },
          radius: 8.5
        },
        {
          id: "diff_sleeping_cat",
          name: "El Gato bajo el Escritorio",
          desc: "¡Bajo el escritorio de la izquierda duerme un gato naranja, pero en el reflejo ha desaparecido!",
          left: { x: 28.0, y: 83.0 },
          right: { x: 78.0, y: 83.0 },
          radius: 10.0
        },
        {
          id: "diff_hourglass_sand",
          name: "Reloj de Arena y Libros Apilados",
          desc: "¡El reloj de arena y los tomos apilados en el escritorio varían en el reflejo!",
          left: { x: 30.5, y: 50.5 },
          right: { x: 80.5, y: 50.5 },
          radius: 10.0
        },
        {
          id: "diff_potion_bottles",
          name: "Frascos Alquímicos del Estante",
          desc: "¡Los frascos de pócimas del estante han cambiado de color y orden!",
          left: { x: 9.0, y: 26.0 },
          right: { x: 59.0, y: 26.0 },
          radius: 11.0
        }
      ],
      choices: [
        {
          text: "⚙️ Cruzar la compuerta hacia la Sala de Engranajes",
          target: "scene_clockwork",
          pageDisplay: "Págs. 12 - 13"
        },
        {
          text: "📚 Pasar a la Gran Biblioteca Arcana",
          target: "scene_library",
          pageDisplay: "Págs. 12 - 13"
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 7. SALA DE OBJETOS 3: LA GRAN BIBLIOTECA ARCANA (Páginas 12 - 13)
    // -------------------------------------------------------------------------
    "scene_library": {
      id: "scene_library",
      isObjectSearch: true,
      pageNumbers: [12, 13],
      title: "La Gran Biblioteca Arcana",
      image: "assets/images/scene_library.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 12</span>
        <p>Una monumental biblioteca gótica con estanterías que rozan las bóvedas, vidrieras polícromas y un gran reloj de pie os da la bienvenida.</p>
        <p>Para descifrar el mecanismo de las celdas inferiores necesitáis encontrar <strong>3 Tomos Arcanos de Poder</strong>.</p>
        <div class="enigma-box" style="border-left-color: #8b6b47;">
          <strong>📚 MISIÓN: ENCONTRAR LOS 3 TOMOS ANTIGUOS:</strong>
          <p>Haz clic en la imagen para hallar: <strong>El Grimorio de Fuego</strong>, <strong>El Libro Azul de las Runas</strong> y <strong>El Pergamino Celestial del Reloj</strong>.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 13</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#8b6b47; color:#8b6b47;">Tomos encontrados: 0 / 3</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>REGISTRO DEL SABIO:</strong>
          <p id="items-feedback-text">Inspecciona el atril en llamas de la izquierda, lo alto de la escalera de mano y el cristal del reloj antiguo.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          ¡Una estantería secreta gira sobre sus goznes revelando la escalinata de las mazmorras!
        </p>
      `,
      requiredItems: [
        {
          id: "item_grimoire_fire",
          name: "Grimorio Llameante del Fuego",
          desc: "¡Un tomo encuadernado en piel roja envuelto en llamas sobre el atril!",
          x: 18.0,
          y: 68.0,
          radius: 6.5
        },
        {
          id: "item_tome_runes",
          name: "Libro Azul de las Runas Antiguas",
          desc: "¡Un volumen que irradia luz celeste en lo alto de la escalera de madera!",
          x: 73.0,
          y: 27.0,
          radius: 6.5
        },
        {
          id: "item_scroll_clock",
          name: "Pergamino Celestial del Reloj",
          desc: "¡Un pergamino dorado atado con cinta azul tras el cristal del reloj de péndulo!",
          x: 89.0,
          y: 67.0,
          radius: 6.5
        }
      ],
      choices: [
        {
          text: "🗝️ Bajar a la Cámara de los Calabozos (Rescatar a los 5 Amigos)",
          target: "scene_dungeon_keys",
          pageDisplay: "Págs. 14 - 15"
        },
        {
          text: "⚠️ Cruzar a la carrera por el pasadizo agrietado del abismo",
          target: "gameover_abyss",
          pageDisplay: "¡Peligro!"
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 8. MECANISMO DE ENGRANAJES Y PÉNDULO (Páginas 12 - 13)
    // -------------------------------------------------------------------------
    "scene_clockwork": {
      id: "scene_clockwork",
      isClockwork: true,
      pageNumbers: [12, 13],
      title: "La Torre de los Engranajes y el Gran Péndulo",
      image: "assets/images/scene_clockwork.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 12</span>
        <p>Una cámara abovedada gigante zumba con el tic-tac de gigantescas ruedas dentadas de bronce, un péndulo dorado que oscila sobre el abismo y un cristal luminoso de energía mágica.</p>
        <p>El rastrillo de hierro del ala este está completamente bloqueado por tres cerrojos mecánicos rúnicos.</p>
        <div class="enigma-box">
          <strong>⚙️ MECANISMO DE SINCRONIZACIÓN:</strong>
          <p>Debes alinear los 3 cuadrantes rúnicos girándolos y luego <strong>tirar de la manivela maestra</strong> para alzar el rastrillo.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 13</span>
        <div class="clockwork-panel">
          <p style="font-weight:600; text-align:center;">Gira los cuadrantes para alinear la frecuencia del cristal:</p>
          <div class="gears-dials-row">
            <div class="gear-dial">
              <div class="dial-circle" id="dial-1" data-val="1">Ⅰ</div>
              <small>Cuadrante Solar</small>
            </div>
            <div class="gear-dial">
              <div class="dial-circle" id="dial-2" data-val="2">Ⅱ</div>
              <small>Cuadrante Rúnico</small>
            </div>
            <div class="gear-dial">
              <div class="dial-circle" id="dial-3" data-val="1">Ⅰ</div>
              <small>Cuadrante Lunar</small>
            </div>
          </div>
          <button id="btn-activate-crank" class="choice-btn" style="width:100%; justify-content:center; margin-top:8px;">
            ⚙️ ¡TIRAR DE LA MANIVELA MAESTRA!
          </button>
          <div id="clockwork-feedback" style="margin-top:8px; font-weight:600; text-align:center;"></div>
        </div>
        <p class="decision-prompt" id="clockwork-prompt">Las cadenas metálicas se tensan para abrir el rastrillo.</p>
      `,
      choices: [
        {
          text: "🗝️ Descender a los Calabozos a liberar a los 5 camaradas",
          target: "scene_dungeon_keys",
          pageDisplay: "Págs. 14 - 15"
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 9. ENCONTRAR LAS 5 LLAVES Y RESCATAR A LOS 5 AMIGOS (Páginas 14 - 15)
    // -------------------------------------------------------------------------
    "scene_dungeon_keys": {
      id: "scene_dungeon_keys",
      isDungeonKeys: true,
      pageNumbers: [14, 15],
      title: "La Cámara de los Calabozos: ¡Rescate de los 5 Amigos!",
      image: "assets/images/scene_dungeon_keys.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 14</span>
        <p>¡Por fin habéis llegado al corazón de las mazmorras subterráneas! A la derecha, tras gruesos barrotes de forja, veis con emoción a <strong>Lucas, Elena, Tomás, Mateo y Vera</strong>, encerrados en sus celdas.</p>
        <p>A la izquierda, sobre un banco de madera, un carcelero trasgo ronca profundamente.</p>
        <p><em>—¡Amigo, habéis venido! —susurra Elena—. El trasgo escondió las <strong>5 llaves doradas</strong> en rincones de la sala. ¡Buscadlas todas para abrir los 5 candados!</em></p>
        <div class="enigma-box" style="border-left-color: #c9933b; background: rgba(201, 147, 59, 0.15);">
          <strong>🗝️ ENCUENTRA LAS 5 LLAVES DORADAS:</strong>
          <p>Inspecciona la ilustración y <strong>haz clic sobre las 5 llaves escondidas</strong> (paredes, barriles, baldosas y cornisas) para liberar a cada amigo.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 15</span>
        <div id="dungeon-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>ESTADO DEL RESCATE:</strong>
          <p id="dungeon-keys-text">🗝️ Llaves doradas encontradas: <strong>0 / 5</strong></p>
          <p id="dungeon-friends-text">👥 Amigos liberados: <strong>0 / 5</strong></p>
          <div id="freed-friends-list" style="margin-top:6px; font-size:0.9rem; color:#2c6e49;"></div>
        </div>
        <p>Una vez rescatados los cinco camaradas, la única salida para escapar de la fortaleza es cruzar el corredor de las descargas y desactivar la máquina del Brujo.</p>
        <p class="decision-prompt" id="dungeon-prompt">¿Tienes ya en tu poder las cinco llaves?</p>
      `,
      hiddenKeys: [
        {
          id: "key_hook",
          name: "Llave de la Escarpia de la Pared",
          friendName: "Lucas",
          x: 79.5,
          y: 13.5,
          radius: 8.5,
          feedback: "¡Primera llave conseguida! Colgada en lo alto de la pared. ¡Lucas queda libre de sus barrotes!"
        },
        {
          id: "key_barrel",
          name: "Llave del Barril de Madera",
          friendName: "Elena",
          x: 52.0,
          y: 88.0,
          radius: 8.5,
          feedback: "¡Segunda llave hallada! Asomaba en el borde del barril. ¡Elena sale corriendo a abrazaros!"
        },
        {
          id: "key_bench",
          name: "Llave sobre las Losas",
          friendName: "Tomás",
          x: 34.0,
          y: 85.5,
          radius: 9.5,
          feedback: "¡Tercera llave recogida! Estaba brillando en el suelo de piedra. ¡Tomás se une al grupo!"
        },
        {
          id: "key_goblin",
          name: "Llave a los pies del Trasgo",
          friendName: "Mateo",
          x: 16.0,
          y: 82.0,
          radius: 10.0,
          feedback: "¡Cuarta llave obtenida! Rufo la recoge sigilosamente junto a las botas del trasgo. ¡Mateo liberado!"
        },
        {
          id: "key_pillar",
          name: "Llave de la Arcada de Piedra",
          friendName: "Vera",
          x: 37.0,
          y: 38.5,
          radius: 8.5,
          feedback: "¡Quinta y última llave encontrada! Colgada junto al pilar del fondo. ¡Vera queda en libertad y todos los amigos están a salvo!"
        }
      ],
      choices: [
        {
          text: "⚡ Avanzar al Laboratorio y desafiar al Monstruo Eléctrico",
          target: "scene_monster",
          pageDisplay: "Págs. 16 - 17"
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 10. EL MONSTRUO ELÉCTRICO Y COMBATE CON DADOS (Páginas 16 - 17)
    // -------------------------------------------------------------------------
    "scene_monster": {
      id: "scene_monster",
      pageNumbers: [16, 17],
      title: "El Laboratorio del Monstruo Eléctrico",
      image: "assets/images/scene_monster.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 16</span>
        <p>¡BZZZZZZ! Un estruendo ensordecedor de bobinas de chispas y rayos azulados ilumina una inmensa cámara subterránea. En una plataforma metálica se alza una colosal abominación electrificada del Brujo, bloqueando el túnel de escape.</p>
        <p>Para huir con vida con Rufo y todos tus amigos, <strong>debéis cortar los cables maestros con una tirada de dados</strong>.</p>
        <div class="enigma-box" style="border-left-color:#8f2828;">
          <strong>⚡ ¡COMBATE ÉPICO CON DADOS!</strong>
          <p>Tira los 2 dados de la fortuna. Si obtienes una puntuación total de <strong>7 o más</strong> (o un doble 6 de Rufo), ¡desconectas los cables maestros y el monstruo colapsará!</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 17</span>
        <div id="monster-dice-box" class="dice-arena">
          <p style="margin-bottom:8px; font-weight:600;">🎲 Desafío de la Abominación Eléctrica:</p>
          <div class="dice-display" id="dice-display">
            <span class="die" id="die-1">🎲</span>
            <span class="die" id="die-2">🎲</span>
          </div>
          <div id="dice-result-text" class="dice-result">Pulsa el botón para lanzar los dados contra el monstruo.</div>
          <button id="btn-roll-dice" class="choice-btn" style="width:100%; justify-content:center; margin-top:10px;">
            🎲 ¡TIRAR LOS DADOS CONTRA EL MONSTRUO!
          </button>
        </div>
        <p class="decision-prompt" id="monster-next-prompt" style="margin-top:15px; display:none;">
          ¡El generador ha explotado y el camino hacia la libertad ha quedado despejado!
        </p>
      `,
      choices: [
        {
          text: "🌅 ¡Escapar con Rufo y todos tus amigos hacia el Alba victorioso!",
          target: "scene_victory",
          pageDisplay: "Págs. Finales"
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 11. VICTORIA FINAL Y LIBERTAD AL ALBA
    // -------------------------------------------------------------------------
    "scene_victory": {
      id: "scene_victory",
      pageNumbers: [18, 19],
      title: "¡Victoria y Libertad bajo el Alba!",
      image: "assets/images/scene_victory.jpg",
      isSpread: false,
      textLeft: `
        <span class="page-badge">¡MISIÓN CUMPLIDA!</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.5rem; color:#2c6e49;">¡HAS CONQUISTADO EL CASTILLO!</h3>
        <p>Los primeros rayos dorados del sol naciente disipan la niebla que rodeaba el castillo. Jadeantes pero victoriosos, cruzáis el puente levadizo dejando atrás para siempre la fortaleza del Brujo.</p>
        <p>A tu lado, <strong>Lucas, Elena, Tomás, Mateo y Vera</strong> te abrazan entre vítores de júbilo. Y en el centro de todos, el valiente <strong>Rufo</strong> corretea moviendo la cola, coronado como el héroe canino más fiel del reino.</p>
        <div class="victory-box">
          🏆 <strong>¡ENHORABUENA, JOVEN AVENTURERO!</strong>
          <p>Has superado el laberinto, neutralizado las 11 trampas del banquete desierto, equipado las armas de la armería, destilado los elixires, descifrado los tomos arcanos y la esfinge, rescatado a tus cinco camaradas y vencido al monstruo con los dados.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Recompensa & Estadísticas</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.3rem; color:#c9933b;">LOGROS DE LA AVENTURA</h3>
        <p>🌀 <strong>Laberinto Superado:</strong> Trazado con éxito por las catacumbas.</p>
        <p>🍗 <strong>Banquete Desierto:</strong> 11 de 11 trampas mortales desactivadas.</p>
        <p>⚔️ <strong>Equipo de Asalto:</strong> Pertrechos legendarios conseguidos.</p>
        <p>⚗️ <strong>Alquimia y Biblioteca:</strong> Reactivos y tomos antiguos descifrados.</p>
        <p>👥 <strong>Amigos Rescatados:</strong> ¡5 de 5! (Lucas, Elena, Tomás, Mateo y Vera libres).</p>
        <p>🎲 <strong>Monstruo Derrotado:</strong> Superado en combate limpio con dados.</p>
      `,
      choices: [
        {
          text: "🔄 Volver a jugar desde la Portada",
          target: "cover",
          pageDisplay: "Portada"
        }
      ,
        {
          text: "🏛️ Volver a la Biblioteca (5 Libros)",
          target: "library",
          pageDisplay: "Biblioteca"
        }]
    },

    // =========================================================================
    // CUATRO (4) PANTALLAS DE FRACASO / FIN DE AVENTURA (GAME OVER)
    // Con actividades de búsqueda/escape al estilo del libro original
    // y posibilidad de usar el Anillo Mágico (1 sola vez por partida)
    // =========================================================================

    // FRACASO 1: CAÍDA EN EL FOSO DE ESTACAS
    "gameover_pit": {
      id: "gameover_pit",
      isGameOver: true,
      title: "¡Caída Mortal en el Foso de Estacas!",
      image: "assets/images/gameover_spikepit.jpg",
      isSpread: false,
      textLeft: `
        <span class="page-badge" style="color:#8f2828;">¡FIN DE LA AVENTURA!</span>
        <div class="gameover-box">
          <h3>☠️ ¡TRAMPA MORTAL ACTIVADA!</h3>
          <p>Las losas bajo tus pies cedieron repentinamente con un crujido seco. Tú y Rufo os precipitasteis en un pozo sin fondo erizado de puntiagudas estacas de hierro y vapores venenosos verdosos.</p>
          <p>Pero como en las antiguas crónicas de la Fortaleza... <em>¿sabrás encontrar la manera de no estrellarte en el fondo antes de que sea el fin definitivo?</em></p>
        </div>
        <div class="enigma-box" style="border-left-color: #8f2828; margin-top:10px;">
          <strong>🧗 DESAFÍO DE ESCAPE DEL POZO:</strong>
          <p>Haz clic en la imagen para hallar los <strong>3 puntos de salvación</strong>: <strong>La Viga de Madera Rota</strong> (para frenar la caída), <strong>El Candil de Hierro</strong> con anilla de rescate en la arcada superior, y <strong>La Bota con Espolón</strong> del aventurero.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Destino & Salvación</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="gameover-items-counter" class="diff-counter-badge" style="border-color:#8f2828; color:#8f2828;">Puntos de escape: 0 / 3</span>
        </div>
        <div id="gameover-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>ASIDEROS DE EMERGENCIA:</strong>
          <p id="gameover-feedback-text">Inspecciona los tablones rotos de la izquierda, la arcada del fondo y el cuerpo en el aire.</p>
        </div>
        <div id="gameover-ring-box" style="margin: 12px 0;"></div>
        <p class="decision-prompt" id="gameover-prompt">
          ¡Aún tienes que encontrar a tus amigos! Usa el Anillo Mágico de Salvación o vuelve a la portada para comenzar de nuevo.
        </p>
      `,
      gameOverChallenge: {
        id: "pit_escape",
        title: "¡Escape del Foso de Estacas!",
        instruction: "Encuentra 3 puntos de salvación en la imagen para evitar el impacto fatal.",
        items: [
          {
            id: "pit_beam",
            name: "Viga de Madera Rota",
            desc: "¡Un tablón resistente que sobresale del borde donde puedes agarrarte de un salto!",
            x: 35.0,
            y: 32.0,
            radius: 7.0
          },
          {
            id: "pit_lantern",
            name: "Candil de Hierro con Anilla",
            desc: "¡Un candil colgado en lo alto de la arcada de piedra con una anilla de amarre firme!",
            x: 43.5,
            y: 7.0,
            radius: 6.5
          },
          {
            id: "pit_boot",
            name: "Bota con Gancho de Escalada",
            desc: "¡El espolón de acero de la bota del héroe se clava en la pared rocosa para frenar el descenso!",
            x: 58.0,
            y: 57.0,
            radius: 7.0
          }
        ]
      },
      choices: [
        {
          text: "🔄 Volver al principio (Portada) y empezar de nuevo",
          target: "cover",
          pageDisplay: "Portada"
        }
      ]
    },

    // FRACASO 2: LA MALDICIÓN DE LA ESTATUA DE PIEDRA
    "gameover_petrified": {
      id: "gameover_petrified",
      isGameOver: true,
      title: "¡La Maldición del Espejo de Piedra!",
      image: "assets/images/gameover_petrified.jpg",
      isSpread: false,
      textLeft: `
        <span class="page-badge" style="color:#8f2828;">¡FIN DE LA AVENTURA!</span>
        <div class="gameover-box">
          <h3>🗿 ¡PETRIFICACIÓN INSTANTÁNEA!</h3>
          <p>Al posar la mirada en el espejo maldito de Medusa, una llamarada morada brota del cristal. La piel se vuelve fría como el granito y tus miembros se petrifican.</p>
          <p>Sin embargo, tus ojos aún pueden divisar los reflejos místicos en la sala abandonada... <em>¿Sabrías encontrar los 3 objetos sagrados que contienen el contrahechizo?</em></p>
        </div>
        <div class="enigma-box" style="border-left-color: #8f2828; margin-top:10px;">
          <strong>🔮 DESAFÍO DEL CONTRAHECHIZO:</strong>
          <p>Haz clic en la imagen para señalar: <strong>El Ojo Central de Medusa</strong> (en la cresta del espejo), <strong>La Espada de Acero</strong> caída en las losas (que refleja la luz) y <strong>El Zurrón de Cuero</strong> con ungüento bendito.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Destino & Salvación</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="gameover-items-counter" class="diff-counter-badge" style="border-color:#8f2828; color:#8f2828;">Reliquias del contrahechizo: 0 / 3</span>
        </div>
        <div id="gameover-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>ROMPIENDO LA PIEDRA:</strong>
          <p id="gameover-feedback-text">Fíjate en el marco del espejo místico, el suelo a los pies del guerrero y el zurrón abandonado.</p>
        </div>
        <div id="gameover-ring-box" style="margin: 12px 0;"></div>
        <p class="decision-prompt" id="gameover-prompt">
          Tus camaradas aguardan en las mazmorras... ¿Invocarás el poder del Anillo Mágico o reiniciarás el viaje?
        </p>
      `,
      gameOverChallenge: {
        id: "petrified_escape",
        title: "¡Contrahechizo de la Medusa!",
        instruction: "Descubre los 3 elementos para debilitar el hechizo de petrificación.",
        items: [
          {
            id: "medusa_eye",
            name: "Ojo Central del Espejo de Medusa",
            desc: "¡La gema púrpura en la frente de la talla de serpientes que canaliza la maldición!",
            x: 66.5,
            y: 16.0,
            radius: 6.5
          },
          {
            id: "fallen_sword",
            name: "Espada de Acero Reflejante",
            desc: "¡La hoja pulida en las losas que refleja el rayo mágico debilitándolo!",
            x: 27.5,
            y: 91.0,
            radius: 7.0
          },
          {
            id: "hero_pouch",
            name: "Zurrón de Cuero del Explorador",
            desc: "¡La bolsa de viaje donde guardabas el bálsamo purificador de piedra!",
            x: 19.5,
            y: 78.0,
            radius: 6.5
          }
        ]
      },
      choices: [
        {
          text: "🔄 Volver al principio (Portada) y empezar de nuevo",
          target: "cover",
          pageDisplay: "Portada"
        }
      ]
    },

    // FRACASO 3: EL PRECIPICIO DE LAS BALDOSAS QUEBRADIZAS
    "gameover_abyss": {
      id: "gameover_abyss",
      isGameOver: true,
      title: "¡El Precipicio de las Baldosas Quebradizas!",
      image: "assets/images/gameover_abyss.jpg",
      isSpread: false,
      textLeft: `
        <span class="page-badge" style="color:#8f2828;">¡FIN DE LA AVENTURA!</span>
        <div class="gameover-box">
          <h3>⚡ ¡CAÍDA AL ABISMO VENENOSO!</h3>
          <p>Al avanzar por el pasillo agrietado, las losas falsas se desmoronaron. El suelo cayó hacia las simas secretas y un trasgo fisgón os observa desde el borde riéndose con malicia.</p>
          <p>Pero ningún intrépido héroe se rinde sin luchar... <em>¿Sabrías encontrar los 3 puntos de fuga para trepar por las ruinas?</em></p>
        </div>
        <div class="enigma-box" style="border-left-color: #8f2828; margin-top:10px;">
          <strong>🧗 DESAFÍO DE LAS SIMAS VERDES:</strong>
          <p>Haz clic en la imagen para localizar: <strong>La Espada Clavada en el Muro</strong> (sirve de asidero a la izquierda), <strong>La Bolsa del Trasgo Fisgón</strong> (contiene cuerda) y <strong>La Escalinata de Caracol</strong> de escape al fondo.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Destino & Salvación</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="gameover-items-counter" class="diff-counter-badge" style="border-color:#8f2828; color:#8f2828;">Puntos de escape: 0 / 3</span>
        </div>
        <div id="gameover-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>TREPANDO HACIA EL BORDE:</strong>
          <p id="gameover-feedback-text">Inspecciona el pilar izquierdo, la espalda del trasgo verde y el arco con la escalera de caracol al fondo.</p>
        </div>
        <div id="gameover-ring-box" style="margin: 12px 0;"></div>
        <p class="decision-prompt" id="gameover-prompt">
          ¡Aún tienes la oportunidad de salvar a tus 5 camaradas! Elige tu destino.
        </p>
      `,
      gameOverChallenge: {
        id: "abyss_escape",
        title: "¡Escape de las Simas Subterráneas!",
        instruction: "Encuentra 3 puntos de apoyo en la estancia derrumbada para no caer al foso.",
        items: [
          {
            id: "abyss_sword",
            name: "Espada Clavada en el Pilar",
            desc: "¡Una espada clavada firmemente en la mampostería izquierda que ofrece un apoyo perfecto!",
            x: 6.5,
            y: 53.0,
            radius: 6.5
          },
          {
            id: "abyss_goblin_pouch",
            name: "Bolsa de Cuerda del Trasgo",
            desc: "¡La bolsa de cuero que cuelga del cinturón del trasgo contiene una soga con gancho!",
            x: 81.0,
            y: 75.0,
            radius: 6.5
          },
          {
            id: "abyss_spiral_stairs",
            name: "Escalinata de Caracol de Huida",
            desc: "¡Los escalones de piedra bajo el arco que ascienden hacia los niveles superiores!",
            x: 45.5,
            y: 41.0,
            radius: 7.0
          }
        ]
      },
      choices: [
        {
          text: "🔄 Volver al principio (Portada) y empezar de nuevo",
          target: "cover",
          pageDisplay: "Portada"
        }
      ]
    },

    // FRACASO 4: EMBOSCADA DE LA GUARDIA DE HIERRO
    "gameover_ambush": {
      id: "gameover_ambush",
      isGameOver: true,
      title: "¡Emboscada de la Guardia de Armaduras!",
      image: "assets/images/gameover_ambush.jpg",
      isSpread: false,
      textLeft: `
        <span class="page-badge" style="color:#8f2828;">¡FIN DE LA AVENTURA!</span>
        <div class="gameover-box">
          <h3>🛡️ ¡CAPTURADO POR LOS CENTINELAS!</h3>
          <p>Las armaduras del corredor cobraron vida bajando sus alabardas en un cerco impenetrable. Un pequeño trasgo espía observa desde su escondite tras la columna esperando ver tu rendición.</p>
          <p>Pero las armaduras mecánicas tienen fallas en sus goznes... <em>¿Sabrías encontrar los 3 puntos vulnerables para desatar el caos y escapar?</em></p>
        </div>
        <div class="enigma-box" style="border-left-color: #8f2828; margin-top:10px;">
          <strong>🗝️ DESAFÍO DEL DESVÍO DE LA GUARDIA:</strong>
          <p>Haz clic en la imagen para señalar: <strong>El Trasgo Espía</strong> (para asustarlo y que dé la falsa alarma), <strong>La Antorcha de la Pared</strong> (para tirarla y crear humo) y <strong>El Cerrojo Rúnico del Portón</strong> principal.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Destino & Salvación</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="gameover-items-counter" class="diff-counter-badge" style="border-color:#8f2828; color:#8f2828;">Puntos vulnerables: 0 / 3</span>
        </div>
        <div id="gameover-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>PLAN DE DISTRACCIÓN:</strong>
          <p id="gameover-feedback-text">Examina el pedestal de la columna izquierda, la tea de fuego en el muro y los cerrojos del gran portón.</p>
        </div>
        <div id="gameover-ring-box" style="margin: 12px 0;"></div>
        <p class="decision-prompt" id="gameover-prompt">
          ¡No abandones a tus camaradas en las mazmorras! Decide cómo proseguir.
        </p>
      `,
      gameOverChallenge: {
        id: "ambush_escape",
        title: "¡Distracción de la Guardia Mecánica!",
        instruction: "Descubre los 3 puntos de distracción para romper el cerco de las armaduras.",
        items: [
          {
            id: "ambush_goblin",
            name: "El Trasgo Espía Asustadizo",
            desc: "¡Rufo le ladra ferozmente; el trasgo chilla de pavor y confunde las órdenes de las armaduras!",
            x: 21.0,
            y: 81.0,
            radius: 6.5
          },
          {
            id: "ambush_torch",
            name: "Tea de Fuego en la Pared",
            desc: "¡Golpeas el soporte de la antorcha provocando una densa cortina de chispas y humo!",
            x: 16.5,
            y: 42.0,
            radius: 6.5
          },
          {
            id: "ambush_door_lock",
            name: "Cerrojo Rúnico del Portón",
            desc: "¡Los aros de bronce del portón se activan al tocar la runa abriendo una vía de huida!",
            x: 59.0,
            y: 52.0,
            radius: 7.0
          }
        ]
      },
      choices: [
        {
          text: "🔄 Volver al principio (Portada) y empezar de nuevo",
          target: "cover",
          pageDisplay: "Portada"
        }
      ]
    }
  }
};

CASTILLO_DATA.id = "castillo";
CASTILLO_DATA.tagline = "¡Infiltraos en el castillo del brujo y rescatad a vuestros 5 amigos!";
CASTILLO_DATA.cover = "assets/images/book_cover.jpg";
CASTILLO_DATA.difficulty = "⭐⭐";
CASTILLO_DATA.category = "Fantasía & Terror Clásico";
CASTILLO_DATA.themeColor = "#8f2828";
CASTILLO_DATA.badgeIcon = "🏰";
CASTILLO_DATA.companionName = "Rufo";
CASTILLO_DATA.companionIcon = "🐕";
CASTILLO_DATA.companionDesc = "Tu fiel sabueso con olfato infalible para detectar trampas y reliquias.";
CASTILLO_DATA.mechanics = ["🌀 Laberinto Trazado", "🍗 11 Trampas Ocultas", "⚔️ Búsqueda de Objetos", "🪞 6 Diferencias", "🎲 Combate de Dados"];



// =============================================================================
// LIBRO 2: EL CIRCO DE LOS HORRORES Y LAS ILUSIONES
// Ilustraciones exclusivas y objetos 100% reales en la imagen
// =============================================================================

const CIRCO_DATA = {
  id: "circo",
  title: "El Circo de los Horrores y las Ilusiones",
  subtitle: "Un libro-juego de carpas mágicas, autómatas, fieras mecánicas y espejos",
  tagline: "¡Romped el encantamiento del Maestro de Ceremonias y liberad a todos los artistas!",
  cover: "assets/images/cover_circus.jpg",
  difficulty: "⭐⭐⭐",
  category: "Misterio & Fantasía Nocturna",
  themeColor: "#6c2b71",
  badgeIcon: "🎪",
  companionName: "Pip la Marioneta",
  companionIcon: "🎭",
  salvationItemName: "Anillo Mágico / Amuleto de Cuerda de Pip",
  companionDesc: "Una acróbata mecánica de cuerda que conoce los secretos y pasajes ocultos de la carpa.",
  mechanics: ["🎪 Carpa de Fieras", "🔮 Oráculo de Seraphina", "🪞 Laberinto de Espejos", "🍭 Vagón de Dulces", "⚙️ Jaula de Autómatas", "💍 Anillo de Salvación"],
  totalFriends: 5,
  totalKeys: 5,
  
  nodes: {
    "cover": {
      id: "cover",
      type: "cover",
      pageNumbers: [1, 2],
      title: "El Circo de los Horrores y las Ilusiones",
      image: "assets/images/cover_circus.jpg",
      isSpread: false,
      textLeft: `
        <span class="page-badge">Portada & Prólogo</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:#6c2b71;">¡LA CARPA DE LA LUNA NEGRA!</h3>
        <p>Una densa niebla púrpura ha invadido los alrededores del pueblo al caer la noche. En medio del descampado se alza una gigantesca carpa a rayas rojas y doradas, adornada con faroles de fuego fatuo.</p>
        <p>Los aldeanos murmuran que quien entra y contempla el espectáculo del enigmático <strong>Maestro de Ceremonias</strong> pierde su reflejo y queda convertido en una marioneta de madera.</p>
        <p>Acompañado de <strong>Pip</strong>, una pequeña acróbata mecánica que logró conservar su libre albedrío, has decidido cruzar el umbral para liberar a los artistas y recuperar los <strong>5 Sellos de la Libertad</strong>.</p>
        <ul style="margin: 8px 0 8px 20px; font-size: 0.95rem; line-height: 1.6;">
          <li>🎪 <strong>La Gran Pista Central:</strong> Descifra los 3 secretos del ilusionista.</li>
          <li>🪞 <strong>El Laberinto de Espejos:</strong> Encuentra la puerta secreta y el autómata.</li>
          <li>🐾 <strong>La Menagerie Encantada:</strong> Salva al tigre y al león alado de engranajes.</li>
          <li>🔮 <strong>El Vagón de Seraphina:</strong> Consulta el oráculo de cartas y la bola de cristal.</li>
          <li>🍭 <strong>El Vagón Alquímico:</strong> Obtén el elixir disolvente de barniz.</li>
          <li>⚙️ <strong>La Jaula de los Autómatas:</strong> Halla la llave de cuerda dorada maestra.</li>
        </ul>
      `,
      textRight: `
        <span class="page-badge">Instrucciones & Consejos</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:#c9933b;">CONSEJOS DE PIP</h3>
        <p>🎭 <strong>Tu Aliada Acróbata:</strong> Haz clic directamente sobre los elementos que veas dibujados en cada ilustración panorámica.</p>
        <p>🔒 <strong>Regla de Oro:</strong> Al igual que en la fortaleza, los caminos sólo se revelarán cuando encuentres los objetos reales de cada escena.</p>
        <p>💍 <strong>El Anillo Mágico:</strong> Si caes en una trampa de marionetización, el Anillo Mágico te salvará <strong>una única vez</strong> deshaciendo tu último paso en falso.</p>
      `,
      choices: [
        {
          text: "🎪 Cruzar la cortina de terciopelo y entrar a la Gran Pista Central",
          target: "circus_main_tent",
          pageDisplay: "Págs. 3 - 4"
        }
      ]
    },

    "circus_main_tent": {
      id: "circus_main_tent",
      isObjectSearch: true,
      pageNumbers: [3, 4],
      title: "La Gran Pista de las Sombras",
      image: "assets/images/circus_main_tent.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 3</span>
        <p>Bajo la colosal cúpula de terciopelo ondean trapecios solitarios y candelabros que flotan en el aire sin cuerdas. El olor a caramelo y a pólvora de feria impregna la atmósfera.</p>
        <p>En el centro de la pista, el Maestro de Ceremonias te recibe con una reverencia teatral, abriendo en abanico una baraja de naipes que arde en fuego dorado.</p>
        <div class="enigma-box" style="border-left-color: #6c2b71;">
          <strong>🎪 BÚSQUEDA EN LA PISTA CENTRAL:</strong>
          <p>Para ganarte el respeto del Maestro y abrir los pasadizos, haz clic en la ilustración para encontrar: <strong>La Baraja de Naipes en Llamas</strong>, <strong>La Chistera con el Ojo Místico</strong> y <strong>El Trapecio en las Alturas</strong>.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 4</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#6c2b71; color:#6c2b71;">Secretos encontrados: 0 / 3</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>PISTA DE CIRCO:</strong>
          <p id="items-feedback-text">Fíjate en las manos del ilusionista, su sombrero de copa alto y las cuerdas del techo.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          ¡El Maestro aplaude con una sonrisa enigmática! Múltiples pasillos secretos se abren tras los cortinajes.
        </p>
      `,
      requiredItems: [
        {
          id: "tent_cards",
          name: "Baraja de Naipes en Llamas",
          desc: "¡Una baraja de naipes arcanos que despiden fuego dorado de ilusión en la mano del Maestro!",
          x: 44.0,
          y: 43.0,
          radius: 7.0
        },
        {
          id: "tent_hat",
          name: "Chistera con el Ojo Místico",
          desc: "¡El sombrero de copa alta bordado con el símbolo del ojo que todo lo observa!",
          x: 35.0,
          y: 32.0,
          radius: 6.0
        },
        {
          id: "tent_trapeze",
          name: "Trapecio Solitario en las Alturas",
          desc: "¡Un columpio de madera suspendido de las maromas de la cúpula superior!",
          x: 71.0,
          y: 29.0,
          radius: 7.5
        }
      ],
      choices: [
        {
          text: "🪞 Adentrarse en el Laberinto de los Mil Espejos",
          target: "circus_mirror_maze",
          pageDisplay: "Págs. 5 - 6"
        },
        {
          text: "🐾 Colarse en la Carpa de las Fieras Encantadas",
          target: "circus_menagerie",
          pageDisplay: "Págs. 7 - 8"
        },
        {
          text: "🍭 Subir la rampa hacia el Vagón del Alquimista de Dulces",
          target: "circus_candy_wagon",
          pageDisplay: "Págs. 11 - 12"
        },
        {
          text: "⚠️ Intentar arrebatarle la baraja de naipes al Maestro por sorpresa",
          target: "circus_gameover_ambush",
          pageDisplay: "¡Peligro!"
        }
      ]
    },

    "circus_mirror_maze": {
      id: "circus_mirror_maze",
      isObjectSearch: true,
      pageNumbers: [5, 6],
      title: "El Laberinto de los Mil Espejos",
      image: "assets/images/circus_mirror_maze.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 5</span>
        <p>Cientos de altos espejos con molduras doradas curvan la luz y multiplican tus reflejos hasta el infinito. En algunos cristales te ves como un gigante y en otros tu reflejo se mueve con retraso.</p>
        <p>Para no quedar atrapado en este laberinto visual, debes localizar los <strong>3 elementos clave de orientación</strong> que guían hacia la salida.</p>
        <div class="enigma-box" style="border-left-color: #6c2b71;">
          <strong>🪞 MISIÓN: LOS 3 SECRETOS DEL LABERINTO:</strong>
          <p>Haz clic en la imagen para señalar: <strong>El Autómata Sentado en el Marco Superior</strong>, <strong>La Puerta Secreta Iluminada al Fondo</strong> y <strong>El Farol de Mano Encendido</strong>.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 6</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#6c2b71; color:#6c2b71;">Pistas encontradas: 0 / 3</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>GALERÍA DE CRISTAL:</strong>
          <p id="items-feedback-text">Examina el marco dorado arriba a la derecha, el arco del pasillo central y la lámpara que lleva la niña.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          ¡Los reflejos engañosos se disipan! La puerta del fondo se abre permitiendo avanzar.
        </p>
      `,
      requiredItems: [
        {
          id: "mirror_puppet",
          name: "Autómata Sentado en el Marco",
          desc: "¡Una marioneta mecánica de madera y engranajes sentada sobre la moldura dorada superior!",
          x: 87.0,
          y: 23.0,
          radius: 7.0
        },
        {
          id: "mirror_door",
          name: "Puerta Secreta Iluminada",
          desc: "¡Una puerta entreabierta de la que brota una cálida luz dorada de escape!",
          x: 73.0,
          y: 47.0,
          radius: 7.0
        },
        {
          id: "mirror_lantern",
          name: "Farol de Mano Encendido",
          desc: "¡La linterna cuya llama disipa los reflejos falsos e ilumina el camino!",
          x: 65.0,
          y: 80.0,
          radius: 6.5
        }
      ],
      choices: [
        {
          text: "🐾 Cruzar la puerta secreta hacia la Carpa de las Fieras",
          target: "circus_menagerie",
          pageDisplay: "Págs. 7 - 8"
        },
        {
          text: "🍭 Dirigirse por el atajo hacia el Vagón Alquímico de Dulces",
          target: "circus_candy_wagon",
          pageDisplay: "Págs. 11 - 12"
        },
        {
          text: "⚙️ Avanzar directo a la Jaula de los Autómatas Mecánicos",
          target: "circus_clockwork_cage",
          pageDisplay: "Págs. 13 - 14"
        }
      ]
    },

    "circus_menagerie": {
      id: "circus_menagerie",
      isObjectSearch: true,
      pageNumbers: [7, 8],
      title: "La Menagerie de Fieras Mecánicas",
      image: "assets/images/circus_menagerie.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 7</span>
        <p>Una majestuosa carpa lateral donde reposan las fieras más asombrosas del circo encerradas en jaulas barrocas de bronce. No son animales comunes, sino prodigios articulados de orfebrería y magia viva.</p>
        <p>Pip señala en susurros: <em>—«Si liberamos a las fieras guardianas sin alterar sus resortes, ellas nos abrirán el carromato de la vidente.»</em></p>
        <div class="enigma-box" style="border-left-color: #6c2b71;">
          <strong>🐾 DESAFÍO DE LAS TRES FIERAS PRODIGIOSAS:</strong>
          <p>Haz clic en la imagen para señalar: <strong>El Tigre Mecánico de Latón</strong> (en la jaula superior izquierda), <strong>El León Alado de Cuerda</strong> (en la jaula central) y <strong>La Pantera Estelar Luminosa</strong> (en la jaula baja).</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 8</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#6c2b71; color:#6c2b71;">Fieras aseguradas: 0 / 3</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>JAULAS BARROCAS:</strong>
          <p id="items-feedback-text">Examina las jaulas doradas: localiza al tigre con llave de cuerda en el lomo, al león con alas y a la pantera dormida con cuerpo de constelaciones.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          ¡Las fieras rugen con simpatía y baten sus alas de bronce! Un cerrojo cruje y la salida queda libre.
        </p>
      `,
      requiredItems: [
        {
          id: "menagerie_tiger",
          name: "Tigre Mecánico de Latón",
          desc: "¡Un tigre a rayas con placas doradas articuladas y una gran llave de cuerda en el lomo!",
          x: 36.5,
          y: 48.0,
          radius: 8.5
        },
        {
          id: "menagerie_lion",
          name: "León Alado de Cuerda",
          desc: "¡Un noble león coronado con alas de águila de cobre y ojos de amatista!",
          x: 60.0,
          y: 50.0,
          radius: 8.5
        },
        {
          id: "menagerie_panther",
          name: "Pantera Estelar Luminosa",
          desc: "¡Una pantera cósmica dormida cuyo pelaje refleja constelaciones azules brillantes!",
          x: 40.0,
          y: 80.0,
          radius: 8.5
        }
      ],
      choices: [
        {
          text: "🔮 Entrar en el Carromato de Madame Seraphina",
          target: "circus_fortune_wagon",
          pageDisplay: "Págs. 9 - 10"
        },
        {
          text: "🍭 Seguir el rastro de azúcar hacia el Vagón Alquímico",
          target: "circus_candy_wagon",
          pageDisplay: "Págs. 11 - 12"
        },
        {
          text: "⚠️ Abrir la jaula del tigre mecánico sin desactivar su cuerda",
          target: "circus_gameover_ambush",
          pageDisplay: "¡Peligro!"
        }
      ]
    },

    "circus_fortune_wagon": {
      id: "circus_fortune_wagon",
      isObjectSearch: true,
      pageNumbers: [9, 10],
      title: "El Carromato de Madame Seraphina",
      image: "assets/images/circus_fortune_wagon.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 9</span>
        <p>El interior del carromato gitano es cálido y huele a canela, mirra y cera de velas. Cojines de seda bordada cubren los bancos y frascos de hierbas decoran los estantes.</p>
        <p>Frente a ti se sienta Madame Seraphina, una autómata adivina vestida con túnicas persas y turbante con pluma de pavo real. Con ademán pausado baraja los arcanos de la fortuna.</p>
        <div class="enigma-box" style="border-left-color: #6c2b71;">
          <strong>🔮 EL ORÁCULO DE LOS TRES DESTINOS:</strong>
          <p>Para que la vidente revele el secreto del candado del circo, haz clic en: <strong>La Bola de Cristal Radiante</strong> (sobre la mesa), <strong>Las Cartas del Tarot del Destino</strong> y <strong>La Vidente Mecánica con Turbante</strong>.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 10</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#6c2b71; color:#6c2b71;">Augurios leídos: 0 / 3</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>MESA DEL DESTINO:</strong>
          <p id="items-feedback-text">Fíjate en el resplandor cálido de la esfera de adivinación, las cartas extendidas en abanico y la cabeza tocada con pluma de Seraphina.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          ¡La bola de cristal proyecta la silueta del Gran Reloj y la llave maestra! Seraphina asiente en silencio.
        </p>
      `,
      requiredItems: [
        {
          id: "fortune_crystal_ball",
          name: "Bola de Cristal Radiante",
          desc: "¡Una esfera de cuarzo luminoso sobre un pedestal de bronce que muestra el futuro!",
          x: 56.0,
          y: 63.0,
          radius: 7.5
        },
        {
          id: "fortune_tarot",
          name: "Cartas del Tarot del Destino",
          desc: "¡Los naipes ilustrados con soles, lunas y torres desplegados sobre el mantel de damasco!",
          x: 65.0,
          y: 72.0,
          radius: 7.5
        },
        {
          id: "fortune_automaton",
          name: "Vidente Mecánica con Turbante",
          desc: "¡Madame Seraphina, la prodigiosa figura autómata de rostro sereno y turbante enjoyado!",
          x: 70.0,
          y: 43.0,
          radius: 8.0
        }
      ],
      choices: [
        {
          text: "⚙️ Avanzar con la profecía a la Gran Jaula de los Autómatas",
          target: "circus_clockwork_cage",
          pageDisplay: "Págs. 13 - 14"
        },
        {
          text: "🍭 Visitar el taller del anciano artesano de dulces",
          target: "circus_candy_wagon",
          pageDisplay: "Págs. 11 - 12"
        }
      ]
    },

    "circus_candy_wagon": {
      id: "circus_candy_wagon",
      isObjectSearch: true,
      pageNumbers: [11, 12],
      title: "El Vagón Alquímico de Dulces y Brebajes",
      image: "assets/images/circus_candy_wagon.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 11</span>
        <p>Un carromato de madera labrada repleto de tarros con caramelos fosforescentes y algodones de azúcar que levitan flotando en el aire. El viejo artesano relojero trabaja concentrado en su mesa.</p>
        <p>Para conseguir el elixir que disuelve el barniz de marioneta, debéis encontrar <strong>3 Creaciones Mágicas del Taller</strong>.</p>
        <div class="enigma-box" style="border-left-color: #c9933b;">
          <strong>🍭 BÚSQUEDA EN EL TALLER DEL ARTESANO:</strong>
          <p>Haz clic en la imagen para encontrar: <strong>El Algodón de Azúcar Flotante</strong>, <strong>El Pájaro Mecánico en la Mesa</strong> y <strong>El Gran Reloj de Engranajes de Pared</strong>.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 12</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#c9933b; color:#c9933b;">Creaciones halladas: 0 / 3</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>MESA Y ESTANTES DEL VAGÓN:</strong>
          <p id="items-feedback-text">Busca las nubes de azúcar que flotan solas, la mesa donde trabaja el anciano y las ruedas dentadas de la pared.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          ¡El anciano sonríe y os entrega el frasco de disolvente! Las cuerdas de marioneta ya no os afectarán.
        </p>
      `,
      requiredItems: [
        {
          id: "candy_cotton",
          name: "Algodón de Azúcar Flotante",
          desc: "¡Una nube de azúcar rosada y celeste suspendida en el aire como por arte de magia!",
          x: 35.0,
          y: 37.0,
          radius: 7.5
        },
        {
          id: "candy_bird",
          name: "Pájaro Mecánico en la Mesa",
          desc: "¡Una avecilla de hojalata y ruedas que el artesano ensambla cuidadosamente con un punzón!",
          x: 74.0,
          y: 63.0,
          radius: 6.5
        },
        {
          id: "candy_clock",
          name: "Gran Reloj de Engranajes de Pared",
          desc: "¡Un fabuloso conjunto de ruedas dentadas doradas que marcan el compás del circo!",
          x: 78.0,
          y: 17.0,
          radius: 10.0
        }
      ],
      choices: [
        {
          text: "⚙️ Continuar hacia la Gran Jaula de los Autómatas",
          target: "circus_clockwork_cage",
          pageDisplay: "Págs. 13 - 14"
        },
        {
          text: "🔮 Volver al carromato de la vidente para descifrar el frasco",
          target: "circus_fortune_wagon",
          pageDisplay: "Págs. 9 - 10"
        },
        {
          text: "⚠️ Tocar la vasija con veneno negro bajo el estante",
          target: "circus_gameover_puppet",
          pageDisplay: "¡Peligro!"
        }
      ]
    },

    "circus_clockwork_cage": {
      id: "circus_clockwork_cage",
      isObjectSearch: true,
      pageNumbers: [13, 14],
      title: "La Jaula de los Autómatas y el Corazón Mecánico",
      image: "assets/images/circus_clockwork_cage.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 13</span>
        <p>Entre los bastidores del circo se halla una inmensa cámara subterránea con jaulas doradas donde reposan los artistas transformados en marionetas articuladas.</p>
        <p>En el centro de la sala, sobre una mesa labrada, un muñeco bufón arlequín custodia el cojín con la llave maestra. Pip señala emocionada:</p>
        <div class="enigma-box" style="border-left-color: #6c2b71;">
          <strong>⚙️ MISIÓN: LIBERACIÓN DE LOS ARTISTAS:</strong>
          <p>Para romper el candado maestro y devolver a todos a su forma humana, localiza en la escena: <strong>La Llave de Cuerda Dorada</strong>, <strong>El Bufón Arlequín en la Mesa</strong> y <strong>La Jaula Colgante con la Marioneta</strong>.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 14</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#6c2b71; color:#6c2b71;">Piezas maestras: 0 / 3</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>MESA DE LOS AUTÓMATAS:</strong>
          <p id="items-feedback-text">Señala el cojín de terciopelo carmesí, el muñeco sentado a su lado y una de las jaulas que cuelgan del techo.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          ¡Un campanilleo triunfal resuena por toda la carpa! Las cuerdas se deshacen y los artistas despiertan sonrientes.
        </p>
      `,
      requiredItems: [
        {
          id: "cage_golden_key",
          name: "Llave de Cuerda Dorada",
          desc: "¡La pesada llave con empuñadura solar sobre el cojín carmesí que desactiva todos los mecanismos!",
          x: 51.0,
          y: 73.0,
          radius: 7.0
        },
        {
          id: "cage_harlequin",
          name: "Bufón Arlequín en la Mesa",
          desc: "¡Un muñeco con gorro de cascabeles y traje de rombos sentado junto al cojín!",
          x: 66.0,
          y: 63.0,
          radius: 8.0
        },
        {
          id: "cage_hanging",
          name: "Jaula Colgante con la Marioneta",
          desc: "¡Una de las jaulas de bronce suspendidas donde esperan los acróbatas prisioneros!",
          x: 32.0,
          y: 33.0,
          radius: 7.5
        }
      ],
      choices: [
        {
          text: "🏆 Usar la llave de cuerda dorada y liberar a todos los artistas",
          target: "circus_victory",
          pageDisplay: "¡Victoria!"
        }
      ]
    },

    "circus_victory": {
      id: "circus_victory",
      pageNumbers: [15, 16],
      title: "¡El Gran Triunfo de la Libertad!",
      image: "assets/images/circus_victory.jpg",
      isSpread: false,
      textLeft: `
        <span class="page-badge" style="color:#2c6e49;">¡VICTORIA TRIUNFAL!</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:#2c6e49;">¡EL HECHIZO SE HA ROTO!</h3>
        <p>¡El repicar de la gran llave dorada hace estallar el cielo nocturno en una lluvia de fuegos artificiales de color violeta y oro!</p>
        <p>Acróbatas, malabaristas, trapecistas y payasos recobran su carne y hueso con lágrimas de felicidad. El Maestro de Ceremonias se quita el sombrero reconociendo su derrota con una cortesía y se desvanece en una voluta de humo.</p>
        <div class="victory-box">
          <strong>🎉 ¡HAS COMPLETADO «EL CIRCO DE LOS HORRORES»!</strong>
          <p>Pip te entrega una cinta dorada de honor: <em>—«¡Nos has devuelto la vida y la risa! ¡Eres el mejor explorador de la feria!»</em></p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Epílogo & Regreso</span>
        <p>Los artistas del circo aplauden en corro mientras el público del pueblo entra festejando el amanecer.</p>
        <p class="decision-prompt">¿Deseas volver a jugar o elegir otro libro de la biblioteca?</p>
        <div class="choices-container">
          <button class="choice-btn" id="btn-victory-replay" onclick="gameEngine.restartGame()">
            🔄 Volver a jugar esta aventura
          </button>
          <button class="choice-btn" id="btn-victory-shelf" style="border-color:var(--accent-gold); font-weight:700;" onclick="gameEngine.showLibraryView()">
            🏛️ Volver a la Biblioteca (5 Libros)
          </button>
        </div>
      `,
      choices: []
    },

    "circus_gameover_puppet": {
      id: "circus_gameover_puppet",
      isGameOver: true,
      title: "¡Atrapado en los Hilos!",
      image: "assets/images/circus_gameover_puppet.jpg",
      textLeft: `
        <span class="page-badge" style="color:var(--accent-red);">¡FINAL FATAL!</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:var(--accent-red);">¡CONVERTIDO EN MARIONETA!</h3>
        <p>Un chasquido siniestro resuena en las tablas. Tus brazos y piernas se vuelven de madera barnizada y finos hilos de plata descienden de la oscuridad atando tus muñecas.</p>
        <div class="enigma-box" style="border-left-color: var(--accent-red);">
          <strong>⚠️ TRAMPA DE LA CUERDA:</strong>
          <p>Has tocado un objeto maldito del Maestro sin protección. Si posees el <strong>Anillo Mágico / Amuleto de Cuerda</strong>, aún puedes romper los hilos y regresar a salvo.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Destino & Salvación</span>
        <div class="gameover-box">
          <p>Quedarás colgado en la vitrina de los muñecos hasta que otro explorador se atreva a cruzar la carpa... ¡a menos que invoques el poder de salvación!</p>
        </div>
        <div id="gameover-ring-box" style="margin: 12px 0;"></div>
        <p class="decision-prompt" id="gameover-prompt">
          Elige una opción a continuación: usa el <strong>Anillo Mágico de Salvación</strong> para liberarte o reintenta desde la decisión previa.
        </p>
      `,
      choices: []
    },

    "circus_gameover_ambush": {
      id: "circus_gameover_ambush",
      isGameOver: true,
      title: "¡La Trampa de los Naipes!",
      image: "assets/images/circus_gameover_ambush.jpg",
      textLeft: `
        <span class="page-badge" style="color:var(--accent-red);">¡FINAL FATAL!</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:var(--accent-red);">¡EMBOSCADA DE SOMBRAS!</h3>
        <p>Los naipes llameantes del ilusionista giran en un torbellino vertiginoso que te ciega. Cuando abres los ojos, el suelo ha cedido bajo tus pies y una red de sombras te apresa.</p>
        <div class="enigma-box" style="border-left-color: var(--accent-red);">
          <strong>⚠️ ILUSIÓN MORTAL:</strong>
          <p>El Maestro de Ceremonias ríe en la penumbra. ¡Solo un artefacto de salvación mágica puede cortar el vórtice de naipes y devolverte a la pista!</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Destino & Salvación</span>
        <div class="gameover-box">
          <p>El foso de los espejos rotos te atrapa en una ilusión eterna... ¡a menos que invoques el rescate del Anillo Mágico!</p>
        </div>
        <div id="gameover-ring-box" style="margin: 12px 0;"></div>
        <p class="decision-prompt" id="gameover-prompt">
          Elige una opción a continuación: invoca tu salvación mágica o reintenta la decisión anterior.
        </p>
      `,
      choices: []
    }
  }
};

const CUEVA_DATA = {
  id: "cueva",
  title: "La Cueva del Tiempo y los Cristales Eternos",
  subtitle: "Un libro-juego de saltos temporales, dinosaurios, pirámides y eras perdidas",
  tagline: "¡Encuentra los fragmentos del Cronómetro Solar y salva la línea del tiempo!",
  cover: "assets/images/cover_cave_of_time.jpg",
  difficulty: "⭐⭐⭐",
  category: "Ciencia Ficción & Aventura Retro",
  themeColor: "#275278",
  badgeIcon: "⏳",
  companionName: "Crono el Duende Relojero",
  companionIcon: "🕰️",
  salvationItemName: "Anillo Mágico / Reloj de Retorno de Crono",
  companionDesc: "Un simpático duendecillo con monóculo y brújula que sabe detectar las fallas del espacio-tiempo.",
  mechanics: ["🦕 Era Jurásica", "🏺 Antiguo Egipto", "❄️ Era Glacial", "🏰 Época Medieval", "🤖 Ciudad del Año 3000", "💍 Anillo de Salvación"],
  totalFriends: 5,
  totalKeys: 5,

  nodes: {
    "cover": {
      id: "cover",
      type: "cover",
      pageNumbers: [1, 2],
      title: "La Cueva del Tiempo y los Cristales Eternos",
      image: "assets/images/cover_cave_of_time.jpg",
      isSpread: false,
      textLeft: `
        <span class="page-badge">Portada & Prólogo</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:#275278;">¡EL CRONÓMETRO FRACTURADO!</h3>
        <p>En las profundidades del Macizo de los Ecos existe una caverna mística donde el tiempo no fluye en línea recta, sino como un río subterráneo que desemboca en todas las eras a la vez.</p>
        <p>Una tormenta de taquiones ha destrozado el <strong>Cronómetro Solar de los Ancestros</strong>, esparciendo sus 5 engranajes sagrados a lo largo de la historia.</p>
        <p>Acompañado por <strong>Crono</strong>, un sabio duende relojero capaz de orientarse en las corrientes temporales, debes cruzar los vórtices, señalar los elementos clave de cada era y recomponer el artefacto.</p>
        <ul style="margin: 8px 0 8px 20px; font-size: 0.95rem; line-height: 1.6;">
          <li>🌀 <strong>Sala de los Portales:</strong> Elige tu salto en el mapa de cuarzo.</li>
          <li>🦕 <strong>El Valle Jurásico (-65M):</strong> Encuentra al pterodáctilo, el volcán y los braquiosaurios.</li>
          <li>🏺 <strong>El Valle de las Pirámides (-2500 a.C.):</strong> Señala el obelisco turquesa y la esfinge.</li>
          <li>❄️ <strong>La Era Glacial (-20.000):</strong> Descubre a los mamuts lanudos y al tigre dientes de sable.</li>
          <li>🏰 <strong>El Torneo Medieval (1240):</strong> Identifica los escudos heráldicos de los caballeros.</li>
          <li>🤖 <strong>La Metrópolis del Futuro (Año 3000):</strong> Localiza los drones esféricos y las agujas de cristal.</li>
        </ul>
      `,
      textRight: `
        <span class="page-badge">Instrucciones & Consejos</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:#c9933b;">CONSEJOS DE CRONO</h3>
        <p>🕰️ <strong>Tu Compañero Relojero:</strong> Fíjate bien en las criaturas, estandartes y naves dibujadas en cada ilustración panorámica.</p>
        <p>🔒 <strong>Llaves Temporales:</strong> Deberás señalar los 3 elementos clave de cada época para sincronizar el portal de regreso.</p>
        <p>💍 <strong>El Anillo Mágico:</strong> Si caes en una paradoja temporal o un abismo cósmico, el anillo revertirá los segundos salvándote la vida una vez.</p>
      `,
      choices: [
        {
          text: "⏳ Encender la antorcha y descender a la Sala del Mapa Temporal",
          target: "cave_map_room",
          pageDisplay: "Págs. 3 - 4"
        }
      ]
    },

    "cave_map_room": {
      id: "cave_map_room",
      pageNumbers: [3, 4],
      title: "La Sala del Mapa Temporal y los Cristales",
      image: "assets/images/cave_map_room.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 3</span>
        <p>La caverna se ensancha en una bóveda titánica iluminada por colosales estalagmitas de amatista y cuarzo púrpura. En el centro descansa un monolito de cuarzo tallado con cartas astrales y cinco vórtices palpitantes.</p>
        <p>Crono consulta su reloj de arena: <em>—«¡Mira! Los vórtices están girando en la roca viva:»</em></p>
        <div class="enigma-box" style="border-left-color: #275278;">
          <strong>🌀 LOS PORTALES DE LAS ERAS:</strong>
          <p>Elige hacia qué era histórica saltar para recuperar las piezas del Cronómetro Solar.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 4</span>
        <p>¿A qué época decides viajar en primer lugar para hallar los fragmentos?</p>
        <p class="decision-prompt">Selecciona tu salto temporal:</p>
      `,
      choices: [
        {
          text: "🦕 Cruzar el Vórtice Verde hacia el Valle Jurásico (-65.000.000 años)",
          target: "cave_dino_era",
          pageDisplay: "Págs. 5 - 6"
        },
        {
          text: "🏺 Cruzar el Vórtice Solar hacia el Antiguo Egipto (-2500 a.C.)",
          target: "cave_egypt_era",
          pageDisplay: "Págs. 7 - 8"
        },
        {
          text: "❄️ Cruzar el Vórtice de Escarcha hacia la Era Glacial (-20.000 años)",
          target: "cave_ice_age",
          pageDisplay: "Págs. 9 - 10"
        },
        {
          text: "🏰 Cruzar el Vórtice Dorado hacia el Torneo Medieval (Año 1240)",
          target: "cave_medieval_era",
          pageDisplay: "Págs. 11 - 12"
        },
        {
          text: "🤖 Cruzar el Vórtice Azul hacia la Metrópolis del Futuro (Año 3000)",
          target: "cave_future_era",
          pageDisplay: "Págs. 13 - 14"
        },
        {
          text: "⚠️ Tocar el cristal negro resquebrajado del suelo",
          target: "cave_gameover_void",
          pageDisplay: "¡Peligro!"
        }
      ],
      hotspots: [
        { x: 16.5, y: 49.0, label: "Vórtice Verde Jurásico", desc: "La entrada a la jungla de helechos gigantes y grandes saurios." },
        { x: 35.5, y: 48.0, label: "Vórtice Dorado Medieval", desc: "El portal hacia los castillos de piedra y torneos de justas." },
        { x: 58.0, y: 46.0, label: "Monolito de Cuarzo Central", desc: "El monumento ancestral donde se sincronizan todas las corrientes temporales." },
        { x: 83.0, y: 48.0, label: "Vórtice Azul Futurista", desc: "El puente de luz hacia la civilización de cristal del año 3000." }
      ]
    },

    "cave_dino_era": {
      id: "cave_dino_era",
      isObjectSearch: true,
      pageNumbers: [5, 6],
      title: "El Valle Jurásico de los Gigantes",
      image: "assets/images/cave_dino_era.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 5</span>
        <p>El aire es denso, húmedo y huele a tierra virgen y vegetación tropical. Palmeras colosales y helechos arborescentes enmarcan una laguna cristalina alimentada por fumarolas volcánicas.</p>
        <p>A lo lejos, una manada de cuellos largos bebe pacíficamente mientras un reptil alado planea sobre vuestras cabezas.</p>
        <div class="enigma-box" style="border-left-color: #275278;">
          <strong>🦕 BÚSQUEDA EN EL VALLE PREHISTÓRICO:</strong>
          <p>Para recuperar el <strong>Engranaje de Esmeralda</strong>, haz clic en la ilustración para encontrar: <strong>El Pterodáctilo en Vuelo</strong>, <strong>El Gran Volcán Humeante</strong> y <strong>El Braquiosaurio en la Orilla</strong>.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 6</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#275278; color:#275278;">Objetivos confirmados: 0 / 3</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>VALLE DEL JURÁSICO:</strong>
          <p id="items-feedback-text">Mira al cielo entre las nubes, la montaña cónica de lava al fondo y los gigantes herbívoros junto al agua.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          ¡Un destello esmeralda brota de la arena volcánica! Crono guarda el primer engranaje temporal.
        </p>
      `,
      requiredItems: [
        {
          id: "dino_pterodactyl",
          name: "Pterodáctilo en Vuelo",
          desc: "¡El reptil volador planeando con sus alas membranosas bajo el cielo jurásico!",
          x: 36.0,
          y: 24.0,
          radius: 9.0
        },
        {
          id: "dino_volcano",
          name: "Gran Volcán Humeante",
          desc: "¡El coloso de roca que expulsa una densa columna de ceniza hacia la estratosfera!",
          x: 67.0,
          y: 29.0,
          radius: 8.5
        },
        {
          id: "dino_brachio",
          name: "Braquiosaurio en la Orilla",
          desc: "¡El gigantesco herbívoro de cuello largo pastando apaciblemente junto al agua turquesa!",
          x: 74.0,
          y: 62.0,
          radius: 10.0
        }
      ],
      choices: [
        {
          text: "🏺 Cruzar la falla temporal hacia las arenas del Antiguo Egipto",
          target: "cave_egypt_era",
          pageDisplay: "Págs. 7 - 8"
        },
        {
          text: "🏰 Saltar a través de la grieta hacia el Gran Torneo Medieval",
          target: "cave_medieval_era",
          pageDisplay: "Págs. 11 - 12"
        },
        {
          text: "⚠️ Intentar robar un huevo del nido de tiranosaurio",
          target: "cave_gameover_collapse",
          pageDisplay: "¡Peligro!"
        }
      ]
    },

    "cave_egypt_era": {
      id: "cave_egypt_era",
      isObjectSearch: true,
      pageNumbers: [7, 8],
      title: "El Valle de las Pirámides y la Esfinge de Oro",
      image: "assets/images/cave_egypt_era.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 7</span>
        <p>El aire cálido del desierto os envuelve bajo un cielo crepuscular de dos lunas crecientes. Ante vosotros se alza la imponente silueta de la Gran Esfinge custodiando las colosales Pirámides de Giza.</p>
        <p>A orillas del Río Nilo, un antiguo obelisco de granito pulido brilla con jeroglíficos de luz turquesa que marcan las horas astronómicas.</p>
        <div class="enigma-box" style="border-left-color: #275278;">
          <strong>🏺 MISIÓN EN EL VALLE DE LOS FARAONES:</strong>
          <p>Para conseguir el <strong>Engranaje de Lapislázuli</strong>, señala en la escena: <strong>El Obelisco del Tiempo con Jeroglíficos Turquesa</strong>, <strong>La Colosal Esfinge de Piedra</strong> y <strong>La Falúa Egipcia Navegando por el Nilo</strong>.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 8</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#275278; color:#275278;">Reliquias localizadas: 0 / 3</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>ORILLAS DEL NILO:</strong>
          <p id="items-feedback-text">Examina el monolito rúnico en primer plano, el rostro milenario de la esfinge y la embarcación con vela al viento.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          ¡El obelisco emite una suave melodía y libera el engranaje egipcio! El tiempo vuelve a fluir.
        </p>
      `,
      requiredItems: [
        {
          id: "egypt_obelisk",
          name: "Obelisco del Tiempo con Jeroglíficos Turquesa",
          desc: "¡La aguja de piedra sagrada grabada con símbolos luminosos que canalizan la energía cósmica!",
          x: 64.0,
          y: 52.0,
          radius: 8.5
        },
        {
          id: "egypt_sphinx",
          name: "Colosal Esfinge de Piedra",
          desc: "¡El monumento ancestral con cuerpo de león y rostro regio contemplando las arenas eternas!",
          x: 40.0,
          y: 35.0,
          radius: 9.0
        },
        {
          id: "egypt_felucca",
          name: "Falúa Egipcia Navegando por el Nilo",
          desc: "¡La barca tradicional de madera y vela blanca triangular que surca las aguas sagradas!",
          x: 15.0,
          y: 69.0,
          radius: 8.0
        }
      ],
      choices: [
        {
          text: "❄️ Atravesar el arco del Nilo hacia el Valle de los Mamuts de Hielo",
          target: "cave_ice_age",
          pageDisplay: "Págs. 9 - 10"
        },
        {
          text: "🤖 Seguir el destello del obelisco hacia la Ciudad del Futuro",
          target: "cave_future_era",
          pageDisplay: "Págs. 13 - 14"
        },
        {
          text: "⚠️ Beber agua del remolino oscuro del río sagrado",
          target: "cave_gameover_void",
          pageDisplay: "¡Peligro!"
        }
      ]
    },

    "cave_ice_age": {
      id: "cave_ice_age",
      isObjectSearch: true,
      pageNumbers: [9, 10],
      title: "La Era Glacial y el Valle de los Mamuts",
      image: "assets/images/cave_ice_age.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 9</span>
        <p>Un viento gélido os golpea el rostro. Ante vosotros se abre un sobrecogedor cañón de glaciares bajo una resplandeciente aurora boreal esmeralda y violeta.</p>
        <p>Una manada de colosales mamuts lanudos avanza pesadamente por la cresta nevada, mientras un sigiloso felino prehistórico vigila desde las rocas.</p>
        <div class="enigma-box" style="border-left-color: #275278;">
          <strong>❄️ DESAFÍO EN LA CUMBRE HELADA:</strong>
          <p>Para recuperar el <strong>Engranaje de Diamante de Hielo</strong>, localiza: <strong>El Tigre Dientes de Sable Acechando</strong>, <strong>El Mamut Lanudo con Grandes Colmillos</strong> y <strong>El Vórtice Helado de Cristal Azul</strong>.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 10</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#275278; color:#275278;">Huellas confirmadas: 0 / 3</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>VALLE DEL HIELO:</strong>
          <p id="items-feedback-text">Fíjate en el felino sobre el peñasco a la izquierda, el gran mamut que guía la manada y la cueva de hielo luminosa abajo a la derecha.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          ¡El portal de hielo vibra y os revela el fragmento congelado! La temperatura se estabiliza.
        </p>
      `,
      requiredItems: [
        {
          id: "ice_smilodon",
          name: "Tigre Dientes de Sable Acechando",
          desc: "¡El temible depredador pleistoceno de largos caninos curvados posado en la cornisa nevada!",
          x: 18.0,
          y: 67.0,
          radius: 8.5
        },
        {
          id: "ice_mammoth",
          name: "Mamut Lanudo con Grandes Colmillos",
          desc: "¡El majestuoso gigante de espeso pelaje pardo que lidera la marcha sobre la nieve!",
          x: 77.0,
          y: 38.0,
          radius: 9.5
        },
        {
          id: "ice_cave_portal",
          name: "Vórtice Helado de Cristal Azul",
          desc: "¡La gruta de estalactitas transparentes de la que emana una luz celeste resplandeciente!",
          x: 78.0,
          y: 77.0,
          radius: 9.0
        }
      ],
      choices: [
        {
          text: "🤖 Saltar al portal de hielo azul hacia la Metrópolis del Futuro",
          target: "cave_future_era",
          pageDisplay: "Págs. 13 - 14"
        },
        {
          text: "🏰 Refugiarse en el túnel templado hacia el Torneo Medieval",
          target: "cave_medieval_era",
          pageDisplay: "Págs. 11 - 12"
        },
        {
          text: "⚠️ Enfrentarse cara a cara al tigre dientes de sable",
          target: "cave_gameover_collapse",
          pageDisplay: "¡Peligro!"
        }
      ]
    },

    "cave_medieval_era": {
      id: "cave_medieval_era",
      isObjectSearch: true,
      pageNumbers: [11, 12],
      title: "El Torneo de los Caballeros de Acero",
      image: "assets/images/cave_medieval_era.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 11</span>
        <p>El estruendo de fanfarrias, cascos de caballos y aplausos multitudinarios os da la bienvenida. Dos caballeros con armaduras completas de placas cabalgan lanza en ristre en la liza de combate.</p>
        <p>Estandartes con dragones, leones y grifos ondean sobre los graderíos de madera y las torres almenadas de la fortaleza.</p>
        <div class="enigma-box" style="border-left-color: #275278;">
          <strong>🏰 DESAFÍO DEL TORNEO MEDIEVAL:</strong>
          <p>Para conseguir el <strong>Engranaje de Rubí Heráldico</strong>, señala en la escena: <strong>El Escudo Azul con el Grifo</strong>, <strong>El Casco con Penacho de Plumas</strong> y <strong>El Estandarte Rojo del León Dorado</strong>.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 12</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#275278; color:#275278;">Blasones identificados: 0 / 3</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>CAMPO DE JUSTAS:</strong>
          <p id="items-feedback-text">Observa el escudo del jinete de la derecha, su yelmo emplumado y el pabellón de madera a la izquierda.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          ¡El heraldo anuncia vuestra victoria de ingenio y entrega el engranaje medieval!
        </p>
      `,
      requiredItems: [
        {
          id: "med_shield",
          name: "Escudo Azul con el Grifo",
          desc: "¡El escudo ovalado con la mítica criatura alada que defiende al caballero en la justa!",
          x: 67.0,
          y: 54.0,
          radius: 6.5
        },
        {
          id: "med_helmet",
          name: "Casco con Penacho de Plumas",
          desc: "¡El yelmo de acero bruñido coronado con elegantes plumas celestes y blancas!",
          x: 66.0,
          y: 43.0,
          radius: 6.0
        },
        {
          id: "med_banner",
          name: "Estandarte Rojo del León Dorado",
          desc: "¡El pendón de terciopelo encarnado con el felino rampante en el palco de honor!",
          x: 7.0,
          y: 24.0,
          radius: 6.5
        }
      ],
      choices: [
        {
          text: "🤖 Entrar en el vórtice de la torre hacia la Ciudad del Año 3000",
          target: "cave_future_era",
          pageDisplay: "Págs. 13 - 14"
        },
        {
          text: "❄️ Escapar por el pasadizo hacia las cumbres nevadas de la Era Glacial",
          target: "cave_ice_age",
          pageDisplay: "Págs. 9 - 10"
        },
        {
          text: "⚠️ Desafiar a caballo al Caballero Negro sin escudo",
          target: "cave_gameover_void",
          pageDisplay: "¡Peligro!"
        }
      ]
    },

    "cave_future_era": {
      id: "cave_future_era",
      isObjectSearch: true,
      pageNumbers: [13, 14],
      title: "Neo-Acrópolis: La Ciudad del Año 3000",
      image: "assets/images/cave_future_era.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 13</span>
        <p>Una impresionante metrópolis construida sobre columnas de cristal y pasarelas de levitación magnética. Vehículos solares vuelan en silencio sobre canales de agua bioluminiscente.</p>
        <p>Ciudadanos con túnicas tornasoladas pasean junto a simpáticos robots redondos de servicio. En lo alto de la aguja central pulsa la última pieza del artefacto.</p>
        <div class="enigma-box" style="border-left-color: #275278;">
          <strong>🤖 MISIÓN EN LA METRÓPOLIS FUTURISTA:</strong>
          <p>Para recuperar el <strong>Engranaje de Taquiones del Futuro</strong>, encuentra: <strong>El Dron Esférico de Ojos Azules</strong>, <strong>La Nave de Cristal sobre el Río</strong> y <strong>La Gran Torre Aguja Central</strong>.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 14</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#275278; color:#275278;">Sensores activados: 0 / 3</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>PASARELAS DE LEVITACIÓN:</strong>
          <p id="items-feedback-text">Examina el robot flotante en la acera inferior izquierda, el transporte alado sobre el canal y el rascacielos puntiagudo.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          ¡Todas las piezas del Cronómetro Solar se unen con un zumbido armónico! El portal maestro a vuestro hogar se ha desbloqueado.
        </p>
      `,
      requiredItems: [
        {
          id: "fut_drone",
          name: "Dron Esférico de Ojos Azules",
          desc: "¡Un autómata asistente flotante con pantalla de ojos brillantes y chasis blanco pulido!",
          x: 17.0,
          y: 85.0,
          radius: 7.0
        },
        {
          id: "fut_ship",
          name: "Nave de Cristal sobre el Río",
          desc: "¡El estilizado vehículo de transporte aéreo que desciende hacia los amarres acuáticos!",
          x: 60.0,
          y: 77.0,
          radius: 8.0
        },
        {
          id: "fut_tower",
          name: "Gran Torre Aguja Central",
          desc: "¡El colosal rascacielos de cuarzo y titanio que domina el horizonte de la ciudad!",
          x: 32.0,
          y: 30.0,
          radius: 8.0
        }
      ],
      choices: [
        {
          text: "🏆 Activar el Cronómetro Solar Dorado reensamblado y volver a casa",
          target: "cave_victory",
          pageDisplay: "¡Victoria!"
        }
      ]
    },

    "cave_victory": {
      id: "cave_victory",
      pageNumbers: [15, 16],
      title: "¡El Retorno de los Crono-Viajeros!",
      image: "assets/images/cave_victory.jpg",
      isSpread: false,
      textLeft: `
        <span class="page-badge" style="color:#2c6e49;">¡MISIÓN CUMPLIDA!</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:#2c6e49;">¡EL TIEMPO HA SIDO SALVADO!</h3>
        <p>¡El Cronómetro Solar reensamblado emite un cálido resplandor dorado que repara todas las fracturas de la corriente temporal!</p>
        <p>Emergéis triunfantes por el gran arco de la cueva al despuntar el alba sobre las altas cumbres. Los vórtices se han apaciguado en una serena luz amatista y el valle de vuestro hogar os espera abajo en paz.</p>
        <div class="victory-box">
          <strong>🎉 ¡HAS COMPLETADO «LA CUEVA DEL TIEMPO»!</strong>
          <p>Crono sonríe satisfecho ajustándose el monóculo: <em>—«¡El flujo de los siglos vuelve a cantar en perfecta armonía! ¡Sois auténticos Maestros del Tiempo!»</em></p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Epílogo & Regreso</span>
        <p>Guardas el cronómetro en tu zurrón sabiendo que la historia humana está a salvo.</p>
        <p class="decision-prompt">¿Deseas volver a jugar o elegir otro libro de la biblioteca?</p>
        <div class="choices-container">
          <button class="choice-btn" id="btn-victory-replay" onclick="gameEngine.restartGame()">
            🔄 Volver a jugar esta aventura
          </button>
          <button class="choice-btn" id="btn-victory-shelf" style="border-color:var(--accent-gold); font-weight:700;" onclick="gameEngine.showLibraryView()">
            🏛️ Volver a la Biblioteca (5 Libros)
          </button>
        </div>
      `,
      choices: []
    },

    "cave_gameover_void": {
      id: "cave_gameover_void",
      isGameOver: true,
      title: "¡Perdido en el Vacío Temporal!",
      image: "assets/images/cave_gameover_void.jpg",
      textLeft: `
        <span class="page-badge" style="color:var(--accent-red);">¡PARADOJA CÓSMICA!</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:var(--accent-red);">¡EL VÓRTICE SIN FIN!</h3>
        <p>Una corriente de gravedad desfasada tira de vosotros hacia un abismo de esferas doradas rotas, números romanos flotantes y arenas de reloj cósmicas en gravedad cero.</p>
        <div class="enigma-box" style="border-left-color: var(--accent-red);">
          <strong>⚠️ DESFASE DEL ESPACIO-TIEMPO:</strong>
          <p>La corriente temporal os arrastra hacia el vacío infinito. Si utilizas el <strong>Anillo Mágico / Reloj de Retorno</strong>, podrás rebobinar la línea temporal al momento exacto anterior a la caída.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Destino & Salvación</span>
        <div class="gameover-box">
          <p>Quedaréis flotando en un instante eterno desvaneciéndoos en la nebulosa... ¡a menos que actives tu artefacto de salvación!</p>
        </div>
        <div id="gameover-ring-box" style="margin: 12px 0;"></div>
        <p class="decision-prompt" id="gameover-prompt">
          Elige una acción: invoca tu salvación temporal o reintenta desde la última decisión segura.
        </p>
      `,
      choices: []
    },

    "cave_gameover_collapse": {
      id: "cave_gameover_collapse",
      isGameOver: true,
      title: "¡Derrumbe Temporal!",
      image: "assets/images/cave_gameover_collapse.jpg",
      textLeft: `
        <span class="page-badge" style="color:var(--accent-red);">¡PELIGRO MORTAL!</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:var(--accent-red);">¡EL COLAPSO DE LA ERA!</h3>
        <p>El techo de la caverna milenaria se viene abajo en una lluvia de estalagmitas ciclópeas y nubes de polvo de cuarzo, abriendo una sima profunda que traga el camino.</p>
        <div class="enigma-box" style="border-left-color: var(--accent-red);">
          <strong>⚠️ DERRUMBE DE ROCA:</strong>
          <p>Las toneladas de piedra bloquean toda salida. El <strong>Anillo Mágico de Salvación</strong> es la única fuerza capaz de sacarte de entre los escombros a tiempo.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Destino & Salvación</span>
        <div class="gameover-box">
          <p>Has quedado atrapado bajo toneladas de roca milenaria... ¡a menos que invoques el rescate milagroso!</p>
        </div>
        <div id="gameover-ring-box" style="margin: 12px 0;"></div>
        <p class="decision-prompt" id="gameover-prompt">
          Elige una acción: invoca el Anillo Mágico para escapar del derrumbe o reintenta la decisión anterior.
        </p>
      `,
      choices: []
    }
  }
};

const DRAGON_DATA = {
  id: "dragon",
  title: "El Castillo Medieval y el Dragón Dormido",
  subtitle: "Un libro-juego de pasadizos secretos, alquimia, mazmorras y tesoros ancestrales",
  tagline: "¡Recuperad la Corona Real de Rocadragón sin despertar al colosal dragón esmeralda!",
  cover: "assets/images/cover_medieval_castle.jpg",
  difficulty: "⭐⭐⭐",
  category: "Fantasía Clásica & Caballería",
  themeColor: "#8f5028",
  badgeIcon: "🐉",
  companionName: "Leo el Joven Escudero",
  companionIcon: "🛡️",
  salvationItemName: "Anillo Mágico / Gema del Alquimista de Leo",
  companionDesc: "Un ágil escudero real que conoce los túneles de escape y las leyendas del castillo.",
  mechanics: ["🏰 Patio de Armas", "⛓️ Mazmorras Subterráneas", "🧪 Torre del Alquimista", "⚔️ Armería Secreta", "🐉 Cámara del Dragón", "💍 Anillo de Salvación"],
  totalFriends: 4,
  totalKeys: 4,

  nodes: {
    "cover": {
      id: "cover",
      type: "cover",
      pageNumbers: [1, 2],
      title: "El Castillo Medieval y el Dragón Dormido",
      image: "assets/images/cover_medieval_castle.jpg",
      isSpread: false,
      textLeft: `
        <span class="page-badge">Portada & Prólogo</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:#8f5028;">¡LA MISIÓN DE LA CORONA PERDIDA!</h3>
        <p>En lo alto del Peñón de las Águilas se alza el antiguo baluarte de Rocadragón. Años atrás, un colosal dragón esmeralda de aliento llameante descendió sobre el castillo y se apoderó de las riquezas reales.</p>
        <p>Ahora, la colosal bestia duerme un profundo sueño que dura décadas, enrollada alrededor de las montañas de monedas de oro en la cámara de la torre.</p>
        <p>Acompañado de <strong>Leo</strong>, un joven y ágil escudero real, te has propuesto recuperar la <strong>Corona de los Reyes</strong> para devolver la paz al reino. Pero recuerda: <em>¡un solo crujido de armadura bastará para despertar su furia!</em></p>
        <ul style="margin: 8px 0 8px 20px; font-size: 0.95rem; line-height: 1.6;">
          <li>🏰 <strong>El Patio de Armas:</strong> Esquiva las patrullas nocturnas.</li>
          <li>⛓️ <strong>Las Mazmorras de Piedra:</strong> Localiza las llaves y el túnel secreto.</li>
          <li>🧪 <strong>El Laboratorio del Alquimista:</strong> Prepara el brebaje somnífero.</li>
          <li>⚔️ <strong>La Armería Secreta:</strong> Desactiva la ballesta trampa.</li>
          <li>🐉 <strong>La Guarida del Dragón:</strong> Rescata la corona sin hacer ruido.</li>
        </ul>
      `,
      textRight: `
        <span class="page-badge">Instrucciones & Consejos</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:#c9933b;">CONSEJOS DE LEO</h3>
        <p>🛡️ <strong>Compañero Silencioso:</strong> Leo comprobará si el suelo cruje o si hay centinelas rondando el patio de armas.</p>
        <p>🤫 <strong>El Sigilo es Clave:</strong> Localiza con la mirada los objetos reales que aparecen dibujados en cada estancia del castillo.</p>
        <p>💍 <strong>El Anillo Mágico:</strong> Si el dragón te descubre con su aliento abrasador, el Anillo Mágico te salvará una única vez.</p>
      `,
      choices: [
        {
          text: "🏰 Cruzar el rastrillo levadizo y penetrar en el Patio de Armas",
          target: "medieval_courtyard",
          pageDisplay: "Págs. 3 - 4"
        }
      ]
    },

    "medieval_courtyard": {
      id: "medieval_courtyard",
      pageNumbers: [3, 4],
      title: "El Patio de Armas bajo las Estrellas",
      image: "assets/images/medieval_courtyard.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 3</span>
        <p>Las pesadas murallas de piedra gris se alzan hacia el cielo nocturno salpicado de estrellas. Antorchas llameantes chisporrotean en los muros de mampostería.</p>
        <p>Un caballero de guardia patrulla con paso firme portando una antorcha encendida. Leo te señala dos accesos clave para infiltrarse:</p>
        <div class="enigma-box" style="border-left-color: #8f5028;">
          <strong>🏰 ACCESOS A LA FORTALEZA:</strong>
          <p>Hacia abajo se abren las escaleras húmedas a las <strong>Mazmorras Subterráneas</strong>. Arriba se eleva la escalera de caracol hacia la <strong>Torre del Alquimista Real</strong>, y al fondo cruza el corredor directo a la <strong>Armería</strong>.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 4</span>
        <p>¿Qué camino sigues para evitar a los guardias y acercarte a la torre del dragón?</p>
        <p class="decision-prompt">Elige tu ruta de infiltración:</p>
      `,
      choices: [
        {
          text: "⛓️ Bajar las escaleras oscuras hacia las Mazmorras Subterráneas",
          target: "medieval_dungeon_cells",
          pageDisplay: "Págs. 5 - 6"
        },
        {
          text: "🧪 Subir a la Torre del Homenaje hacia el Laboratorio del Alquimista",
          target: "medieval_alchemy_lab",
          pageDisplay: "Págs. 7 - 8"
        },
        {
          text: "🛡️ Cruzar con sigilo directo hacia la Armería de los Caballeros",
          target: "medieval_armory_riddle",
          pageDisplay: "Págs. 9 - 10"
        },
        {
          text: "⚠️ Intentar trepar por el muro exterior sin cuerda",
          target: "medieval_gameover_dragon",
          pageDisplay: "¡Peligro!"
        }
      ],
      hotspots: [
        { x: 32.0, y: 73.0, label: "Caballero con Antorcha", desc: "Avanza con paso firme y antorcha iluminando los adoquines húmedos." },
        { x: 73.0, y: 57.0, label: "Portón con Rastrillo de Hierro", desc: "El gran acceso defendido por pesadas rejas levadizas." },
        { x: 84.0, y: 44.0, label: "Estandarte del León Dorado", desc: "El pendón heráldico que ondea en la torre defensiva derecha." },
        { x: 26.0, y: 25.0, label: "Torre del Homenaje", desc: "La torre más alta del castillo donde duerme el dragón." }
      ]
    },

    "medieval_dungeon_cells": {
      id: "medieval_dungeon_cells",
      isObjectSearch: true,
      pageNumbers: [5, 6],
      title: "Las Mazmorras Subterráneas y el Pasaje Oculto",
      image: "assets/images/medieval_dungeon_cells.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 5</span>
        <p>Descendéis por gastados peldaños de piedra hasta las mazmorras subterráneas. El aire huele a humedad y a madera vieja. Filas de celdas con barrotes de hierro bordean la galería.</p>
        <p>Sobre una sólida mesa de guardia reposan llaves carcelarias y un farol. En el muro de sillería, una losa de piedra entreabierta revela un pasadizo secreto de escape.</p>
        <div class="enigma-box" style="border-left-color: #8f5028;">
          <strong>⛓️ BÚSQUEDA EN LAS MAZMORRAS:</strong>
          <p>Para abrir el pasaje secreto sin alertar a los centinelas, haz clic en: <strong>El Pasadizo Secreto tras la Losa de Piedra</strong>, <strong>El Manojo de Llaves de Hierro en la Mesa</strong> y <strong>El Farol Cuadrado de Cristal</strong>.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 6</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#8f5028; color:#8f5028;">Pistas descubiertas: 0 / 3</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>GALERÍA DE CELDAS:</strong>
          <p id="items-feedback-text">Examina el hueco oscuro en el muro central, la mesa de madera con llaves y la linterna encendida.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          ¡Las llaves encajan y el túnel secreto se despeja! Podéis avanzar sin ser vistos.
        </p>
      `,
      requiredItems: [
        {
          id: "dungeon_secret_passage",
          name: "Pasadizo Secreto tras la Losa de Piedra",
          desc: "¡La entrada al túnel oculto abierto tras la losa de piedra tallada!",
          x: 52.0,
          y: 60.0,
          radius: 8.5
        },
        {
          id: "dungeon_keys",
          name: "Manojo de Llaves de Hierro en la Mesa",
          desc: "¡Las llaves maestras forjadas para abrir todas las puertas del castillo!",
          x: 25.0,
          y: 72.0,
          radius: 8.0
        },
        {
          id: "dungeon_lantern",
          name: "Farol Cuadrado de Cristal",
          desc: "¡La linterna de aceite sobre la mesa que guía vuestros pasos en la oscuridad!",
          x: 29.5,
          y: 62.0,
          radius: 7.0
        }
      ],
      choices: [
        {
          text: "🧪 Subir por el montacargas secreto al Laboratorio del Alquimista",
          target: "medieval_alchemy_lab",
          pageDisplay: "Págs. 7 - 8"
        },
        {
          text: "🛡️ Seguir el pasadizo de piedra directo a la Armería Secreta",
          target: "medieval_armory_riddle",
          pageDisplay: "Págs. 9 - 10"
        },
        {
          text: "⚠️ Abrir la celda con el cráneo grabado en la reja",
          target: "medieval_gameover_petrified",
          pageDisplay: "¡Peligro!"
        }
      ]
    },

    "medieval_alchemy_lab": {
      id: "medieval_alchemy_lab",
      isObjectSearch: true,
      pageNumbers: [7, 8],
      title: "La Torre del Alquimista Real",
      image: "assets/images/medieval_alchemy_lab.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 7</span>
        <p>Bajo la cúpula gótica de la torre, alambiques de cobre hierven despidiendo vapores violetas perfumados con lavanda y polvo de estrellas. En los estantes reposan tarros con escamas de dragón y mandrágoras.</p>
        <p>El sabio Alquimista Real trabaja afanosamente en la pócima del sueño profundo. En el atril descansa abierto el gran recetario ancestral.</p>
        <div class="enigma-box" style="border-left-color: #8f5028;">
          <strong>🧪 LA PÓCIMA DEL SUEÑO DRACÓNICO:</strong>
          <p>Para completar el brebaje somnífero, haz clic en: <strong>El Grimorio Abierto de Pócimas de Sueño</strong> (en el atril), <strong>El Alambique de Cobre con Vapores Violetas</strong> y <strong>El Sabio Alquimista Real</strong>.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 8</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#8f5028; color:#8f5028;">Ingredientes combinados: 0 / 3</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>MESA DEL ALQUIMISTA:</strong>
          <p id="items-feedback-text">Fíjate en el gran libro abierto en el atril de madera, el destilador humeante y el sabio de barba blanca.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          ¡El frasco de Elixir Somnífero queda listo! Unas pocas gotas mantendrán al dragón dormido plácidamente.
        </p>
      `,
      requiredItems: [
        {
          id: "alch_grimoire",
          name: "Grimorio Abierto de Pócimas de Sueño",
          desc: "¡El antiguo libro encuadernado en cuero abierto con fórmulas mágicas ilustradas!",
          x: 37.0,
          y: 77.0,
          radius: 8.5
        },
        {
          id: "alch_alembic",
          name: "Alambique de Cobre con Vapores Violetas",
          desc: "¡El destilador alquímico de serpentín que hierve vapores aromáticos de adormidera!",
          x: 58.0,
          y: 65.0,
          radius: 8.5
        },
        {
          id: "alch_wizard",
          name: "Sabio Alquimista Real",
          desc: "¡El anciano maestro con sombrero picudo que os sonríe cómplice entregándoos el frasco!",
          x: 60.0,
          y: 57.0,
          radius: 7.5
        }
      ],
      choices: [
        {
          text: "🛡️ Bajar con la poción somnífera a la Armería para equiparse",
          target: "medieval_armory_riddle",
          pageDisplay: "Págs. 9 - 10"
        },
        {
          text: "🐉 Subir de puntillas con el brebaje directo a la Guarida del Dragón",
          target: "medieval_dragon_lair",
          pageDisplay: "Págs. 11 - 12"
        },
        {
          text: "⚠️ Beber del frasco sin etiqueta con humo negro",
          target: "medieval_gameover_petrified",
          pageDisplay: "¡Peligro!"
        }
      ]
    },

    "medieval_armory_riddle": {
      id: "medieval_armory_riddle",
      isObjectSearch: true,
      pageNumbers: [9, 10],
      title: "La Armería Secreta de los Caballeros",
      image: "assets/images/medieval_armory_riddle.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 9</span>
        <p>Una impresionante bóveda de piedra donde se custodian armas y armaduras ancestrales. En el centro descansa un cofre repleto de monedas y una ballesta trampa montada sobre un cajón.</p>
        <p>Para pertrecharos sin hacer ruido antes de subir a la torre del dragón, debéis señalar <strong>3 Elementos Clave de la Armería</strong>.</p>
        <div class="enigma-box" style="border-left-color: #c9933b;">
          <strong>⚔️ MISIÓN EN LA ARMERÍA DEL CASTILLO:</strong>
          <p>Haz clic en la imagen para señalar: <strong>El Gran Cofre con Monedas de Oro</strong> (en el centro), <strong>La Armadura de Acero en el Pedestal</strong> (a la izquierda) y <strong>La Ballesta Trampa sobre el Cajón</strong> (a la derecha).</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 10</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#c9933b; color:#c9933b;">Elementos señalados: 0 / 3</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>BÓVEDA DE LAS ARMAS:</strong>
          <p id="items-feedback-text">Fíjate en el gran baúl lleno de oro en el suelo, la armadura completa montada sobre la peana y la ballesta mecánica sobre la caja de madera.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          ¡Habéis desactivado la trampa y obtenido equipo ligero! El camino a la torre superior queda abierto.
        </p>
      `,
      requiredItems: [
        {
          id: "arm_chest",
          name: "Gran Cofre con Monedas de Oro",
          desc: "¡Un arcón de roble con herrajes abierto de par en par, lleno de brillantes monedas doradas!",
          x: 48.0,
          y: 72.0,
          radius: 8.0
        },
        {
          id: "arm_suit",
          name: "Armadura de Acero en el Pedestal",
          desc: "¡Una armadura de placas completa de caballero sobre una peana de madera con el blasón del león!",
          x: 11.0,
          y: 47.0,
          radius: 8.0
        },
        {
          id: "arm_crossbow",
          name: "Ballesta Trampa sobre el Cajón",
          desc: "¡Un mecanismo de proyectiles con cuerda tensada conectado a los goznes de la sala!",
          x: 69.0,
          y: 78.0,
          radius: 7.0
        }
      ],
      choices: [
        {
          text: "🐉 Subir con paso sigiloso a la Guarida del Dragón Dormido",
          target: "medieval_dragon_lair",
          pageDisplay: "Págs. 11 - 12"
        },
        {
          text: "⚠️ Tocar el espejo con serpientes maldito empotrado en la pared",
          target: "medieval_gameover_petrified",
          pageDisplay: "¡Peligro!"
        }
      ]
    },

    "medieval_dragon_lair": {
      id: "medieval_dragon_lair",
      isObjectSearch: true,
      pageNumbers: [11, 12],
      title: "La Guarida del Dragón Esmeralda Dormido",
      image: "assets/images/medieval_dragon_lair.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 11</span>
        <p>¡El espectáculo os deja sin aliento! Una colosal sala abovedada cuyo suelo está cubierto por millones de monedas de oro, copas de rubíes y cofres enjoyados.</p>
        <p>En el centro duerme plácidamente el gigantesco Dragón Esmeralda respirando humo blanco. A la derecha, sobre una montaña de gemas reluce la <strong>Corona de los Reyes</strong>.</p>
        <div class="enigma-box" style="border-left-color: #8f5028;">
          <strong>👑 DESAFÍO DEL RESCATE DE LA CORONA:</strong>
          <p>Para recuperar la reliquia sin despertar a la fiera, haz clic en la imagen para señalar: <strong>La Sagrada Corona de Oro y Rubíes</strong> (sobre la colina de joyas), <strong>El Hocico Humeante del Dragón</strong> (de donde emana el humo) y <strong>Los Dos Jóvenes Escuderos en Sigilo</strong> (a la izquierda).</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 12</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#8f5028; color:#8f5028;">Objetivos confirmados: 0 / 3</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>MONTAÑA DEL TESORO:</strong>
          <p id="items-feedback-text">Camina de puntillas... Señala la brillante corona real sobre las joyas, el hocico con humo blanco del dragón y a los dos valientes exploradores.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          ¡Leo sostiene la Corona en alto con lágrimas de emoción! El dragón suelta un ronquido plácido y sigue durmiendo.
        </p>
      `,
      requiredItems: [
        {
          id: "drag_crown",
          name: "Sagrada Corona de Oro y Rubíes",
          desc: "¡La reliquia real más valiosa del reino, resplandeciendo sobre el montículo de joyas!",
          x: 79.2,
          y: 59.5,
          radius: 9.0
        },
        {
          id: "drag_head",
          name: "Hocico Humeante del Dragón",
          desc: "¡La colosal cabeza verde escamosa de la bestia de la que emanan suaves volutas de humo!",
          x: 61.5,
          y: 64.0,
          radius: 10.0
        },
        {
          id: "drag_heroes",
          name: "Dos Jóvenes Escuderos en Sigilo",
          desc: "¡Avanzáis descalzos conteniendo el aliento sobre la alfombra de monedas de oro!",
          x: 25.0,
          y: 61.0,
          radius: 11.0
        }
      ],
      choices: [
        {
          text: "🏆 Bajar la colina con el tesoro y regresar aclamado al reino",
          target: "medieval_victory",
          pageDisplay: "¡Victoria!"
        }
      ]
    },

    "medieval_victory": {
      id: "medieval_victory",
      pageNumbers: [13, 14],
      title: "¡La Coronación del Héroe de Rocadragón!",
      image: "assets/images/medieval_victory.jpg",
      isSpread: false,
      textLeft: `
        <span class="page-badge" style="color:#2c6e49;">¡GLORIA ETERNA!</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:#2c6e49;">¡LA CORONA HA SIDO RECUPERADA!</h3>
        <p>¡Las campanas de las siete torres de Rocadragón repican al unísono celebrando vuestra gran hazaña!</p>
        <p>En el gran patio de armas, ante los pendones heráldicos de los leones y el rey en su trono, Leo y tú presentáis la corona de rubíes. Caballeros y damas aplauden entusiasmados reconociendo vuestro valor e inteligencia sin haber tenido que derramar sangre.</p>
        <div class="victory-box">
          <strong>🎉 ¡HAS COMPLETADO «EL CASTILLO MEDIEVAL Y EL DRAGÓN DORMIDO»!</strong>
          <p>El Rey desenvaina la espada de plata y os nombra: <em>—«¡Caballeros Defensores de la Corona! Vuestros nombres quedarán grabados en las crónicas del reino para siempre.»</em></p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Epílogo & Regreso</span>
        <p>Las fiestas y los banquetes en tu honor durarán siete días y siete noches.</p>
        <p class="decision-prompt">¿Deseas volver a jugar o elegir otro libro de la biblioteca?</p>
        <div class="choices-container">
          <button class="choice-btn" id="btn-victory-replay" onclick="gameEngine.restartGame()">
            🔄 Volver a jugar esta aventura
          </button>
          <button class="choice-btn" id="btn-victory-shelf" style="border-color:var(--accent-gold); font-weight:700;" onclick="gameEngine.showLibraryView()">
            🏛️ Volver a la Biblioteca (5 Libros)
          </button>
        </div>
      `,
      choices: []
    },

    "medieval_gameover_dragon": {
      id: "medieval_gameover_dragon",
      isGameOver: true,
      title: "¡La Furia del Dragón Despierto!",
      image: "assets/images/medieval_gameover_dragon.jpg",
      textLeft: `
        <span class="page-badge" style="color:var(--accent-red);">¡FINAL FATAL!</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:var(--accent-red);">¡EL DRAGÓN HA DESPERTADO!</h3>
        <p>Un desafortunado resbalón hace tintinear una moneda contra el tesoro. El gigantesco ojo dorado del dragón se abre de golpe y un rugido ensordecedor desata un muro de llamas incandescentes.</p>
        <div class="enigma-box" style="border-left-color: var(--accent-red);">
          <strong>⚠️ LLAMAS DE ROCADRAGÓN:</strong>
          <p>El fuego abrasa la cámara del tesoro. Solo el <strong>Anillo Mágico / Gema del Alquimista</strong> puede conjurar un escudo impenetrable para devolveros con vida al pasadizo.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Destino & Salvación</span>
        <div class="gameover-box">
          <p>El aliento de fuego os atrapa sin escapatoria... ¡a menos que Leo y tú recurráis a vuestro artefacto de salvación!</p>
        </div>
        <div id="gameover-ring-box" style="margin: 12px 0;"></div>
        <p class="decision-prompt" id="gameover-prompt">
          Elige una acción: usa la salvación mágica para retroceder de las llamas o reintenta desde la decisión previa.
        </p>
      `,
      choices: []
    },

    "medieval_gameover_petrified": {
      id: "medieval_gameover_petrified",
      isGameOver: true,
      title: "¡Petrificado por la Maldición!",
      image: "assets/images/medieval_gameover_petrified.jpg",
      textLeft: `
        <span class="page-badge" style="color:var(--accent-red);">¡TRAMPA ANCESTRAL!</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:var(--accent-red);">¡PETRIFICACIÓN INSTANTÁNEA!</h3>
        <p>Los ojos de las gárgolas góticas despiden un resplandor violeta fantasmal. Una niebla de brujería envuelve vuestra armadura convirtiendo el hierro y la piel en granito sólido resquebrajado.</p>
        <div class="enigma-box" style="border-left-color: var(--accent-red);">
          <strong>⚠️ MALDICIÓN DE PIEDRA:</strong>
          <p>Vuestros miembros se inmovilizan sin remedio. El <strong>Anillo Mágico de Salvación</strong> es la única fuerza capaz de romper la maldición antes de que el hechizo sea permanente.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Destino & Salvación</span>
        <div class="gameover-box">
          <p>Adornarás el baluarte del castillo como una estatua pétrea... ¡a menos que actives tu artefacto de salvación!</p>
        </div>
        <div id="gameover-ring-box" style="margin: 12px 0;"></div>
        <p class="decision-prompt" id="gameover-prompt">
          Elige una acción: deshaz la petrificación con el Anillo Mágico o reintenta la decisión anterior.
        </p>
      `,
      choices: []
    }
  }
};

const MUNDO_DATA = {
  id: "mundo",
  title: "El Mundo Imaginario y las Islas Flotantes",
  subtitle: "Un libro-juego de navíos celestes, ballenas voladoras y faros en las nubes",
  tagline: "¡Encended el Gran Faro del Cielo y guiad a la flota perdida de navíos alados!",
  cover: "assets/images/cover_imaginary_world.jpg",
  difficulty: "⭐⭐⭐",
  category: "Fantasía Steampunk & Viajes Celestes",
  themeColor: "#2c6e49",
  badgeIcon: "☁️",
  companionName: "Zéfiro el Duende Alado",
  companionIcon: "🕊️",
  salvationItemName: "Anillo Mágico / Talismán del Viento de Zéfiro",
  companionDesc: "Un vivaz navegante de las corrientes celestes que conoce la rosa de los vientos y el mapa estelar.",
  mechanics: ["⚓ Puerto Celeste", "✨ Molinos de Cristal", "🐋 Santuario de Ballenas", "🔭 Gran Observatorio", "💡 Gran Faro del Cielo", "💍 Anillo de Salvación"],
  totalFriends: 4,
  totalKeys: 4,

  nodes: {
    "cover": {
      id: "cover",
      type: "cover",
      pageNumbers: [1, 2],
      title: "El Mundo Imaginario y las Islas Flotantes",
      image: "assets/images/cover_imaginary_world.jpg",
      isSpread: false,
      textLeft: `
        <span class="page-badge">Portada & Prólogo</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:#2c6e49;">¡EL MAR DE LAS NUBES DORADAS!</h3>
        <p>Más allá del horizonte que conocen los hombres se despliega el Archipiélago de Caelum: cientos de islas verdes que levitan en el aire impulsadas por cristales de levitación y cascadas que vierten sus aguas en mares de algodón.</p>
        <p>Una densa bruma mágica ha cubierto los cielos apagando el <strong>Gran Faro del Cielo</strong>, dejando a decenas de navíos alados a la deriva en medio de tormentas de relámpagos.</p>
        <p>Acompañado por <strong>Zéfiro</strong>, un audaz duende alado explorador del viento, te has embarcado en una fragata de madera y latón para recuperar los <strong>4 Prismas Celestiales</strong> y reactivar el faro.</p>
        <ul style="margin: 8px 0 8px 20px; font-size: 0.95rem; line-height: 1.6;">
          <li>⚓ <strong>El Puerto Celeste:</strong> Desata el barco alado con la brújula y el mapa estelar.</li>
          <li>✨ <strong>Los Molinos de Cristal:</strong> Sintoniza las aspas cantoras y los carillones.</li>
          <li>🐋 <strong>El Santuario de las Ballenas:</strong> Cabalga junto a las místicas ballenas voladoras.</li>
          <li>🔭 <strong>El Gran Observatorio:</strong> Orienta el telescopio colosal hacia las constelaciones.</li>
          <li>💡 <strong>El Faro del Cielo:</strong> Enciende el haz dorado y reúne a la flota perdida.</li>
        </ul>
      `,
      textRight: `
        <span class="page-badge">Instrucciones & Consejos</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:#c9933b;">CONSEJOS DE ZÉFIRO</h3>
        <p>🕊️ <strong>Tu Piloto del Cielo:</strong> Observa con atención las naves voladoras, los cristales y las criaturas que surcan las nubes en cada ilustración.</p>
        <p>🧭 <strong>La Rosa de los Vientos:</strong> Señala los tres elementos necesarios en cada isla flotante para desbloquear los timones y zarpar a la siguiente escala.</p>
        <p>💍 <strong>El Anillo Mágico:</strong> Si una ráfaga traicionera te arroja al vacío sin planeador, el anillo formará una pompa de aire que te devolverá a la cubierta.</p>
      `,
      choices: [
        {
          text: "☁️ Ajustar las gafas de aviador y zarpar desde el Muelle del Puerto Celeste",
          target: "floating_sky_harbor",
          pageDisplay: "Págs. 3 - 4"
        }
      ]
    },

    "floating_sky_harbor": {
      id: "floating_sky_harbor",
      isObjectSearch: true,
      pageNumbers: [3, 4],
      title: "El Muelle de Embarque del Puerto Celeste",
      image: "assets/images/floating_sky_harbor.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 3</span>
        <p>Los muelles de madera de cedro cuelgan sobre un precipicio vertiginoso por donde cascadas de agua pura se derraman en el mar de nubes al atardecer.</p>
        <p>Varias fragatas con alas de latón y velas doradas están amarradas a los norays de bronce. Zéfiro y los jóvenes navegantes preparan la ruta estelar sobre la mesa de cartas.</p>
        <div class="enigma-box" style="border-left-color: #2c6e49;">
          <strong>⚓ PREPARATIVOS DE VUELO:</strong>
          <p>Para soltar amarras y fijar el rumbo, haz clic en la ilustración para señalar: <strong>La Gran Brújula Dorada</strong> (en manos de la piloto), <strong>El Mapa Celestial sobre la Mesa</strong> y <strong>El Barco Volador Alado Amarrado</strong>.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 4</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#2c6e49; color:#2c6e49;">Instrumentos listos: 0 / 3</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>MUELLE DE CAELUM:</strong>
          <p id="items-feedback-text">Fíjate en las manos de la joven con gafas de aviador, la mesa redonda de navegación y la nave amarrada en el pantalán.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          ¡Las alas de latón se despliegan con un chasquido impecable! El navío despega hacia las corrientes térmicas.
        </p>
      `,
      requiredItems: [
        {
          id: "harbor_compass",
          name: "Gran Brújula Dorada",
          desc: "¡El instrumento esférico de latón con aguja imantada que sostiene la joven capitana!",
          x: 74.0,
          y: 69.0,
          radius: 6.5
        },
        {
          id: "harbor_map",
          name: "Mapa Celestial sobre la Mesa",
          desc: "¡El pergamino grabado con constelaciones de bestias aladas extendido sobre la mesa!",
          x: 79.0,
          y: 80.0,
          radius: 7.5
        },
        {
          id: "harbor_ship",
          name: "Barco Volador Alado Amarrado",
          desc: "¡La estilizada fragata con alas articuladas de plumas de bronce atracada en el muelle!",
          x: 65.0,
          y: 37.0,
          radius: 8.0
        }
      ],
      choices: [
        {
          text: "✨ Navegar en planeador hacia los Molinos de Cristal Cantores",
          target: "floating_crystal_mills",
          pageDisplay: "Págs. 5 - 6"
        },
        {
          text: "🐋 Elevarse hacia el Santuario de las Ballenas Celestiales",
          target: "floating_sky_whale",
          pageDisplay: "Págs. 7 - 8"
        },
        {
          text: "🔭 Ascender directamente al Gran Observatorio de las Nubes",
          target: "floating_cloud_observatory",
          pageDisplay: "Págs. 9 - 10"
        },
        {
          text: "⚠️ Ajustar el timón hacia el vórtice de tormenta eléctrica",
          target: "floating_gameover_storm",
          pageDisplay: "¡Peligro!"
        }
      ]
    },

    "floating_crystal_mills": {
      id: "floating_crystal_mills",
      isObjectSearch: true,
      pageNumbers: [5, 6],
      title: "Los Molinos de Cristal y el Bosque de Estrellas",
      image: "assets/images/floating_crystal_mills.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 5</span>
        <p>Una paradisíaca isla flotante cubierta de colinas verdes y flores multicolores. Tres colosales molinos con aspas de cristal prismático giran con el viento proyectando arcoíris en las nubes.</p>
        <p>En la arboleda de la izquierda crecen árboles centenarios cuyos frutos son estrellas brillantes comestibles que tararean suaves canciones.</p>
        <div class="enigma-box" style="border-left-color: #2c6e49;">
          <strong>✨ LA ARMONÍA DE LOS MOLINOS:</strong>
          <p>Para afinar las corrientes de aire, haz clic en la imagen para señalar: <strong>El Árbol de Estrellas Luminosas</strong>, <strong>El Gran Carillón de Viento Dorado</strong> y <strong>El Molino de Cristal de Arcoíris</strong>.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 6</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#2c6e49; color:#2c6e49;">Armonías afinadas: 0 / 3</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>PRADOS FLOTANTES:</strong>
          <p id="items-feedback-text">Examina el árbol lleno de estrellas amarillas a la izquierda, los tubos musicales en arco y las aspas transparentes a la derecha.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          ¡Una brisa cristalina impulsa vuestra nave con el segundo Prisma de Luz! El camino al cielo superior queda abierto.
        </p>
      `,
      requiredItems: [
        {
          id: "mill_tree",
          name: "Árbol de Estrellas Luminosas",
          desc: "¡El árbol mágico de ramas retorcidas cargadas de estrellas radiantes que cantan con el viento!",
          x: 12.0,
          y: 50.0,
          radius: 9.0
        },
        {
          id: "mill_chimes",
          name: "Gran Carillón de Viento Dorado",
          desc: "¡La estructura de tubos sonoros de campanas tubulares que afinan las corrientes de aire!",
          x: 31.0,
          y: 38.0,
          radius: 7.5
        },
        {
          id: "mill_crystal",
          name: "Molino de Cristal de Arcoíris",
          desc: "¡El majestuoso molino de torre de piedra cuyas aspas prismáticas descomponen la luz solar!",
          x: 83.0,
          y: 37.0,
          radius: 9.0
        }
      ],
      choices: [
        {
          text: "🐋 Montar en la corriente de viento hacia las Ballenas Celestiales",
          target: "floating_sky_whale",
          pageDisplay: "Págs. 7 - 8"
        },
        {
          text: "🔭 Subir por el puente de cristal hacia el Gran Observatorio",
          target: "floating_cloud_observatory",
          pageDisplay: "Págs. 9 - 10"
        },
        {
          text: "⚠️ Caminar por el borde quebradizo sin arnés al vacío",
          target: "floating_gameover_spikes",
          pageDisplay: "¡Peligro!"
        }
      ]
    },

    "floating_sky_whale": {
      id: "floating_sky_whale",
      isObjectSearch: true,
      pageNumbers: [7, 8],
      title: "El Santuario de las Ballenas Celestiales",
      image: "assets/images/floating_sky_whale.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 7</span>
        <p>Una vista que conmueve el corazón: emergiendo de entre las nubes rosadas del atardecer, colosales y pacíficas ballenas celestes surcan el aire batiendo sus aletas majestuosas.</p>
        <p>Sobre sus lomos cubiertos de musgo y líquenes se han construido pintorescas aldeas de madera con molinos y torres vigía, unidas por puentes colgantes entre los cetáceos.</p>
        <div class="enigma-box" style="border-left-color: #2c6e49;">
          <strong>🐋 ENCUENTRO EN EL MAR DE NUBES:</strong>
          <p>Para ganar la bendición de las criaturas del cielo, haz clic en: <strong>La Gran Ballena Celestial Madre</strong> (en el centro), <strong>La Aldea de Madera sobre el Lomo</strong> y <strong>El Banco de Peces Alados Luminosos</strong>.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 8</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#2c6e49; color:#2c6e49;">Vínculos celestes: 0 / 3</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>CÓSMICAS BALLENAS:</strong>
          <p id="items-feedback-text">Observa el ojo inteligente de la gran ballena central, las casitas con chimeneas en su lomo y los peces con alas de mariposa abajo a la izquierda.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          ¡La ballena exhala un géiser de polvo de estrellas y os eleva sobre las nubes hacia el pico del observatorio!
        </p>
      `,
      requiredItems: [
        {
          id: "whale_main",
          name: "Gran Ballena Celestial Madre",
          desc: "¡La colosal bestia mística de mirada sabia que surca los cielos con gracia legendaria!",
          x: 43.0,
          y: 53.0,
          radius: 12.0
        },
        {
          id: "whale_village",
          name: "Aldea de Madera sobre el Lomo",
          desc: "¡Las casitas de cuento de hadas con chimenea de humo y puente colgante entre los lomos!",
          x: 45.0,
          y: 42.0,
          radius: 8.5
        },
        {
          id: "whale_flying_fish",
          name: "Banco de Peces Alados Luminosos",
          desc: "¡Los pequeños peces que nadan en el aire batiendo delicadas aletas iridiscentes!",
          x: 27.0,
          y: 84.0,
          radius: 9.0
        }
      ],
      choices: [
        {
          text: "🔭 Saltar con las alas de seda hacia la cumbre del Gran Observatorio",
          target: "floating_cloud_observatory",
          pageDisplay: "Págs. 9 - 10"
        },
        {
          text: "✨ Descender hacia los prados flotantes de los Molinos de Cristal",
          target: "floating_crystal_mills",
          pageDisplay: "Págs. 5 - 6"
        },
        {
          text: "⚠️ Caer al abismo de nubes tormentosas",
          target: "floating_gameover_storm",
          pageDisplay: "¡Peligro!"
        }
      ]
    },

    "floating_cloud_observatory": {
      id: "floating_cloud_observatory",
      isObjectSearch: true,
      pageNumbers: [9, 10],
      title: "El Gran Observatorio de las Nubes y Constelaciones",
      image: "assets/images/floating_cloud_observatory.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 9</span>
        <p>En el pico más elevado del archipiélago, suspendido sobre una solitaria aguja de roca entre las estrellas, se alza el Observatorio de Bronce.</p>
        <p>Un colosal telescopio de latón grabado con cuadrantes astronómicos apunta al firmamento, donde relucen constelaciones vivas de dragones, leones y fénix.</p>
        <p>El sabio Astrónomo Mayor os recibe con una esfera armilar: <em>—«¡Para alinear el foco del faro debemos registrar los tres instrumentos supremos de la cúpula!»</em></p>
        <div class="enigma-box" style="border-left-color: #2c6e49;">
          <strong>🔭 ALINEACIÓN DEL HAZ DEL FARO:</strong>
          <p>Haz clic en la imagen para señalar: <strong>El Colosal Telescopio de Bronce</strong>, <strong>La Cúpula Astronómica de la Cumbre</strong> y <strong>El Racimo de Cristales Celestiales</strong> (en el pilar).</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 10</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#2c6e49; color:#2c6e49;">Coordenadas fijadas: 0 / 3</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>TERRAZA DEL FIRMAMENTO:</strong>
          <p id="items-feedback-text">Señala el gran telescopio dorado de engranajes, la cúpula semiesférica a la izquierda y las gemas luminosas sobre el pedestal de la barandilla.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          ¡El prisma de cuarzo encaja en el lente y un destello dorado atraviesa el cielo nocturno! El faro está listo para encenderse.
        </p>
      `,
      requiredItems: [
        {
          id: "obs_telescope",
          name: "Colosal Telescopio de Bronce",
          desc: "¡El colosal instrumento óptico montado sobre engranajes dorados que escudriña las estrellas!",
          x: 61.0,
          y: 41.0,
          radius: 10.0
        },
        {
          id: "obs_dome",
          name: "Cúpula Astronómica de la Cumbre",
          desc: "¡La cúpula de placas de cobre sobre la cima rocosa donde descansan las cartas estelares!",
          x: 29.0,
          y: 28.0,
          radius: 9.0
        },
        {
          id: "obs_crystal",
          name: "Racimo de Cristales Celestiales",
          desc: "¡Las gemas poligonales luminiscentes que concentran la luz estelar en el pilar de la barandilla!",
          x: 71.0,
          y: 74.0,
          radius: 7.5
        }
      ],
      choices: [
        {
          text: "🏆 Encender el Gran Faro del Cielo y guiar a la flota de naves voladoras",
          target: "floating_victory",
          pageDisplay: "¡Victoria!"
        }
      ]
    },

    "floating_victory": {
      id: "floating_victory",
      pageNumbers: [11, 12],
      title: "¡El Resplandor del Gran Faro del Cielo!",
      image: "assets/images/floating_victory.jpg",
      isSpread: false,
      textLeft: `
        <span class="page-badge" style="color:#2c6e49;">¡MISIÓN CUMPLIDA!</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:#2c6e49;">¡EL FARO VUELVE A BRILLAR!</h3>
        <p>¡Un colosal haz de luz dorada brota de la torre del faro hendiendo las tinieblas de las nubes y proyectando su guía a cientos de leguas a la redonda!</p>
        <p>Desde todos los rincones del cielo, decenas de fragatas, galeones y esquifes voladores encienden farolillos de fiesta haciendo sonar sus sirenas de latón. Los navíos perdidos navegan a salvo hacia el puerto seguro.</p>
        <div class="victory-box">
          <strong>🎉 ¡HAS COMPLETADO «EL MUNDO IMAGINARIO Y LAS ISLAS FLOTANTES»!</strong>
          <p>Zéfiro alza su catalejo y te dedica una amplia reverencia en el aire: <em>—«¡El Archipiélago vuelve a volar en paz gracias a tu coraje y perspicacia! ¡Siempre serás bienvenido en las ciudades de las nubes!»</em></p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Epílogo & Regreso</span>
        <p>Los fuegos artificiales de colores tiñen el mar de nubes en una noche que quedará para la historia.</p>
        <p class="decision-prompt">¿Deseas volver a jugar o elegir otro libro de la biblioteca?</p>
        <div class="choices-container">
          <button class="choice-btn" id="btn-victory-replay" onclick="gameEngine.restartGame()">
            🔄 Volver a jugar esta aventura
          </button>
          <button class="choice-btn" id="btn-victory-shelf" style="border-color:var(--accent-gold); font-weight:700;" onclick="gameEngine.showLibraryView()">
            🏛️ Volver a la Biblioteca (5 Libros)
          </button>
        </div>
      `,
      choices: []
    },

    "floating_gameover_storm": {
      id: "floating_gameover_storm",
      isGameOver: true,
      title: "¡Perdidos en la Tormenta de Relámpagos!",
      image: "assets/images/floating_gameover_storm.jpg",
      textLeft: `
        <span class="page-badge" style="color:var(--accent-red);">¡TEMPESTAD ELÉCTRICA!</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:var(--accent-red);">¡NAUFRAGIO EN LAS NUBES!</h3>
        <p>Un colosal rayo púrpura sacude el esquife desgarrando las velas y las alas de latón. El vórtice de la tormenta os precipita en una barrena sin fin hacia el abismo de nubes.</p>
        <div class="enigma-box" style="border-left-color: var(--accent-red);">
          <strong>⚠️ VÓRTICE TEMPESTUOSO:</strong>
          <p>La nave cae en picado sin timón. Solo el <strong>Anillo Mágico / Talismán del Viento</strong> puede canalizar un remolino ascensional milagroso que os devuelva a tierra firme.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Destino & Salvación</span>
        <div class="gameover-box">
          <p>Vuestra nave quedará sepultada en el mar de niebla eterna... ¡a menos que Céfiro y tú invoquéis el artefacto de salvación!</p>
        </div>
        <div id="gameover-ring-box" style="margin: 12px 0;"></div>
        <p class="decision-prompt" id="gameover-prompt">
          Elige una acción: estabiliza el vuelo con el Anillo Mágico o reintenta desde la decisión previa.
        </p>
      `,
      choices: []
    },

    "floating_gameover_spikes": {
      id: "floating_gameover_spikes",
      isGameOver: true,
      title: "¡Caída al Abismo!",
      image: "assets/images/floating_gameover_spikes.jpg",
      textLeft: `
        <span class="page-badge" style="color:var(--accent-red);">¡DESPEÑADO!</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:var(--accent-red);">¡EL BORDE DE LA ISLA!</h3>
        <p>El puente de cuerdas y el peñasco flotante se parten en dos lanzándoos al vacío en una lluvia de cantos rodados que se pierden en el mar de nubes rosadas.</p>
        <div class="enigma-box" style="border-left-color: var(--accent-red);">
          <strong>⚠️ PRECIPICIO CELESTE:</strong>
          <p>La caída es inminente. El <strong>Anillo Mágico de Salvación</strong> es vuestra única oportunidad de desplegar un planeador milagroso y retroceder a la seguridad del sendero.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Destino & Salvación</span>
        <div class="gameover-box">
          <p>Caerás sin fin hacia las profundidades del cielo... ¡a menos que actives tu salvación mágica!</p>
        </div>
        <div id="gameover-ring-box" style="margin: 12px 0;"></div>
        <p class="decision-prompt" id="gameover-prompt">
          Elige una acción: rescátate con el Anillo Mágico o reintenta desde la última decisión segura.
        </p>
      `,
      choices: []
    }
  }
};

window.LIBRARY_BOOKS = {
  "castillo": CASTILLO_DATA,
  "circo": CIRCO_DATA,
  "cueva": CUEVA_DATA,
  "dragon": DRAGON_DATA,
  "mundo": MUNDO_DATA
};
