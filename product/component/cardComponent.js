export const cardComponent = (item) => {
    return `<div class="col-lg-3 col-md-3 col-md-4 col-6 col-12 full_card">
            <div class="card" style="width: 18rem; margin-bottom: 20px;">
              <img src="/pic/1.png" class="card-img-top img-card" alt="...">
              <h4 class="discount-text">Sale 50%</h4>
              <div class="card-body card-add row">
                <div class="col-lg-6 col-md-6 col-6">
                  <p class="rate-card">Suture</p>
                  <h5 id="title">${item.title}</h5>
                  <p>${item.price}</p>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star star-hide" aria-hidden="true"></i>
                </div>
                <div class="col-lg-6 col-md-6 col-6">
                  <a href="#" id="add_card"><i class="fa fa-shopping-bag rounded-circle icon-bag"
                      aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </div>`;
}
