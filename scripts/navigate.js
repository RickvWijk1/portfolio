const home_to_stage = document.querySelector('#stage_link');

home_to_stage.addEventListener("click", () => {
    window.location.href = 'stage/stage.html';
});

const home_to_minor = document.querySelector('#minor_link');

home_to_minor.addEventListener("click", () => {
    window.location.href = 'minor/minor.html';
});