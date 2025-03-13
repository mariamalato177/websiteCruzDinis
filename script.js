$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    if (!$("#mainListDiv").hasClass("show_list")) {
        $("#mainListDiv").fadeOut();
    } else {
        $("#mainListDiv").fadeIn();
    }
});

let indexSlide = 0; // Sempre começa do primeiro slide

function showSlides() {
    let slides = document.querySelectorAll(".slide");

  
    slides.forEach(slide => slide.style.display = "none");

    
    if (indexSlide < slides.length) {
        slides[indexSlide].style.display = "block";
    }

    
    indexSlide++;
    if (indexSlide >= slides.length) {
        indexSlide = 0; 
    }

    setTimeout(showSlides, 50000);
}

// Garante que o primeiro slide aparece ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    let slides = document.querySelectorAll(".slide");
    if (slides.length > 0) {
        slides.forEach(slide => slide.style.display = "none");
        slides[0].style.display = "block"; // Exibe o primeiro slide corretamente
    }

    showSlides();
});


function changeSlide(n) {
    let slides = document.querySelectorAll(".slide");
    indexSlide += n;
    
    if (indexSlide > slides.length) { indexSlide = 1 }
    if (indexSlide < 1) { indexSlide = slides.length }

    // Esconde todos os slides
    slides.forEach(slide => slide.style.display = "none");

    // Exibe o slide atual
    slides[indexSlide - 1].style.display = "block";
}



const translations = {
    pt: {
        cirurgiao: "Cirurgião Capilar",
        casos: "Casos Clínicos",
        tratamentos: "Tratamentos ▾",
        prp: "PRP",
        consultas: "Consultas Tricologia",
        avaliacao: "Marcar Avaliação",
        contactos: "Contactos",
        slide1_title: "Casos Clínicos",
        slide1_text: "Dr. Cruz Dinis é um cirurgião capilar com mais de 20 anos de experiência. Realiza cirurgias capilares com resultados incríveis. Marque já a sua avaliação.",
        slide2_title: "Dr. Cruz Dinis",
        slide2_text: "Dr. Cruz Dinis é um cirurgião capilar com mais de 20 anos de experiência. Realiza cirurgias capilares com resultados incríveis. Marque já a sua avaliação.",
        slide3_title: "Marcar Avaliação",
        slide3_text: "Dr. Cruz Dinis é um cirurgião capilar com mais de 20 anos de experiência. Realiza cirurgias capilares com resultados incríveis. Marque já a sua avaliação.",
        main_section: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis."
    },
    en: {
        cirurgiao: "Hair Surgeon",
        casos: "Clinical Cases",
        tratamentos: "Treatments ▾",
        prp: "PRP",
        consultas: "Trichology Consultations",
        avaliacao: "Book Evaluation",
        contactos: "Contacts",
        slide1_title: "Clinical Cases",
        slide1_text: "Dr. Cruz Dinis is a hair surgeon with over 20 years of experience. He performs hair surgeries with incredible results. Book your evaluation now.",
        slide2_title: "Dr. Cruz Dinis",
        slide2_text: "Dr. Cruz Dinis is a hair surgeon with over 20 years of experience. He performs hair surgeries with incredible results. Book your evaluation now.",
        slide3_title: "Book Evaluation",
        slide3_text: "Dr. Cruz Dinis is a hair surgeon with over 20 years of experience. He performs hair surgeries with incredible results. Book your evaluation now.",
        main_section: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis."
    }
};

function changeLanguage() {
    let lang = document.getElementById("language-select").value;
    
    // Percorre todos os elementos que têm o atributo data-key
    document.querySelectorAll("[data-key]").forEach(element => {
        let key = element.getAttribute("data-key");
        element.textContent = translations[lang][key];
    });

    // Salva a escolha do idioma no localStorage para manter a seleção ao recarregar a página
    localStorage.setItem("selectedLanguage", lang);
}

// Mantém a seleção do idioma ao recarregar a página
document.addEventListener("DOMContentLoaded", () => {
    let savedLang = localStorage.getItem("selectedLanguage") || "pt"; // Padrão: português
    document.getElementById("language-select").value = savedLang;
    changeLanguage();
});



