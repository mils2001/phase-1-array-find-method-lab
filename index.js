// code your solution here


const record = [
    { year: "2018", result: "N/A" },
    { year: "2017", result: "N/A" },
    { year: "2016", result: "N/A" },
    { year: "2015", result: "W" },  
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" }
];

function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
}

describe('superbowlWin(record)', function () {
    it('returns the year the Denver Broncos won the Super Bowl', function () {
        expect(superbowlWin(record)).to.equal("2015");  
    });

    it('returns undefined if there is no win', function () {
        const sadReality = [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ];
        expect(superbowlWin(sadReality)).to.equal(undefined);  
    });
});


