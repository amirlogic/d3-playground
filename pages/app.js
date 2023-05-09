import Head from 'next/head';
import Link from 'next/link';
import Header from '@components/Header';
import Footer from '@components/Footer';

import { useState,useEffect,useRef } from 'react';

export default function App() {

	let [rawjson,setRawJson] = useState({"target":"text","content":"Yes it works!"})
	let [generate,setGenerate] = useState(false)
	let [xml,setXml] = useState("...")

	const iframeRef = useRef(null)

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

			//document.getElementById('svg').innerHTML = data.svg;
			iframeRef.current.srcdoc = data.svg;
			//console.log(data.svg)

			//document.getElementById('svg').srcdoc = data.svg;

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

				{/* <div id="svg" style={{width:`500px`,height:`500px`}}></div> */}

				<iframe id="svg" ref={iframeRef} width="500" height="500" style={{border:`0`,padding:`0`,overflow:`hidden`}}></iframe>

				<textarea id="jsoninput" style={{width:`600px`,height:`100px`}} onChange={(e) => { 
					
					try{

						setRawJson(JSON.parse(e.target.value)) 
					}
					catch(err){

						setRawJson({})
					}
					
				}} defaultValue={`{"target":"text","content":"Yes it works!"}`}></textarea>

				<button style={{padding:`10px 20px`}} onClick={()=>{ setGenerate(true) }}>Generate</button>

				<p className="description" style={{backgroundColor:`#efefef`,padding:`5px`}}>
					
					{xml}	

				</p>

				<div className="description">

					<pre>{`{"target":"text","content":"Yes it works!"}`}</pre>
				</div>

				
			</main>

			<Footer />
		</div>
	);
}
