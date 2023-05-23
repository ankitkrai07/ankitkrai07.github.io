const Projects = [
  {
    name: "Clone of Zee5.com",
    about:
      "Zee5 is an Indian subscription video on-demand and over the top streaming service runned by ZEE Entertainments Enterprises. It offer a comfortable and friendly user experience with highly evolved video streaming technology at amazing speed and crystal clear sounds.",
    img: "https://miro.medium.com/max/828/1*Xnl2yu56eM87iDKUUybWRQ.png",
    gitrepo: "https://github.com/anjalidhanjode28/Zee_clone",
    tech_stack: "HTML | CSS | JAVASCRIPT ",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
      `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`,
    ],
    project_link: "https://jocular-pony-971066.netlify.app/",
    project_type: "Team Project",
    category: ["all", "frontend"],
  },
  {
    name: "Clone of Stylecraze.com",
    about:
      "Stylecraze is a product website that provides the facility of beauty products for women and also provides articles according to brands. StyleCraze’s articles are accurate, current, relevant, and actionable.",
    img: "https://camo.githubusercontent.com/61f2312813ec22ecccd5b4a6897041c60212a81f23e92f09b2a96e5662c0ec2a/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f70726f78792f312a317732305344677a3941346a463342643870483736772e706e67",
    gitrepo: "https://github.com/anjalidhanjode28/Stylecraze-Clone",
    tech_stack: "HTML | CSS | JAVASCRIPT",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    ],
    project_link: "https://stylecraze.netlify.app/",
    project_type: "Individual Project",
    category: ["all", "frontend"],
  },
  {
    name: "Clone of Zappos.com",
    about:
      "Zappos.com is an E-commerce website which retails shoes, clothing, accessories, handbags, etc.",
    img: "https://cdn-images-1.medium.com/max/1000/1*bJ_d3c_P7X1bi35Oidj9MA.png",
    gitrepo: "https://github.com/anjalidhanjode28/Zappos.com-Clone",
    video: "",
    tech_stack: "  REACT  |  CHAKRA UI ",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    ],
    project_link: "https://sparkly-manatee-09e75c.netlify.app/",
    project_type: "Individual Project",
    category: ["all", "html", "frontend"],
  },
  {
    name: "Trouper.com",
    about:
      "Trouper is freelancing website where user can appoint freelancer for project and by registering as freelancer can also provide service and earn money.",
    img: "https://miro.medium.com/max/640/1*zi19T1XxFVNQeonQ6jeunQ.webp",
    gitrepo: "https://github.com/mr-ashu/nutty-form-5506",
    tech_stack: "React | Redux | MongoDB | Express",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    ],
    project_link: "https://jazzy-lokum-73584a.netlify.app/",
    project_type: "Individual Project",
    category: ["all", "backend"],
  },
  {
    name: "Ecotone.com",
    about:
      "Ecotone is a Social Media Post Scheduler web application where user can create, edit and delete the posts on different channels seperately and also schedule in the calender.",
    img: "https://miro.medium.com/max/828/1*lKEC3HbN4PrQ6hY57Q8Prw.webp",
    gitrepo: "https://github.com/gShubham7/gas-shock-1560",
    tech_stack: "React | Redux | MongoDB | Express",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    ],
    project_link: "https://ecotone77.netlify.app/",
    project_type: "Individual Project",
    category: ["all", "backend"],
  },
];

let projects__container = document.getElementById("projects--container");

let all_projects = document.querySelector(".all_projects");

let backend_projects = document.querySelector(".backend_projects");
// let other_projects = document.querySelector(".other_projects");
let frontend_projects = document.querySelector(".frontend_projects");
all_projects.classList.add("active_tech_project");

all_projects.addEventListener("click", () => {
  filterProjects("all");
  all_projects.classList.add("active_tech_project");
  react_projects.classList.remove("active_tech_project");
  backend_projects.classList.remove("active_tech_project");
  // other_projects.classList.remove("active_tech_project")
  frontend_projects.classList.remove("active_tech_project");
});
backend_projects.addEventListener("click", () => {
  filterProjects("backend");
  all_projects.classList.remove("active_tech_project");
  react_projects.classList.remove("active_tech_project");
  backend_projects.classList.add("active_tech_project");
  // other_projects.classList.remove("active_tech_project")
  frontend_projects.classList.remove("active_tech_project");
});

frontend_projects.addEventListener("click", () => {
  filterProjects("frontend");
  all_projects.classList.remove("active_tech_project");
  react_projects.classList.remove("active_tech_project");
  backend_projects.classList.remove("active_tech_project");
  // other_projects.classList.remove("active_tech_project")
  frontend_projects.classList.add("active_tech_project");
});

function filterProjects(basis) {
  let filtered = Projects.filter((el) => {
    return el.category.includes(basis);
  });
  displayProjectData(filtered);
}

function displayProjectData(Projects) {
  projects__container.innerHTML = null;
  Projects.reverse().forEach((pro) => {
    let main = document.createElement("div");
    main.setAttribute("class", "portfolio-item padd-15");
    main.innerHTML = `
      <div class="portfolio-item-inner shadow-dark">
      <div class="portfolio-img">
        <img src=${pro.img} alt="">
        <h3 class="project-name">${pro.name}</h3>
        <h4 class="project-name project__about">${pro.about}</h4>
  
        <div class="project_tech_box">
        <span class="TechStacks__text">TechStacks: </span> ${pro.tech_stack} 
        </div>
  
        <div class="navigate_ar">
        <a href=${pro.project_link} target="_blank" title="Demo" class="see-project"><i class="fas fa-eye"></i></a>
        <a href=${pro.gitrepo} target="_blank" title="GitHub Repository" class="github-repo"><i class="fab fa-github"></i></a>
        </div>
       
        
      </div>
    </div>
      `;
    projects__container.append(main);
  });
}

displayProjectData(Projects);
