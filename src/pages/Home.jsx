import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


function Home() {
    return (

        <>
            <Navbar></Navbar>

            <section className="min-h-[80vh] bg-[#F8F3EF] flex items-center px-5 md:px-10 lg:px-20 py-12">

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    
                    <div className="text-center md:text-left">

                        <p className="text-[#98676A] tracking-[0.3em] text-sm mb-4">
                            BRIDAL COUTURE
                        </p>

                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#382522] leading-tight">
                            Your Dream Dress,
                            <br />
                            Made Just For You
                        </h1>

                        <p className="text-[#8B7B76] text-base md:text-lg mt-6 max-w-lg mx-auto md:mx-0">
                            Discover elegant bridal collections and create a
                            wedding look that reflects your unique style,
                            personality, and story.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

                            <button className="bg-[#98676A] hover:bg-[#805255] text-white px-7 py-3 rounded-full">
                                Explore Collection
                            </button>

                            <button className="border border-[#98676A] text-[#805255] hover:bg-[#F0E1DA] px-7 py-3 rounded-full">
                                Customize Your Dress
                            </button>

                        </div>

                    </div>


                    <div className="flex justify-center">

                        <div className="w-full max-w-md">
                            <img
                                src="/src/assets/images/bridal-hero.jpg"
                                alt="Bridal Collection"
                                className="w-full h-112.5 object-cover rounded-t-[180px] rounded-b-2xl"
                            />
                        </div>

                    </div>

                </div>

            </section>

            <section className="bg-[#FFFCF9] px-5 md:px-10 lg:px-20 py-16">

              
                <div className="text-center mb-10">

                    <p className="text-[#98676A] tracking-[0.3em] text-sm mb-3">
                        OUR COLLECTIONS
                    </p>

                    <h2 className="font-serif text-3xl md:text-4xl text-[#382522]">
                        Find Your Bridal Style
                    </h2>

                    <p className="text-[#8B7B76] mt-3 max-w-xl mx-auto">
                        Explore our carefully curated bridal styles, created
                        for every bride and every beautiful celebration.
                    </p>

                </div>


               
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                   
                    <div className="bg-[#F8F3EF] rounded-2xl overflow-hidden">

                        <img
                            src="/src/assets/images/traditional-bridal.jpg"
                            alt="Traditional Bridal"
                            className="w-full h-80 object-cover"
                        />

                        <div className="p-6">

                            <h3 className="font-serif text-2xl text-[#382522]">
                                Traditional Elegance
                            </h3>

                            <p className="text-[#8B7B76] mt-2">
                                Timeless designs inspired by Indian bridal traditions.
                            </p>

                            <button className="text-[#805255] mt-4 font-semibold hover:underline">
                                Explore Collection →
                            </button>

                        </div>

                    </div>


                    
                    <div className="bg-[#F8F3EF] rounded-2xl overflow-hidden">

                        <img
                            src="/src/assets/images/modern-bridal.jpg"
                            alt="Modern Bridal"
                            className="w-full h-80 object-cover"
                        />

                        <div className="p-6">

                            <h3 className="font-serif text-2xl text-[#382522]">
                                Modern Romance
                            </h3>

                            <p className="text-[#8B7B76] mt-2">
                                Contemporary silhouettes with a graceful bridal touch.
                            </p>

                            <button className="text-[#805255] mt-4 font-semibold hover:underline">
                                Explore Collection →
                            </button>

                        </div>

                    </div>


                   
                    <div className="bg-[#F8F3EF] rounded-2xl overflow-hidden">

                        <img
                            src="/src/assets/images/custom-bridal.jpg"
                            alt="Custom Bridal"
                            className="w-full h-80 object-cover object-[center_30%]"
                        />

                        <div className="p-6">

                            <h3 className="font-serif text-2xl text-[#382522]">
                                Made For You
                            </h3>

                            <p className="text-[#8B7B76] mt-2">
                                Personalize your dream dress to make it uniquely yours.
                            </p>

                            <button className="text-[#805255] mt-4 font-semibold hover:underline">
                                Customize Now →
                            </button>

                        </div>

                    </div>

                </div>

            </section>

            <Footer></Footer>
        </>
    )
}

export default Home