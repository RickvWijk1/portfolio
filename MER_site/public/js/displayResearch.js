//external research see more
let seeMoreExtResearch = document.querySelectorAll('.seeMoreExtResearch');
let extResearchItems = document.getElementById('show_extResearch_items');

seeMoreExtResearch.forEach(e => {
    e.addEventListener('click', () => {
        e.style.display="none";
        extResearchItems.style.display = "grid";
    });
});

//future research see more
let seeMoreFutureResearch = document.querySelectorAll('.seeMoreFutureResearch');
let futureResearchItems = document.getElementById('show_futureResearch_items');

seeMoreFutureResearch.forEach(e => {
    e.addEventListener('click', () => {
        e.style.display="none";
        futureResearchItems.style.display = "grid";
    });
});