//timeline see more
let seeMoreTimeline = document.querySelectorAll('.seeMoreTimeline');
let timelineItems = document.getElementById('show_time_items');

seeMoreTimeline.forEach(e => {
    e.addEventListener('click', () => {
        e.classList.toggle('seeMoreFlex');
        timelineItems.style.display = "flex";
    });
});