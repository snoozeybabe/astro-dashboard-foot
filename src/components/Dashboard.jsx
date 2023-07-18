import { useEffect, useState } from 'react';

import Select from '../components/Select/Select';
import BarChart from '../components/BarChart/Barchart';
import LineChart from '../components/LineChart/LineChart';

const fakeDatas = {
	totalYellowCards: 72,
	totalGoals: 222,
	totalRedCards: 0,
	totalMinutes: 40513,
	topScorers: [
		{
			name: 'Ricardo Goulart',
			age: 32,
			photo: 'https://media-1.api-sports.io/football/players/9937.png',
			goals: 19,
			team: 'JSK',
		},
		{
			name: 'Wu Lei',
			age: 32,
			photo: 'https://media-2.api-sports.io/football/players/47350.png',
			goals: 14,
			team: 'JSK',
		},
		{
			name: 'Alan',
			age: 34,
			photo: 'https://media-1.api-sports.io/football/players/80836.png',
			goals: 14,
			team: 'MCA',
		},
		{
			name: 'D. Ba',
			age: 36,
			photo: 'https://media-3.api-sports.io/football/players/49862.png',
			goals: 14,
			team: 'MCA',
		},
		{
			name: 'James Chamanga',
			age: 43,
			photo: 'https://media-1.api-sports.io/football/players/78990.png',
			goals: 14,
			team: 'USMA',
		},
	],
};

const formatTopScrorers = async datas => {
	let totalGoals = 0;
	let totalYellowCards = 0;
	let totalRedCards = 0;
	let totalMinutes = 0;

	const formattedDatas = datas.map(scorer => {
		const scorerInfos = scorer.player;
		const scorerStats = scorer.statistics;

		totalGoals += scorerStats[0]['goals'].total;
		totalYellowCards += scorerStats[0]['cards'].yellow;
		totalRedCards += scorerStats[0]['cards'].red;
		totalMinutes += scorerStats[0]['games'].minutes;

		topScorers: return {
			name: scorerInfos.name,
			age: scorerInfos.age,
			photo: scorerInfos.photo,
			goals: scorerStats[0]['goals'].total,
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
const formatLeagueStat = leagueStat => {
	const leagueDatas = leagueStat.response[0].league;
	let matchPlayed = 0;
	const leagueResults = leagueDatas['standings'][0].map(team => {
		matchPlayed += team.all['played'];
		return {
			name: team['team']['name'],
			logo: team['team']['logo'],
			goals: team.all['goals']['for'] + team.all['goals']['against'],
		};
	});
	return {
		matchPlayed,
		leagueResults,
		winner: leagueDatas['standings'][0][0].team,
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
	const url = `https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=${leagueSelected['id']}&season=${selectedSeason['year']}`;
	const urlStandings = `https://api-football-v1.p.rapidapi.com/v3/standings?league=${leagueSelected['id']}&season=${selectedSeason['year']}`;

	const apiOptions = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': apiRapidKey,
			'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
		},
	};

	const fetchDatas = async () => {
		const routes = [
			{
				url: `https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=${leagueSelected['id']}&season=${selectedSeason['year']}`,
				label: 'scorersStats',
			},
			{
				url: `https://api-football-v1.p.rapidapi.com/v3/standings?league=${leagueSelected['id']}&season=${selectedSeason['year']}`,
				label: 'leaguesStats',
			},
		];

		const getAllDatas = routes.map(async r => {
			const response = await fetch(r.url, apiOptions);
			const result = await response.json();

			return { routeName: r.label, result };
		});
		const allDatas = Promise.all(getAllDatas).then(all => {
			return all;
		});

		return allDatas;
	};

	const heandleSeasonChange = season => {
		setSelectedSeason(season);
	};

	const handleLeagueChange = league => {
		setLeagueSelected(league);
		setLeagueSeasons(league.seasons);
		heandleSeasonChange(league.seasons[0]);
	};
	useEffect(() => {
		try {
			fetchDatas()
				.then(async res => {
					const scrorerResult = res[0].result;
					const standingResult = res[1].result;

					console.log(standingResult);

					const formattedToScorers = await formatTopScrorers(
						scrorerResult.response
					);
					const formattedStandings = await formatLeagueStat(standingResult);
					return { formattedToScorers, formattedStandings };
				})
				.then(formattedRes => {
					setLeagueStats(formattedRes.formattedStandings);
					setScorersDatas(formattedRes.formattedToScorers);
				})
				.catch(err => {
					return err;
				});
		} catch (error) {
			console.log(error);
		}
	}, [leagueSelected, selectedSeason]);

	const topKpis = [
		{ title: 'Goals', valueKey: 'totalGoals', label: 'This year' },
		{ title: 'Yellow Cards', valueKey: 'totalYellowCards', label: 'This year' },
		{ title: 'Red Cards', valueKey: 'totalRedCards', label: 'This year' },
		{
			title: 'Minutes cumulated',
			valueKey: 'totalMinutes',
			label: 'This year',
		},
	];

	const bottomKpi = {
		title: 'Match played',
		value: leagueStats.matchPlayed,
		label: 'This year',
	};

	useEffect(() => {}, []);

	const { leagueResults, winner } = leagueStats;
	return (
		<>
			<div className=" h-auto mb-2 relative ">
				<span className="bold text-[#F9EBE0] text-3xl m-auto">
					Astro Ball ⚽
				</span>
				<p className="bold text-[#F9EBE0] text-l m-auto">
					Some statistics about football around the world{' '}
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
				{topKpis.map(t => {
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
							scorersDatas.topScorers.map(scorer => {
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
				<div className="p-2 w-1/4 h-full rounded-xl bg-[#FDF48C] text-[#000200] flex flex-col items-center">
					<span>Season Winner</span>

					<img className="  rounded-full w-32 h-32 " src={winner['logo']} />
					<span className="bold text-[1em] m-auto">{winner['name']} </span>
				</div>
			</div>
			<div
				id="bottom-kpis"
				className="h-1/3 flex flex-row gap-6 text-[#000200]">
				<div className="p-4 w-1/4 h-full rounded-xl bg-[#FDF48C] text-[#000200] flex flex-col">
					<span>{bottomKpi.title}</span>
					<span className="bold text-[4em] m-auto">{bottomKpi.value}</span>
				</div>
				<div className="p-2 w-3/4 h-full rounded-xl bg-[#FDF48C]">
					{leagueResults && leagueResults.length > 0 ? (
						<BarChart datas={leagueResults} />
					) : (
						<span>No result</span>
					)}
				</div>
			</div>
		</>
	);
}

export default Dashboard;
