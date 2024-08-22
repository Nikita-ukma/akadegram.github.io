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
});