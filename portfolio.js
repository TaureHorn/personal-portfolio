//////////////////////////////////////// SECTION TOGGLERS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const sectionIds = ["pagebox showcase", "pagebox info", "pagebox hobby"]

function showSection(section) {
    let x = document.getElementById(section);
    if (x.style.display === "none") {
        x.style.display = "flex";
    }
}
const infoSelector = ["volcanoes select", "quiz select", "hack select"]
const infoSections = ["volcanoes info", "quiz info", "hacking game info"]

const hobbySelector = ["dnd select", "linux select", "cycling select"]
const hobbySections = ["dnd hobby", "linux hobby", "cycling hobby"]

function toggleSubSections(section, arr, selection, arr2) {
    let v = document.getElementById(section);
    let b = document.getElementById(selection);
    arr.forEach(subSection => {
        document.getElementById(subSection).style.display = "none"
    });
    arr2.forEach(selector => {
        document.getElementById(selector).style.background = "none"
    });
    v.style.display = "block";
    b.style.backgroundColor = "rgba(255,255,255,.5)";
    b.style.borderRadius = "0.5em";
};



// // preload in some toggleable subsections
toggleSubSections(infoSections[0], infoSections, infoSelector[0], infoSelector)
toggleSubSections(hobbySections[0], hobbySections, hobbySelector[0], hobbySelector)

