import Layout from '../components/layout'
import Head from 'next/head'

export default function Projects(){
    return(
        <>
            <Head>
                <title>Seowoo's portfolio</title>
                <meta name="description" content="Seo Woo Jang's web portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
            <h1>projects</h1>
            </Layout>
        </>
    )
}