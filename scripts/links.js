const baseURL = "https://ashishjain-repo.github.io/wdd230/";
const linksURL = "https://ashishjain-repo.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    return data;
}

async function renderListItems() {
    const jsonData = await getLinks();
    const listItems = generateListItems(jsonData);
    const lessonList = document.getElementById("lesson-list");
    lessonList.innerHTML = listItems;
}

function generateListItems(data) {
    var listItems = "";

    data.lessons.forEach(function(lesson) {
        var lessonNum = lesson.lesson;
        var linksHtml = "";

        lesson.links.forEach(function(link, index) {
            var url = link.url;
            var title = link.title;

            if (index === 0) {
                linksHtml += '<a href="' + url + '">' + title + '</a>';
            } else {
                linksHtml += ' | <a href="' + url + '">' + title + '</a>';
            }
        });

        listItems += '<li>Week ' + lessonNum + ' ' + linksHtml + '</li>';
    });

    return listItems;
}

// Call the function to render list items
renderListItems();

function renderExamplesInUL(examplesData, ulId) {
    let htmlContent = '';

    examplesData.forEach(function(example) {
        const url = example.links[0].url;
        const title = example.links[0].title;
        htmlContent += `<li><a href="${url}">${title}</a></li>`;
    });

    const ulElement = document.getElementById(ulId);
    ulElement.innerHTML = htmlContent;
}

// Call the function to render examples inside the specific UL element
renderExamplesInUL(data.examples, 'target-ul');