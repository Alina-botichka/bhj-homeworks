const book = document.getElementById('book');
const fontSizes = document.querySelectorAll('.font-size');

function removeActiveFontClass() {
    fontSizes.forEach(item => {
        item.classList.remove('font-size_active');
    });
}

function removeBookFontClasses() {
    book.classList.remove('book_fs-small', 'book_fs-big');
}

fontSizes.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        removeActiveFontClass();
        this.classList.add('font-size_active');
        removeBookFontClasses();
        const size = this.dataset.size;
        
        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    });
});