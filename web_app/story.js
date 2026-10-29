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

// =============================================================================
// LIBRO 6: EL TESORO DE LOS DOS DRAGONES: JAULIS Y OJO (PARA DAVID)
// =============================================================================
const DAVID_DATA = {
  id: "david_dragones",
  title: "El Tesoro de los Dos Dragones: Jaulis y Ojo",
  subtitle: "Un libro-juego de dragones gemelos, puertas vivas armadas y suelos de pinchos invisibles",
  tagline: "¡Adéntrate con tu espada en la guarida volcánica, engaña a las puertas armadas y vence a Jaulis y Ojo!",
  cover: "assets/images/cover_david_dragons.jpg?v=es",
  difficulty: "⭐⭐⭐",
  category: "Dragones & Espadas",
  themeColor: "#c0392b",
  badgeIcon: "🐲",
  companionName: "Chispita la Salamandra",
  companionIcon: "🦎",
  salvationItemName: "Gema de Fuego de Chispita / Anillo Mágico",
  salvationItemShort: "Gema de Fuego",
  objectiveName: "🗡️ Misiones:",
  keyName: "🗝️ Llaves Dragón:",
  companionDesc: "Una simpática salamandra de lava inmune a las llamas con un olfato especial para detectar trampas ocultas.",
  mechanics: ["🗡️ Espada de Luz de David", "🚪 Puertas con Ojos y Pistolas", "📌 Suelo de Pinchos Invisibles", "🎲 Combate de Dados", "💎 Gran Tesoro"],
  totalFriends: 3,
  totalKeys: 3,

  nodes: {
    "cover": {
      id: "cover",
      type: "cover",
      pageNumbers: [1, 2],
      title: "El Tesoro de los Dos Dragones: Jaulis y Ojo",
      image: "assets/images/cover_david_dragons.jpg",
      isSpread: false,
      textLeft: `
        <span class="page-badge">Portada & Prólogo</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:#c0392b;">¡LA MISIÓN DEL ESPADACHÍN DAVID!</h3>
        <p>En lo más profundo del volcán Monte Calavera habitan dos dragones gemelos legendarios: <strong>Jaulis</strong>, una bestia carmesí de escamas ardientes con aliento de magma, y <strong>Ojo</strong>, un dragón púrpura con un gran tercer ojo místico en la frente que dispara rayos fulgurantes.</p>
        <p>Ambos custodian el mayor tesoro jamás reunido en el reino. David, armado con su fiel <strong>Espada Forjada de Acero Azul</strong> y acompañado por <strong>Chispita</strong>, decide aceptar el reto supremo.</p>
        <ul style="margin: 8px 0 8px 20px; font-size: 0.95rem; line-height: 1.6;">
          <li>🚪🔫 <strong>Las Dos Puertas Vivas:</strong> Dos portales con ojos saltones y pistolas mágicas que custodian el desfiladero.</li>
          <li>📌 <strong>El Suelo de Pinchos Invisibles:</strong> Un laberinto de losas donde un paso en falso activa trampas metálicas mortales.</li>
          <li>⚔️ <strong>La Fragua de Armas:</strong> Mejora tu espada para resistir las llamas volcánicas.</li>
          <li>🎲 <strong>Duelo contra Jaulis y Ojo:</strong> Lanza tus dados para desviar llamaradas y rayos.</li>
        </ul>
      `,
      textRight: `
        <span class="page-badge">Instrucciones & Consejos</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:#d4af37;">CONSEJOS DE CHISPITA</h3>
        <p>🦎 <strong>Tu Aliada Ígnea:</strong> Chispita detecta las fuentes de calor y los mecanismos de metal escondidos bajo la roca.</p>
        <p>🗡️ <strong>La Espada de David:</strong> Tu espada no solo corta, ¡también puede reflejar rayos mágicos si la empuñas con valentía!</p>
        <p>💍 <strong>Comodín de Salvación:</strong> Si caes en una trampa de pinchos o recibes un disparo, el Anillo / Gema te rescatará <strong>una sola vez</strong>.</p>
      `,
      choices: [
        {
          text: "⚔️ Desenvainar la espada y adentrarse en la Garganta Volcánica",
          target: "david_entrance",
          pageDisplay: "Págs. 3 - 4"
        }
      ]
    },

    "david_entrance": {
      id: "david_entrance",
      pageNumbers: [3, 4],
      title: "La Garganta de Obsidiana",
      image: "assets/images/david_scene_entrance.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 3</span>
        <p>Avanzas entre paredes de roca negra que desprenden un calor sofocante. El suelo de obsidiana vibra con cada rugido subterráneo de los dragones.</p>
        <p>De pronto, el camino se corta ante una colosal muralla de piedra tallada. Al fondo, la luz de las antorchas revela una silueta insólita: ¡dos portones de madera encantada que parecen estar completamente despiertos!</p>
        <p><em>—¡Cuidado, David! —chilla Chispita encaramándose a tu hombro—. Esas puertas no son de madera común... ¡tienen ojos y cañones de pólvora mágica apuntando hacia nosotros!</em></p>
      `,
      textRight: `
        <span class="page-badge">Página 4</span>
        <p>Frente a ti se alzan las dos puertas guardianas:</p>
        <p>🔴 <strong>La Puerta Carmesí (Griselda):</strong> Tiene un ojo llameante y un trabuco de bronce pulido.</p>
        <p>🟣 <strong>La Puerta Violeta (Mardoqueo):</strong> Parpadea con un ojo místico y sostiene una pistola de plasma encantado.</p>
        <p class="decision-prompt">Acércate con la espada en alto para afrontar su desafío.</p>
      `,
      choices: [
        {
          text: "🚪 Enfrentar a las Dos Puertas Vivas y desviar sus disparos",
          target: "david_doors",
          pageDisplay: "Págs. 5 - 6"
        }
      ]
    },

    "david_doors": {
      id: "david_doors",
      pageNumbers: [5, 6],
      title: "Las Dos Puertas Vivas con Ojos y Pistolas",
      image: "assets/images/david_scene_doors.jpg",
      isSpread: true,
      isDiceChallenge: true,
      diceChallenge: {
        target: 6,
        name: "Duelo de Reflejos contra las Puertas Armadas",
        buttonText: "🎲 ¡DESVIAR LOS DISPAROS CON LA ESPADA DE DAVID!",
        successTitle: "¡Tirada asombrosa! David hace girar su espada como un torbellino, desviando las balas mágicas. Las puertas, asombradas por tu destreza, chasquean sus cerrojos y se abren de par en par.",
        failureTitle: "¡Un proyectil roza la pared de roca! Concéntrate y vuelve a intentar la parada."
      },
      textLeft: `
        <span class="page-badge">Página 5</span>
        <p><em>—¡Alto ahí, renacuajo con espada! —gruñe la Puerta Carmesí abriendo su ojo desmesuradamente—. ¡Nadie cruza hacia la guarida de Jaulis y Ojo sin recibir plomo caliente!</em></p>
        <p><em>—¡Pum, pam, fuego! —añade la Puerta Violeta apuntando su trabuco reluciente—. A menos que demuestres reflejos legendarios desviando nuestra salva de bienvenida.</em></p>
        <div style="padding:10px; background:rgba(192,57,43,0.2); border:1px solid #c0392b; border-radius:6px; margin-top:8px;">
          <strong>🎯 RETO DE DADOS (Necesitas 6+):</strong> Lanza los dados para que David ejecute un remolino defensivo con su espada y obligue a las puertas a rendirse.
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 6</span>
        <div id="generic-dice-box"></div>
        <p class="decision-prompt">Cuando superes el disparo de las puertas, cruza hacia el siguiente salón.</p>
      `,
      choices: [
        {
          text: "👣 Cruzar el umbral hacia el Salón de los Pinchos Invisibles",
          target: "david_spikes",
          pageDisplay: "Págs. 7 - 8"
        }
      ]
    },

    "david_spikes": {
      id: "david_spikes",
      pageNumbers: [7, 8],
      title: "El Suelo de Pinchos Invisibles",
      image: "assets/images/david_scene_spikes.jpg",
      isSpread: true,
      isSpikesGrid: true,
      spikesConfig: {
        path: [0, 3, 4, 7],
        tiles: [
          { id: 0, rune: "🌙", name: "Luna Llena" },
          { id: 1, rune: "💀", name: "Calavera Trampa" },
          { id: 2, rune: "⚡", name: "Rayo Oculto" },
          { id: 3, rune: "💧", name: "Gota de Agua" },
          { id: 4, rune: "🛡️", name: "Escudo Protector" },
          { id: 5, rune: "🔥", name: "Fuego Volcánico" },
          { id: 6, rune: "🕷️", name: "Telaraña Falsa" },
          { id: 7, rune: "🗝️", name: "Losa de Salida" },
          { id: 8, rune: "🦂", name: "Escorpión" }
        ]
      },
      textLeft: `
        <span class="page-badge">Página 7</span>
        <p>Al cruzar las puertas llegas a una vasta cámara abovedada. El suelo está formado por una cuadrícula de grandes losas de granito que parecen completamente normales.</p>
        <p>Sin embargo, Chispita pega un respingo: <em>—¡David, no des un paso en falso! Debajo de casi todas las losas hay resortes de pinchos de acero invisibles desde arriba. Si pisas la incorrecta, ¡los pinchos emergen del suelo al instante!</em></p>
        <p>En el muro de la derecha hay una inscripción rúnica dejada por un antiguo sabio:</p>
        <div style="padding:10px; background:rgba(212,175,55,0.15); border:1px solid #d4af37; border-radius:6px; font-style:italic;">
          «Quien busque el tesoro sin ser herido, siga la senda de los cuatro símbolos benignos: primero la <strong>🌙 Luna</strong>, luego la <strong>💧 Gota de Agua</strong>, después el <strong>🛡️ Escudo</strong> y finalmente la <strong>🗝️ Salida</strong>.»
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 8</span>
        <p><strong>🎯 MINIJUEGO INTERACTIVO:</strong> Pulsa en orden las losas seguras para cruzar el salón ileso.</p>
        <div id="spikes-grid-container"></div>
        <p class="decision-prompt">Una vez desactivadas las trampas, el pasillo hacia la Fragua queda expedito.</p>
      `,
      choices: [
        {
          text: "⚔️ Entrar en la Fragua Secreta para mejorar tu espada",
          target: "david_armory_cache",
          pageDisplay: "Págs. 9 - 10",
          rewardFriend: "Misión 1: Superar Pinchos y Puertas"
        }
      ]
    },

    "david_armory_cache": {
      id: "david_armory_cache",
      pageNumbers: [9, 10],
      title: "La Fragua de los Héroes Dragón",
      image: "assets/images/david_scene_armory.jpg",
      isSpread: true,
      isObjectSearch: true,
      requiredItems: [
        {
          id: "david_sharpening_stone",
          name: "Piedra de Afilar Rúnica",
          desc: "¡Una piedra mágica junto al yunque de la izquierda!",
          icon: "🪨",
          x: 26,
          y: 70,
          radius: 12,
          hint: "Junto al yunque de piedra a la izquierda"
        },
        {
          id: "david_mirror_shield",
          name: "Escudo Reflector de Obsidiana",
          desc: "¡Un escudo pesado apoyado contra la armadura dorada a la derecha!",
          icon: "🛡️",
          x: 73,
          y: 62,
          radius: 12,
          hint: "Apoyado contra la armadura dorada a la derecha"
        },
        {
          id: "david_emerald_gem",
          name: "Gema de Luz Esmeralda",
          desc: "¡Una gema brillante engarzada en el estandarte central!",
          icon: "💎",
          x: 50,
          y: 38,
          radius: 12,
          hint: "Engarzada en el estandarte central"
        }
      ],
      textLeft: `
        <span class="page-badge">Página 9</span>
        <p>Llegas a una forja colosal donde los antiguos caballeros forjaban armas para combatir bestias aladas. En el fuego eterno aún descansan reliquias indispensables.</p>
        <p>Para que la espada de David pueda resistir las llamaradas de Jaulis y reflejar los rayos de Ojo, necesitas encontrar tres artefactos legendarios ocultos en la imagen.</p>
        <div class="search-checklist-box">
          <h4>🔍 OBJETIVOS A LOCALIZAR (Haz clic en la imagen):</h4>
          <ul id="object-search-checklist" class="search-checklist"></ul>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 10</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#d4af37; color:#d4af37;">Objetos encontrados: 0 / 3</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>FRAGUA DE HÉROES:</strong>
          <p id="items-feedback-text">Localiza la piedra de afilar rúnica, el escudo de obsidiana y la gema esmeralda en la forja.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          Al reunir los 3 artefactos, la espada de David se ilumina con fulgor diamantino.
        </p>
      `,
      choices: [
        {
          text: "🔥 Enfrentar a Jaulis en el Cráter de Lava Ardiente",
          target: "david_lair_jaulis",
          pageDisplay: "Págs. 11 - 12",
          rewardKey: "Llave de Fuego Carmesí"
        }
      ]
    },

    "david_lair_jaulis": {
      id: "david_lair_jaulis",
      pageNumbers: [11, 12],
      title: "El Cráter Ígneo del Dragón Jaulis",
      image: "assets/images/david_scene_jaulis.jpg",
      isSpread: true,
      isDiceChallenge: true,
      diceChallenge: {
        target: 7,
        name: "Duelo de Espada contra el Fuego de Jaulis",
        buttonText: "🎲 ¡ATACAR CON LA ESPADA DE DAVID CONTRA JAULIS!",
        successTitle: "¡TIRADA DE CAMPEÓN! David esquiva la ola de fuego, corre por la cresta rocosa y con un certero tajo de luz parte la cadena que ataba la furia del dragón. Jaulis se calma y te cede la Llave de Fuego.",
        failureTitle: "¡Una ola de calor te hace retroceder! Vuelve a concentrar tu valor y tira de nuevo."
      },
      textLeft: `
        <span class="page-badge">Página 11</span>
        <p>El aire arde como una forja. Sobre una montaña de carbones encendidos reposa <strong>Jaulis</strong>, un colosal dragón carmesí con escamas tan duras como planchas de hierro.</p>
        <p>Al verte, abre sus inmensas alas y exhala una llamarada de fuego volcánico que derrite las estalagmitas cercanas.</p>
        <p><em>—¡Nadie perturba el sueño de Jaulis! —ruge con voz de trueno—. ¡Conviértete en ceniza, jovencito!</em></p>
      `,
      textRight: `
        <span class="page-badge">Página 12</span>
        <div id="generic-dice-box"></div>
        <p class="decision-prompt">Vencido Jaulis, la senda hacia la cúpula de su hermano Ojo se ilumina con destellos violetas.</p>
      `,
      choices: [
        {
          text: "👁️ Subir a la Cúpula Eléctrica del Dragón Ojo",
          target: "david_lair_ojo",
          pageDisplay: "Págs. 13 - 14",
          rewardFriend: "Misión 2: Jaulis Vencido"
        }
      ]
    },

    "david_lair_ojo": {
      id: "david_lair_ojo",
      pageNumbers: [13, 14],
      title: "La Cúpula Mística del Dragón Ojo",
      image: "assets/images/david_scene_ojo.jpg",
      isSpread: true,
      isRiddle: true,
      riddleOptions: [
        {
          id: "ojo_sword_reflect",
          text: "🛡️ Alzar el Escudo de Obsidiana para reflejar su rayo hacia el techo",
          isCorrect: true,
          feedback: "¡BRILLANTE! El rayo violeta de Ojo choca contra tu escudo y rebota hacia la estalactita central, haciendo caer una lluvia de polvo que ciega al dragón y lo deja pacificado."
        },
        {
          id: "ojo_run_straight",
          text: "🏃 Correr de frente en línea recta hacia sus garras",
          isCorrect: false,
          feedback: "¡Cuidado! El rayo hipnótico de Ojo te paraliza temporalmente los pies. ¡Usa una táctica con tu escudo!"
        },
        {
          id: "ojo_close_eyes",
          text: "🙈 Cerrar los ojos y avanzar a tientas sin mirar",
          isCorrect: false,
          feedback: "Avanzar a ciegas contra un dragón con rayos eléctricos es peligrosísimo. ¡Usa el reflejo de tu equipo!"
        }
      ],
      textLeft: `
        <span class="page-badge">Página 13</span>
        <p>Llegas a la caverna superior iluminada por extraños relámpagos púrpuras. En el centro planea <strong>Ojo</strong>, un dragón de tonalidades amatista y zafiro.</p>
        <p>En mitad de su frente brilla un tercer ojo gigantesco que gira sin parar emitiendo un zumbido eléctrico hipnótico. Todo lo que mira queda atrapado en una jaula de energía.</p>
        <p><em>—¡Veo cada uno de tus pensamientos, espadachín David! —resuena en tu mente su voz telepática—. ¡No podrás esquivar mi rayo de la verdad!</em></p>
      `,
      textRight: `
        <span class="page-badge">Página 14</span>
        <div id="riddle-box" class="riddle-container"></div>
        <p class="decision-prompt">Cuando derrotes a Ojo, obtendrás la Llave Mística para abrir el Gran Tesoro.</p>
      `,
      choices: [
        {
          text: "💎 Penetrar en la Cámara del Gran Tesoro de los Dragones",
          target: "david_treasure_vault",
          pageDisplay: "Págs. 15 - 16",
          rewardKey: "Llave Mística de Ojo"
        }
      ]
    },

    "david_treasure_vault": {
      id: "david_treasure_vault",
      pageNumbers: [15, 16],
      title: "La Cámara del Gran Tesoro Prohibido",
      image: "assets/images/david_scene_treasure.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 15</span>
        <p>¡Has vencido a las dos puertas vivas con pistolas, has cruzado el suelo de pinchos invisibles y has superado a Jaulis y a Ojo!</p>
        <p>Ante ti se abre la antecámara del tesoro. Sobre tres pedestales de roca volcánica insertas la <strong>Llave de Fuego Carmesí</strong>, la <strong>Llave Mística Violeta</strong> y la <strong>Llave Maestra Dorada</strong>.</p>
        <p>Con un crujido monumental, el cofre ancestral de los dragones se abre lentamente...</p>
      `,
      textRight: `
        <span class="page-badge">Página 16</span>
        <div style="padding:15px; background:rgba(212,175,55,0.25); border:2px solid #d4af37; border-radius:8px; text-align:center;">
          <h3 style="color:#d4af37; font-family:'Cinzel',serif; font-size:1.5rem;">👑 ¡EL TESORO DE LOS DRAGONES ES TUYO!</h3>
          <p style="font-size:1.1rem; color:#f5eedc; margin-top:8px;">Dentro brillan la <strong>Corona Solar de los Reyes del Dragón</strong>, el <strong>Diamante Eterno</strong> y cofres repletos de oro pulido.</p>
        </div>
        <p class="decision-prompt">Reclama tu recompensa y emprende el regreso triunfal.</p>
      `,
      choices: [
        {
          text: "🏆 Salir a la luz del sol vitoreado por todo el Reino",
          target: "david_victory",
          pageDisplay: "Págs. 17 - 18",
          rewardFriend: "Misión 3: Tesoro Robado con Honor"
        }
      ]
    },

    
    "david_gameover_spikes": {
      id: "david_gameover_spikes",
      isGameOver: true,
      title: "¡Caída en la Fosa de Pinchos Volcánicos!",
      image: "assets/images/david_gameover_spikes.jpg",
      textLeft: `
        <span class="page-badge" style="color:var(--accent-red);">¡FINAL FATAL!</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:var(--accent-red);">¡EL SUELO DE BASALTO SE DERRUMBA!</h3>
        <p>Un paso en falso sobre una losa maldita acciona el mecanismo secreto. El suelo de roca volcánica se abre bajo tus pies y una densa hilera de pinchos de acero al rojo vivo surge desde la fosa de magma.</p>
        <div class="enigma-box" style="border-left-color: var(--accent-red);">
          <strong>⚠️ TRAMPA DE PINCHOS RETRÁCTILES:</strong>
          <p>Has caído en la trampa del salón. Si portas la <strong>Gema de Chispita / Anillo Mágico</strong>, el talismán creará un campo de sustentación flotante que te salvará de los pinchos.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Destino & Salvación</span>
        <div class="gameover-box">
          <p>Quedarías atrapado en la fosa del volcán para siempre... ¡a menos que invoques el poder del Anillo Mágico para regresar sobre tus pasos!</p>
        </div>
        <div id="gameover-ring-box" style="margin: 12px 0;"></div>
        <p class="decision-prompt" id="gameover-prompt">
          Elige una opción a continuación: usa el <strong>Anillo Mágico de Salvación</strong> o reintenta con calma desde la decisión previa.
        </p>
      `,
      choices: []
    },

    "david_gameover_fire": {
      id: "david_gameover_fire",
      isGameOver: true,
      title: "¡Envuelto en la Llamarada de Jaulis!",
      image: "assets/images/david_gameover_fire.jpg",
      textLeft: `
        <span class="page-badge" style="color:var(--accent-red);">¡FINAL FATAL!</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:var(--accent-red);">¡LA FURIA DEL DRAGÓN DE FUEGO!</h3>
        <p>Cargar a pecho descubierto sin esperar la señal de Chispita fue un grave error. Jaulis inhala profundamente y descarga un torrente colosal de llamas doradas que abrasa la caverna entera.</p>
        <div class="enigma-box" style="border-left-color: var(--accent-red);">
          <strong>🔥 LLAMARADA VOLCÁNICA PURA:</strong>
          <p>El calor es insoportable para cualquier armadura normal. ¡Activa tu <strong>Gema de Fuego / Anillo Mágico</strong> para desviar el torrente ígneo antes de quedar calcinado!</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Destino & Salvación</span>
        <div class="gameover-box">
          <p>Tu espada se derretiría y el tesoro de los dragones quedaría fuera de tu alcance... ¡a menos que uses tu talismán de salvación!</p>
        </div>
        <div id="gameover-ring-box" style="margin: 12px 0;"></div>
        <p class="decision-prompt" id="gameover-prompt">
          Usa el <strong>Anillo Mágico</strong> para desplegar un domo protector o reintenta el combate con estrategia.
        </p>
      `,
      choices: []
    },
    "david_victory": {
      id: "david_victory",
      pageNumbers: [17, 18],
      title: "¡David, el Conquistador de Dragones!",
      image: "assets/images/david_scene_victory.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">¡Aventura Completada!</span>
        <h3 style="color:#27ae60; font-family:'Cinzel',serif; font-size:1.6rem;">¡VICTORIA TOTAL PARA DAVID!</h3>
        <p>Al salir de la caverna con el tesoro a hombros y tu espada resplandeciente, los dragones Jaulis y Ojo baten sus alas a lo lejos no con furia, ¡sino en señal de respeto ante el espadachín más audaz que jamás pisó su monte!</p>
        <p>El pueblo entero sale a recibir a David y a su fiel compañera Chispita con trompetas, estandartes y un banquete de gala.</p>
      `,
      textRight: `
        <span class="page-badge">Salón de la Fama</span>
        <div style="padding:15px; background:rgba(39,174,96,0.2); border:2px solid #27ae60; border-radius:8px; text-align:center;">
          <div style="font-size:2.8rem; margin-bottom:6px;">🏆🐲🗡️</div>
          <h4 style="color:#2ecc71;">¡TROFEO CONCEDIDO: MAESTRO DRACONIANO!</h4>
          <p style="color:#ecd8be; font-size:0.95rem; margin-top:6px;">Has derrotado a Jaulis y a Ojo, esquivado las puertas vivas y cruzado los pinchos sin miedo.</p>
        </div>
        <p class="decision-prompt">¡Enhorabuena, David! Puedes volver a la biblioteca para elegir otro libro o volver a jugar esta gesta.</p>
      `,
      choices: [
        {
          text: "🏛️ Volver a la Biblioteca de Aventuras",
          target: "library",
          pageDisplay: "Estantería Mágica"
        }
      ]
    }
  }
};


// =============================================================================
// LIBRO 7: EL PARQUE DE LAS CRIATURAS VIVAS Y LAS 9 LLAVES (PARA FRANCISCO)
// =============================================================================
const FRANCISCO_DATA = {
  id: "francisco_parque",
  title: "El Parque de las Criaturas Vivas y las 9 Llaves",
  subtitle: "Un parque de atracciones encantado donde cada juego mecánico es un monstruo colosal viviente",
  tagline: "¡Sube a cada atracción viva, supera sus 9 pruebas sin rendirte y rompe el hechizo del parque!",
  cover: "assets/images/cover_francisco_park.jpg?v=es",
  difficulty: "⭐⭐⭐⭐",
  category: "Parque & Criaturas Vivas",
  themeColor: "#e67e22",
  badgeIcon: "🎡",
  companionName: "Boliche el Oso Ferial",
  companionIcon: "🧸",
  salvationItemName: "Ticket VIP de Oro de Boliche / Anillo Mágico",
  salvationItemShort: "Ticket VIP de Oro",
  objectiveName: "🎢 Retos Vencidos:",
  keyName: "🗝️ Llaves del Parque:",
  companionDesc: "Un simpático oso de peluche viviente con chistera y pajarita que conoce todos los trucos de la feria.",
  mechanics: ["🎢 9 Atracciones Criatura", "🗝️ 9 Llaves Mágicas", "🎲 Pruebas de Habilidad", "🎪 Desactivación del Hechizo", "✨ Fiesta Normal"],
  totalFriends: 9,
  totalKeys: 9,

  nodes: {
    "cover": {
      id: "cover",
      type: "cover",
      pageNumbers: [1, 2],
      title: "El Parque de las Criaturas Vivas y las 9 Llaves",
      image: "assets/images/cover_francisco_park.jpg",
      isSpread: false,
      textLeft: `
        <span class="page-badge">Portada & Prólogo</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:#e67e22;">¡EL HECHIZO DE LA FERIA LUNAR!</h3>
        <p>Una noche de luna roja, un hechicero envidioso lanzó un maleficio sobre el Parque de Diversiones Fantasía. Al sonar la campana de medianoche, <strong>¡cada una de las 9 atracciones mecánicas cobró vida como una criatura monstruosa colosal!</strong></p>
        <p>Las puertas del parque se han sellado. Nadie puede escapar hasta que un visitante con verdadero espíritu de diversión consiga subir a cada atracción, disfrutar de su viaje y apaciguar a la criatura ganando su <strong>Llave de Oro</strong>.</p>
        <p>Francisco, acompañado por <strong>Boliche el Oso Ferial</strong>, acepta el reto de las <strong>9 Llaves</strong> para devolver el parque a la normalidad.</p>
      `,
      textRight: `
        <span class="page-badge">Instrucciones & Consejos</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:#f39c12;">CONSEJOS DE BOLICHE</h3>
        <p>🧸 <strong>Tu Aliado de Peluche:</strong> Boliche sabe qué truco le gusta a cada atracción para que no se enfade.</p>
        <p>🗝️ <strong>Las 9 Llaves:</strong> Cada atracción superada te entrega una llave dorada (0/9). ¡Necesitas las 9 para activar la Fuente de Desencantamiento!</p>
        <p>💍 <strong>Ticket VIP de Oro:</strong> Si una atracción te marea o caes en un reto, el Ticket te permite reintentar sin perder tu avance.</p>
      `,
      choices: [
        {
          text: "🎡 Cruzar los tornos y entrar a la primera atracción",
          target: "park_ride_1",
          pageDisplay: "Págs. 3 - 4"
        }
      ]
    },

    "park_ride_1": {
      id: "park_ride_1",
      pageNumbers: [3, 4],
      title: "1. El Gusano de Hierro (Montaña Rusa Serpiente)",
      image: "assets/images/park_scene_entrance.jpg",
      isSpread: true,
      isDiceChallenge: true,
      diceChallenge: {
        target: 6,
        name: "Prueba de Vértigo en el Gusano de Hierro",
        buttonText: "🎲 ¡AGUANTAR EL TRIPLE BUCLE SIN CERRAR LOS OJOS!",
        successTitle: "¡Tirada genial! Francisco levanta las manos al viento en la bajada de 90 grados riendo a carcajadas. La serpiente de raíles se alegra de tu diversión y te entrega la Llave 1.",
        failureTitle: "¡El viento casi te despeina el sombrero! Respira hondo y tira de nuevo."
      },
      textLeft: `
        <span class="page-badge">Página 3 • Atracción 1 de 9</span>
        <p>La gigantesca montaña rusa es ahora un colosal basilisco de raíles de acero que ondea entre las nubes y lanza chispas por los colmillos.</p>
        <p>Para calmar su furia debes montar en el primer vagón y demostrar que no tienes miedo a las curvas imposibles.</p>
      `,
      textRight: `
        <span class="page-badge">Página 4</span>
        <div id="generic-dice-box"></div>
        <p class="decision-prompt">Al superar la montaña rusa ganas la <strong>Llave 1 (Colmillo de Acero)</strong>.</p>
      `,
      choices: [
        {
          text: "🎡 Avanzar hacia la Noria de las Mil Luces",
          target: "park_ride_2",
          pageDisplay: "Págs. 5 - 6",
          rewardKey: "Llave 1: Colmillo de Acero",
          rewardFriend: "Atracción 1 Domada"
        }
      ]
    },

    "park_ride_2": {
      id: "park_ride_2",
      pageNumbers: [5, 6],
      title: "2. La Noria de las Mil Luces (El Pulpo Celeste)",
      image: "assets/images/park_scene_octopus_wheel.jpg",
      isSpread: true,
      isObjectSearch: true,
      requiredItems: [
        {
          id: "ride_pulpo_lantern",
          name: "Barquilla del Farol de Zafiro Azul",
          desc: "La cabina pacífica en la cúspide de la noria",
          icon: "🏮",
          x: 60.5,
          y: 10.5,
          radius: 14,
          hint: "En lo alto de la noria del pulpo, cerca de las estrellas"
        }
      ],
      textLeft: `
        <span class="page-badge">Página 5 • Atracción 2 de 9</span>
        <p>La noria gigante es un pulpo de cristal translúcido que sostiene 12 cabinas con sus tentáculos y las balancea a 40 metros de altura.</p>
        <p>Boliche te advierte: <em>—Solo una de las cabinas tiene la vibración pacífica que apacigua al pulpo. ¡Elige con buen ojo!</em></p>
        <div class="search-checklist-box" style="margin-top: 14px; padding: 12px; background: rgba(230,126,34,0.15); border: 1px solid #e67e22; border-radius: 8px;">
          <h4 style="color: #e67e22; margin-bottom: 6px;">🔍 MISIÓN: BUSCA EN LA ILUSTRACIÓN</h4>
          <p style="font-size: 0.95rem; color: #f5eedc; margin: 0;"><strong>Haz clic con el ratón directamente sobre la cabina pacífica</strong> en la noria del pulpo para subirte y apaciguar al monstruo con el vals.</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 6</span>
        <div id="items-feedback-text" style="padding: 14px; background: rgba(230,126,34,0.15); border: 2px dashed #e67e22; border-radius: 8px; margin: 14px 0; text-align: center;">
          <h4 style="color: #f39c12; margin-bottom: 6px;">🎡 ¡ENCUENTRA LA CABINA EN LA IMAGEN!</h4>
          <p style="font-size: 0.95rem; color: #f5eedc; margin: 0;">Pincha con el ratón sobre la cabina correcta en la ilustración para conseguir la <strong>Llave 2</strong>.</p>
        </div>
        <p class="decision-prompt">Al encontrar la cabina pacífica, el pulpo te entregará la Llave 2.</p>
      `,
      choices: [
        {
          text: "🚗 Dirigirse al Coliseo de los Coches de Choque",
          target: "park_ride_3",
          pageDisplay: "Págs. 7 - 8",
          rewardKey: "Llave 2: Gema del Pulpo",
          rewardFriend: "Atracción 2 Domada"
        }
      ]
    },

    "park_ride_3": {
      id: "park_ride_3",
      pageNumbers: [7, 8],
      title: "3. El Coliseo de Escarabajos (Coches de Choque)",
      image: "assets/images/park_scene_beetle_cars.jpg",
      isSpread: true,
      isDiceChallenge: true,
      diceChallenge: {
        target: 6,
        name: "Torneo de Conducción en el Coliseo",
        buttonText: "🎲 ¡PILOTAR EL ESCARABAJO DE ORO ENTRE LA PISTA!",
        successTitle: "¡Maniobra magistral! Francisco esquiva las pinzas de los coches escarabajo y cruza la meta victorioso recibiendo la Llave 3.",
        failureTitle: "¡Un escarabajo blindado te ha chocado de costado! Corrige el volante y tira de nuevo."
      },
      textLeft: `
        <span class="page-badge">Página 7 • Atracción 3 de 9</span>
        <p>La pista de coches de choque se ha convertido en una arena de escarabajos rinoceronte gigantescos con parachoques electrificados.</p>
        <p>Montas en el único escarabajo con caparazón dorado para superar el circuito de aceleración.</p>
      `,
      textRight: `
        <span class="page-badge">Página 8</span>
        <div id="generic-dice-box"></div>
        <p class="decision-prompt">Superada la carrera, obtienes la <strong>Llave 3</strong>.</p>
      `,
      choices: [
        {
          text: "🎠 Ir al Tiovivo de los Grifos Alados",
          target: "park_ride_4",
          pageDisplay: "Págs. 9 - 10",
          rewardKey: "Llave 3: Coraza de Escarabajo",
          rewardFriend: "Atracción 3 Domada"
        }
      ]
    },

    "park_ride_4": {
      id: "park_ride_4",
      pageNumbers: [9, 10],
      title: "4. El Tiovivo de los Grifos Alados",
      image: "assets/images/park_scene_griffin_carousel.jpg",
      isSpread: true,
      isObjectSearch: true,
      requiredItems: [
        {
          id: "item_griffin_left",
          name: "Grifo Alado de la Izquierda",
          desc: "¡El majestuoso grifo dorado con alas abiertas a la izquierda!",
          icon: "🦅",
          x: 32,
          y: 44,
          radius: 14,
          hint: "En el gran grifo dorado con alas abiertas a la izquierda"
        },
        {
          id: "item_griffin_right",
          name: "Grifo Alado de la Derecha",
          desc: "¡El segundo grifo dorado con alas y arnés celestial a la derecha!",
          icon: "🦅",
          x: 68,
          y: 45,
          radius: 14,
          hint: "En el gran grifo dorado con alas abiertas a la derecha"
        },
        {
          id: "item_carousel_melody",
          name: "Estela de Notas Musicales Doradas",
          desc: "¡La estela mágica de notas musicales brillantes que flota en el centro del tiovivo!",
          icon: "🎵",
          x: 50,
          y: 53,
          radius: 14,
          hint: "En las notas musicales brillantes que flotan en el centro del carrusel"
        }
      ],
      textLeft: `
        <span class="page-badge">Página 9 • Atracción 4 de 9</span>
        <p>El carrusel gira al compás de una música hipnótica mientras sus grifos de madera esculpida mueven las alas con vida propia.</p>
        <p>Para calmar el vuelo del tiovivo debes encontrar los tres elementos mágicos de la atracción directamente en la imagen:</p>
        <div class="search-checklist-box">
          <h4>🔍 LOCALIZA EN LA ILUSTRACIÓN:</h4>
          <ul id="object-search-checklist" class="search-checklist"></ul>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 10</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#d4af37; color:#d4af37;">Objetos encontrados: 0 / 3</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>EL TIOVIVO DE LOS GRIFOS:</strong>
          <p id="items-feedback-text">Haz clic en el grifo de la izquierda, el grifo de la derecha y las notas musicales que flotan en el centro.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          Al reunir los 3 elementos, los grifos se apaciguan y de la copa del tiovivo cae la <strong>Llave 4</strong>.
        </p>
      `,
      choices: [
        {
          text: "🚢 Embarcar en el Galeón Leviatán",
          target: "park_ride_5",
          pageDisplay: "Págs. 11 - 12",
          rewardKey: "Llave 4: Pluma de Grifo",
          rewardFriend: "Atracción 4 Domada"
        }
      ]
    },

    "park_ride_5": {
      id: "park_ride_5",
      pageNumbers: [11, 12],
      title: "5. El Galeón Leviatán (Barco Columpio)",
      image: "assets/images/park_scene_leviathan_ship.jpg",
      isSpread: true,
      isDiceChallenge: true,
      diceChallenge: {
        target: 6,
        name: "Balanceo en el Barco Leviatán",
        buttonText: "🎲 ¡MANTENER EL TIMÓN EN EL OLEAJE DE NIEBLA!",
        successTitle: "¡Navegación impecable! Francisco toma el timón de roble, surfea la niebla y el gran barco de madera viviente suelta la Llave 5.",
        failureTitle: "¡La proa se eleva demasiado alto! Sujétate fuerte y repite la tirada."
      },
      textLeft: `
        <span class="page-badge">Página 5 • Atracción 5 de 9</span>
        <p>Un colosal barco pirata con cabeza de ballena acorazada se mece sobre un estanque de niebla espesa como si flotara sobre nubes.</p>
        <p>Alcanza el ángulo vertical de 80 grados: solo un auténtico grumete puede mantenerse en la rueda del timón.</p>
      `,
      textRight: `
        <span class="page-badge">Página 12</span>
        <div id="generic-dice-box"></div>
        <p class="decision-prompt">Conseguida la <strong>Llave 5</strong>, adéntrate en el pasaje del terror.</p>
      `,
      choices: [
        {
          text: "🏰 Entrar en la Mansión de las Sombras Risueñas",
          target: "park_ride_6",
          pageDisplay: "Págs. 13 - 14",
          rewardKey: "Llave 5: Timón de Ballena",
          rewardFriend: "Atracción 5 Domada"
        }
      ]
    },

    "park_ride_6": {
      id: "park_ride_6",
      pageNumbers: [13, 14],
      title: "6. La Mansión de las Sombras Risueñas",
      image: "assets/images/park_scene_haunted_mansion.jpg",
      isSpread: true,
      isObjectSearch: true,
      requiredItems: [
        {
          id: "park_horn",
          name: "Bocina de Payaso Cómico",
          desc: "¡Una divertida bocina de latón sobre la mesa izquierda!",
          icon: "🎺",
          x: 25,
          y: 75,
          radius: 12,
          hint: "Sobre la mesa de la izquierda"
        },
        {
          id: "park_cape",
          name: "Capa de Bufón Iluminada",
          desc: "¡Una capa multicolor colgada en la armadura del fondo!",
          icon: "🎭",
          x: 75,
          y: 45,
          radius: 12,
          hint: "Colgada en la armadura del fondo"
        },
        {
          id: "park_jackbox",
          name: "Caja de Sorpresas con Muelle",
          desc: "¡Una caja mágica con sorpresa en el centro de la alfombra!",
          icon: "📦",
          x: 50,
          y: 65,
          radius: 12,
          hint: "En el centro de la alfombra"
        }
      ],
      textLeft: `
        <span class="page-badge">Página 13 • Atracción 6 de 9</span>
        <p>La atracción del Pasaje del Terror es ahora una mansión con ojos en las ventanas y una puerta que intenta morder a quien pasa.</p>
        <p>Boliche te sonríe: <em>—¡A estos monstruos no les gusta que les tengan miedo! Si encontramos tres bromas para hacerles cosquillas, ¡se pondrán a reír y nos dejarán pasar!</em></p>
        <div class="search-checklist-box">
          <h4>🔍 LOCALIZA LAS 3 BROMAS MÁGICAS:</h4>
          <ul id="object-search-checklist" class="search-checklist"></ul>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 14</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#8e44ad; color:#8e44ad;">Objetos encontrados: 0 / 3</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>MANSIÓN DE LAS SOMBRAS:</strong>
          <p id="items-feedback-text">Haz clic en la bocina, la capa de bufón y la caja de sorpresas.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          Las sombras estallan en carcajadas y la <strong>Llave 6</strong> flota hasta tus manos.
        </p>
      `,
      choices: [
        {
          text: "🪞 Adentrarse en el Laberinto de los Espejos Deformantes",
          target: "park_ride_7",
          pageDisplay: "Págs. 15 - 16",
          rewardKey: "Llave 6: Antorcha de la Risa",
          rewardFriend: "Atracción 6 Domada"
        }
      ]
    },

    "park_ride_7": {
      id: "park_ride_7",
      pageNumbers: [15, 16],
      title: "7. El Laberinto de los Espejos Deformantes",
      image: "assets/images/park_scene_mirror_maze.jpg",
      isSpread: true,
      isRiddle: true,
      riddleOptions: [
        {
          id: "mirror_real_door",
          text: "🪞 Tocar el espejo con el marco de cristal tallado donde el reflejo guiña un ojo",
          isCorrect: true,
          feedback: "¡ACERTASTE! El espejo se disuelve como agua tibia revelando el pasadizo secreto y la Llave 7."
        },
        {
          id: "mirror_wrong_beast",
          text: "🐺 Ir hacia el reflejo donde apareces con cara de hombre lobo gruñón",
          isCorrect: false,
          feedback: "¡Cuidado! Es un reflejo trampa que intenta asustarte. Busca el cristal amigo."
        },
        {
          id: "mirror_wrong_crack",
          text: "💥 Romper el cristal que tiene grietas oscuras",
          isCorrect: false,
          feedback: "Romper espejos atrae 7 años de mala suerte. ¡Usa tu ingenio para cruzar!"
        }
      ],
      textLeft: `
        <span class="page-badge">Página 15 • Atracción 7 de 9</span>
        <p>Cientos de cristales curvos deforman tu figura: te ves gigante, diminuto, con tentáculos o flotando.</p>
        <p>El hechicero escondió la salida detrás del único espejo que posee la magia de la verdad.</p>
      `,
      textRight: `
        <span class="page-badge">Página 16</span>
        <div id="riddle-box" class="riddle-container"></div>
        <p class="decision-prompt">Consigue la <strong>Llave 7</strong> y corre hacia los rápidos del río.</p>
      `,
      choices: [
        {
          text: "🌊 Lanzarse por los Rápidos del Dragón Acuático",
          target: "park_ride_8",
          pageDisplay: "Págs. 17 - 18",
          rewardKey: "Llave 7: Cristal del Reflejo",
          rewardFriend: "Atracción 7 Domada"
        }
      ]
    },

    "park_ride_8": {
      id: "park_ride_8",
      pageNumbers: [17, 18],
      title: "8. Los Rápidos del Dragón Acuático",
      image: "assets/images/park_scene_water_rapids.jpg",
      isSpread: true,
      isDiceChallenge: true,
      diceChallenge: {
        target: 7,
        name: "Descenso por las Cascadas del Dragón",
        buttonText: "🎲 ¡SORTEAR LOS REMOLINOS CON EL FLOTADOR GIGANTE!",
        successTitle: "¡Aguas dominadas! Francisco esquiva las olas, salta sobre la cascada y agarra al vuelo la Llave 8 de la cresta del dragón.",
        failureTitle: "¡Un remolino te hace girar en círculos! Estabiliza el flotador y vuelve a tirar."
      },
      textLeft: `
        <span class="page-badge">Página 17 • Atracción 8 de 9</span>
        <p>Un canal de agua embravecida en espiral es el cuerpo de un dragón marino viviente que lanza chorros de agua a presión.</p>
        <p>Montado en un flotador circular gigante con Boliche bien sujeto, desciendes a toda velocidad por la catarata.</p>
      `,
      textRight: `
        <span class="page-badge">Página 18</span>
        <div id="generic-dice-box"></div>
        <p class="decision-prompt">Solo te queda una atracción: la gran lanzadera del Fénix.</p>
      `,
      choices: [
        {
          text: "🚀 Subir a la Lanzadera del Cohete Fénix (Atracción Final)",
          target: "park_ride_9",
          pageDisplay: "Págs. 19 - 20",
          rewardKey: "Llave 8: Escama de Río",
          rewardFriend: "Atracción 8 Domada"
        }
      ]
    },

    "park_ride_9": {
      id: "park_ride_9",
      pageNumbers: [19, 20],
      title: "9. La Lanzadera del Cohete Fénix",
      image: "assets/images/park_scene_phoenix_tower.jpg",
      isSpread: true,
      isDiceChallenge: true,
      diceChallenge: {
        target: 7,
        name: "Disparo Vertical a la Cima de las Nubes",
        buttonText: "🎲 ¡VOLAR HASTA LA CÚPULA Y RECLAMAR LA LLAVE 9!",
        successTitle: "¡DESPEGUE PERFECTO! La torre se enciende con fuego sagrado, el cohete te eleva hasta tocar las estrellas y atrapas la novena y última llave de oro.",
        failureTitle: "¡La presión del aire sacude los arneses! Concéntrate para la última tirada."
      },
      textLeft: `
        <span class="page-badge">Página 19 • Atracción 9 de 9</span>
        <p>La torre de caída libre más alta del mundo ha despertado como un fénix de hierro candente que apunta directo al cielo estrellado.</p>
        <p>¡Este es el noveno desafío! Si consigues dispararte hasta la cúspide sin desmayarte de la emoción, completarás las <strong>9 Llaves</strong>.</p>
      `,
      textRight: `
        <span class="page-badge">Página 20</span>
        <div id="generic-dice-box"></div>
        <p class="decision-prompt">¡Has conseguido las 9 Llaves! Corre a la Fuente Central para romper el hechizo.</p>
      `,
      choices: [
        {
          text: "🏛️ Ir a la Gran Fuente del Reloj e insertar las 9 Llaves",
          target: "park_clocktower_fountain",
          pageDisplay: "Págs. 21 - 22",
          rewardKey: "Llave 9: Chispa del Fénix",
          rewardFriend: "Atracción 9 Domada"
        }
      ]
    },

    "park_clocktower_fountain": {
      id: "park_clocktower_fountain",
      pageNumbers: [21, 22],
      title: "La Fuente del Gran Hechizo Roto",
      image: "assets/images/park_scene_fountain.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 21</span>
        <p>Francisco llega jadeando a la Gran Plaza Central con Boliche en brazos. En el centro de la fuente de mármol hay un engranaje colosal con <strong>nueve cerraduras de oro</strong> dispuestas en círculo.</p>
        <p>Una a una, introduces las 9 llaves ganadas con valor en cada atracción: la del Gusano, el Pulpo, el Escarabajo, el Grifo, el Leviatán, la Mansión, el Espejo, el Dragón y el Fénix.</p>
        <p>Al girar la novena llave... <strong>¡UNA OLA DE LUZ DORADA ESTALLA EN EL CIELO!</strong></p>
      `,
      textRight: `
        <span class="page-badge">Página 22</span>
        <div style="padding:15px; background:rgba(230,126,34,0.25); border:2px solid #e67e22; border-radius:8px; text-align:center;">
          <h3 style="color:#f39c12; font-family:'Cinzel',serif; font-size:1.4rem;">🎡 ¡EL PARQUE VUELVE A SER NORMAL!</h3>
          <p style="color:#f5eedc; font-size:1rem; margin-top:8px;">Las criaturas rugen suavemente mientras su piel de monstruo se convierte en reluciente pintura esmaltada y engranajes mecánicos seguros.</p>
        </div>
        <p class="decision-prompt">¡El hechizo se ha quebrado por completo!</p>
      `,
      choices: [
        {
          text: "🎉 Celebrar la Gran Fiesta de la Feria con Fuegos Artificiales",
          target: "park_victory",
          pageDisplay: "Págs. 23 - 24"
        }
      ]
    },

    
    "park_gameover_dizzy": {
      id: "park_gameover_dizzy",
      isGameOver: true,
      title: "¡Atrapado en el Torbellino de Azúcar!",
      image: "assets/images/park_gameover_dizzy.jpg",
      textLeft: `
        <span class="page-badge" style="color:var(--accent-red);">¡FINAL FATAL!</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:var(--accent-red);">¡EL MAREO DEL ALGODÓN ENCANTADO!</h3>
        <p>Una densa nube de algodón de azúcar fluorescente empieza a girar a toda velocidad. Los colores se mezclan, las risas de las criaturas vivas resuenan en eco y pierdes completamente el equilibrio.</p>
        <div class="enigma-box" style="border-left-color: var(--accent-red);">
          <strong>🌀 VÓRTICE HIPNÓTICO DE LA FERIA:</strong>
          <p>El hechizo del parque intenta que te unas a sus atracciones para siempre. ¡Usa tu <strong>Ticket VIP Dorado / Anillo Mágico</strong> para cortar el torbellino!</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Destino & Salvación</span>
        <div class="gameover-box">
          <p>Te quedarías dando vueltas sin fin en la feria encantada... ¡a menos que rompas el hechizo con tu poder mágico!</p>
        </div>
        <div id="gameover-ring-box" style="margin: 12px 0;"></div>
        <p class="decision-prompt" id="gameover-prompt">
          Usa el <strong>Anillo Mágico</strong> para disipar el mareo o retrocede a la atracción anterior con la ayuda de Boliche.
        </p>
      `,
      choices: []
    },

    "park_gameover_trap": {
      id: "park_gameover_trap",
      isGameOver: true,
      title: "¡Encerrado en la Jaula Mecánica de Tornos!",
      image: "assets/images/park_gameover_trap.jpg",
      textLeft: `
        <span class="page-badge" style="color:var(--accent-red);">¡FINAL FATAL!</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:var(--accent-red);">¡BARRICADA DE ACERO Y CANDADOS!</h3>
        <p>Intentar forzar los tornos de salida sin respetar el orden de las criaturas activó el mecanismo de seguridad del parque. Unos pesados barrotes de hierro caen del techo encerrándote en una jaula impenetrable.</p>
        <div class="enigma-box" style="border-left-color: var(--accent-red);">
          <strong>⛓️ ENCIERRO DE AUTÓMATAS:</strong>
          <p>Los engranajes del candado son mágicos. ¡Solo el destello del <strong>Anillo Mágico de Salvación</strong> puede fundir los barrotes y devolverte a la aventura!</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Destino & Salvación</span>
        <div class="gameover-box">
          <p>El parque de atracciones se quedaría hechizado para siempre... ¡a menos que actives tu anillo salvador!</p>
        </div>
        <div id="gameover-ring-box" style="margin: 12px 0;"></div>
        <p class="decision-prompt" id="gameover-prompt">
          Usa el <strong>Anillo Mágico</strong> para derretir la cerradura o reintenta el desafío desde la decisión previa.
        </p>
      `,
      choices: []
    },
    "park_victory": {
      id: "park_victory",
      pageNumbers: [23, 24],
      title: "¡Francisco, el Gran Libertador del Parque!",
      image: "assets/images/park_scene_victory.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">¡Hechizo Roto!</span>
        <h3 style="color:#e67e22; font-family:'Cinzel',serif; font-size:1.6rem;">¡GRAN FIESTA EN EL PARQUE DE ATRACCIONES!</h3>
        <p>Las luces de neón se encienden al unísono, la música festiva de los organillos llena el aire y los puestos de algodón de azúcar, manzanas acarameladas y palomitas abren sus puertas.</p>
        <p>Miles de familias y niños entran al parque aplaudiendo y vitoreando a <strong>Francisco</strong>, a quien el alcalde hace entrega de la <strong>Medalla de Oro de Honor del Parque</strong>.</p>
      `,
      textRight: `
        <span class="page-badge">Trofeo Ferial</span>
        <div style="padding:15px; background:rgba(230,126,34,0.2); border:2px solid #f39c12; border-radius:8px; text-align:center;">
          <div style="font-size:2.8rem; margin-bottom:6px;">🏆🎡🧸</div>
          <h4 style="color:#f39c12;">¡DOMADOR DE LAS 9 CRIATURAS!</h4>
          <p style="color:#ecd8be; font-size:0.95rem; margin-top:6px;">Has superado los 9 desafíos sin rendirte y has devuelto la alegría a todo el parque.</p>
        </div>
        <p class="decision-prompt">¡Enhorabuena, Francisco! Puedes regresar a la biblioteca o volver a disfrutar de la feria.</p>
      `,
      choices: [
        {
          text: "🏛️ Volver a la Biblioteca de Aventuras",
          target: "library",
          pageDisplay: "Estantería Mágica"
        }
      ]
    }
  }
};


// =============================================================================
// LIBRO 8: LA LIGA DE SUPERHÉROES: LA FORTALEZA DE LOS VILLANOS (PARA ISAAC)
// =============================================================================
const ISAAC_SUPERHEROES_DATA = {
  id: "isaac_superheroes",
  title: "La Liga de Superhéroes: La Fortaleza de los Villanos",
  subtitle: "Superpoderes, artilugios tecnológicos, dados y enigmas contra el Sindicato del Crimen",
  tagline: "¡Derrota al Doctor Caos con tus dados y astucia, resuelve acertijos y recupera el Núcleo Cuántico!",
  cover: "assets/images/cover_isaac_superheroes.jpg?v=es",
  difficulty: "⭐⭐⭐",
  category: "Superhéroes & Sci-Fi",
  themeColor: "#2980b9",
  badgeIcon: "🦸",
  companionName: "Cyber-Drone D-9",
  companionIcon: "🤖",
  salvationItemName: "Escudo de Campo de Fuerza de Isaac",
  salvationItemShort: "Campo de Fuerza",
  objectiveName: "👥 Héroes Rescatados:",
  keyName: "💳 Tarjetas de Seguridad:",
  companionDesc: "Un dron táctico flotante con escáner holográfico de diferencias y propulsores iónicos.",
  mechanics: ["🦸 Traje de Pulso de Plasma", "🔍 Sala de Hologramas (6 Diferencias)", "🔫 Arsenal de Gadgets", "🧩 Código Cuántico", "🎲 Batalla contra Dr. Caos"],
  totalFriends: 4,
  totalKeys: 4,

  nodes: {
    "cover": {
      id: "cover",
      type: "cover",
      pageNumbers: [1, 2],
      title: "La Liga de Superhéroes: La Fortaleza de los Villanos",
      image: "assets/images/cover_isaac_superheroes.jpg",
      isSpread: false,
      textLeft: `
        <span class="page-badge">Portada & Prólogo</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:#2980b9;">¡ALERTA ROJA EN METRÓPOLIS!</h3>
        <p>El malvado <strong>Doctor Caos</strong> y sus secuaces han asaltado el Laboratorio Cuántico Central y han robado el <strong>Núcleo de Energía Infinita</strong>. Además, han capturado a tus cuatro compañeros de la Liga de Superhéroes en celdas láser.</p>
        <p>Solo queda un héroe en pie: <strong>Isaac (Capitán Nova)</strong>, equipado con su armadura de nanofibras de plasma y asistido por su leal <strong>Cyber-Drone D-9</strong>.</p>
        <ul style="margin: 8px 0 8px 20px; font-size: 0.95rem; line-height: 1.6;">
          <li>🔍 <strong>La Sala de Hologramas:</strong> Descubre las 6 diferencias entre la ilusión óptica del villano y la consola real.</li>
          <li>🔫 <strong>El Arsenal de Gadgets:</strong> Localiza el Batarang de Energía, el Guantelete Eléctrico y las Botas Cohete.</li>
          <li>🧩 <strong>El Enigma de la Computadora:</strong> Descifra los códigos binarios de las celdas láser para liberar a tus 4 amigos.</li>
          <li>🎲 <strong>El Combate Final con Dados:</strong> Enfréntate al Doctor Caos y sus 4 tentáculos mecánicos de titanio.</li>
        </ul>
      `,
      textRight: `
        <span class="page-badge">Instrucciones & Consejos</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:#3498db;">CONSEJOS DEL CYBER-DRONE D-9</h3>
        <p>🤖 <strong>Escáner Táctico:</strong> Examina con atención las pantallas y consolas; el Doctor Caos siempre comete pequeños errores en sus hologramas trampa.</p>
        <p>⚡ <strong>Tu Armadura:</strong> Tus rayos de plasma se potencian con tiradas altas de dados.</p>
        <p>💍 <strong>Campo de Fuerza de Emergencia:</strong> Si caes en una trampa láser, el escudo te salvará <strong>una vez</strong> absorbiendo el impacto.</p>
      `,
      choices: [
        {
          text: "🚀 Activar propulsores y aterrizar en la azotea de la fortaleza",
          target: "hero_rooftop",
          pageDisplay: "Págs. 3 - 4"
        }
      ]
    },

    "hero_rooftop": {
      id: "hero_rooftop",
      pageNumbers: [3, 4],
      title: "Infiltración en la Azotea de Alta Seguridad",
      image: "assets/images/hero_scene_rooftop.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 3</span>
        <p>Aterrizas en silencio sobre el helipuerto de la torre blindada del Doctor Caos bajo una intensa lluvia de relámpagos. La ciudad de neón se extiende a tus pies.</p>
        <p>D-9 proyecta el mapa térmico del edificio: <em>—Señor Isaac, las compuertas de ventilación están vigiladas por torretas automáticas, pero la puerta del laboratorio holográfico está abierta.</em></p>
      `,
      textRight: `
        <span class="page-badge">Página 4</span>
        <p>Para descender a los niveles inferiores necesitas franquear el centro de control holográfico.</p>
        <p class="decision-prompt">Penetra en la esclusa blindada.</p>
      `,
      choices: [
        {
          text: "🔍 Entrar en la Sala de Hologramas (Prueba de 6 Diferencias)",
          target: "hero_differences",
          pageDisplay: "Págs. 5 - 6"
        }
      ]
    },

    "hero_differences": {
      id: "hero_differences",
      pageNumbers: [5, 6],
      title: "La Sala de Hologramas Trampa (6 Diferencias)",
      image: "assets/images/hero_scene_differences.jpg",
      isSpread: true,
      isDifferences: true,
      differencesList: [
        { id: "diff_hero_1", name: "La antena parabólica rota en el panel izquierdo", x: 22, y: 38, radius: 10 },
        { id: "diff_hero_2", name: "El color del reactor central (azul vs rojo)", x: 78, y: 40, radius: 10 },
        { id: "diff_hero_3", name: "La palanca de emergencia de la consola", x: 35, y: 72, radius: 10 },
        { id: "diff_hero_4", name: "El símbolo del Doctor Caos en la pared derecha", x: 88, y: 68, radius: 10 },
        { id: "diff_hero_5", name: "El robot centinela apagado en la esquina", x: 15, y: 65, radius: 10 },
        { id: "diff_hero_6", name: "El monitor con el código de acceso secreto", x: 62, y: 25, radius: 10 }
      ],
      textLeft: `
        <span class="page-badge">Página 5</span>
        <p>¡El Doctor Caos ha proyectado una sala idéntica en un espejo holográfico para confundirte y activar los láseres si tocas el panel falso!</p>
        <p>D-9 emite un pitido: <em>—¡Capitán Isaac! Compara la imagen de la izquierda con la de la derecha. Hay <strong>6 detalles alterados</strong> que revelan cuál es la consola verdadera.</em></p>
        <div class="diff-counter-box">
          <span style="font-size:1.1rem; color:#f5eedc;">Diferencias localizadas:</span>
          <strong id="differences-count" class="stat-badge" style="background:#2980b9;">0 / 6</strong>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 6</span>
        <p>Haz clic en cada una de las 6 anomalías entre ambos paneles.</p>
        <p class="decision-prompt">Al descubrirlas todas, la ilusión se desvanece y obtienes la <strong>Tarjeta de Acceso Alfa</strong>.</p>
      `,
      choices: [
        {
          text: "🔫 Ir a la Armería de Artilugios y Gadgets",
          target: "hero_armory",
          pageDisplay: "Págs. 7 - 8",
          rewardKey: "Tarjeta Alfa"
        }
      ]
    },

    "hero_armory": {
      id: "hero_armory",
      pageNumbers: [7, 8],
      title: "El Arsenal de Artilugios de Superhéroe",
      image: "assets/images/hero_scene_armory.jpg",
      isSpread: true,
      isObjectSearch: true,
      requiredItems: [
        {
          id: "hero_gauntlet",
          name: "Guantelete de Rayos de Plasma",
          desc: "¡El guantelete tecnológico sobre el banco de trabajo izquierdo!",
          icon: "🧤",
          x: 28,
          y: 65,
          radius: 12,
          hint: "En el banco de trabajo de la izquierda"
        },
        {
          id: "hero_batarang",
          name: "Batarang Criogénico de Hielo",
          desc: "¡El bumerán de hielo brillante junto al soporte de armaduras derecho!",
          icon: "🦇",
          x: 72,
          y: 60,
          radius: 12,
          hint: "Junto al soporte de armaduras de la derecha"
        },
        {
          id: "hero_boots",
          name: "Botas de Levitación Antigravedad",
          desc: "¡Las botas propulsoras en la caja blindada en el suelo!",
          icon: "🥾",
          x: 50,
          y: 82,
          radius: 12,
          hint: "En la caja blindada abierta en el suelo"
        },
        {
          id: "hero_shield",
          name: "Escudo de Fotones Cuántico",
          desc: "¡El escudo hexagonal de energía en la vitrina central!",
          icon: "🛡️",
          x: 48,
          y: 35,
          radius: 12,
          hint: "En la vitrina de seguridad central"
        }
      ],
      textLeft: `
        <span class="page-badge">Página 7</span>
        <p>Llegas a la armería secreta donde el Doctor Caos almacenaba armas experimentales robadas. ¡Es hora de equiparte con la mejor tecnología de combate!</p>
        <div class="search-checklist-box">
          <h4>🔍 LOCALIZA TUS 4 ARTILUGIOS EN LA IMAGEN:</h4>
          <ul id="object-search-checklist" class="search-checklist"></ul>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 8</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#2980b9; color:#2980b9;">Objetos encontrados: 0 / 4</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>ARSENAL DE SUPERHÉROE:</strong>
          <p id="items-feedback-text">Haz clic en el guantelete, el batarang de hielo, las botas antigravedad y el escudo fotónico.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          Completamente armado, Isaac está listo para cualquier villano.
        </p>
      `,
      choices: [
        {
          text: "💻 Desbloquear el Código del Núcleo de Computación",
          target: "hero_riddle",
          pageDisplay: "Págs. 9 - 10",
          rewardKey: "Tarjeta Beta"
        }
      ]
    },

    "hero_riddle": {
      id: "hero_riddle",
      pageNumbers: [9, 10],
      title: "El Núcleo de Computación Cuántica",
      image: "assets/images/hero_scene_riddle.jpg",
      isSpread: true,
      isRiddle: true,
      riddleOptions: [
        {
          id: "riddle_cipher_blue",
          text: "⚡ Conectar el relé azul y activar la frecuencia 1010-GAMMA",
          isCorrect: true,
          feedback: "¡ACCESO CONCEDIDO! El cortafuegos del Doctor Caos se colapsa y las cerraduras de las celdas de tus amigos se abren."
        },
        {
          id: "riddle_cipher_wrong1",
          text: "💥 Cortar todos los cables rojos a lo loco",
          isCorrect: false,
          feedback: "¡Alerta de sobrecarga! Cortar cables sin descifrar el código activa las alarmas."
        },
        {
          id: "riddle_cipher_wrong2",
          text: "🔌 Desenchufar la batería central con los dedos húmedos",
          isCorrect: false,
          feedback: "¡Peligro de electrocución! Usa el terminal informático de D-9."
        }
      ],
      textLeft: `
        <span class="page-badge">Página 9</span>
        <p>La supercomputadora del villano zumba emitiendo un fulgor rojizo. Un mensaje parpadea en la pantalla:</p>
        <p style="font-style:italic; color:#e74c3c;">«Para desactivar los campos de fuerza de las prisiones, introduce la frecuencia que neutraliza la radiación del Núcleo Cuántico.»</p>
        <p>D-9 analiza los esquemas: el relé azul con la frecuencia GAMMA es la clave.</p>
      `,
      textRight: `
        <span class="page-badge">Página 10</span>
        <div id="riddle-box" class="riddle-container"></div>
        <p class="decision-prompt">Con el código resuelto, baja a las celdas láser a rescatar a tus camaradas.</p>
      `,
      choices: [
        {
          text: "👥 Liberar a los 4 Superhéroes en las Mazmorras Láser",
          target: "hero_dungeon",
          pageDisplay: "Págs. 11 - 12",
          rewardKey: "Tarjeta Gamma"
        }
      ]
    },

    "hero_dungeon": {
      id: "hero_dungeon",
      pageNumbers: [11, 12],
      title: "Liberación de la Liga de Superhéroes",
      image: "assets/images/hero_scene_dungeon.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 11</span>
        <p>Bajas por el ascensor blindado hasta las celdas subterráneas. ¡Allí están atrapados tus amigos: <strong>Flash-Girl, Titán de Piedra, Águila de Fuego y Rayo Azul</strong>!</p>
        <p>Insertas las tarjetas de seguridad y desconectas las barreras láser una tras otra.</p>
        <p><em>—¡Capitán Isaac! —exclama Flash-Girl abrazándote—. ¡Sabíamos que vendrías! El Doctor Caos está en la sala del reactor cargando el Núcleo Cuántico. ¡Debemos detenerlo ya!</em></p>
      `,
      textRight: `
        <span class="page-badge">Página 12</span>
        <div style="padding:12px; background:rgba(41,128,185,0.25); border:1px solid #2980b9; border-radius:6px; text-align:center;">
          <h4 style="color:#3498db;">👥 ¡4 SUPERHÉROES RESCATADOS!</h4>
          <p style="color:#ecd8be; font-size:0.95rem; margin-top:6px;">Tus aliados aseguran el perímetro mientras tú te enfrentas al villano supremo en el tejado del generador.</p>
        </div>
        <p class="decision-prompt">Afronta la batalla definitiva contra el Doctor Caos.</p>
      `,
      choices: [
        {
          text: "🎲 Duelo Épico de Dados contra el Doctor Caos y sus Tentáculos",
          target: "hero_boss_dice",
          pageDisplay: "Págs. 13 - 14",
          rewardKey: "Tarjeta Omega Maestra",
          rewardFriend: "Flash-Girl, Titán, Águila y Rayo"
        }
      ]
    },

    "hero_boss_dice": {
      id: "hero_boss_dice",
      pageNumbers: [13, 14],
      title: "La Batalla Final contra el Doctor Caos",
      image: "assets/images/hero_scene_boss.jpg",
      isSpread: true,
      isDiceChallenge: true,
      diceChallenge: {
        target: 7,
        name: "Gran Combate contra el Doctor Caos",
        buttonText: "🎲 ¡DESCARGAR EL RAYO IÓNICO DE ISAAC!",
        successTitle: "¡IMPACTO CRÍTICO TOTAL! El rayo de plasma de Isaac sobrecarga los tentáculos mecánicos del Doctor Caos, arrojándolo contra las pantallas desactivadas. ¡El Núcleo Cuántico ha sido recuperado!",
        failureTitle: "¡Un tentáculo metálico desvía tu disparo hacia las vigas! ¡Vuelve a concentrar la energía de tu traje y tira de nuevo!"
      },
      textLeft: `
        <span class="page-badge">Página 13</span>
        <p>En lo alto de la sala del reactor te espera el <strong>Doctor Caos</strong>, suspendido en el aire gracias a cuatro enormes tentáculos biomecánicos que disparan chispas de plasma.</p>
        <p><em>—¡Llegas tarde, Capitán Isaac! —brama el villano—. ¡Con el Núcleo Cuántico en mi poder, someteré la ciudad entera!</em></p>
        <p>Isaac activa sus botas antigravedad y carga el cañón de plasma de su guantelete: <em>—¡No mientras la Liga de Superhéroes siga en pie!</em></p>
      `,
      textRight: `
        <span class="page-badge">Página 14</span>
        <div id="generic-dice-box"></div>
        <p class="decision-prompt">Vence al villano para salvar Metrópolis.</p>
      `,
      choices: [
        {
          text: "🏆 Reclamar la Victoria y salvar Metrópolis",
          target: "hero_victory",
          pageDisplay: "Págs. 15 - 16"
        }
      ]
    },

    
    "hero_gameover_lasers": {
      id: "hero_gameover_lasers",
      isGameOver: true,
      title: "¡Alarma Roja y Red Láser de Contención!",
      image: "assets/images/hero_gameover_lasers.jpg",
      textLeft: `
        <span class="page-badge" style="color:var(--accent-red);">¡FINAL FATAL!</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:var(--accent-red);">¡SISTEMA DE SEGURIDAD EN ALERTA MÁXIMA!</h3>
        <p>Un sensor volumétrico ha detectado tu presencia. Las sirenas aúllan en los rascacielos y una impenetrable red de rayos láser de estasis roja cruza la sala bloqueando cada salida.</p>
        <div class="enigma-box" style="border-left-color: var(--accent-red);">
          <strong>🚨 CUADRÍCULA DE LÁSER DE ESTASIS:</strong>
          <p>Un solo paso hacia los rayos te paralizará al instante. ¡Tu dron D-9 o el <strong>Anillo Mágico Cuántico</strong> pueden emitir una pulsación PEM para reiniciar el sistema!</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Destino & Salvación</span>
        <div class="gameover-box">
          <p>Los superhéroes aliados quedarían atrapados en las celdas... ¡a menos que uses tu talismán de salvación!</p>
        </div>
        <div id="gameover-ring-box" style="margin: 12px 0;"></div>
        <p class="decision-prompt" id="gameover-prompt">
          Usa el <strong>Anillo Mágico</strong> para desactivar los sensores con un pulso cuántico o retrocede para actuar con sigilo.
        </p>
      `,
      choices: []
    },

    "hero_gameover_ambush": {
      id: "hero_gameover_ambush",
      isGameOver: true,
      title: "¡Rodeado por el Enjambre de Robodrones!",
      image: "assets/images/hero_gameover_ambush.jpg",
      textLeft: `
        <span class="page-badge" style="color:var(--accent-red);">¡FINAL FATAL!</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:var(--accent-red);">¡LA TRAMPA MECÁNICA DE DOCTOR CAOS!</h3>
        <p>Doctor Caos pulsó el botón de emergencia del reactor. Decenas de drones de combate esféricos con ojos incandescentes emergen de los conductos de ventilación apuntando sus cañones hacia ti.</p>
        <div class="enigma-box" style="border-left-color: var(--accent-red);">
          <strong>🤖 ENJAMBRE CIBERNÉTICO HOSTIL:</strong>
          <p>Te superan en número por diez a uno. ¡Invoca el poder del <strong>Anillo Mágico / Escudo Cuántico</strong> para proyectar una onda de choque expansiva y salir ileso!</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Destino & Salvación</span>
        <div class="gameover-box">
          <p>Metrópolis caería bajo el control de los villanos... ¡a menos que ejecutes tu maniobra de salvación!</p>
        </div>
        <div id="gameover-ring-box" style="margin: 12px 0;"></div>
        <p class="decision-prompt" id="gameover-prompt">
          Usa el <strong>Anillo Mágico</strong> para repeler a los drones con una onda electromagnética o reintenta con astucia.
        </p>
      `,
      choices: []
    },
    "hero_victory": {
      id: "hero_victory",
      pageNumbers: [15, 16],
      title: "¡Isaac, el Héroe Supremo de Metrópolis!",
      image: "assets/images/hero_scene_victory.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">¡Misión Cumplida!</span>
        <h3 style="color:#2980b9; font-family:'Cinzel',serif; font-size:1.6rem;">¡EL DOCTOR CAOS HA SIDO DERROTADO!</h3>
        <p>La policía científica custodia al villano esposado con grilletes antimagnéticos. El Núcleo Cuántico es restituido de forma segura en la cámara blindada de la ciudad.</p>
        <p>El alcalde de Metrópolis sube al estrado ante miles de ciudadanos que corean el nombre de <strong>Isaac</strong> y le hace entrega de la <strong>Medalla de Platino de la Justicia</strong>.</p>
      `,
      textRight: `
        <span class="page-badge">Salón de Héroes</span>
        <div style="padding:15px; background:rgba(41,128,185,0.2); border:2px solid #2980b9; border-radius:8px; text-align:center;">
          <div style="font-size:2.8rem; margin-bottom:6px;">🏆🦸⚡</div>
          <h4 style="color:#3498db;">¡TROFEO: LEYENDA DE LA JUSTICIA!</h4>
          <p style="color:#ecd8be; font-size:0.95rem; margin-top:6px;">Has salvado a tus 4 camaradas, descifrado los hologramas y vencido al Doctor Caos con tus dados.</p>
        </div>
        <p class="decision-prompt">¡Enhorabuena, Isaac! Puedes regresar a la biblioteca para otra gran aventura.</p>
      `,
      choices: [
        {
          text: "🏛️ Volver a la Biblioteca de Aventuras",
          target: "library",
          pageDisplay: "Estantería Mágica"
        }
      ]
    }
  }
};


// =============================================================================
// LIBRO 9: ALERTA BIOLÓGICA: EL VIRUS MALVADO Y EL ANTÍDOTO SECRETO (PARA ISAAC)
// =============================================================================
const ISAAC_VIRUS_DATA = {
  id: "isaac_virus",
  title: "Alerta Biológica: El Virus Malvado y el Antídoto Secreto",
  subtitle: "Infiltración científica, fórmulas moleculares y contrarreloj",
  tagline: "¡Penetra en el Complejo Subterráneo, resuelve las fórmulas y sintetiza la cura antes del alba!",
  cover: "assets/images/cover_isaac_virus.jpg?v=es",
  difficulty: "⭐⭐⭐",
  category: "Ciencia & Misterio Futurista",
  themeColor: "#16a085",
  badgeIcon: "🧪",
  companionName: "Helix el Nanobot",
  companionIcon: "🔬",
  salvationItemName: "Filtro Bio-Regenerador de Helix",
  salvationItemShort: "Filtro Bio",
  objectiveName: "👥 Científicos Rescatados:",
  keyName: "🧪 Viales de la Cura:",
  companionDesc: "Un nanorobot analizador que escanea reactivos y detecta fugas de toxinas en el aire.",
  mechanics: ["🥼 Traje de Bioseguridad", "🔍 Búsqueda de Reactivos", "🧬 Secuencia del Genoma", "🌡️ Centrífuga Cuántica", "🎲 Calibración del Sintetizador"],
  totalFriends: 4,
  totalKeys: 4,

  nodes: {
    "cover": {
      id: "cover",
      type: "cover",
      pageNumbers: [1, 2],
      title: "Alerta Biológica: El Virus Malvado y el Antídoto Secreto",
      image: "assets/images/cover_isaac_virus.jpg",
      isSpread: false,
      textLeft: `
        <span class="page-badge">Portada & Prólogo</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:#16a085;">¡CONTENCIÓN NIVEL 4 ACTIVADA!</h3>
        <p>En el complejo subterráneo Bio-Hex, el perverso <strong>Profesor Toxis</strong> ha desarrollado el <em>Virus Omega</em>, un microorganismo artificial capaz de sumir en un sueño letárgico a toda la población.</p>
        <p>El <strong>Doctor Isaac</strong>, virólogo prodigio de la Unidad Médica Especial, desciende a las instalaciones presurizadas junto a <strong>Helix</strong>, su robot de análisis molecular.</p>
        <p>Tu misión: atravesar los 4 laboratorios de aislamiento, encontrar los 4 componentes puros de la fórmula, liberar a los científicos encerrados y calibrar el sintetizador de aerosol para curar la atmósfera antes del amanecer.</p>
      `,
      textRight: `
        <span class="page-badge">Instrucciones & Consejos</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:#1abc9c;">CONSEJOS DE HELIX</h3>
        <p>🔬 <strong>Escáner Químico:</strong> Toca los frascos y viales de la escena para identificar reactivos puros.</p>
        <p>🧪 <strong>Los 4 Viales:</strong> Necesitas reunir la Cepa Inmune, el Solvente Z, el Catalizador Criogénico y el Nanotubo.</p>
        <p>💍 <strong>Inyección de Emergencia:</strong> Si inhalas gases tóxicos, Helix purificará tu traje <strong>una vez</strong>.</p>
      `,
      choices: [
        {
          text: "🥼 Cerrar la esclusa de descontaminación y entrar al laboratorio",
          target: "virus_airlock",
          pageDisplay: "Págs. 3 - 4"
        }
      ]
    },

    "virus_airlock": {
      id: "virus_airlock",
      pageNumbers: [3, 4],
      title: "La Esclusa de Descontaminación",
      image: "assets/images/virus_scene_airlock.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 3</span>
        <p>La compuerta hermética de titanio se sella a tu espalda con un silbido de vapor. Duchas de luz ultravioleta esterilizan tu traje de protección biológica.</p>
        <p>Helix despliega sus sensores: <em>—Doctor Isaac, las alarmas rojas indican que el virus se está filtrando por el conducto norte. Debemos darnos prisa en conseguir los reactivos de la cura.</em></p>
      `,
      textRight: `
        <span class="page-badge">Página 4</span>
        <p>Frente a ti se abren los pasillos de cristal blindado hacia el Laboratorio de Bioquímica.</p>
        <p class="decision-prompt">Penetra en la zona de mesas de ensayo.</p>
      `,
      choices: [
        {
          text: "🔍 Buscar los 4 Reactivos en el Laboratorio de Bioquímica",
          target: "virus_lab_search",
          pageDisplay: "Págs. 5 - 6"
        }
      ]
    },

    "virus_lab_search": {
      id: "virus_lab_search",
      pageNumbers: [5, 6],
      title: "El Laboratorio de Fórmulas y Reactivos",
      image: "assets/images/virus_scene_lab.jpg",
      isSpread: true,
      isObjectSearch: true,
      requiredItems: [
        {
          id: "virus_plant_stem",
          name: "Cepa Inmune de Planta Lunar",
          desc: "¡El matraz verde resplandeciente en la mesa izquierda!",
          icon: "🌱",
          x: 28,
          y: 72,
          radius: 12,
          hint: "En el matraz iluminado en la mesa izquierda"
        },
        {
          id: "virus_blue_solvent",
          name: "Solvente Criogénico Azul",
          desc: "¡Los tubos de ensayo azul hielo en la gradilla derecha!",
          icon: "🧪",
          x: 70,
          y: 65,
          radius: 12,
          hint: "En la gradilla de tubos de la derecha"
        },
        {
          id: "virus_pure_enzyme",
          name: "Enzima Sintética Pura",
          desc: "¡El agitador magnético central con líquido violeta!",
          icon: "💎",
          x: 50,
          y: 45,
          radius: 12,
          hint: "Dentro del agitador magnético central"
        },
        {
          id: "virus_nanotube",
          name: "Nanotubo de Estabilización",
          desc: "¡La cápsula con el cilindro de ADN luminoso en el estante superior!",
          icon: "🧬",
          x: 85,
          y: 35,
          radius: 12,
          hint: "En la estantería superior"
        }
      ],
      textLeft: `
        <span class="page-badge">Página 5</span>
        <p>En este laboratorio se investigaban las vacunas antes del ataque de Toxis. Entre decenas de probetas humeantes debes hallar los 4 compuestos activos.</p>
        <div class="search-checklist-box">
          <h4>🔍 LOCALIZA LOS 4 COMPONENTES DE LA CURA:</h4>
          <ul id="object-search-checklist" class="search-checklist"></ul>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 6</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#16a085; color:#16a085;">Objetos encontrados: 0 / 4</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>REACTIVOS DEL ANTÍDOTO:</strong>
          <p id="items-feedback-text">Haz clic en la cepa lunar, el solvente azul, la enzima pura y el nanotubo.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          ¡Los 4 viales están asegurados en tu maletín térmico! Ahora debes centrifugarlos a la velocidad exacta.
        </p>
      `,
      choices: [
        {
          text: "🌡️ Calibrar la Centrífuga Cuántica",
          target: "virus_centrifuge",
          pageDisplay: "Págs. 7 - 8",
          rewardKey: "Cepa Inmune y Solvente"
        }
      ]
    },

    "virus_centrifuge": {
      id: "virus_centrifuge",
      pageNumbers: [7, 8],
      title: "La Centrífuga Cuántica de Precisión",
      image: "assets/images/virus_scene_centrifuge.jpg",
      isSpread: true,
      isRiddle: true,
      riddleOptions: [
        {
          id: "centrifuge_correct",
          text: "🌀 Fijar rotación a 12.000 RPM a -4°C con filtro de iones de plata",
          isCorrect: true,
          feedback: "¡ÉXITO MOLECULAR! La mezcla se emulsiona en un líquido cian resplandeciente: ¡el antídoto es 100% estable y puro!"
        },
        {
          id: "centrifuge_wrong1",
          text: "🔥 Poner la máquina a hervir a 300°C",
          isCorrect: false,
          feedback: "¡Cuidado! El calor excesivo desnaturaliza las enzimas y arruina la fórmula."
        },
        {
          id: "centrifuge_wrong2",
          text: "🔨 Golpear la centrífuga con una llave inglesa",
          isCorrect: false,
          feedback: "La alta tecnología requiere precisión científica, no golpes mecánicos."
        }
      ],
      textLeft: `
        <span class="page-badge">Página 7</span>
        <p>La centrífuga gira zumbando mientras los rotores de levitación magnética esperan los parámetros de temperatura y velocidad.</p>
        <p>Helix lee la fórmula de Isaac: se requiere frío polar y velocidad supersónica para que el antídoto no pierda su eficacia biológica.</p>
      `,
      textRight: `
        <span class="page-badge">Página 8</span>
        <div id="riddle-box" class="riddle-container"></div>
        <p class="decision-prompt">Con la solución estabilizada, acude a liberar a los 4 científicos.</p>
      `,
      choices: [
        {
          text: "👥 Liberar a los Científicos en Cuarentena Criogénica",
          target: "virus_quarantine",
          pageDisplay: "Págs. 9 - 10",
          rewardKey: "Antídoto Estabilizado"
        }
      ]
    },

    "virus_quarantine": {
      id: "virus_quarantine",
      pageNumbers: [9, 10],
      title: "Las Cápsulas de Cuarentena Criogénica",
      image: "assets/images/virus_scene_quarantine.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 9</span>
        <p>En el sector de máxima seguridad, 4 prestigiosos biólogos de tu equipo permanecen encerrados en cámaras de hibernación criogénica para evitar que se contagien.</p>
        <p>Isaac conecta su terminal portátil e introduce la secuencia de reactivación segura, abriendo las cápsulas una a una.</p>
        <p><em>—¡Isaac, lo lograste! —dicen al despertar—. Rápido, el nebulizador principal está en la sala del generador. ¡Debemos inyectar la cura antes de que Toxis escape!</em></p>
      `,
      textRight: `
        <span class="page-badge">Página 10</span>
        <div style="padding:12px; background:rgba(22,160,133,0.25); border:1px solid #16a085; border-radius:6px; text-align:center;">
          <h4 style="color:#1abc9c;">👥 ¡4 CIENTÍFICOS A SALVO!</h4>
          <p style="color:#ecd8be; font-size:0.95rem; margin-top:6px;">Tu equipo toma los mandos de los ventiladores mientras tú calibras la inyección de la cura.</p>
        </div>
        <p class="decision-prompt">Lanza la síntesis final.</p>
      `,
      choices: [
        {
          text: "🎲 Calibrar el Sintetizador Molecular contra el Virus",
          target: "virus_synthesis_dice",
          pageDisplay: "Págs. 11 - 12",
          rewardKey: "Vial Maestro de la Cura",
          rewardFriend: "Dres. Aris, Valeria, Chen y Lucas"
        }
      ]
    },

    "virus_synthesis_dice": {
      id: "virus_synthesis_dice",
      pageNumbers: [11, 12],
      title: "La Inyección de la Cura en el Nebulizador",
      image: "assets/images/cave_map_room.jpg",
      isSpread: true,
      isDiceChallenge: true,
      diceChallenge: {
        target: 7,
        name: "Calibración de la Bomba de Aerosol de la Cura",
        buttonText: "🎲 ¡DISPARAR LA CURA POR LOS CONDUCTOS DE VENTILACIÓN!",
        successTitle: "¡SÍNTESIS PERFECTA! La presión alcanza el 100%. Una nube de vapor azul purificador se expande a través de las turbinas hacia toda la metrópolis erradicando el virus.",
        failureTitle: "¡La presión de las válvulas fluctúa! Ajusta la válvula y vuelve a tirar los dados."
      },
      textLeft: `
        <span class="page-badge">Página 11</span>
        <p>El gigantesco nebulizador de la torre subterránea ruge con vapor a presión. Tienes el vial del antídoto en la mano y el reloj marca los últimos minutos antes de que el virus sea incontrolable.</p>
        <p>Isaac ajusta los inyectores con pulso de cirujano: <em>—¡Helix, máxima potencia a las bombas de dispersión!</em></p>
      `,
      textRight: `
        <span class="page-badge">Página 12</span>
        <div id="generic-dice-box"></div>
        <p class="decision-prompt">La cura se expande erradicando la infección.</p>
      `,
      choices: [
        {
          text: "🏆 Comprobar la curación de la ciudad y salir a la superficie",
          target: "virus_victory",
          pageDisplay: "Págs. 13 - 14"
        }
      ]
    },

    
    "virus_gameover_breach": {
      id: "virus_gameover_breach",
      isGameOver: true,
      title: "¡Fuga de Contención y Bruma Biológica Tóxica!",
      image: "assets/images/virus_gameover_breach.jpg",
      textLeft: `
        <span class="page-badge" style="color:var(--accent-red);">¡FINAL FATAL!</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:var(--accent-red);">¡RUPTURA DE AISLAMIENTO NIVEL 4!</h3>
        <p>Un tubo de ensayo presurizado se ha fracturado contra el suelo. Una densa nube de vapor biológico verde chartreuse se expande rápidamente empañando el cristal de tu escafandra.</p>
        <div class="enigma-box" style="border-left-color: var(--accent-red);">
          <strong>☣️ PROTOCOLO DE FUGA TÓXICA:</strong>
          <p>El virus mutante amenaza con saturar los filtros convencionales. ¡El <strong>Filtro Bio-Protector / Anillo Mágico</strong> puede esterilizar el aire a tu alrededor en microsegundos!</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Destino & Salvación</span>
        <div class="gameover-box">
          <p>El antídoto no llegaría a tiempo a los hospitales de la ciudad... ¡a menos que actives tu escudo biológico!</p>
        </div>
        <div id="gameover-ring-box" style="margin: 12px 0;"></div>
        <p class="decision-prompt" id="gameover-prompt">
          Usa el <strong>Anillo Mágico</strong> para desplegar la burbuja estéril de salvación o retrocede para manipular los reactivos con precaución.
        </p>
      `,
      choices: []
    },

    "virus_gameover_lockdown": {
      id: "virus_gameover_lockdown",
      isGameOver: true,
      title: "¡Cierre Hermético y Cuarentena Total!",
      image: "assets/images/virus_gameover_lockdown.jpg",
      textLeft: `
        <span class="page-badge" style="color:var(--accent-red);">¡FINAL FATAL!</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:var(--accent-red);">¡COMPUERTAS DE TITANIO BLOQUEADAS!</h3>
        <p>Una anomalía en la presión de la centrífuga ha disparado el cierre automático de cuarentena. Las compuertas de tres metros de grosor caen sellando el sector y la desinfección térmica comienza en 30 segundos.</p>
        <div class="enigma-box" style="border-left-color: var(--accent-red);">
          <strong>🔒 BLOQUEO GENERAL DEL SECTOR:</strong>
          <p>Los teclados de control están desconectados. ¡Solo el <strong>Anillo Mágico de Anulación / Tarjeta Maestra</strong> puede forzar la apertura de las compuertas!</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Destino & Salvación</span>
        <div class="gameover-box">
          <p>Quedarías atrapado en el laboratorio subterráneo... ¡a menos que recurras a tu poder de escape!</p>
        </div>
        <div id="gameover-ring-box" style="margin: 12px 0;"></div>
        <p class="decision-prompt" id="gameover-prompt">
          Usa el <strong>Anillo Mágico</strong> para abrir la compuerta de emergencia o reintenta la calibración del equipo.
        </p>
      `,
      choices: []
    },
    "virus_victory": {
      id: "virus_victory",
      pageNumbers: [13, 14],
      title: "¡Isaac, el Salvador de la Salud Mundial!",
      image: "assets/images/virus_scene_victory.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">¡Epidemia Neutralizada!</span>
        <h3 style="color:#16a085; font-family:'Cinzel',serif; font-size:1.6rem;">¡EL ANTÍDOTO ES UN ÉXITO ROTUNDO!</h3>
        <p>El rocío azulado de la cura neutraliza cada rastro del virus en cuestión de segundos. Los ciudadanos recuperan sus fuerzas y el Profesor Toxis es arrestado sin escape posible.</p>
        <p>La Organización Mundial de la Ciencia condecora a <strong>Isaac</strong> con la <strong>Insignia de Oro de la Medicina Heroica</strong>.</p>
      `,
      textRight: `
        <span class="page-badge">Reconocimiento</span>
        <div style="padding:15px; background:rgba(22,160,133,0.2); border:2px solid #16a085; border-radius:8px; text-align:center;">
          <div style="font-size:2.8rem; margin-bottom:6px;">🏆🧪🔬</div>
          <h4 style="color:#1abc9c;">¡TROFEO: MAESTRO DEL ANTÍDOTO!</h4>
          <p style="color:#ecd8be; font-size:0.95rem; margin-top:6px;">Has sintetizado la cura, rescatado a los científicos y salvado la salud de todo el planeta.</p>
        </div>
        <p class="decision-prompt">¡Enhorabuena, Isaac! Puedes volver a la biblioteca para otra gran aventura.</p>
      `,
      choices: [
        {
          text: "🏛️ Volver a la Biblioteca de Aventuras",
          target: "library",
          pageDisplay: "Estantería Mágica"
        }
      ]
    }
  }
};


// =============================================================================
// LIBRO 10: EL BOSQUE ENCANTADO Y EL ELIXIR DE LA ETERNA JUVENTUD (PARA ISAAC)
// =============================================================================
const ISAAC_BOSQUE_DATA = {
  id: "isaac_bosque",
  title: "El Bosque Encantado y el Elixir de la Eterna Juventud",
  subtitle: "Árboles sabios, criaturas místicas, acertijos de hadas y el manantial sagrado",
  tagline: "¡Cruza el Laberinto de Zarzas, habla con los Ents milenarios y alcanza la Fuente de la Vida!",
  cover: "assets/images/cover_isaac_forest.jpg?v=es",
  difficulty: "⭐⭐⭐",
  category: "Fantasía Clásica & Bosques",
  themeColor: "#27ae60",
  badgeIcon: "🌲",
  companionName: "Silfo el Zorro Plateado",
  companionIcon: "🦊",
  salvationItemName: "Lágrima del Hada Protectora / Anillo Mágico",
  salvationItemShort: "Lágrima de Hada",
  objectiveName: "✨ Santuarios Curados:",
  keyName: "💎 Gemas Elementales:",
  companionDesc: "Un zorro místico de tres colas con pelaje resplandeciente que conoce las sendas secretas de los espíritus del bosque.",
  mechanics: ["🌿 Bastón Rúnico de Isaac", "🌳 Acertijo de RobleViejo el Ent", "🌸 Flores de Luz Estelar", "🦄 Claro de los Unicornios", "🎲 Prueba del Manantial Sagrado"],
  totalFriends: 4,
  totalKeys: 4,

  nodes: {
    "cover": {
      id: "cover",
      type: "cover",
      pageNumbers: [1, 2],
      title: "El Bosque Encantado y el Elixir de la Eterna Juventud",
      image: "assets/images/cover_isaac_forest.jpg",
      isSpread: false,
      textLeft: `
        <span class="page-badge">Portada & Prólogo</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:#27ae60;">¡EL LLANTO DEL ÁRBOL ANCESTRAL!</h3>
        <p>En el corazón del Bosque Susurrante, el Árbol Madre de la Vida ha comenzado a marchitarse debido a una sombra marchitadora. Sus hojas de esmeralda caen y las criaturas feéricas pierden su magia.</p>
        <p>Cuenta la leyenda que en la gruta oculta de las cascadas brota el <strong>Manantial del Elixir de la Eterna Juventud</strong>, la única agua capaz de sanar las raíces ancestrales.</p>
        <p>El joven explorador <strong>Isaac</strong>, portando su <strong>Bastón Rúnico de Roble</strong> y guiado por <strong>Silfo</strong>, el zorro plateado de tres colas, se adentra bajo la espesura en una expedición legendaria.</p>
      `,
      textRight: `
        <span class="page-badge">Instrucciones & Consejos</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:#2ecc71;">CONSEJOS DE SILFO</h3>
        <p>🦊 <strong>Tu Guía Feérico:</strong> Silfo huele la pureza de la naturaleza y te avisará cuando un árbol sabio desee hablar.</p>
        <p>💎 <strong>Las 4 Gemas de los Elementos:</strong> Tierra, Agua, Viento y Luz son necesarias para abrir la caverna del manantial.</p>
        <p>💍 <strong>Lágrima de Hada:</strong> Si te pierdes en la niebla o caes en un zarzal, la lágrima te rescatará <strong>una vez</strong>.</p>
      `,
      choices: [
        {
          text: "🌿 Cruzar el arco de ramas y adentrarse en el bosque",
          target: "forest_entrance",
          pageDisplay: "Págs. 3 - 4"
        }
      ]
    },

    "forest_entrance": {
      id: "forest_entrance",
      pageNumbers: [3, 4],
      title: "El Sendero de los Hongos Brillantes",
      image: "assets/images/cave_medieval_era.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 3</span>
        <p>Te adentras bajo un dosel vegetal tan frondoso que filtra la luz del sol en haces de oro y esmeralda. El camino está marcado por setas bioluminiscentes que tintinean como campanillas de cristal.</p>
        <p>Silfo trota alegremente unos pasos por delante agitando sus tres colas plateadas: <em>—Isaac, más adelante duerme RobleViejo, el Ent guardián del gran puente de raíces.</em></p>
      `,
      textRight: `
        <span class="page-badge">Página 4</span>
        <p>El puente levadizo de raíces vivientes solo desciende si respondes al enigma del anciano árbol sabio.</p>
        <p class="decision-prompt">Acércate al tronco parlante con respeto.</p>
      `,
      choices: [
        {
          text: "🌳 Escuchar el Acertijo de RobleViejo el Ent",
          target: "forest_ent_riddle",
          pageDisplay: "Págs. 5 - 6"
        }
      ]
    },

    "forest_ent_riddle": {
      id: "forest_ent_riddle",
      pageNumbers: [5, 6],
      title: "El Acertijo de RobleViejo el Ent",
      image: "assets/images/scene_library.jpg",
      isSpread: true,
      isRiddle: true,
      riddleOptions: [
        {
          id: "ent_correct_answer",
          text: "🌱 Ofrecerle agua pura de manantial y responder: «El Bosque es el Hogar de Todos»",
          isCorrect: true,
          feedback: "¡ROBLEVIEJO SONRÍE! Sus ojos de musgo brillan, estira sus colosales ramas de madera y entrelaza sus raíces formando un puente florido hacia el claro sagrado."
        },
        {
          id: "ent_wrong_axe",
          text: "🪓 Sacar un hacha de hierro y amenazar con talar una de sus ramas",
          isCorrect: false,
          feedback: "¡Los árboles sagrados rechazan la violencia! Guarda el hacha y habla con cariño a la naturaleza."
        },
        {
          id: "ent_wrong_fire",
          text: "🔥 Encender una fogata grande con hojas secas",
          isCorrect: false,
          feedback: "¡Peligro! El fuego asusta a los Ents. Ofrece sabiduría y respeto."
        }
      ],
      textLeft: `
        <span class="page-badge">Página 5</span>
        <p>Un colosal roble milenario de corteza arrugada abre dos grandes ojos dorados en el tronco y bosteza con un rumor de hojas mecidas por el viento:</p>
        <p><em>—Muchos siglos hace que ningún caminante busca el Elixir sin codicia... Dime, joven Isaac: ¿con qué espíritu pretendes cruzar mi puente sagrado?</em></p>
      `,
      textRight: `
        <span class="page-badge">Página 6</span>
        <div id="riddle-box" class="riddle-container"></div>
        <p class="decision-prompt">Al ganarte la confianza del Ent, obtienes la <strong>Gema de la Tierra</strong>.</p>
      `,
      choices: [
        {
          text: "🌸 Buscar las 4 Flores Lunares en el Claro de la Flora Sagrada",
          target: "forest_flowers_search",
          pageDisplay: "Págs. 7 - 8",
          rewardKey: "Gema de la Tierra"
        }
      ]
    },

    "forest_flowers_search": {
      id: "forest_flowers_search",
      pageNumbers: [7, 8],
      title: "El Claro de las Cuatro Flores Sagradas",
      image: "assets/images/cave_ice_age.jpg",
      isSpread: true,
      isObjectSearch: true,
      requiredItems: [
        {
          id: "forest_blue_orchid",
          name: "Orquídea Azul Luminosa",
          desc: "¡La flor azul brillante junto al arroyo a la izquierda!",
          icon: "💙",
          x: 25,
          y: 70,
          radius: 12,
          hint: "Junto al arroyo de aguas cristalinas a la izquierda"
        },
        {
          id: "forest_sun_lily",
          name: "Lirio Solar Dorado",
          desc: "¡El lirio amarillo sobre la roca soleada a la derecha!",
          icon: "💛",
          x: 75,
          y: 65,
          radius: 12,
          hint: "En la peña soleada a la derecha"
        },
        {
          id: "forest_frost_rose",
          name: "Rosa de Escarcha Plateada",
          desc: "¡La rosa blanca brillante en el pedestal central!",
          icon: "🤍",
          x: 50,
          y: 45,
          radius: 12,
          hint: "En el pedestal de piedra central"
        },
        {
          id: "forest_emerald_fern",
          name: "Helecho Cantarín de Esmeralda",
          desc: "¡El helecho verde esmeralda entre las lianas superiores!",
          icon: "🌿",
          x: 85,
          y: 40,
          radius: 12,
          hint: "Entre las lianas superiores"
        }
      ],
      textLeft: `
        <span class="page-badge">Página 7</span>
        <p>Llegas a un claro resplandeciente donde los rayos de luz parecen polvo de estrellas. Aquí crecen las cuatro flores más raras del bosque.</p>
        <p>Sus pétalos son la llave botánica para que la gruta del Manantial reconozca tus buenas intenciones.</p>
        <div class="search-checklist-box">
          <h4>🔍 LOCALIZA LAS 4 FLORES SAGRADAS:</h4>
          <ul id="object-search-checklist" class="search-checklist"></ul>
        </div>
      `,
      textRight: `
        <span class="page-badge">Página 8</span>
        <div style="text-align:center; margin-bottom:12px;">
          <span id="items-counter" class="diff-counter-badge" style="border-color:#27ae60; color:#27ae60;">Flores encontradas: 0 / 4</span>
        </div>
        <div id="items-status-box" class="enigma-box" style="margin-bottom:12px;">
          <strong>FLORA SAGRADA:</strong>
          <p id="items-feedback-text">Haz clic en la orquídea azul, el lirio solar, la rosa de escarcha y el helecho cantarín.</p>
        </div>
        <p class="decision-prompt" id="items-next-prompt">
          Las 4 flores se transforman en la <strong>Gema del Agua y la Gema del Viento</strong>.
        </p>
      `,
      choices: [
        {
          text: "🦄 Acudir al Santuario de los Unicornios de Cristal",
          target: "forest_unicorn_glade",
          pageDisplay: "Págs. 9 - 10",
          rewardKey: "Gemas de Agua y Viento"
        }
      ]
    },

    "forest_unicorn_glade": {
      id: "forest_unicorn_glade",
      pageNumbers: [9, 10],
      title: "El Santuario de los Unicornios de Cristal",
      image: "assets/images/floating_sky_harbor.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">Página 9</span>
        <p>Entre la niebla perlada emergen dos majestuosos unicornios blancos con cuernos de cristal translúcido que refractan los colores del arcoíris.</p>
        <p>Los unicornios inclinan sus frentes en reverencia ante el Bastón Rúnico de Isaac y tocan el suelo con sus pezuñas: <strong>¡una cascada de agua dorada se aparta revelando la entrada a la Gruta de la Eterna Juventud!</strong></p>
      `,
      textRight: `
        <span class="page-badge">Página 10</span>
        <div style="padding:12px; background:rgba(39,174,96,0.25); border:1px solid #27ae60; border-radius:6px; text-align:center;">
          <h4 style="color:#2ecc71;">🦄 ¡BENDICIÓN DE LOS UNICORNIOS RECIBIDA!</h4>
          <p style="color:#ecd8be; font-size:0.95rem; margin-top:6px;">Los unicornios te otorgan la <strong>Gema de la Luz</strong> y te acompañan hasta el umbral del manantial.</p>
        </div>
        <p class="decision-prompt">Entra en la caverna sagrada para recoger el elixir.</p>
      `,
      choices: [
        {
          text: "🎲 Superar la Prueba de Armonía de Dados en la Fuente Sagrada",
          target: "forest_spring_dice",
          pageDisplay: "Págs. 11 - 12",
          rewardKey: "Gema de la Luz",
          rewardFriend: "Santuario de Unicornios Purificado"
        }
      ]
    },

    "forest_spring_dice": {
      id: "forest_spring_dice",
      pageNumbers: [11, 12],
      title: "La Fuente del Manantial de la Eterna Juventud",
      image: "assets/images/floating_crystal_mills.jpg",
      isSpread: true,
      isDiceChallenge: true,
      diceChallenge: {
        target: 7,
        name: "Prueba de Armonía ante la Ninfa del Agua",
        buttonText: "🎲 ¡LANZAR LOS DADOS DE CRISTAL BENDITO!",
        successTitle: "¡ARMONÍA CELESTIAL! Los dados ruedan formando un 7+. El agua dorada del manantial se eleva formando una esfera pura que llena el ánfora mágica de Isaac. ¡El Elixir es tuyo!",
        failureTitle: "¡La superficie del agua tiembla con ondas suaves! Concéntrate en el amor a la naturaleza y vuelve a tirar."
      },
      textLeft: `
        <span class="page-badge">Página 11</span>
        <p>En el centro de la gruta de cristal brota un manantial de aguas doradas que emana una calidez revitalizante. Flotando sobre el estanque, la <strong>Ninfa Guardiana del Lago</strong> te mira con ojos bondadosos.</p>
        <p><em>—Has demostrado nobleza, Isaac. Ahora, lanza los dados sagrados de madera y cristal para sintonizar tu corazón con el latido de la Fuente de la Vida.</em></p>
      `,
      textRight: `
        <span class="page-badge">Página 12</span>
        <div id="generic-dice-box"></div>
        <p class="decision-prompt">¡Llena el ánfora con el Elixir y corre al Árbol Madre!</p>
      `,
      choices: [
        {
          text: "🌳 Ungir las raíces del Árbol de la Vida y sanar el bosque",
          target: "forest_victory",
          pageDisplay: "Págs. 13 - 14",
          rewardFriend: "Elixir de la Juventud Obtenido"
        }
      ]
    },

    
    "forest_gameover_thorns": {
      id: "forest_gameover_thorns",
      isGameOver: true,
      title: "¡Atrapado en el Zarzal de Espinas Negras!",
      image: "assets/images/medieval_gameover_petrified.jpg",
      textLeft: `
        <span class="page-badge" style="color:var(--accent-red);">¡FINAL FATAL!</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:var(--accent-red);">¡ENREDADERAS SOMBRÍAS DEL BOSQUE!</h3>
        <p>Apartarte del sendero de setas luminosas te lleva a una hondonada oscura. De entre la tierra brotan lianas espinosas que se enroscan rápidamente en tus botas impidiéndote mover ni un solo paso.</p>
        <div class="enigma-box" style="border-left-color: var(--accent-red);">
          <strong>🌿 ZARZAS DE MAGIA TENEBROSA:</strong>
          <p>Las espinas absorben la energía vital de quienes no respetan el bosque. ¡Tu <strong>Lámpara de Hadas / Anillo Mágico</strong> puede irradiar luz pura para hacer florecer las zarzas y liberarte!</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Destino & Salvación</span>
        <div class="gameover-box">
          <p>El Manantial de la Eterna Juventud permanecería oculto para siempre... ¡a menos que invoques la luz salvadora!</p>
        </div>
        <div id="gameover-ring-box" style="margin: 12px 0;"></div>
        <p class="decision-prompt" id="gameover-prompt">
          Usa el <strong>Anillo Mágico</strong> para bañar el zarzal en luz dorada o reintenta siguiendo el sendero sabio de RobleViejo.
        </p>
      `,
      choices: []
    },

    "forest_gameover_mist": {
      id: "forest_gameover_mist",
      isGameOver: true,
      title: "¡Adormecido por la Niebla de Sueño Profundo!",
      image: "assets/images/cave_gameover_void.jpg",
      textLeft: `
        <span class="page-badge" style="color:var(--accent-red);">¡FINAL FATAL!</span>
        <h3 style="margin-top:10px; font-family:'Cinzel',serif; font-size:1.4rem; color:var(--accent-red);">¡EL CANTO DE BRUMA DEL CLARO!</h3>
        <p>Una densa niebla púrpura con olor a lavanda y amapolas encantadas brota de la cascada. Tus ojos comienzan a cerrarse, tus miembros se vuelven pesados como plomo y caes en un profundo trance somnoliento.</p>
        <div class="enigma-box" style="border-left-color: var(--accent-red);">
          <strong>💤 LETARGO DE CIEN AÑOS:</strong>
          <p>Quien duerme bajo la bruma del bosque puede no despertar en un siglo. ¡La <strong>Campanilla de RobleViejo / Anillo Mágico</strong> emitirá una nota cristalina que disipará el sueño!</p>
        </div>
      `,
      textRight: `
        <span class="page-badge">Destino & Salvación</span>
        <div class="gameover-box">
          <p>Tu aventura terminaría en un sueño eterno... ¡a menos que hagas sonar tu talismán de salvación!</p>
        </div>
        <div id="gameover-ring-box" style="margin: 12px 0;"></div>
        <p class="decision-prompt" id="gameover-prompt">
          Usa el <strong>Anillo Mágico</strong> para despertar con su campana mística o retrocede para cruzar con respeto.
        </p>
      `,
      choices: []
    },
    "forest_victory": {
      id: "forest_victory",
      pageNumbers: [13, 14],
      title: "¡Isaac, el Guardián Eterno de la Naturaleza!",
      image: "assets/images/medieval_victory.jpg",
      isSpread: true,
      textLeft: `
        <span class="page-badge">¡El Bosque Florece!</span>
        <h3 style="color:#27ae60; font-family:'Cinzel',serif; font-size:1.6rem;">¡EL ÁRBOL MADRE HA SIDO SANADO!</h3>
        <p>Isaac derrama con cuidado las gotas doradas del Elixir sobre las raíces secas del Gran Árbol. En un instante, <strong>¡una oleada de savia luminosa asciende por el tronco colosal!</strong></p>
        <p>Miles de hojas de esmeralda brotan en segundos, flores mágicas se abren en todas las ramas y las hadas del bosque danzan en el aire arrojando pétalos dorados sobre Isaac y Silfo.</p>
      `,
      textRight: `
        <span class="page-badge">Corona Floral</span>
        <div style="padding:15px; background:rgba(39,174,96,0.2); border:2px solid #27ae60; border-radius:8px; text-align:center;">
          <div style="font-size:2.8rem; margin-bottom:6px;">🏆🌲🦊</div>
          <h4 style="color:#2ecc71;">¡TROFEO: SEÑOR DE LA ETERNA JUVENTUD!</h4>
          <p style="color:#ecd8be; font-size:0.95rem; margin-top:6px;">Has hablado con los Ents, guiado a los unicornios y devuelto la inmortalidad al Bosque Sagrado.</p>
        </div>
        <p class="decision-prompt">¡Enhorabuena, Isaac! Puedes volver a la biblioteca para disfrutar de todas tus aventuras.</p>
      `,
      choices: [
        {
          text: "🏛️ Volver a la Biblioteca de Aventuras",
          target: "library",
          pageDisplay: "Estantería Mágica"
        }
      ]
    }
  }
};


// =============================================================================
// CATÁLOGO COMPLETO DE LOS 10 LIBROS-JUEGO DE LA BIBLIOTECA FANTÁSTICA
// =============================================================================
window.LIBRARY_BOOKS = {
  "castillo": CASTILLO_DATA,
  "circo": CIRCO_DATA,
  "cueva": CUEVA_DATA,
  "dragon": DRAGON_DATA,
  "mundo": MUNDO_DATA,
  "david_dragones": DAVID_DATA,
  "francisco_parque": FRANCISCO_DATA,
  "isaac_superheroes": ISAAC_SUPERHEROES_DATA,
  "isaac_virus": ISAAC_VIRUS_DATA,
  "isaac_bosque": ISAAC_BOSQUE_DATA
};
