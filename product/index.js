// import { cardComponent } from "./component/cardComponent";

const fullCard = document.querySelector("#full_card");
const display = document.getElementById('display')
let count = 0

fetch("http://localhost:3000/popularcategories")
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            fullCard.innerHTML +=
                `<div class="col-lg-3 col-md-3 col-md-4 col-6 col-12 ">
              <div class="card" style="width: 18rem;; margin-bottom: 20px;">
              <img src="${item.image}" class="card-img-top img-card" alt="..." style="height: 400px">
              <h4 class="discount-text">Sale 50%</h4>   
              <div class="card-body card-add row">
                <div class="col-lg-6 col-md-6 col-6">
                  <p class="rate-card">Suture</p>
                  <h5 id="title">${item.title}</h5>
                  <p>${item.price} <b><s> $ ${item.discount}</s></b></p>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star star-hide" aria-hidden="true"></i>
                </div>
                <div class="col-lg-6 col-md-6 col-6 ">
                  <button id_card="${item.id}" class="add_card rounded-circle"><i class="fa fa-shopping-bag" aria-hidden="true"></i></button>
                </div>
              </div>
            </div>
            </div>
          `
        })

        document.querySelectorAll('.add_card').forEach((button) => {
            button.addEventListener('click', (event) => {

                const cardId = event.currentTarget.getAttribute("id_card")
                console.log(cardId)

                count++;
                display.textContent = count;
            })

        })
    })

    .catch((error) => {
        console.error("Error fetching data:", error);
    });
