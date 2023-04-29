const digits = document.querySelectorAll("p");
let userDate = prompt("Enter Date in Below Format {Wed Apr 26 2023 14:54:00}");
if (userDate) {
    const endDate = new Date(userDate);

    const myfunc = () => {
        const startDate = new Date();

        let diff = (endDate - startDate) / 1000;

        const day = Math.floor(diff / (24 * 60 * 60));
        diff = diff % (24 * 60 * 60);
        const hour = Math.floor(diff / (60 * 60));
        diff = diff % (60 * 60);
        const minutes = Math.floor(diff / (60));
        diff = diff % 60;
        const second = Math.floor(diff);

        if (diff < 0) {
            let mainbox = document.getElementById('mainb');
            mainbox.innerHTML = "";
            mainbox.innerHTML = `<p class="timeout">⌛Time Out!<p>`;
        }
        else {
            digits[0].innerHTML = day;
            digits[1].innerHTML = hour;
            digits[2].innerHTML = minutes;
            digits[3].innerHTML = second;
        }
    }
    setInterval(myfunc, 1000);
}

