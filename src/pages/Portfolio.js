import React from "react";
import "../style/portfolio.scss"
import kalba from "../components/img/kalba1.jpg"
import mom from "../components/img/mom.png"
import kalba2 from "../components/img/kalba2.jpg"
import g1 from "../components/img/g1.jpg"
import fro from "../components/img/fro.jpg"
import teame from "../components/img/teame.jpg"
import clock from "../components/img/clock.jpg"
import nola from "../components/img/nola.jpg"
import roof from "../components/img/roof.jpg"
import sunset from "../components/img/sunset.jpg"


const Portfolio = () => {
	let data = [
		{
		id:0,
		imgSrc: mom,
		},
		{
		id:1,
		imgSrc: kalba,
		},
		{
		id:2,
		imgSrc: fro,
		},
		{
		id:3,
		imgSrc: kalba2,
		},
		{
		id:4,
		imgSrc: g1,
		},
		{
		id:5,
		imgSrc: teame,
		},
		{
		id:6,
		imgSrc: clock,
		},
		{
		id:7,
		imgSrc: nola,
		},
		{
		id:8,
		imgSrc: roof,
		},
		{
		id:9,
		imgSrc: sunset,
		}

	]
    return(
        <>
		<div className="port-photos">
			{data.map((item,index) => {
				return(
					<div className="photos" key={index}>
						<img src={item.imgSrc} style={'100%'}/>
					</div>
				)
			})}
		</div>
		</>


    );
};

export default Portfolio;
