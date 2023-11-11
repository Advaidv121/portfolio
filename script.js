document.addEventListener('DOMContentLoaded', function () {
    // Add a click event listener to the button element
    document.getElementById('toggleButton').addEventListener('click', function () {
        // Toggle the 'overflow-hidden' class on the body element
        document.body.classList.toggle('overflow-hidden');

        // Toggle the 'hidden' class on the aside element
        const aside = document.querySelector('aside');
        if (aside) {
            aside.classList.toggle('hidden');
        }
    });
});