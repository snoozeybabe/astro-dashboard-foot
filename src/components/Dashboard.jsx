import { useEffect, useState} from "react";



function Dashboard({apiRapidKey}) {


const topKpis = [
	{title : 'FootBalls club', value : 500, label : 'This year'},
	{title : 'FootBalls club', value : 300, label : 'This year'},
	{title : 'FootBalls club', value : 400, label : 'This year'},
	{title : 'FootBalls club', value : 300, label : 'This year'}
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
			<p className="bold text-[#F9EBE0] text-l m-auto">Some statistics about football around the word </p>
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
			<div className="p-2 w-3/4 h-full rounded-xl bg-[#FDF48C]"></div>
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