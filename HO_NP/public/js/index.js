import html from "./utils/createDom.js";
import { typeOf } from "./utils/typeOf.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const DashboardtemplatedData = [
    {
        id: 1,
        image: "../public/assets/images/default.png",
        name: "Default Dashboard"
    },
    {
        id: 2,
        image: "../public/assets/images/accounting.png",
        name: "Accountting Dashboard"
    },
    {
        id: 3,
        image: "../public/assets/images/minimal.png",
        name: "Minimal Dashboard"
    },
    {
        id: 4,
        image: "../public/assets/images/orders.png",
        name: "Order Dashboard"
    },
    {
        id: 5,
        image: "../public/assets/images/projects.png",
        name: "Project Dashboard"
    },

    {
        id: 6,
        image: "../public/assets/images/analytics.png",
        name: "Analytics Dashboard"
    },

];

const PagetemplatedData = [
    {
        id: 1,
        image: "../public/assets/images/auth-login-1.png",
        name: "Auth login 1"
    },
    {
        id: 2,
        image: "../public/assets/images/auth-login-2.png",
        name: "Auth login 2"
    },
    {
        id: 3,
        image: "../public/assets/images/auth-login-3.png",
        name: "Auth login 3"
    },
    {
        id: 4,
        image: "../public/assets/images/auth-password.png",
        name: "Auth Password"
    },
    {
        id: 5,
        image: "../public/assets/images/auth-register.png",
        name: "Auth Register"
    },

    {
        id: 6,
        image: "../public/assets/images/knowledgebase-home.png",
        name: "Knowledgebase Home"
    },

    {
        id: 7,
        image: "../public/assets/images/invoice.png",
        name: "Invoice"
    },

    {
        id: 8,
        image: "../public/assets/images/account-billing.png",
        name: "Account Billing"
    },

    {
        id: 9,
        image: "../public/assets/images/account-notifications.png",
        name: "Account Notifications"
    },

    {
        id: 10,
        image: "../public/assets/images/account-profile.png",
        name: "Account Profile"
    },

    {
        id: 11,
        image: "../public/assets/images/account-security.png",
        name: "Account Security"
    },

];

const errorCodeData = [
    {
        id: 1,
        name: "400 error",
    },

    {
        id: 2,
        name: "401 error",
    },

    {
        id: 3,
        name: "403 error",
    },

    {
        id: 4,
        name: "404 error",
    },

    {
        id: 5,
        name: "429 error",
    },
    {
        id: 6,
        name: "500 error",
    },
    {
        id: 7,
        name: "503 error",
    },
    {
        id: 8,
        name: "504 error",
    },
];

function createDemosCard(data){
    if (typeOf(data) === "Array") {
        return html`
                ${
                    data.map(item => {
                        return `
                        <div class="demos-card">
                            <img src="${item.image}" alt="">
                            <div class="demos-image">
                            </div>
                            <p class="demos-name">${item.name}</p>
                        </div>
                        `
                    })
                }
        `
    }
};

function createErrorCard(data){
    if (typeOf(data) === "Array") {
        return html`
                ${
                    data.map(item => {
                        return `
                        <div class="error-card ripple-button">
                            <span> ${item.name} </span>
                        </div>
                        `
                    })
                }
        `
    }
};

const dashboardDemosContainer = $(".dashboard-demos-container");
dashboardDemosContainer.innerHTML = createDemosCard(DashboardtemplatedData);

const pageDemosContainer = $(".page-demos-container");
pageDemosContainer.innerHTML = createDemosCard(PagetemplatedData);

const errorDemosContainer = $(".error-demos-container");
errorDemosContainer.innerHTML = createErrorCard(errorCodeData)

const buttons =  $$(".ripple-button");

buttons.forEach(btn => {
    btn.addEventListener("mousedown", function(e){
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement("span");
        ripples.classList.add("ripple-background")
        ripples.style.left = x + "px";
        ripples.style.top = y + "px";
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove();
        },500)
    })
});

const sideMenuIcon = $(".sidebar-menu-icon");
const sidebarMenu = $(".sidebar-menu");
const bodyContent = $(".body-content");
sideMenuIcon.addEventListener("click", function(event){
    if (sidebarMenu.classList.contains("active")){
        console.log("co active")
        sidebarMenu.classList.remove("active");
        bodyContent.style.width = '100%'
    } else {
        sidebarMenu.classList.add("active");
        bodyContent.style.width = 'calc(100% - 300px)'
    }
})

// const openSubmenuBtns = $$(".sub-btn");
// console.log(openSubmenuBtns);


// openSubmenuBtns.forEach(btn => {
//     btn.addEventListener("click",function(){
//         const subMenu = btn.querySelector(".sub-menu");
//         if (subMenu.classList.contains("active")){
//             subMenu.classList.remove("active");
//         } else {
//             subMenu.classList.add("active");
//         }
//     })
// })


