import Head from "next/head"
import MyLink from "../../components/MyLink"
import styles from '../../styles/Home.module.css'

const title = 'First Post'

export default function FirstPost() {
    return (
        
         <div className={styles.container}>
            <Head>
                <title>{title}</title>
            </Head>
            <h1>{title}</h1>
            <h2>
                <MyLink href='/' text='Back to home' />
            </h2>
        </div>
    )
}


