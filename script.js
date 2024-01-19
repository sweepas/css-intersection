const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
    (entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
 
  });
},
{
   threshold: 1,

}
);

const theLastCardObserver = new IntersectionObserver(enteries =>{
    const lastCard = enteries[0]
    if(lastCard.isIntersecting) return
    loadNewCard()
    theLastCardObserver.unobserve(lastCard.target)
    theLastCardObserver.observe(document.querySelector('.card:last-child'))
},{})

theLastCardObserver.observe(document.querySelector('.card:last-child'))

observer.observe(cards[0]);
cards.forEach((card) => {
  observer.observe(card);
});

const cardContainer = document.querySelector('.card-container')
 function loadNewCard() {
    for (let i = 0; i < 10; i++) {
        const card = document.createElement("div");
        card.textContent = "New Card"
        card.classList.add('card')
        observer.observe(card)
        cardContainer.append(card)
    }
 }