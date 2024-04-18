var Serie = /** @class */ (function () {
    function Serie(id, title, network, seasons, description, website, imageUrl) {
        this.id = id;
        this.title = title;
        this.network = network;
        this.seasons = seasons;
        this.description = description;
        this.website = website;
        this.imageUrl = imageUrl;
    }
    Serie.prototype.filter = function (arg0) {
        throw new Error("Method not implemented.");
    };
    return Serie;
}());
export { Serie };
