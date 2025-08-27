
const callHistoryData = []


// Heart Icon Feature

const buttons = document.querySelectorAll('.heart-icon')

buttons.forEach(btn => {
    btn.addEventListener("mouseover", function () {
        btn.style.backgroundColor = "green";
        btn.style.color = "white";
        btn.style.cursor = "pointer";
    });

    btn.addEventListener("mouseout", function () {
        btn.style.backgroundColor = "";
        btn.style.color = "";
        btn.style.cursor = "";
    });

    btn.addEventListener("click", function () {
        const heartDisplay = document.getElementById('heart-display')
        let count = parseInt(heartDisplay.innerText);
        count++;
        heartDisplay.innerText = count;
    });
});


// Call Button Feature
const callBtn = document.querySelectorAll('.call-btn');

callBtn.forEach(btn => {
    btn.addEventListener("mouseover", function () {
        btn.style.backgroundColor = "gray";
        btn.style.cursor = "pointer";
    });

    btn.addEventListener("mouseout", function () {
        btn.style.backgroundColor = "";
        btn.style.cursor = "";
    });

    btn.addEventListener("click", function () {

        const card = btn.closest(".card");
        if (!card) return;
        const h1 = card.querySelectorAll('h1')
        const mainTitle = h1[0]?.innerText || "";
        const number = h1[1]?.innerText || "";

        const ok = confirm(`Do you want to call ${mainTitle} ${number}?`);

        if (ok) {
            // Deduct 20 coins if OK clicked
            const coinDisplay = document.getElementById('coin-count');
            let coins = parseInt(coinDisplay.innerText) || 0;


            if (coins < 20) {
                alert("Insufficient coins!");
            }

            else {
                coins -= 20;
                coinDisplay.innerText = coins;


                const data = {
                    name: mainTitle,
                    num: number,
                    date: new Date().toLocaleTimeString()
                }

                callHistoryData.push(data)
                console.log(callHistoryData)


                const callHistoryContainer = document.getElementById("call-history-container")

                callHistoryContainer.innerText = ''

                for (const data of callHistoryData) {
                    const div = document.createElement('div')
                    div.innerHTML = `
            <div class="p-3">
                    <div class="flex justify-between items-center p-3 bg-[#fafafa] rounded-xl">
                        <div>
                            <h1 class="font-semibold">${data.name}</h1>
                            <p>${data.num}</p>
                        </div>
                        <p>${data.date}</p>
                    </div>
                </div>
            `
                    callHistoryContainer.appendChild(div)

                }



            }
        }




    })
})