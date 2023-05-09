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
					// 'Content-Type': 'application/x-www-form-urlencoded',
		  		},
				body: JSON.stringify({raw:rawjson})
			})
		  .then((res) => res.json())
		  .then((data) => {
			
			setGenerate(false);
			setXml(data.svg);

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

				<div><iframe id="svg" src="/api/svg" /></div>

				<textarea id="jsoninput" onChange={(e) => { 
					
					try{

						setRawJson(JSON.parse(e.target.value)) 
					}
					catch(err){

						setRawJson({})
					}
					
				}}></textarea>

				<button onClick={()=>{ setGenerate(true) }}>Generate</button>

				<p className="description">
					Generate: {generate ? "true" : "false"}
				</p>

				<p className="description">
					
					{xml}	

				</p>

				<p className="description">


				</p>

				
			</main>

			<Footer />
		</div>
	);
}
