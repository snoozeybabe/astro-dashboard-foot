import { useEffect, useState} from "react";

import Select from '../components/Select/Select';


function Dashboard({apiRapidKey}) {


const topKpis = [
	{title : 'FootBalls club', value : 500, label : 'This year'},
	{title : 'FootBalls club', value : 300, label : 'This year'},
	{title : 'FootBalls club', value : 400, label : 'This year'},
	{title : 'FootBalls club', value : 300, label : 'This year'}
]
const topScorer= [
  { name:"G. Barry", goals : 35, club : 'JSK', picture : 'https://media.api-sports.io/football/players/19153.png'},
  { name:"G. Barry", goals : 35, club : 'JSK', picture : 'https://media.api-sports.io/football/players/19153.png'},
  { name:"G. Barry", goals : 35, club : 'JSK', picture : 'https://media.api-sports.io/football/players/19153.png'},
  { name:"G. Barry", goals : 35, club : 'JSK', picture : 'https://media.api-sports.io/football/players/19153.png'},
  { name:"G. Barry", goals : 35, club : 'JSK', picture : 'https://media.api-sports.io/football/players/19153.png'},
]


const seasons = [
  { label : '2018', value : 2018},
  { label : '2019', value : 2019},
  { label : '2020', value : 2020},
  { label : '2021', value : 2021},
  { label : '2022', value : 2022},
  { label : '2023', value : 2023}
]

const url = "https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2022";

const apiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': apiRapidKey,
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
};

useEffect( () => {

  try {

    const fetchDatas = async() => {
      const response = await fetch(url,apiOptions);
      const result = await response.json();
      console.log(result)
    }

    // fetchDatas().catch(err => {
    //   return err
    // })
  } catch (error) {
    console.log(error)
  }


},[])
  return (
    <>
    <div className=" h-auto mb-2 relative">
			<span className="bold text-[#F9EBE0] text-3xl m-auto">Astro Ball ⚽</span>
			<p className="bold text-[#F9EBE0] text-l m-auto">Some statistics about football around the world </p>
		</div>

    <div className=" h-auto mb-2 relative flex flex-row gap-3">
      <Select label="League" />
      <Select label="Season" datas={seasons}/>

  </div>

		<div id="top-kpis" className="h-1/3 flex flex-row gap-6" >
			{topKpis.map(t=> {
				return (
				<div className="p-4 w-1/4 h-full rounded-xl bg-[#FDF48C] text-[#000200] flex flex-col">
				<span>{t.title}</span>
				<span className="bold text-[4em] m-auto">{t.value}</span>
				<span className="text-[12px] mx-auto">{t.label}</span>
			</div>
				)
			})}
		</div>
		<div id="mid-kpis" className="h-1/3 flex flex-row gap-6" >
    
    
			<div className="p-2 w-3/4 h-full rounded-xl bg-[#FDF48C] flex flex-col gap-2">

        <div className="h-1/5">
          <span className="text-[#000200] p-2">Top scorer</span>

        </div>
        <div className=" h-4/5 flex gap-6 m-auto">

          {topScorer.map(scorer => {
            return(
              <div className=" w-1/5 h-auto flex flex-col items-center justify-evenly text-[#000200]">
                <div className="border overflow-hidden border-[#000200] w-28 h-28 rounded-full">
                  <img className="  rounded-full" src={scorer.picture}/>
                </div> 
                <span className="font-bold">{scorer.name}</span>
                <span className="text-[12px]">{scorer.goals} goals</span>
              </div>
            )
          })}
  
        </div>

        
  
    
      </div>
			<div className="p-2 w-1/4 h-full rounded-xl bg-[#FDF48C]"></div>
		</div>
		<div id="bottom-kpis" className="h-1/3 flex flex-row gap-6" >
			<div className="p-2 w-1/4 h-full rounded-xl bg-[#FDF48C]"></div>
			<div className="p-2 w-3/4 h-full rounded-xl bg-[#FDF48C]"></div>
		</div>
    </>
  )

}

export default Dashboard;