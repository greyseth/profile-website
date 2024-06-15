const toPush = [
  { name: "itch-link", pos: 450, change: "link-in" },
  { name: "offer", pos: 640, change: "offer-in" },
  { name: "blender", pos: 1550, change: "blender-in" },
  { name: "blender-2", pos: 1550, change: "blender-in" },
  { name: "blender-3", pos: 1550, change: "blender-in" },
  { name: "blender-4", pos: 1550, change: "blender-in" },
  { name: "blender-5", pos: 1550, change: "blender-in" },
  { name: "blender-6", pos: 1550, change: "blender-in" },
  { name: "latest-proj", pos: 2250, change: "latest-in" },
  { name: "other-proj", pos: 2700, change: "other-in" },
];
toPush.forEach((s) => scrollAnims.push(s));

const galleryFolder = "./img/latestproj";
let selectedImg = `${galleryFolder}/CoverHor.jpg`;
const galleryImages = [
  `${galleryFolder}/level1.jpg`,
  `${galleryFolder}/level3.jpg`,
  `${galleryFolder}/level2.2.jpg`,
  `${galleryFolder}/level3.3.jpg`,
  `${galleryFolder}/level4.jpg`,
];

function updateGalleryImages() {
  document.querySelector("#proj-gallery").innerHTML = "";

  document.querySelector(".selected-image").src = selectedImg;
  galleryImages.forEach((img) => {
    const HTML = `<img src="${img}" onclick="viewGalleryImage('${img}')"/>`;
    document
      .querySelector("#proj-gallery")
      .insertAdjacentHTML("beforeend", HTML);
  });
}

function viewGalleryImage(select) {
  const selectedTemp = selectedImg;
  const galleryTemp = [...galleryImages];

  const targetIndex = galleryImages.findIndex((f) => f === select);
  galleryImages[targetIndex] = selectedTemp;
  selectedImg = galleryTemp[targetIndex];

  updateGalleryImages();
}

updateGalleryImages();

const otherImgPath = "./img/dev/other/";
const otherProjects = [
  {
    img: "serasihunian.png",
    desc: "[School Assignment] Real Estate Listing Website made using Next.JS",
    link: "https://github.com/greyseth/realestate-site",
  },
  {
    img: "bimodules.png",
    desc: "[DEAD] School Study Material Repository Site",
    link: "https://bi-modules.netlify.app",
  },
  {
    img: "rpgbot.png",
    desc: "RPG Discord bot made using NodeJS",
    link: "https://cdn.discordapp.com/attachments/907558668906663967/971373568065699900/rpg_SD_360p.mp4?ex=666e2461&is=666cd2e1&hm=96b109db90c38f6b3b04624dc8764eddbe609675f437ee05a4f26e3d859f1acc&",
  },
  {
    img: "rne.jpg",
    desc: "My First Ever Game Project",
    link: "https://greyseth.itch.io/rne",
  },
  {
    img: "webexam.png",
    desc: "[Scchool Exam] Database-less E-commerce/Inventory management using React",
    link: "https://github.com/greyseth/web-exam-2",
  },
];

otherProjects.forEach((op, i) => {
  const html = `<div onClick="openOther(${i})"><img src="${otherImgPath}${op.img}"/><p>Click to view details</p></div>`;

  document
    .querySelector("#other-proj-content")
    .insertAdjacentHTML("afterbegin", html);
});

function openOther(index) {
  if (document.querySelector(".other-show")) return;

  const html = `
    <div class="other-show">
      <img src="${otherImgPath}${otherProjects[index].img}" />
      <h2>${otherProjects[index].desc}</h2>
      <button onClick="closeOther()">Close</button>
      <a ${
        otherProjects[index].link
          ? 'href="' + otherProjects[index].link + '"'
          : ""
      } target="_blank"><button>${
    otherProjects[index].link ? "Visit Project" : "Link Unavailable"
  }</button></a>
    </div>`;
  document.body.insertAdjacentHTML("afterbegin", html);
}

function closeOther() {
  document.querySelector(".other-show").remove();
}
