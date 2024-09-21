$(document).ready(() => {

    $('#contact-form').submit((event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        fetch("/contacto", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        })
          .then((resp) => handle_form_result(resp.ok))
          .catch((error) => handle_form_result(false, error));
    });
});

const handle_form_result = (ok, error) => {
    const form = $('#contact-form');
    form.addClass('submitted-form');
    if (ok) {
        form.addClass('submitted-form--ok');
    } else {
        form.addClass('submitted-form--error');
        if (error !== undefined) {
            console.error(error);
        }
    }
}