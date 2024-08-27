import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import DownloadButton from "@/components/DownloadButton";


const Home = () => {



    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="text-xl">Front-end Developer</span>
                        <h1 className="h1 mb-6">
                            Hello I`m <br/> <span className="text-accent">Artsiom Astrovsky</span>
                        </h1>
                        <p className="max-m-[500px] mb-9 text-white/500">Frontend developer with 3+ years of experience
                            in Single Page Application development using
                            TypeScript, JavaScript, React, Redux, Redux-toolkit, RTK Query, Next.js.</p>
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <DownloadButton/>
                            <div className="mb-8 xl:mb-0">
                                <Social
                                    containerStyles="flex gap-6"
                                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo/>
                    </div>
                </div>
            </div>
            <Stats/>
        </section>
    );
};

export default Home;