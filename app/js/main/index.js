class MainController {
    constructor(GameService) {
        this.games = GameService.games;
        this.statistic = GameService.statistic;
        this.filter10 = this.games.slice(-10);
        this.showEdit = {};
        for (let i = 0; i < this.games.length; i++) {
            this.showEdit[i] = false;
        }
    }

    showEditfn(id) {
        (this.showEdit[id] == false) ? this.showEdit[id] = true : this.showEdit[id] = false;
    }

    isWin(obj) {
        return obj.score1 > obj.score2;
    }
}

export default MainController;