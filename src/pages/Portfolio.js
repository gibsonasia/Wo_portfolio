import React, { useState } from "react";
import "../style/portfolio.css";

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
import fam from "../components/img/fam.jpg"
import roam from "../components/img/roam.jpg"
import wo2 from "../components/img/wo2.jpg"


const Portfolio = () => {
	//List to hold each image 
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
		},
		{
		id:10,
		imgSrc: roam,
		},
		{
		id:11,
		imgSrc: fam,
		},
		{
		id:12,
		imgSrc: wo2,
		}

	]
	const [model,setModel] = useState(false); //Will not show immage large keeps state as is

	const [tempImgSrc,setTempImgSrc] = useState(''); //holds image temp

	//retrieves the item from list to show full on screen
	const getImg = (imgSrc) =>{
		setTempImgSrc(imgSrc);
		setModel(true);
	}
    return(
        <>

		{/* will open the image full on screen when click if not page will remain as grid*/}
		<div className={model ? "model open" : "model"}>
			<img src={tempImgSrc} /> {/*When image is click that image is placed here */}
			<i class="fas fa-times" onClick={() => setModel(false)}></i> {/*Will close pop up of photo when chlicked */}
		</div>
		<div className="port-photos">
			{data.map((item,index) => {
				return(
					<div className="photos" key={index} onClick={() => getImg(item.imgSrc) }>
						<img src={item.imgSrc} style={{width: '100%'}} />
					</div>
				)
			})}
		</div>
		</>


    );
};

export default Portfolio;
