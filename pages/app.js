import Head from 'next/head';
import Link from 'next/link';
import Header from '@components/Header';
import Footer from '@components/Footer';

import { useState,useEffect,useRef } from 'react';

export default function App() {

	let [rawjson,setRawJson] = useState({"target":"text","content":"Yes it works!"})
	let [generate,setGenerate] = useState(false)
	let [xml,setXml] = useState("...")
	let [jsonError,setJsonError] = useState(false)

	const iframeRef = useRef(null)
	const textareaRef = useRef(null)

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

			iframeRef.current.srcdoc = data.svg;

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

				<iframe id="svg" ref={iframeRef} width="520" height="520" style={{border:`0`,padding:`0`,overflow:`hidden`}}></iframe>

				<textarea id="jsoninput" ref={textareaRef} style={{width:`600px`,height:`100px`,backgroundColor:(jsonError)? '#ffeccc' : '#FFFFFF'}} onChange={(e) => { 
					
					try{

						setRawJson(JSON.parse(e.target.value))
						setJsonError(false)
					}
					catch(err){

						setJsonError(true)
						setRawJson({})
					}
					
				}} defaultValue={JSON.stringify(rawjson)}></textarea>

				<button style={{padding:`10px 20px`}} onClick={()=>{ setGenerate(true) }}>{(jsonError)? 'Error!' : 'Generate'}</button>

				<p className="description" style={{backgroundColor:`#efefef`,padding:`5px`}}>
					
					{xml}	

				</p>

				<div className="description">

					<button onClick={()=>{ 
						
						let boilerplate = `{"target":"text","content":"Yes it works!"}`

						textareaRef.current.value = boilerplate
						setRawJson(JSON.parse(boilerplate))
						
						console.log(textareaRef.value)

					 }}>Text</button>

					<button onClick={()=>{ 
						
						let boilerplate = `{"target":"circles","dataset":[{"r":40,"cx":100,"cy":100,"color":"yellow"},{"r":60,"cx":300,"cy":300,"color":"lightblue"}]}`

						textareaRef.current.value = boilerplate
						setRawJson(JSON.parse(boilerplate))
						
						console.log(textareaRef.value)

					 }}>Circles</button>
					 <button onClick={()=>{ 
						
						let boilerplate = `{"target":"histogram","color":"blue","barwidth":20,"intergap":5,"dataset":[25,67,45,19,89],"size":2,"animate":true}`

						textareaRef.current.value = boilerplate
						setRawJson(JSON.parse(boilerplate))
						

					 }}>Histogram</button>

				</div>

				
			</main>

			<Footer />
		</div>
	);
}
