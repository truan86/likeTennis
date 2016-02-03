class StartController {
    constructor(GameService, $state) {
        this.GameService = GameService;
        this.$state = $state;

        this.name = '';
        this.hisName = '';
        this.points = 0;
        this.hisPoints = 0;
    }

    save() {
        this.GameService.addGame(this.name, this.hisName, this.points, this.hisPoints);
        this.$state.go('main');
    }

    getAllOpponent() {
        let opponent = [];
        this.GameService.statistic.forEach(function (item) {
            opponent.push(item.name);
        });
        return opponent;
    }
}

export default StartController;