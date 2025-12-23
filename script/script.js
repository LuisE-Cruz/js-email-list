 const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

// Selezione gli elementi

const mails = document.getElementById("mails")
const generator = document.getElementById("gen-mail")

// Genero le email nella mia lista tramite il buttone

generator.addEventListener("click", () => {
    mails.innerText = ""

    for (let index = 0; index < 10; index++) {
        axios.get(endpoint).then((response) => {
            const result = response.data.response;
            mails.innerHTML += `
                        <li class="list-unstyled my-3">
                        <div class="bg-primary bg-opacity-10 border border-primary rounded text-primary">
                            ${result}
                        </div>
                    </li>
            `;
        });
        
    }
});