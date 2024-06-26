import { Serie } from "./Serie.js";
var series1 = [
    new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "https://i.imgur.com/GGje0vc.jpg"),
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "https://i.imgur.com/EvKe48G.jpg"),
    new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "https://i.imgur.com/TDCEV1S.jpg"),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg"),
    new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg"),
    new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg"),
];
var seriesTable = document.getElementById("Series");
mostrarInformacionSeries(series1);
promedioSeries(series1);
function mostrarInformacionSeries(series) {
    var seriesBody = document.createElement("tbody");
    var _loop_1 = function (se) {
        var trElement = document.createElement("tr");
        trElement.onclick = function (a) {
            actualizarInformacionSerie(se.id, series1);
        };
        trElement.innerHTML = "\n            <th >".concat(se.id, "</th>\n            <th >").concat(se.title, "</th>\n            <th >").concat(se.network, "</th>\n            <th >").concat(se.seasons, "</th>");
        seriesBody.appendChild(trElement);
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var se = series_1[_i];
        _loop_1(se);
    }
    seriesTable.appendChild(seriesBody);
}
function promedioSeries(series) {
    var suma = 0;
    var cant = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var se = series_2[_i];
        suma += se.seasons;
        cant += 1;
    }
    var promedio = suma / cant;
    var promedioLabel = document.createElement("label");
    promedioLabel.textContent = "Promedio de temporadas: ".concat(promedio.toFixed(2));
    seriesTable.appendChild(promedioLabel);
}
function actualizarInformacionSerie(serieId, serie) {
    for (var _i = 0, serie_1 = serie; _i < serie_1.length; _i++) {
        var se = serie_1[_i];
        if (se.id === serieId) {
            var title = document.getElementById("title1");
            var descripcion = document.getElementById("descripcion1");
            var image2 = document.getElementById("imagen");
            var card = document.getElementById("card");
            console.log(image2);
            if (image2 !== null && image2.parentNode !== null) {
                // Remover el elemento de imagen si existe y tiene un nodo padre
                image2.parentNode.removeChild(image2);
            }
            while (title.firstChild) {
                title.removeChild(title.firstChild);
            }
            while (descripcion.firstChild) {
                descripcion.removeChild(descripcion.firstChild);
            }
            var image = document.createElement("img");
            image.src = se.imageUrl;
            image.alt = "Descripción de la imagen";
            image.id = "imagen";
            card.appendChild(image);
            title.textContent = "".concat(se.title);
            descripcion.textContent = "".concat(se.description);
        }
    }
}
