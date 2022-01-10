const cardsContainer= document.querySelector('#dr-cards-container');

const docList= [
    {name:'عبدالمنعم الغامدي', avatarURL:'./assets/img/dr-cards/dr-male.png', specialty:'طبيب أسنان',specialtyURL:'dentist',fee:'200',hospital:'مستشفى الملك فهد'},
    {name:'سهى السابعي', avatarURL:'./assets/img/dr-cards/dr-female.png', specialty:'طبيب مسالك بولية',specialtyURL:'urology',fee:'150',hospital:'مفاصل'},
    {name:'فيصل العال', avatarURL:'./assets/img/dr-cards/faisal.jpeg', specialty:'طبيب أسنان',specialtyURL:'dentist',fee:'200',hospital:'مستشفى الملك فهد'},
    {name:'سهى السابعي', avatarURL:'./assets/img/dr-cards/dr-female.png', specialty:'طبيب مسالك بولية',specialtyURL:'urology',fee:'150',hospital:'مفاصل'},
    {name:'مها احمد', avatarURL:'./assets/img/dr-cards/maha.jpeg', specialty:'طبيب مسالك بولية',specialtyURL:'urology',fee:'150',hospital:'مفاصل'},
    {name:'عبدالمنعم الغامدي', avatarURL:'./assets/img/dr-cards/dr-male.png', specialty:'طبيب أسنان',specialtyURL:'dentist',fee:'200',hospital:'مستشفى الملك فهد'},
]
var docCards= ''
docList.map((card)=>{
    docCards+=
    `
    <div class="dr-ccard">
    <div class="img-container">
        <figure>

            <img src="${card.avatarURL}" class="avatar">
        </figure>
    </div>
    <div class="card-details">
        <div class="top">
            <div class="dr-info">
                <div class="dr-name">
                    <img src="./assets/img/dr-cards/stethoscope.svg" width="15">
                    <div class="name">د. ${card.name}</div>
                </div>
                <div class="dr-specialty">
                    <img src="./assets/img/dr-cards/specilalities/${card.specialtyURL}.png" width="15">
                    <div class="specialty">${card.specialty}</div>
                </div>
            </div>
            <button class="book">حجز موعد</button>
        </div>

        <div class="bottom">
                <div class="fee">
                    <img src="./assets/img/dr-cards/money.svg" height="15" class="icon">
                    <div class="fee-amount">${card.fee} SAR</div>
                </div>
            <div class="hospital">
                <img src="./assets/img/dr-cards/location-pin.svg" width="15" class="icon">
                <div class="hospital-name">${card.hospital}</div>
            </div>

        </div>

    </div>
</div>
    `
})
console.log(docCards)

cardsContainer.innerHTML=docCards; 