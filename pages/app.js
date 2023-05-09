import Head from 'next/head';
import Link from 'next/link';
import Header from '@components/Header';
import Footer from '@components/Footer';

import { useState,useEffect } from 'react';

export default function App() {

	let [rawjson,setRawJson] = useState({})
	let [generate,setGenerate] = useState(false)
	let [xml,setXml] = useState("...")

	useEffect(() => {
		
		fetch('/api/xml',
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
		  		},
				body: JSON.stringify({raw:rawjson})
			})
		  .then((res) => res.json())
		  .then((data) => {
			
			setGenerate(false);
			setXml(data.svg);

			document.getElementById('svg').innerHTML = data.svg;

		  });

	  }, [generate]);

	return (
		<div className="container">
			<Head>
				<title>Svgen App</title>
			</Head>

			<main>
				<Header title="Generate SVG from JSON" />

				<p className="description">D3.js in API mode</p>

				<div id="svg"></div>

				<textarea id="jsoninput" style={{width:`600px`,height:`100px`}} onChange={(e) => { 
					
					try{

						setRawJson(JSON.parse(e.target.value)) 
					}
					catch(err){

						setRawJson({})
					}
					
				}}></textarea>

				<button style={{padding:`20px`}} onClick={()=>{ setGenerate(true) }}>Generate</button>

				<p className="description">
					
					{xml}	

				</p>

				<p className="description">

					<pre>{`{"target":"text","content":"Yes it works!"}`}</pre>
				</p>

				
			</main>

			<Footer />
		</div>
	);
}
