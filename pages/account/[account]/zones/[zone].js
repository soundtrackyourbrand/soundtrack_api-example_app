import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../../styles/Home.module.css'

import { gql } from "@apollo/client";
import client from "../../../../apollo-client";
import { useEffect, useState } from 'react'

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
	typeof window === 'undefined'
		? Buffer.from(str).toString('base64')
		: window.btoa(str)

const sub = async (zone, cb) => {
	const { data } = await client.subscribe({
		query: gql`subscription{
		nowPlayingUpdate(input:{soundZone:"${zone}"}){
			nowPlaying{
				track{
					title
					artists{
						name
					}
					display{
						image{
							size(height: 400, width: 400)
						}
						colors{
							primary{
								hex
							}
							secondary{
								hex
							}
						}
					}
				}
			}
		}}`
	}).forEach((res) => {
		cb(res.data?.nowPlayingUpdate.nowPlaying)
	})
}

export default function Zone({ zone }) {
	const [nowPlaying, setNowPlaying] = useState(zone.nowPlaying)
	useEffect(() => { sub(zone.id, setNowPlaying) }, [zone.id])
	return (
		<div className={styles.container}>
			<Head><title>{zone.name}</title></Head>
			<main className={styles.main}>
				<h6 className={styles.title}>{zone.name}</h6>
				{nowPlaying.track ? <div className={`${styles.card} ${styles.nowPlaying}`} style={{ backgroundColor: nowPlaying.track?.display.colors.primary.hex, color: nowPlaying.track?.display.colors.secondary.hex }}>
					<p>Now Playing <br /><strong>{nowPlaying.track?.title}</strong><br />by <strong>{nowPlaying.track?.artists.map(a => a.name).join(',')}</strong></p>
					<div className={styles.imgContainer}>
						<Image
							alt=""
							placeholder='blur'
							blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(150, 150))}`}
							src={nowPlaying.track?.display.image.size}
							className={styles.img}
							width="150"
							height="150"
						/>
					</div>
				</div> : null
				}
			</main >
		</div >
	)
}

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { zone: '', account: '' } },
		],
		fallback: 'blocking',
	}
}

export async function getStaticProps(context) {
	const zoneId = context.params.zone
	const { data } = await client.query({
		query: gql`
      query soundZone($id: ID!) {
	soundZone(id: $id){
		id
		name
		nowPlaying{
			track{
				title
				artists{
					name
				}
				display{
					image{
						size(height: 400, width: 400)
					}
					colors{
						primary{
							hex
						}
						secondary{
							hex
						}
					}
				}
			}
		}
	}
      }
    `,
		variables: {
			id: zoneId
		}
	});

	return {
		props: {
			zone: data.soundZone
		},
	};
}