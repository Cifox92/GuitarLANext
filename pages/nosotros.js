import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
    return (
        <Layout
            title={'Nosotros'}
            description={'Sobre nosotros, guitarLA, tienda de música'}
        >
            <main className='contenedor'>
                <h1 className='heading'>Nosotros</h1>

                <div className={styles.contenido}>
                    <Image src='/img/nosotros.jpg' width={1000} height={800} alt='Imagen sobre nosotros' />
                    
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor elit id consequat sagittis. In eget volutpat odio. Quisque lorem odio, fermentum quis diam et, placerat efficitur diam. Donec sed orci varius, accumsan massa quis, mollis velit. In gravida mauris ante, sit amet tempus ipsum vehicula et. Duis eu velit at ipsum posuere porttitor sed et velit. Mauris et sapien dapibus, eleifend libero at, congue velit.</p>

                        <p>Morbi blandit porttitor diam. Vivamus in odio fermentum, aliquet mauris nec, euismod lacus. Sed eu hendrerit nibh, ac sagittis ligula. Phasellus at fringilla mauris, sit amet malesuada ligula. Donec nisl nisl, tempor et gravida ut, hendrerit et turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in tristique massa.</p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}