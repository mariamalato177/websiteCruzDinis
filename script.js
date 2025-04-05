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



