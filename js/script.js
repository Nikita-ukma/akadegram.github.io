window.addEventListener('DOMContentLoaded', () => {
    //Like button

    const getLike = () => +localStorage.getItem('isLiked');
    const setLike = (value) => localStorage.setItem('isLiked', value);
    const toogleLike = () => setLike((getLike() + 1) % 2);

    if (getLike() === 'undefined') setLike(0);

    const likeBtn = document.getElementById('likeBtn');
    updateLikeBtn();

    likeBtn.addEventListener('click', () => {
        toogleLike();
        updateLikeBtn();
    });


    function updateLikeBtn() {
        likeBtn.src = `images/like/${getLike() ? 'heart' : 'empty_heart'}.png`;
    }

    //quotes
    const quoteData = [
        ["«Уранці, коли пробуджуєшся, спитай себе: „Що я маю зробити?“ Увечері, перше ніж заснути: „Що я зробив?“»", "Піфагор"],
        ["«Не турбуйтеся, якщо щось не працює. Якби все працювало, вас звільнили б»",                                "Закон Мошера програмної інженерії"],
        ["«Завдяки істинному знанню ти будеш набагато сміливішим і досконалішим у кожній роботі, ніж без нього»",    "А. Дюрер"],
        ["«Велике мистецтво багато чого навчитися — це братися відразу за небагато»",                                "Джон Локк"],
        ["«Вся гордість вчителя в учнях, у зростанні посіяного ним насіння»",                                        "Д. Менделєєв"],
    ]
    const rand = Math.floor(Math.random()*quoteData.length);

    const quote = document.createElement('p');
    quote.innerHTML = quoteData[rand][0];

    const author = document.createElement('p');
    author.innerHTML = quoteData[rand][1];

    document.querySelector('.favorite-quote').append(quote, author);


});