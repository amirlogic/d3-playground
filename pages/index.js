import Head from 'next/head';
import Link from 'next/link';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Let's Master D3js!</title>
			</Head>

			<main>
				<Header title="Let's Master D3js!" />

				<p className="description">D3js visualizations in API mode</p>

				<p className="description">
					Variable size rectangle{' '}
					<Link href="/api/progressbar?p=70">
						<a>
							<code>/api/progressbar</code>
						</a>
					</Link>
				</p>

				<p className="description">
					Moving circle{' '}
					<Link href="/api/mover">
						<a>
							<code>/api/mover</code>
						</a>
					</Link>
				</p>

				<p className="description">
					Histograms{' '}
					<Link href="/api/histo?d=30,67,12,59,5,87">
						<a>
							<code>/api/histo</code>
						</a>
					</Link>
				</p>

				<p className="description">
					World Map{' '}
					<Link href="/api/worldmap">
						<a>
							<code>/api/worldmap</code>
						</a>
					</Link>
				</p>

				<p className="description">
					SVG Generator{' '}
					<Link href="/app">
						<a>
							<code>/app</code>
						</a>
					</Link>
				</p>

			</main>

			<Footer />
		</div>
	);
}
