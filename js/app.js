const form = document.getElementById("form");
const formButton = document.getElementById("form__button");
const user = document.getElementById("user");
const deleteBtn = document.getElementById("delete__btn");
const clearBtn = document.getElementById("clear__button");

// get results and UpdateUI


formButton.addEventListener("click", (e) => {
    e.preventDefault();
    reload();
    clearBtn.classList.remove("hidden");
});

clearBtn.addEventListener("click", (e) => {
    clearBtn.classList.add("hidden")
    user.innerHTML = "";
});


form["form__input"].addEventListener("input", (e) => {
    const inputValue = form["form__input"].value.toLowerCase();
    const name = document.querySelectorAll(".user__name");
    name.forEach((item) => {
        console.log(item);
        if (item.lastElementChild.textContent.toLowerCase().includes(inputValue)) {
            item.parentElement.classList.remove("hidden");
        } else {
            item.parentElement.classList.add("hidden");
        }
    });
})



const UpdateUI = (data) => {
    user.innerHTML = "";
    data.forEach((item) => {
        const { gender, name, dob, location, picture } = item;
        user.innerHTML += `
    <li class="user__item">
            <button id="delete__btn" class="user__delete--btn">
              <i class="fas fa-trash"></i>
            </button>
            <img class="user__img" alt="User photo" src=${picture.large} width="100"
              height="100" />
            <div class="user__name">
              <span class="material-symbols-outlined">badge</span>
              <span>-${name.title} ${name.first} ${name.last}</span>
            </div>
            <div class="user__year">
              <span class="material-symbols-outlined">cake</span>
              <span>- ${dob.age} years old.</span>
            </div>
            <div class="user__location">
              <span class="material-symbols-outlined">person_pin_circle</span>
              <span>-${location.city}, ${location.country}</span>
            </div>
            <div class="user__gender">
              <span class="material-symbols-outlined">man</span>
              <span>- ${gender}</span>
            </div>
          </li>
    `;
    });
};
