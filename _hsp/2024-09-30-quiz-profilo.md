---
layout: hsp
title: Che profilo sei?
name-en: quiz-profilo
name-it: quiz-profilo
name-br: quiz-profilo
language: it
---

<section style="background-color: green; color: darkgreen; padding: 10px; border-radius: 10px;">
  <div class="quiz-container">
    <!--
    -->
    <h1>Scopri il tuo profilo</h1>
    
    <div id="question-container">
        <!-- Qui verrà mostrata una domanda alla volta -->
    </div>
    
    <button class="nav-btn" id="prev-btn" onclick="prevQuestion()" style="display:none;">Indietro</button>
    <button class="nav-btn" id="next-btn" onclick="nextQuestion()">Avanti</button>
    <button class="submit-btn" id="submit-btn" onclick="submitQuiz()" style="display:none;">Scopri il risultato</button>

    <div id="result">
        <h2>Il tuo profilo è: <span id="profile-result"></span></h2>
        <p id="profile-description"></p> <!-- Aggiunto per la descrizione -->
    </div>

  </div>

<script>
    const questions = [
        { 
            question: "Quale di questi ambienti ti fa sentire più rilassato?",
            answers: ["/assets/img/blu1.jpg", "/assets/img/giallo1.jpg", "/assets/img/verde1.jpg", "/assets/img/arancione1.jpg", "/assets/img/bianco1.jpg", "/assets/img/rosso1.jpg"]
        },
        { 
            question: "Quale di queste cucine sembra la più funzionale per il tuo stile di vita?",
            answers: ["/assets/img/blu2.jpg", "/assets/img/giallo2.jpg", "/assets/img/verde2.jpg", "/assets/img/arancione2.jpg", "/assets/img/bianco2.jpg", "/assets/img/rosso2.jpg"]
        },
        { 
            question: "Quale di questi ambienti di lavoro ti fa sentire più produttivo?",
            answers: ["/assets/img/blu3.jpg", "/assets/img/giallo3.jpg", "/assets/img/verde3.jpg", "/assets/img/arancione3.jpg", "/assets/img/bianco3.jpg", "/assets/img/rosso3.jpg"]
        },
        { 
            question: "Quale di queste sale da pranzo sarebbe lo spazio perfetto per un pasto in famiglia?",
            answers: ["/assets/img/blu4.jpg", "/assets/img/giallo4.jpg", "/assets/img/verde4.jpg", "/assets/img/arancione4.jpg", "/assets/img/bianco4.jpg", "/assets/img/rosso4.jpg"]
        },
        { 
            question: "Quale di questi bagni ti fa sentire più rinvigorito?",
            answers: ["/assets/img/blu5.jpg", "/assets/img/giallo5.jpg", "/assets/img/verde5.jpg", "/assets/img/arancione5.jpg", "/assets/img/bianco5.jpg", "/assets/img/rosso5.jpg"]
        },
        { 
            question: "Quale di questi elementi decorativi vorresti avere a casa tua?",
            answers: ["/assets/img/blu6.jpg", "/assets/img/giallo6.jpg", "/assets/img/verde6.jpg", "/assets/img/arancione6.jpg", "/assets/img/bianco6.jpg", "/assets/img/rosso6.jpg"]
        }
    ];

    const profiles = [
        { color: "Blu", description: "Sei una persona calma e riflessiva. Ti piace l'armonia e la tranquillità." },
        { color: "Giallo", description: "Sei solare e pieno di energia. Ti piace socializzare e portare gioia agli altri." },
        { color: "Verde", description: "Sei equilibrato e attento all'ambiente. Apprezzi la natura e la serenità." },
        { color: "Arancione", description: "Sei creativo e avventuroso. Ti piace esplorare nuove idee e esperienze." },
        { color: "Bianco", description: "Sei una persona semplice e autentica. Ti piace la chiarezza e la purezza." },
        { color: "Rosso", description: "Sei passionale e determinato. Ti piace affrontare le sfide con coraggio." }
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
            img.alt = `Profilo ${i + 1}`;
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
        profiles.forEach(profile => profile.score = 0); // Resetta i punteggi

        // Conta i punteggi per ciascun profilo
        questions.forEach(q => {
            if (q.selectedProfile !== undefined) {
                profiles[q.selectedProfile].score++;
            }
        });

        // Trova il profilo con il punteggio massimo
        const maxScore = Math.max(...profiles.map(profile => profile.score));
        const resultProfiles = profiles
            .filter(profile => profile.score === maxScore);

        // Mostra il risultato
        const resultElement = document.getElementById("result");
        const profileResult = document.getElementById("profile-result");
        const profileDescription = document.getElementById("profile-description");

        profileResult.textContent = resultProfiles.map(profile => profile.color).join(" e ");
        profileDescription.textContent = resultProfiles.map(profile => profile.description).join(" ");
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
      font-size: 1.5em;
      color: #3498db;
    }

    .styles-transparent .styles-NavigationDesktop {
      transition: background-color .4s var(--rock-dove);
      background-color: #fff;
      transition: 0.4s;
    }

  </style>

</section>
