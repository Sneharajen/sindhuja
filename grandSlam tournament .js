players_detail = [{ PlayerID: "RF1", Team: "maria shankari", Rank: 1 },
{ PlayerID: "RN2", Team: "Rafael Nadal", Rank: 2 },
{ PlayerID: "SW3", Team: "Serena Williams", Rank: 3 },
{ PlayerID: "VW4", Team: "P.V.sindhu", Rank: 4 },
{ PlayerID: "ND5", Team: "jessica pengula", Rank: 5 },
{ PlayerID: "FS6", Team: "monica seles", Rank: 6 },
{ PlayerID: "SS7", Team: "Stan Smith", Rank: 7 },
{ PlayerID: "Sk8", Team: "Billie Jean King", Rank: 8 }]
// Winning Probability function By Player Rank
function probability(t1, t2) {
    a = findingRankByUsingName(t1)
    b = findingRankByUsingName(t2)
    c = Math.round(100 / (Math.abs(a - b) + 1))
    b = c
    a = 100 - b
    probList = []
    for (d = 1; d <= 100; d++) {
        if (d <= a) {
            probList.push(t1)
        }
        else {
            probList.push(t2)
        }
    }
    ran = Math.floor(Math.random() * 100)
    a=probList[ran]
    return a
}
// Initial Match Schedule
match = []
for (i = 0; i <players_detail .length / 2; i++) {
    match.push([players_detail[i].Team, players_detail[players_detail.length - 1 - i].Team])
}
poolA = []
poolB = []
for (i in match) {
    if (i % 2 == 0) {
        poolA.push(match[i])
    }

    else {
        poolB.push(match[i])
    }
}
for (i of poolB.reverse()) {
    poolA.push(i)
}
z = 0
// Scheduling the Matches
winners = []
function winner() {
    playWinners = []
    winners_list = []
    for (i = 0; i < poolA.length; i = i + 2) {
        l = []
        v = i + 1
        e = i + 2
        obj1 = {}
        obj2 = {}
        a = probability(poolA[i][0], poolA[i][1])
        obj1["MatchNo"] = v
        obj1["Match"] = poolA[i][0] + " vs " + poolA[i][1]
        obj1["MatchId"] = poolA[i][0].toLowerCase().slice(0, 2) + findingRankByUsingName(poolA[i][0]) + poolA[i][1].toLowerCase().slice(0, 2) + findingRankByUsingName(poolA[i][1])
        obj1["Winner"] = a
        l.push(a)
        b = probability(poolA[i + 1][0], poolA[i + 1][1])
        obj2["MatchNo"] = e
        obj2["Match"] = poolA[i + 1][0] + " vs " + poolA[i + 1][1]
        obj2["MatchId"] = poolA[i + 1][0].toLowerCase().slice(0, 2) + findingRankByUsingName(poolA[i + 1][0]) + poolA[i + 1][1].toLowerCase().slice(0, 2) + findingRankByUsingName(poolA[i + 1][1])
        obj2["Winner"] = b
        l.push(b)
        playWinners.push(l)
        winners_list.push(obj1)
        winners_list.push(obj2)
    }
    winners.push(winners_list)
    poolA = playWinners
    while (poolA.length != 1) {
        winner()
    }
    if (playWinners.length == 1) {
        return playWinners
    }
    
}
// Final Round
finalRound = winner()
// Finding Rank by Player Name
function findingRankByUsingName(teamName) {
    rank = 0;
    players_detail.forEach(element => {
        if (element.Team == teamName) {
            rank = element.Rank
        }
    });
    return rank
}
// Final Match
final = {}
final["MatchNo"] = "Final"
final["Match"] = finalRound[0][0] + " vs " + finalRound[0][1]
final["MatchId"] = finalRound[0][0].toLowerCase().slice(0, 2) + findingRankByUsingName(finalRound[0][0]) + finalRound[0][1].toLowerCase().slice(0, 2) + findingRankByUsingName(finalRound[0][1])
final["Winner"] = finalRound[0][Math.floor(Math.random() * 2)]
winners.push([final])
count = 1
winners.forEach(element => {
    console.log("Round", count)
    console.table(element)
    console.log("--------------------------------------------------------------------------------------")
    count++
});
// Finding Match Details by Match ID
function findMatchDetailsbyMatchId(str){
    winners.forEach(round => {
        for( i of round){
            if(i.MatchId==str){
                console.log(`Match Details for "${str}" MatchID`)
                console.table([i])
                console.log("----------------------------------------------------------------------------------------")
            }
        }        
    });
}
findMatchDetailsbyMatchId("se3fr6")
// Finding Player Details by PlayerID
function findPlayerDetailsbyPlayerId(str){
    players_detail.forEach(element => {
        if(element.PlayerID==str){
            console.log(`Player Details for "${str}" PlayerID`)
            console.table([element])
            console.log("----------------------------------------------------------------------------------------")
        }
    });
}
findPlayerDetailsbyPlayerId("FS6")

