import { useEffect, useState } from "react";

import Select from "../components/Select/Select";
import BarChart from "../components/BarChart/Barchart";
import { topKpis, bottomKpi } from "../utils/datas";

const formattedRes = {
  formattedToScorers: {
    totalYellowCards: 71,
    totalGoals: 245,
    totalRedCards: 3,
    totalMinutes: 47193,
    topScorers: [
      {
        name: "Dimitar Ivanov Berbatov",
        age: 37,
        photo: "https://media-2.api-sports.io/football/players/113639.png",
        goals: 20,
      },
      {
        name: "C. Tevez",
        age: 37,
        photo: "https://media-3.api-sports.io/football/players/5982.png",
        goals: 20,
      },
      {
        name: "Robin van Persie",
        age: 36,
        photo: "https://media-2.api-sports.io/football/players/37162.png",
        goals: 18,
      },
      {
        name: "Dirk Kuijt",
        age: 37,
        photo: "https://media-2.api-sports.io/football/players/93990.png",
        goals: 13,
      },
      {
        name: "D. Campbell",
        age: 40,
        photo: "https://media-1.api-sports.io/football/players/114836.png",
        goals: 13,
      },
    ],
  },
  formattedStandings: {
    matchPlayed: 760,
    leagueResults: [
      {
        name: "Manchester United",
        logo: "https://media-1.api-sports.io/football/teams/33.png",
        goals: 115,
      },
      {
        name: "Chelsea",
        logo: "https://media-2.api-sports.io/football/teams/49.png",
        goals: 102,
      },
      {
        name: "Manchester City",
        logo: "https://media-3.api-sports.io/football/teams/50.png",
        goals: 93,
      },
      {
        name: "Arsenal",
        logo: "https://media-1.api-sports.io/football/teams/42.png",
        goals: 115,
      },
      {
        name: "Tottenham",
        logo: "https://media-1.api-sports.io/football/teams/47.png",
        goals: 101,
      },
      {
        name: "Liverpool",
        logo: "https://media-1.api-sports.io/football/teams/40.png",
        goals: 103,
      },
      {
        name: "Everton",
        logo: "https://media-3.api-sports.io/football/teams/45.png",
        goals: 96,
      },
      {
        name: "Fulham",
        logo: "https://media-1.api-sports.io/football/teams/36.png",
        goals: 92,
      },
      {
        name: "Aston Villa",
        logo: "https://media-2.api-sports.io/football/teams/66.png",
        goals: 107,
      },
      {
        name: "Sunderland",
        logo: "https://media-1.api-sports.io/football/teams/746.png",
        goals: 101,
      },
      {
        name: "West Brom",
        logo: "https://media-2.api-sports.io/football/teams/60.png",
        goals: 127,
      },
      {
        name: "Newcastle",
        logo: "https://media-2.api-sports.io/football/teams/34.png",
        goals: 113,
      },
      {
        name: "Stoke City",
        logo: "https://media-3.api-sports.io/football/teams/75.png",
        goals: 94,
      },
      {
        name: "Bolton",
        logo: "https://media-2.api-sports.io/football/teams/68.png",
        goals: 108,
      },
      {
        name: "Blackburn",
        logo: "https://media-1.api-sports.io/football/teams/67.png",
        goals: 105,
      },
      {
        name: "Wigan",
        logo: "https://media-2.api-sports.io/football/teams/61.png",
        goals: 101,
      },
      {
        name: "Wolves",
        logo: "https://media-2.api-sports.io/football/teams/39.png",
        goals: 112,
      },
      {
        name: "Birmingham",
        logo: "https://media-2.api-sports.io/football/teams/54.png",
        goals: 95,
      },
      {
        name: "Blackpool",
        logo: "https://media-3.api-sports.io/football/teams/1356.png",
        goals: 133,
      },
      {
        name: "West Ham",
        logo: "https://media-3.api-sports.io/football/teams/48.png",
        goals: 113,
      },
    ],
    winner: {
      id: 33,
      name: "Manchester United",
      logo: "https://media-1.api-sports.io/football/teams/33.png",
    },
  },
};

const formatTopScrorers = async (datas) => {
  let totalGoals = 0;
  let totalYellowCards = 0;
  let totalRedCards = 0;
  let totalMinutes = 0;

  const formattedDatas = datas.map((scorer) => {
    const scorerInfos = scorer.player;
    const scorerStats = scorer.statistics;

    totalGoals += scorerStats[0]["goals"].total;
    totalYellowCards += scorerStats[0]["cards"].yellow;
    totalRedCards += scorerStats[0]["cards"].red;
    totalMinutes += scorerStats[0]["games"].minutes;

    topScorers: return {
      name: scorerInfos.name,
      age: scorerInfos.age,
      photo: scorerInfos.photo,
      goals: scorerStats[0]["goals"].total,
    };
  });

  return {
    totalYellowCards: totalYellowCards,
    totalGoals: totalGoals,
    totalRedCards: totalRedCards,
    totalMinutes: totalMinutes,
    topScorers: formattedDatas.slice(0, 5),
  };
};
const formatLeagueStat = (leagueStat) => {
  const leagueDatas = leagueStat.response[0].league;
  let matchPlayed = 0;
  const leagueResults = leagueDatas["standings"][0].map((team) => {
    matchPlayed += team.all["played"];
    return {
      name: team["team"]["name"],
      logo: team["team"]["logo"],
      goals: team.all["goals"]["for"] + team.all["goals"]["against"],
    };
  });
  return {
    matchPlayed,
    leagueResults,
    winner: leagueDatas["standings"][0][0].team,
  };
};

function Dashboard({ apiRapidKey, leagueDatas }) {
  let initScrorerState = {
    totalYellowCards: 0,
    totalGoals: 0,
    totalRedCards: 0,
    totalMinutes: 0,
    topScorers: [],
  };
  let initLeagueState = {
    matchPlayed: 0,
    leagueResults: {},
    winner: {},
  };

  const [leagueSelected, setLeagueSelected] = useState(leagueDatas[0]);
  const [leagueSeasons, setLeagueSeasons] = useState(leagueDatas[0].seasons);
  const [selectedSeason, setSelectedSeason] = useState(
    leagueDatas[0].seasons[0]
  );
  const [scorersDatas, setScorersDatas] = useState(initScrorerState);
  const [leagueStats, setLeagueStats] = useState(initLeagueState);

  const apiOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiRapidKey,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const fetchDatas = async () => {
    const routes = [
      {
        url: `https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=${leagueSelected["id"]}&season=${selectedSeason["year"]}`,
        label: "scorersStats",
      },
      {
        url: `https://api-football-v1.p.rapidapi.com/v3/standings?league=${leagueSelected["id"]}&season=${selectedSeason["year"]}`,
        label: "leaguesStats",
      },
    ];

    const getAllDatas = routes.map(async (r) => {
      const response = await fetch(r.url, apiOptions);
      const result = await response.json();

      return { routeName: r.label, result };
    });
    const allDatas = Promise.all(getAllDatas).then((all) => {
      return all;
    });

    return allDatas;
  };

  const heandleSeasonChange = (season) => {
    setSelectedSeason(season);
  };

  const handleLeagueChange = (league) => {
    setLeagueSelected(league);
    setLeagueSeasons(league.seasons);
    heandleSeasonChange(league.seasons[0]);
  };
  useEffect(() => {
    try {
      // fetchDatas()
      //   .then(async (res) => {
      //     const scrorerResult = res[0].result;
      //     const standingResult = res[1].result;

      //     console.log(standingResult);

      //     const formattedToScorers = await formatTopScrorers(
      //       scrorerResult.response
      //     );
      //     const formattedStandings = await formatLeagueStat(standingResult);
      //     return { formattedToScorers, formattedStandings };
      //   })
      //   .then((formattedRes) => {
      setLeagueStats(formattedRes.formattedStandings);
      setScorersDatas(formattedRes.formattedToScorers);

      //   console.log(formattedRes);
      // })
      // .catch((err) => {
      //   return err;
      // });
    } catch (error) {
      console.log(error);
    }
  }, [leagueSelected, selectedSeason]);

  useEffect(() => {}, [leagueStats]);

  useEffect(() => {}, []);

  const { leagueResults, winner } = leagueStats;
  return (
    <>
      <div className="h-auto mb-2 relative">
        <span className="bold text-[#F9EBE0] text-3xl m-auto">
          Astro Ball ⚽
        </span>
        <p className="bold text-[#F9EBE0] text-l m-auto">
          KPI's of the 10 majors football leagues{" "}
        </p>
      </div>

      <div className=" h-auto mb-2 relative flex flex-row gap-3">
        <Select
          label="League"
          datas={leagueDatas}
          params="name"
          selected={leagueSelected}
          paramSelect="id"
          fctChange={handleLeagueChange}
        />
        <Select
          label="Season"
          datas={leagueSeasons}
          params="year"
          selected={selectedSeason}
          paramSelect="year"
          fctChange={heandleSeasonChange}
        />
      </div>

      <div id="top-kpis" className="h-1/3 flex flex-row gap-6">
        {topKpis.map((t) => {
          return (
            <div className="p-4 w-1/4 h-full rounded-xl bg-[#FFF27A] text-[#000200] font-bold flex flex-col">
              <span>{t.title}</span>
              <span className="bold text-[5em] m-auto">
                {t.valueKey && scorersDatas[t.valueKey]
                  ? scorersDatas[t.valueKey]
                  : 0}
              </span>
              {/*<span className="text-[12px] mx-auto">{t.label}</span>*/}
            </div>
          );
        })}
      </div>
      <div id="mid-kpis" className="h-1/3 flex flex-row gap-6">
        <div className="p-2 w-3/4 h-full rounded-xl bg-[#FFF27A] flex flex-col gap-2 shadow-xl">
          <div className="h-1/5">
            <span className="text-[#000200] p-2">Top scorer</span>
          </div>
          <div className=" h-4/5 flex gap-6 m-auto">
            {!scorersDatas.topScorers ||
            scorersDatas.topScorers.length === 0 ? (
              <span className="text-[#000200] text-xl m-auto">
                No top scorer datas
              </span>
            ) : (
              scorersDatas.topScorers.map((scorer) => {
                return (
                  <div className=" w-auto h-auto flex flex-col items-center justify-evenly text-[#000200] gap-1">
                    <div className=" overflow-hidden  w-28 h-28 rounded-full">
                      <img className="  rounded-full" src={scorer.photo} />
                    </div>
                    <span className="font-bold text-[13px] ">
                      {scorer.name}
                    </span>
                    <span className="text-[12px]">{scorer.goals} goals</span>
                  </div>
                );
              })
            )}
          </div>
        </div>
        <div className="p-2 w-1/4 h-full rounded-xl bg-[#FFF27A] text-[#000200] flex flex-col items-center justify-around">
          <span>Season Winner</span>

          <img className="  rounded-full w-32 h-32 " src={winner["logo"]} />
          <span className="bold text-[1em]">{winner["name"]} </span>
        </div>
      </div>
      <div
        id="bottom-kpis"
        className="h-1/3 flex flex-row gap-6 text-[#000200]"
      >
        <div className="p-4 w-1/4 h-full rounded-xl bg-[#FFF27A] text-[#000200] flex flex-col">
          <span>{bottomKpi.title}</span>
          <span className="bold text-[5em] m-auto">
            {leagueStats[bottomKpi.value]}
          </span>
        </div>
        <div className="p-2 w-3/4 h-full rounded-xl bg-[#FFF27A]">
          {leagueResults && leagueResults.length > 0 ? (
            <BarChart datas={leagueResults} />
          ) : (
            <span>No team result</span>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
