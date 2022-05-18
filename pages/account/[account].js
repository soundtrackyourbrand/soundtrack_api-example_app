import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import useSWRInfinite from 'swr/infinite';

const PAGE_SIZE = 25

const fetcher = variables => {
	return client.query({
		query: gql`
      query account($id: ID!, $cursor: String) {
	account(id: $id){
		id
		businessName
		soundZones(first:${PAGE_SIZE}, after: $cursor){
			pageInfo{
				hasNextPage
				endCursor
			}
			edges{
				cursor
				node{
					id
					name
				}
			}
		}
	}
      }
    `,
		variables
	}).then(({ data }) => data.account)
}

function getKey(account) {
	return (pageIndex, previousPageData) => {
		if (pageIndex == 0) return { id: account, cursor: '' }
		if (previousPageData && !previousPageData.soundZones.pageInfo.endCursor) return null // reached the end
		return { id: account, cursor: previousPageData.soundZones.pageInfo.endCursor }
	}
}

function Page({ account, zones }) {
	return zones.edges.map((zone) => (
		<div key={zone.node.id} className={styles.card}>
			<p id={zone.node.id}><Link href={{
				pathname: '/account/[account]/zones/[zone]',
				query: { account: account, zone: zone.node.id },
			}} aria-hidden="true" class="aal_anchor" id="zone-name">{zone.node.name}</Link></p>
		</div>
	))
}

export default function Account({ account }) {
	const { data, size, setSize } = useSWRInfinite(getKey(account.id), fetcher)
	const isLoadingInitialData = !data
	const isLoadingMore =
		isLoadingInitialData ||
		(size > 0 && data && typeof data[size - 1] === "undefined")
	const isDone = data ? data[data.length - 1].soundZones.edges.length < PAGE_SIZE : false
	return (
		<div className={styles.container}>
			<Head><title>{account.businessName}</title></Head>

			<main className={styles.main}>
				<h6 className={styles.title}>{account.businessName}</h6>

				<div className={styles.grid}>
					{data ? data.map((zones, index) => {
						return <Page account={account.id} zones={zones.soundZones} key={index} />
					}) : []}
				</div>
				{!isDone ? <button className={styles.card} onClick={() => setSize(size + 1)}>{isLoadingMore ? "Loading..." : "Load more"}</button> : null}
			</main >
		</div >
	)
}

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { account: '' } },
		],
		fallback: 'blocking',
	}
}

export async function getStaticProps(context) {
	const accountId = context.params.account
	const { data } = await client.query({
		query: gql`
      query account($id: ID!) {
	account(id: $id){
		id
		businessName
	}
      }
    `,
		variables: {
			id: accountId
		}
	});

	return {
		props: {
			account: data.account
		},
	};
}