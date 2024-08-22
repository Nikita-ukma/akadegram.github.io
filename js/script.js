window.addEventListener('DOMContentLoaded', () => {
    //Like button

    const getLike = () => +localStorage.getItem('isLiked');
    const setLike = (value) => localStorage.setItem('isLiked', value);
    const toogleLike = () => setLike((getLike() + 1) % 2);

    if (getLike() === 'undefined') setLike(0);

    const likeBtn = document.querySelector('.heart-icon');
    updateLikeBtn();

    likeBtn.addEventListener('click', () => {
        likeBtn.classList.toggle("liked");
        toogleLike();
        updateLikeBtn();
    });


    function updateLikeBtn() {
        if (getLike()) likeBtn.classList.add("liked");
        else likeBtn.classList.remove("liked");
    }

    //
});