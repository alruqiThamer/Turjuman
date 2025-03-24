const countries = {
    "en-US": "الانجليزية",
    "ar-SA": "العربية",
};

const fromText = document.querySelector(".from-text"),
    toText = document.querySelector(".to-text"),
    selectTag = document.querySelectorAll("select"),
    transleBtn = document.querySelector(".translate"),
    icons = document.querySelectorAll(".fa-copy");

selectTag.forEach((tag, id) => {
    for (const country_code in countries) {
        let selected;
        if (id == 0 && country_code == "en-US") {
            selected = "selected";
        } else if (id == 1 && country_code == "ar-SA") {
            selected = "selected";
        }
        let option = `<option value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
});

transleBtn.addEventListener("click", () => {
    let text = fromText.value,
        translateFrom = selectTag[0].value,
        translateTo = selectTag[1].value;

    // Show waiting state
    transleBtn.classList.add('waiting');

    // API URL
    let apiUrl = 'https://api.mymemory.translated.net/get?q=' + text + '&langpair=' + translateFrom + '|' + translateTo;
    fetch(apiUrl).then(res => res.json()).then(data => {
        console.log(data);
        toText.value = data.responseData.translatedText;
        // Remove waiting state
        transleBtn.classList.remove('waiting');
    }).catch(() => {
        // Remove waiting state in case of error
        transleBtn.classList.remove('waiting');
    });
});

icons.forEach(icon => {
    icon.addEventListener("click", ({ target }) => {
        if (target.classList.contains("fa-copy")) {
            navigator.clipboard.writeText(toText.value);
        }
    });
});