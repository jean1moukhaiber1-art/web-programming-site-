
const form = document.getElementById("profileForm");
const reviewPanel = document.getElementById("reviewPanel");
const reviewContent = document.getElementById("reviewContent");
const editButton = document.getElementById("editButton");
const confirmButton = document.getElementById("confirmButton");


form.addEventListener("submit", function (event) {
    event.preventDefault();

    
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    
    showReview();
});


function showReview() {
    reviewContent.replaceChildren();

    const processedNames = new Set();

    for (const control of form.elements) {
        if (
            !control.name ||
            ["button", "submit", "reset", "hidden"].includes(control.type)
        ) {
            continue;
        }

        if (processedNames.has(control.name)) {
            continue;
        }

        processedNames.add(control.name);

        const group = Array.from(form.elements).filter(
            element => element.name === control.name
        );

        let value = "";

        if (control.type === "radio") {
            const selected = group.find(element => element.checked);
            value = selected ? selected.value : "Not selected";

        } else if (control.type === "checkbox") {
            const checkboxes = group.filter(
                element => element.type === "checkbox"
            );

            if (checkboxes.length > 1) {
                value = checkboxes
                    .filter(element => element.checked)
                    .map(element =>
                        element.labels[0]?.textContent.trim() || element.value
                    )
                    .join(", ");
            } else {
                value = control.checked ? "Yes" : "No";
            }

        } else if (
            control.tagName === "SELECT" &&
            control.multiple
        ) {
            value = Array.from(control.selectedOptions)
                .map(option => option.textContent.trim())
                .join(", ");

        } else {
            value = control.value;
        }

        const row = document.createElement("p");
        const label = document.createElement("strong");
        const answer = document.createElement("span");

        label.textContent =
            control.labels[0]?.textContent.trim() || control.name;

        answer.textContent = value || "Not provided";

        row.append(label, document.createTextNode(": "), answer);
        reviewContent.appendChild(row);
    }

    form.classList.add("hidden");
    reviewPanel.classList.remove("hidden");
}


editButton.addEventListener("click", function () {
    reviewPanel.classList.add("hidden");
    form.classList.remove("hidden");
});


confirmButton.addEventListener("click", function () {
    form.submit();
});
