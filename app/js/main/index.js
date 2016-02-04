class MainController {
    constructor(GameService) {
        this.games = GameService.games;
        this.statistic = GameService.statistic;

        this.currentPage = 1;
        this.numPerPage = 10;
        this.filterStart = ((this.currentPage - 1) * this.numPerPage);
        this.filterEnd = this.filterStart + this.numPerPage;
        this.filter10 = this.games.slice(this.filterStart, this.filterEnd);



        this.previousPage = function () {
            this.currentPage -= 1;
            this.filterStart = ((this.currentPage - 1) * this.numPerPage);
            this.filterEnd = this.filterStart + this.numPerPage;
            this.filter10 = this.games.slice(this.filterStart, this.filterEnd);
        };
        this.nextPage = function () {
            this.currentPage += 1;
            this.filterStart = ((this.currentPage - 1) * this.numPerPage);
            this.filterEnd = this.filterStart + this.numPerPage;
            this.filter10 = this.games.slice(this.filterStart, this.filterEnd);

        };

        this.filter10 = this.games.slice(this.filterStart, this.filterEnd);
    }
}

export default MainController;