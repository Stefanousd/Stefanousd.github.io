---
layout: hsp
title: Come vivi la tua casa?
name-en: quiz-profilo
name-it: quiz-profilo
name-br: quiz-profilo
language: it
---

<section style="background-color: green; color: darkgreen; padding: 10px; border-radius: 10px;">
  <div class="quiz-container">
    <!--
    -->
    <h1>Scopri il tuo stile</h1>
    
    <div id="question-container">
        <!-- Qui verrà mostrata una domanda alla volta -->
    </div>
    
    <button class="nav-btn" id="prev-btn" onclick="prevQuestion()" style="display:none;">Indietro</button>
    <button class="nav-btn" id="next-btn" onclick="nextQuestion()">Avanti</button>
    <button class="submit-btn" id="submit-btn" onclick="submitQuiz()" style="display:none;">Scopri il risultato</button>

    <div id="result">
        <h2>Il tuo profilo è: <span id="profile-result"></span></h2>
        <p id="profile-description"></p>
        <h3>Curiosità:</h3>
        <p id="profile-curiosita"></p>
        <h3>Punteggio:</h3>
        <p id="profile-score"></p>
    </div>

  </div>

<script>
    const questions = [
        { 
            question: "Quale di questi ambienti ti fa sentire più rilassato?",
            answers: ["/assets/img/quiz/domandaA_soggiorno/soggiorno1.png", "/assets/img/quiz/domandaA_soggiorno/soggiorno2.png", "/assets/img/quiz/domandaA_soggiorno/soggiorno3.png", "/assets/img/quiz/domandaA_soggiorno/soggiorno4.png", "/assets/img/quiz/domandaA_soggiorno/soggiorno5.png", "/assets/img/quiz/domandaA_soggiorno/soggiorno6.png", "/assets/img/quiz/domandaA_soggiorno/soggiorno7.png"],
            scores: [1, 2, 3, 4, 5, 6, 7] // Punteggi assegnati per ogni risposta
        },
        { 
            question: "Quale stile di camera da letto sceglieresti per sentirti più accogliente?",
            answers: ["/assets/img/quiz/domandaB_camere/camere1.png", "/assets/img/quiz/domandaB_camere/camere2.png", "/assets/img/quiz/domandaB_camere/camere3.png", "/assets/img/quiz/domandaB_camere/camere4.png", "/assets/img/quiz/domandaB_camere/camere5.png", "/assets/img/quiz/domandaB_camere/camere6.png", "/assets/img/quiz/domandaB_camere/camere7.png"],
            scores: [1, 2, 3, 4, 5, 6, 7] // Punteggi assegnati per ogni risposta
        },
        { 
            question: "Quale di queste cucine sembra la più funzionale per il tuo stile di vita?",
            answers: ["/assets/img/quiz/domandaC_cucine/cucine1.png", "/assets/img/quiz/domandaC_cucine/cucine2.png", "/assets/img/quiz/domandaC_cucine/cucine3.png", "/assets/img/quiz/domandaC_cucine/cucine4.png", "/assets/img/quiz/domandaC_cucine/cucine5.png", "/assets/img/quiz/domandaC_cucine/cucine6.png", "/assets/img/quiz/domandaC_cucine/cucine7.png"],
            scores: [1, 2, 3, 4, 5, 6, 7] // Punteggi assegnati per ogni risposta
        },
        { 
            question: "Quale di questi ambienti di lavoro ti fa sentire più produttivo?",
            answers: ["/assets/img/quiz/domandaD_DDD/DDD1.png", "/assets/img/quiz/domandaD_DDD/DDD2.png", "/assets/img/quiz/domandaD_DDD/DDD3.png", "/assets/img/quiz/domandaD_DDD/DDD4.png", "/assets/img/quiz/domandaD_DDD/DDD5.png", "/assets/img/quiz/domandaD_DDD/DDD6.png", "/assets/img/quiz/domandaD_DDD/DDD7.png"],
            scores: [1, 2, 3, 4, 5, 6, 7] // Punteggi assegnati per ogni risposta
        },
        { 
            question: "Quale di queste sale da pranzo sarebbe lo spazio perfetto per un pasto in famiglia?",
            answers: ["/assets/img/quiz/domandaE_EEE/EEE1.png", "/assets/img/quiz/domandaE_EEE/EEE2.png", "/assets/img/quiz/domandaE_EEE/EEE3.png", "/assets/img/quiz/domandaE_EEE/EEE4.png", "/assets/img/quiz/domandaE_EEE/EEE5.png", "/assets/img/quiz/domandaE_EEE/EEE6.png", "/assets/img/quiz/domandaE_EEE/EEE7.png"],
            scores: [1, 2, 3, 4, 5, 6, 7] // Punteggi assegnati per ogni risposta
        },
        { 
            question: "Quale di questi bagni ti fa sentire più rinvigorito?",
            answers: ["/assets/img/quiz/domandaF_FFF/FFF1.png", "/assets/img/quiz/domandaF_FFF/FFF2.png", "/assets/img/quiz/domandaF_FFF/FFF3.png", "/assets/img/quiz/domandaF_FFF/FFF4.png", "/assets/img/quiz/domandaF_FFF/FFF5.png", "/assets/img/quiz/domandaF_FFF/FFF6.png", "/assets/img/quiz/domandaF_FFF/FFF7.png"],
            scores: [1, 2, 3, 4, 5, 6, 7] // Punteggi assegnati per ogni risposta
        },
        { 
            question: "Quale di questi elementi decorativi vorresti avere a casa tua?",
            answers: ["/assets/img/quiz/domandaG_GGG/GGG1.png", "/assets/img/quiz/domandaG_GGG/GGG2.png", "/assets/img/quiz/domandaG_GGG/GGG3.png", "/assets/img/quiz/domandaG_GGG/GGG4.png", "/assets/img/quiz/domandaG_GGG/GGG5.png", "/assets/img/quiz/domandaG_GGG/GGG6.png", "/assets/img/quiz/domandaG_GGG/GGG7.png"],
            scores: [1, 2, 3, 4, 5, 6, 7] // Punteggi assegnati per ogni risposta
        },
        { 
            question: "Quale di questi spazi esterni ti fa venir voglia di trascorrere più tempo all'aperto?",
            answers: ["/assets/img/quiz/domandaH_HHH/HHH1.png", "/assets/img/quiz/domandaH_HHH/HHH2.png", "/assets/img/quiz/domandaH_HHH/HHH3.png", "/assets/img/quiz/domandaH_HHH/HHH4.png", "/assets/img/quiz/domandaH_HHH/HHH5.png", "/assets/img/quiz/domandaH_HHH/HHH6.png", "/assets/img/quiz/domandaH_HHH/HHH7.png"],
            scores: [1, 2, 3, 4, 5, 6, 7] // Punteggi assegnati per ogni risposta
        },
        { 
            question: "Quale di queste palette di colori ti farebbe sentire più in pace nel tuo soggiorno?",
            answers: ["/assets/img/quiz/domandaI_III/III1.png", "/assets/img/quiz/domandaI_III/III2.png", "/assets/img/quiz/domandaI_III/III3.png", "/assets/img/quiz/domandaI_III/III4.png", "/assets/img/quiz/domandaI_III/III5.png", "/assets/img/quiz/domandaI_III/III6.png", "/assets/img/quiz/domandaI_III/III7.png"],
            scores: [1, 2, 3, 4, 5, 6, 7] // Punteggi assegnati per ogni risposta
        }
    ];

    const profiles = [
        { color: "Minimalista Moderno", description: "Per creare un ambiente minimalista e funzionale, scegli mobili multifunzionali come divani letto o tavoli allungabili, che ottimizzano lo spazio senza compromettere il design. Colori neutri come bianco, grigio e beige mantengono una sensazione di tranquillità, mentre trame morbide e pochi oggetti decorativi mantengono l'ambiente leggero e ordinato. Evita l'eccesso di mobili o accessori e opta per linee semplici e pulite.", curiosita: "Persona pratica e organizzata, ama ambienti puliti e privi di eccessi. Cerca equilibrio e tranquillità, mantenendo la vita ordinata e serena." },
        { color: "Scandinavo Naturale", description: "Mobili in legno chiaro, tessuti morbidi come coperte e tappeti soffici, e toni pastello massimizzano la luce naturale. Prediligi mobili dalle linee semplici e sfrutta al meglio le finestre per far entrare la luce. Le piante aggiungono vita e freschezza all’ambiente, creando uno spazio accogliente e funzionale.", curiosita: "Calmo e amante della natura, preferisce la semplicità e un ambiente che trasmetta pace. La sua personalità è legata alla tranquillità e alla praticità." },
        { color: "Industriale Urbano", description: "Materiali come metallo, legno e cemento sono fondamentali per lo stile industriale. Usa scaffali in acciaio, lampade con cavi a vista e mobili in legno grezzo. Colori scuri e neutri come il grigio, il nero e i toni metallici dominano. Spazi aperti e pezzi grandi come divani modulari creano un senso di ampiezza e urbanità.", curiosita: "Urbano e moderno, ama funzionalità e estetica semplice. La personalità è diretta, con un apprezzamento per l’essenziale e robusto." },
        { color: "Classico ed Elegante", description: "Scegli mobili di qualità con linee tradizionali e finiture raffinate. Toni neutri come beige e crema creano una base armoniosa, e dettagli in oro o argento aggiungono un tocco di sofisticazione. Mobili imbottiti confortevoli e tende pesanti sono perfetti per un tocco di eleganza.", curiosita: "Persona sofisticata, che valorizza tradizione e eleganza. Organizzata e in cerca di equilibrio, preferisce ambienti raffinati e simmetrici." },
        { color: "Rustico Accogliente", description: "Usa mobili in legno massiccio e pezzi che trasmettono calore, come poltrone in pelle e coperte di lana. Colori caldi come il terracotta, il marrone e il verde muschio evocano la natura. Una luce soffusa e elementi naturali come cesti di vimini e tessuti rustici completano l’ambiente.", curiosita: "Persona calorosa e legata alla famiglia, ama il comfort e l’intimità. Ha una forte connessione con la tradizione e i valori familiari." },
        { color: "Boho Rilassato", description: "Incorpora elementi naturali come legno, rattan e tessuti in fibre naturali. Aggiungi cuscini colorati, tappeti etnici e tende leggere, creando un'atmosfera rilassante e piena di personalità. Piante e pezzi artigianali sono essenziali per un tocco di originalità. Combina mobili vintage con elementi contemporanei per creare un ambiente accogliente che rifletta la tua libertà creativa.", curiosita: "Creativo e libero, preferisce un ambiente rilassato e colorato. Riflette una personalità artistica e gioiosa, che ama l'originalità." },
        { color: "Eclettico e Vivace", description: "Combina diverse influenze e colori. Scegli oggetti decorativi audaci come tappeti colorati e opere d'arte appariscenti. Mobili vintage e moderni si mescolano in uno spazio vivace e dinamico. Sperimenta con texture e stampe per creare un ambiente che rifletta la tua personalità.", curiosita: "Estroverso e dinamico, ama sperimentare e combinare stili diversi. Ha una personalità vibrante e sempre in evoluzione." }
    ]; // Profilo e descrizione

    let currentQuestion = 0; // Tiene traccia della domanda corrente
    let swiper; // Per inizializzare Swiper

    // Funzione per caricare la domanda corrente
    function loadQuestion(questionIndex) {
        const questionContainer = document.getElementById("question-container");
        questionContainer.innerHTML = ""; // Pulisce il contenuto corrente

        const questionElement = document.createElement("div");
        questionElement.classList.add("question");
        
        const questionTitle = document.createElement("h3");
        questionTitle.textContent = `${questionIndex + 1}. ${questions[questionIndex].question}`;
        questionElement.appendChild(questionTitle);

        // Istruzione per scorrere
        const instruction = document.createElement("p");
        instruction.textContent = "Scorri a destra o a sinistra per vedere di più.";
        instruction.style.fontStyle = "italic";
        questionElement.appendChild(instruction);
        
        // Creazione dello slider
        const swiperContainer = document.createElement("div");
        swiperContainer.classList.add("swiper-container");
        
        const swiperWrapper = document.createElement("div");
        swiperWrapper.classList.add("swiper-wrapper");

        // Aggiungi le immagini alle slide
        questions[questionIndex].answers.forEach((answer, i) => {
            const slide = document.createElement("div");
            slide.classList.add("swiper-slide");
            const img = document.createElement("img");
            img.src = answer;
            img.alt = answer.split('/').pop();
            img.dataset.profile = i;
            img.onclick = () => selectAnswer(questionIndex, i);
            slide.appendChild(img);
            swiperWrapper.appendChild(slide);
        });

        swiperContainer.appendChild(swiperWrapper);
        questionElement.appendChild(swiperContainer);
        questionContainer.appendChild(questionElement);
        
        // Inizializza Swiper
        swiper = new Swiper(swiperContainer, {
            loop: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                slideChange: function () {
                    // Aggiorna la risposta selezionata in base alla slide corrente
                    const currentIndex = swiper.activeIndex;
                    questions[questionIndex].selectedProfile = currentIndex;
                }
            }
        });
        
        // Controllo visibilità pulsanti
        document.getElementById("prev-btn").style.display = questionIndex > 0 ? "inline-block" : "none";
        document.getElementById("next-btn").style.display = questionIndex < questions.length - 1 ? "inline-block" : "none";
        document.getElementById("submit-btn").style.display = questionIndex === questions.length - 1 ? "inline-block" : "none";
    }

    // Funzione per selezionare una risposta
    function selectAnswer(questionIndex, profileIndex) {
        // Assegna il profilo alla domanda selezionata
        questions[questionIndex].selectedProfile = profileIndex;
    }

    // Funzione per andare alla domanda successiva
    function nextQuestion() {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            loadQuestion(currentQuestion);
        }
    }

    // Funzione per tornare alla domanda precedente
    function prevQuestion() {
        if (currentQuestion > 0) {
            currentQuestion--;
            loadQuestion(currentQuestion);
        }
    }

    // Funzione per calcolare il risultato
function submitQuiz() {
    let totalScore = 0; // Inizializza il punteggio totale

    // Somma i punteggi delle risposte selezionate
    questions.forEach(q => {
        if (q.selectedProfile !== undefined) {
            totalScore += q.scores[q.selectedProfile];
        }
    });

    // Determina il profilo in base al punteggio
    let resultProfileIndex;
    if (totalScore >= 1 && totalScore <= 11) {
        resultProfileIndex = 0; // Minimalista Moderno
    } else if (totalScore >= 12 && totalScore <= 20) {
        resultProfileIndex = 1; // Scandinavo Naturale
    } else if (totalScore >= 21 && totalScore <= 33) {
        resultProfileIndex = 2; // Industriale Urbano
    } else if (totalScore >= 34 && totalScore <= 44) {
        resultProfileIndex = 3; // Classico ed Elegante
    } else if (totalScore >= 45 && totalScore <= 50) {
        resultProfileIndex = 4; // Rustico Accogliente
    } else if (totalScore >= 51 && totalScore <= 59) {
        resultProfileIndex = 5; // Boho Rilassato
    } else if (totalScore >= 60 && totalScore <= 63) {
        resultProfileIndex = 6; // Eclettico e Vivace
    }

    // Prende il profilo dall'array profiles
    const resultProfile = profiles[resultProfileIndex];

    // Mostra il risultato insieme al punteggio totale
    const resultElement = document.getElementById("result");
    const profileResult = document.getElementById("profile-result");
    const profileDescription = document.getElementById("profile-description");
    const profileCuriosita = document.getElementById("profile-curiosita"); 
    const profileScore = document.getElementById("profile-score"); 

    profileResult.textContent = resultProfile.color;
    profileDescription.textContent = `${resultProfile.description}`;
    profileCuriosita.textContent = `${resultProfile.curiosita}`;
    profileScore.textContent = `Hai ottenuto un punteggio di ${totalScore}.`;
    resultElement.style.display = "block";
}

    // Carica la prima domanda all'avvio
    window.onload = () => loadQuestion(currentQuestion);
</script>

  <style>
/* Cambia il colore del testo h1 in verde */
    h1 {
      color: green;
    }

    .quiz-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    .question {
      margin-bottom: 20px;
    }

    .question h3 {
      font-size: 1.5em;
      margin-bottom: 20px;
    }

    /* Stile per il contenitore Swiper */
    .swiper-container {
      width: 100%;
      height: 250px;
      overflow: hidden;
      position: relative;
    }

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    width: 80%; /* Mostra solo il 80% di ogni slide */
    margin: 0 auto;
    }

    /* Stile per le immagini */
    .swiper-slide img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 10px;
    }

    .submit-btn,
    .nav-btn {
      display: block;
      margin: 20px auto;
      padding: 10px 20px;
      background-color: #3498db;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
    }

    .submit-btn:hover,
    .nav-btn:hover {
      background-color: #2980b9;
    }

    #result {
      display: none;
      margin-top: 20px;
    }
    #result h2 {
/*
      font-size: 1.5em;
      color: #3498db;
*/
    }
    .styles-transparent .styles-NavigationDesktop {
      transition: background-color .4s var(--rock-dove);
      background-color: #fff;
      transition: 0.4s;
    }

  </style>

</section>
