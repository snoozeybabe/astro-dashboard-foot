import { useEffect, useState } from "react";

import Select from "../components/Select/Select";
import BarChart from "../components/BarChart/Barchart";
import LineChart from "../components/LineChart/LineChart";

const fakeLeagueDatas = {
  response: [
    {
      league: {
        id: 39,
        name: "Premier League",
        country: "England",
        logo: "https://media.api-sports.io/football/leagues/39.png",
        flag: "https://media.api-sports.io/flags/gb.svg",
        season: 2020,
        standings: [
          [
            {
              rank: 1,
              team: {
                id: 50,
                name: "Manchester City",
                logo: "https://media.api-sports.io/football/teams/50.png",
              },
              points: 74,
              goalsDiff: 45,
              group: "Premier League",
              form: "WWWLW",
              status: "same",
              description: "Promotion - Champions League (Group Stage)",
              all: {
                played: 31,
                win: 23,
                draw: 5,
                lose: 3,
                goals: {
                  for: 66,
                  against: 21,
                },
              },
              home: {
                played: 16,
                win: 12,
                draw: 2,
                lose: 2,
                goals: {
                  for: 36,
                  against: 13,
                },
              },
              away: {
                played: 15,
                win: 11,
                draw: 3,
                lose: 1,
                goals: {
                  for: 30,
                  against: 8,
                },
              },
              update: "2021-04-05T00:00:00+00:00",
            },
            {
              rank: 2,
              team: {
                id: 33,
                name: "Manchester United",
                logo: "https://media.api-sports.io/football/teams/33.png",
              },
              points: 60,
              goalsDiff: 25,
              group: "Premier League",
              form: "WWWDD",
              status: "same",
              description: "Promotion - Champions League (Group Stage)",
              all: {
                played: 30,
                win: 17,
                draw: 9,
                lose: 4,
                goals: {
                  for: 58,
                  against: 33,
                },
              },
              home: {
                played: 15,
                win: 8,
                draw: 3,
                lose: 4,
                goals: {
                  for: 31,
                  against: 20,
                },
              },
              away: {
                played: 15,
                win: 9,
                draw: 6,
                lose: 0,
                goals: {
                  for: 27,
                  against: 13,
                },
              },
              update: "2021-04-05T00:00:00+00:00",
            },
            {
              rank: 3,
              team: {
                id: 46,
                name: "Leicester",
                logo: "https://media.api-sports.io/football/teams/46.png",
              },
              points: 56,
              goalsDiff: 19,
              group: "Premier League",
              form: "LWWDL",
              status: "same",
              description: "Promotion - Champions League (Group Stage)",
              all: {
                played: 30,
                win: 17,
                draw: 5,
                lose: 8,
                goals: {
                  for: 53,
                  against: 34,
                },
              },
              home: {
                played: 15,
                win: 7,
                draw: 1,
                lose: 7,
                goals: {
                  for: 25,
                  against: 21,
                },
              },
              away: {
                played: 15,
                win: 10,
                draw: 4,
                lose: 1,
                goals: {
                  for: 28,
                  against: 13,
                },
              },
              update: "2021-04-05T00:00:00+00:00",
            },
            {
              rank: 4,
              team: {
                id: 48,
                name: "West Ham",
                logo: "https://media.api-sports.io/football/teams/48.png",
              },
              points: 52,
              goalsDiff: 11,
              group: "Premier League",
              form: "WDLWL",
              status: "same",
              description: "Promotion - Champions League (Group Stage)",
              all: {
                played: 30,
                win: 15,
                draw: 7,
                lose: 8,
                goals: {
                  for: 48,
                  against: 37,
                },
              },
              home: {
                played: 15,
                win: 8,
                draw: 4,
                lose: 3,
                goals: {
                  for: 26,
                  against: 18,
                },
              },
              away: {
                played: 15,
                win: 7,
                draw: 3,
                lose: 5,
                goals: {
                  for: 22,
                  against: 19,
                },
              },
              update: "2021-04-05T00:00:00+00:00",
            },
            {
              rank: 5,
              team: {
                id: 49,
                name: "Chelsea",
                logo: "https://media.api-sports.io/football/teams/49.png",
              },
              points: 51,
              goalsDiff: 16,
              group: "Premier League",
              form: "LDWWD",
              status: "same",
              description: "Promotion - Europa League (Group Stage)",
              all: {
                played: 30,
                win: 14,
                draw: 9,
                lose: 7,
                goals: {
                  for: 46,
                  against: 30,
                },
              },
              home: {
                played: 15,
                win: 7,
                draw: 5,
                lose: 3,
                goals: {
                  for: 27,
                  against: 16,
                },
              },
              away: {
                played: 15,
                win: 7,
                draw: 4,
                lose: 4,
                goals: {
                  for: 19,
                  against: 14,
                },
              },
              update: "2021-04-05T00:00:00+00:00",
            },
            {
              rank: 6,
              team: {
                id: 47,
                name: "Tottenham",
                logo: "https://media.api-sports.io/football/teams/47.png",
              },
              points: 49,
              goalsDiff: 19,
              group: "Premier League",
              form: "DWLWW",
              status: "same",
              description: null,
              all: {
                played: 30,
                win: 14,
                draw: 7,
                lose: 9,
                goals: {
                  for: 51,
                  against: 32,
                },
              },
              home: {
                played: 14,
                win: 7,
                draw: 3,
                lose: 4,
                goals: {
                  for: 25,
                  against: 14,
                },
              },
              away: {
                played: 16,
                win: 7,
                draw: 4,
                lose: 5,
                goals: {
                  for: 26,
                  against: 18,
                },
              },
              update: "2021-04-05T00:00:00+00:00",
            },
            {
              rank: 7,
              team: {
                id: 40,
                name: "Liverpool",
                logo: "https://media.api-sports.io/football/teams/40.png",
              },
              points: 49,
              goalsDiff: 15,
              group: "Premier League",
              form: "WWLLW",
              status: "same",
              description: null,
              all: {
                played: 30,
                win: 14,
                draw: 7,
                lose: 9,
                goals: {
                  for: 51,
                  against: 36,
                },
              },
              home: {
                played: 15,
                win: 7,
                draw: 2,
                lose: 6,
                goals: {
                  for: 22,
                  against: 18,
                },
              },
              away: {
                played: 15,
                win: 7,
                draw: 5,
                lose: 3,
                goals: {
                  for: 29,
                  against: 18,
                },
              },
              update: "2021-04-05T00:00:00+00:00",
            },
            {
              rank: 8,
              team: {
                id: 45,
                name: "Everton",
                logo: "https://media.api-sports.io/football/teams/45.png",
              },
              points: 47,
              goalsDiff: 3,
              group: "Premier League",
              form: "DLLWW",
              status: "same",
              description: null,
              all: {
                played: 29,
                win: 14,
                draw: 5,
                lose: 10,
                goals: {
                  for: 41,
                  against: 38,
                },
              },
              home: {
                played: 15,
                win: 5,
                draw: 3,
                lose: 7,
                goals: {
                  for: 20,
                  against: 23,
                },
              },
              away: {
                played: 14,
                win: 9,
                draw: 2,
                lose: 3,
                goals: {
                  for: 21,
                  against: 15,
                },
              },
              update: "2021-04-05T00:00:00+00:00",
            },
            {
              rank: 9,
              team: {
                id: 66,
                name: "Aston Villa",
                logo: "https://media.api-sports.io/football/teams/66.png",
              },
              points: 44,
              goalsDiff: 11,
              group: "Premier League",
              form: "WLDDL",
              status: "same",
              description: null,
              all: {
                played: 29,
                win: 13,
                draw: 5,
                lose: 11,
                goals: {
                  for: 42,
                  against: 31,
                },
              },
              home: {
                played: 14,
                win: 6,
                draw: 2,
                lose: 6,
                goals: {
                  for: 23,
                  against: 19,
                },
              },
              away: {
                played: 15,
                win: 7,
                draw: 3,
                lose: 5,
                goals: {
                  for: 19,
                  against: 12,
                },
              },
              update: "2021-04-05T00:00:00+00:00",
            },
            {
              rank: 10,
              team: {
                id: 42,
                name: "Arsenal",
                logo: "https://media.api-sports.io/football/teams/42.png",
              },
              points: 42,
              goalsDiff: 5,
              group: "Premier League",
              form: "LDWDW",
              status: "same",
              description: null,
              all: {
                played: 30,
                win: 12,
                draw: 6,
                lose: 12,
                goals: {
                  for: 40,
                  against: 35,
                },
              },
              home: {
                played: 15,
                win: 6,
                draw: 3,
                lose: 6,
                goals: {
                  for: 18,
                  against: 18,
                },
              },
              away: {
                played: 15,
                win: 6,
                draw: 3,
                lose: 6,
                goals: {
                  for: 22,
                  against: 17,
                },
              },
              update: "2021-04-05T00:00:00+00:00",
            },
            {
              rank: 11,
              team: {
                id: 63,
                name: "Leeds",
                logo: "https://media.api-sports.io/football/teams/63.png",
              },
              points: 42,
              goalsDiff: -1,
              group: "Premier League",
              form: "WWDLL",
              status: "same",
              description: null,
              all: {
                played: 30,
                win: 13,
                draw: 3,
                lose: 14,
                goals: {
                  for: 47,
                  against: 48,
                },
              },
              home: {
                played: 15,
                win: 6,
                draw: 3,
                lose: 6,
                goals: {
                  for: 21,
                  against: 18,
                },
              },
              away: {
                played: 15,
                win: 7,
                draw: 0,
                lose: 8,
                goals: {
                  for: 26,
                  against: 30,
                },
              },
              update: "2021-04-05T00:00:00+00:00",
            },
            {
              rank: 12,
              team: {
                id: 52,
                name: "Crystal Palace",
                logo: "https://media.api-sports.io/football/teams/52.png",
              },
              points: 38,
              goalsDiff: -16,
              group: "Premier League",
              form: "DWLDD",
              status: "same",
              description: null,
              all: {
                played: 30,
                win: 10,
                draw: 8,
                lose: 12,
                goals: {
                  for: 32,
                  against: 48,
                },
              },
              home: {
                played: 15,
                win: 5,
                draw: 5,
                lose: 5,
                goals: {
                  for: 15,
                  against: 21,
                },
              },
              away: {
                played: 15,
                win: 5,
                draw: 3,
                lose: 7,
                goals: {
                  for: 17,
                  against: 27,
                },
              },
              update: "2021-04-05T00:00:00+00:00",
            },
            {
              rank: 13,
              team: {
                id: 41,
                name: "Southampton",
                logo: "https://media.api-sports.io/football/teams/41.png",
              },
              points: 36,
              goalsDiff: -14,
              group: "Premier League",
              form: "WLLWL",
              status: "same",
              description: null,
              all: {
                played: 30,
                win: 10,
                draw: 6,
                lose: 14,
                goals: {
                  for: 39,
                  against: 53,
                },
              },
              home: {
                played: 15,
                win: 6,
                draw: 2,
                lose: 7,
                goals: {
                  for: 21,
                  against: 20,
                },
              },
              away: {
                played: 15,
                win: 4,
                draw: 4,
                lose: 7,
                goals: {
                  for: 18,
                  against: 33,
                },
              },
              update: "2021-04-05T00:00:00+00:00",
            },
            {
              rank: 14,
              team: {
                id: 39,
                name: "Wolves",
                logo: "https://media.api-sports.io/football/teams/39.png",
              },
              points: 35,
              goalsDiff: -11,
              group: "Premier League",
              form: "LLDLD",
              status: "same",
              description: null,
              all: {
                played: 30,
                win: 9,
                draw: 8,
                lose: 13,
                goals: {
                  for: 30,
                  against: 41,
                },
              },
              home: {
                played: 15,
                win: 5,
                draw: 4,
                lose: 6,
                goals: {
                  for: 17,
                  against: 18,
                },
              },
              away: {
                played: 15,
                win: 4,
                draw: 4,
                lose: 7,
                goals: {
                  for: 13,
                  against: 23,
                },
              },
              update: "2021-04-05T00:00:00+00:00",
            },
            {
              rank: 15,
              team: {
                id: 44,
                name: "Burnley",
                logo: "https://media.api-sports.io/football/teams/44.png",
              },
              points: 33,
              goalsDiff: -16,
              group: "Premier League",
              form: "LWDDL",
              status: "same",
              description: null,
              all: {
                played: 30,
                win: 8,
                draw: 9,
                lose: 13,
                goals: {
                  for: 24,
                  against: 40,
                },
              },
              home: {
                played: 15,
                win: 4,
                draw: 6,
                lose: 5,
                goals: {
                  for: 12,
                  against: 16,
                },
              },
              away: {
                played: 15,
                win: 4,
                draw: 3,
                lose: 8,
                goals: {
                  for: 12,
                  against: 24,
                },
              },
              update: "2021-04-05T00:00:00+00:00",
            },
            {
              rank: 16,
              team: {
                id: 51,
                name: "Brighton",
                logo: "https://media.api-sports.io/football/teams/51.png",
              },
              points: 32,
              goalsDiff: -5,
              group: "Premier League",
              form: "LWWLL",
              status: "same",
              description: null,
              all: {
                played: 30,
                win: 7,
                draw: 11,
                lose: 12,
                goals: {
                  for: 33,
                  against: 38,
                },
              },
              home: {
                played: 15,
                win: 2,
                draw: 7,
                lose: 6,
                goals: {
                  for: 16,
                  against: 19,
                },
              },
              away: {
                played: 15,
                win: 5,
                draw: 4,
                lose: 6,
                goals: {
                  for: 17,
                  against: 19,
                },
              },
              update: "2021-04-05T00:00:00+00:00",
            },
            {
              rank: 17,
              team: {
                id: 34,
                name: "Newcastle",
                logo: "https://media.api-sports.io/football/teams/34.png",
              },
              points: 29,
              goalsDiff: -20,
              group: "Premier League",
              form: "DLDDD",
              status: "same",
              description: null,
              all: {
                played: 30,
                win: 7,
                draw: 8,
                lose: 15,
                goals: {
                  for: 30,
                  against: 50,
                },
              },
              home: {
                played: 15,
                win: 4,
                draw: 5,
                lose: 6,
                goals: {
                  for: 19,
                  against: 25,
                },
              },
              away: {
                played: 15,
                win: 3,
                draw: 3,
                lose: 9,
                goals: {
                  for: 11,
                  against: 25,
                },
              },
              update: "2021-04-05T00:00:00+00:00",
            },
            {
              rank: 18,
              team: {
                id: 36,
                name: "Fulham",
                logo: "https://media.api-sports.io/football/teams/36.png",
              },
              points: 26,
              goalsDiff: -17,
              group: "Premier League",
              form: "LLLWL",
              status: "same",
              description: "Relegation - Championship",
              all: {
                played: 31,
                win: 5,
                draw: 11,
                lose: 15,
                goals: {
                  for: 24,
                  against: 41,
                },
              },
              home: {
                played: 16,
                win: 2,
                draw: 4,
                lose: 10,
                goals: {
                  for: 9,
                  against: 23,
                },
              },
              away: {
                played: 15,
                win: 3,
                draw: 7,
                lose: 5,
                goals: {
                  for: 15,
                  against: 18,
                },
              },
              update: "2021-04-05T00:00:00+00:00",
            },
            {
              rank: 19,
              team: {
                id: 60,
                name: "West Brom",
                logo: "https://media.api-sports.io/football/teams/60.png",
              },
              points: 21,
              goalsDiff: -34,
              group: "Premier League",
              form: "WLDLW",
              status: "same",
              description: "Relegation - Championship",
              all: {
                played: 30,
                win: 4,
                draw: 9,
                lose: 17,
                goals: {
                  for: 25,
                  against: 59,
                },
              },
              home: {
                played: 15,
                win: 2,
                draw: 5,
                lose: 8,
                goals: {
                  for: 9,
                  against: 33,
                },
              },
              away: {
                played: 15,
                win: 2,
                draw: 4,
                lose: 9,
                goals: {
                  for: 16,
                  against: 26,
                },
              },
              update: "2021-04-05T00:00:00+00:00",
            },
            {
              rank: 20,
              team: {
                id: 62,
                name: "Sheffield Utd",
                logo: "https://media.api-sports.io/football/teams/62.png",
              },
              points: 14,
              goalsDiff: -35,
              group: "Premier League",
              form: "LLLWL",
              status: "same",
              description: "Relegation - Championship",
              all: {
                played: 30,
                win: 4,
                draw: 2,
                lose: 24,
                goals: {
                  for: 17,
                  against: 52,
                },
              },
              home: {
                played: 15,
                win: 3,
                draw: 1,
                lose: 11,
                goals: {
                  for: 10,
                  against: 22,
                },
              },
              away: {
                played: 15,
                win: 1,
                draw: 1,
                lose: 13,
                goals: {
                  for: 7,
                  against: 30,
                },
              },
              update: "2021-04-05T00:00:00+00:00",
            },
          ],
        ],
      },
    },
  ],
};

const fakeDatas = {
  totalYellowCards: 72,
  totalGoals: 222,
  totalRedCards: 0,
  totalMinutes: 40513,
  topScorers: [
    {
      name: "Ricardo Goulart",
      age: 32,
      photo: "https://media-1.api-sports.io/football/players/9937.png",
      goals: 19,
      team: "JSK",
    },
    {
      name: "Wu Lei",
      age: 32,
      photo: "https://media-2.api-sports.io/football/players/47350.png",
      goals: 14,
      team: "JSK",
    },
    {
      name: "Alan",
      age: 34,
      photo: "https://media-1.api-sports.io/football/players/80836.png",
      goals: 14,
      team: "MCA",
    },
    {
      name: "D. Ba",
      age: 36,
      photo: "https://media-3.api-sports.io/football/players/49862.png",
      goals: 14,
      team: "MCA",
    },
    {
      name: "James Chamanga",
      age: 43,
      photo: "https://media-1.api-sports.io/football/players/78990.png",
      goals: 14,
      team: "USMA",
    },
  ],
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
  const leagueResutls = leagueDatas["standings"][0].map((team) => {
    return {
      name: team["team"]["name"],
      logo: team["team"]["logo"],
      goals: team.all["goals"]["for"] + team.all["goals"]["against"],
    };
  });
  return leagueResutls;
};

function Dashboard({ apiRapidKey, leagueDatas }) {
  let initScrorerState = {
    totalYellowCards: 0,
    totalGoals: 0,
    totalRedCards: 0,
    totalMinutes: 0,
    topScorers: [],
  };

  const [leagueSelected, setLeagueSelected] = useState(leagueDatas[0]);
  const [leagueSeasons, setLeagueSeasons] = useState(leagueDatas[0].seasons);
  const [selectedSeason, setSelectedSeason] = useState(
    leagueDatas[0].seasons[0]
  );
  const [scorersDatas, setScorersDatas] = useState(initScrorerState);
  const [leagueStats, setLeagueStats] = useState(
    formatLeagueStat(fakeLeagueDatas)
  );

  const url = `https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=${leagueSelected["id"]}&season=${selectedSeason["year"]}`;

  const apiOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiRapidKey,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
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
    setScorersDatas(fakeDatas);

    // try {
    //   const fetchDatas = async () => {
    //     const response = await fetch(url, apiOptions);
    //     const result = await response.json();
    //     return result;
    //   };
    //   fetchDatas()
    //     .then(async (res) => {
    //       return await formatTopScrorers(res.response);
    //     })
    //     .then((formattedRes) => {
    //       console.log(formattedRes);
    //       setScorersDatas(formattedRes);
    //     })
    //     .catch((err) => {
    //       return err;
    //     });
    // } catch (error) {
    //   console.log(error);
    // }
  }, [leagueSelected, selectedSeason]);

  const topKpis = [
    {
      title: "Minutes cumulated",
      valueKey: "totalMinutes",
      label: "This year",
    },
    { title: "Goals", valueKey: "totalGoals", label: "This year" },
    { title: "Yellow Cards", valueKey: "totalYellowCards", label: "This year" },
    { title: "Red Cards", valueKey: "totalRedCards", label: "This year" },
  ];

  const bottomKpi = { title: "FootBalls club", value: 300, label: "This year" };

  useEffect(() => {}, []);
  return (
    <>
      <div className=" h-auto mb-2 relative ">
        <span className="bold text-[#F9EBE0] text-3xl m-auto">
          Astro Ball ⚽
        </span>
        <p className="bold text-[#F9EBE0] text-l m-auto">
          Some statistics about football around the world{" "}
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
            <div className="p-4 w-1/4 h-full rounded-xl bg-[#FDF48C] text-[#000200] flex flex-col">
              <span>{t.title}</span>
              <span className="bold text-[4em] m-auto">
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
        <div className="p-2 w-3/4 h-full rounded-xl bg-[#FDF48C] flex flex-col gap-2">
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
                    <div className="border overflow-hidden border-[#000200] w-28 h-28 rounded-full">
                      <img className="  rounded-full" src={scorer.photo} />
                    </div>
                    <span className="font-bold text-[1vw] ">{scorer.name}</span>
                    <span className="text-[12px]">{scorer.goals} goals</span>
                  </div>
                );
              })
            )}
          </div>
        </div>
        <div className="p-2 w-1/4 h-full rounded-xl bg-[#FDF48C]">
          <LineChart />
        </div>
      </div>
      <div
        id="bottom-kpis"
        className="h-1/3 flex flex-row gap-6 text-[#000200]"
      >
        <div className="p-4 w-1/4 h-full rounded-xl bg-[#FDF48C] text-[#000200] flex flex-col">
          <span>{bottomKpi.title}</span>
          <span className="bold text-[4em] m-auto">{bottomKpi.value}</span>
          <span className="text-[12px] mx-auto">{bottomKpi.label}</span>
        </div>
        <div className="p-2 w-3/4 h-full rounded-xl bg-[#FDF48C]">
          <BarChart datas={leagueStats} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
