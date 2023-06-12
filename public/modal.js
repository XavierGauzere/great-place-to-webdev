const modal = {

    init: function(){
        if (document.querySelector(".modal")) {
        const close = document.querySelector(".close_modal");
        // event listener on close modal button
        close.addEventListener('click', modal.closeModal);
        }
    },

    /**
     * Method to close the modal on click event
     */
    closeModal: function(){
        const modalSuccess = document.querySelector(".modal");
        modalSuccess.classList.add("hidden");
    },
        
}

document.addEventListener('DOMContentLoaded', modal.init);