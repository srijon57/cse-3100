export default function AboutUs() {
    return (
        <section className="bg-gradient-to-r from-blue-300 via-sky-500 to-blue-400 py-12">
            <div className="container mx-auto px-4">
                <div className="bg-cyan-50 rounded-full"><h2 className="text-6xl font-bold text-center mb-8 ">About Us</h2></div>
                <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                    <p className="text-gray-600">
                        Looking to welcome a new cat or kitten into your family? Our comprehensive articles have all the information you need to adopt a feline companion successfully. A transformed animal welfare system that protects and cares for vulnerable pets. Our target is to give the animals a better future with you.
                        This is not an easy thing to achieve, but that’s the point. It’s challenging and ambitious. But by moving towards it we`ll continually make the world better for cats and people.
                    </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our History</h3>
                    <p className="text-gray-600">
                        A universal, proactive, well-funded, recognized process of support, rehabilitation, and care.
                    </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h3>
                    <div className="flex justify-center space-x-4">
                        <div className="bg-sky-200 p-4 rounded-lg shadow-md text-center w-64">
                            <img src="https://avatars.githubusercontent.com/u/33003206?v=4" alt="Shahjalal Shohag" className="rounded-full mx-auto mb-2" />
                            <h4 className="text-rose-950 font-semibold">Shahjalal Shohag</h4>
                            <p className="text-amber-600">Founder</p>
                        </div>
                        <div className="bg-sky-200 p-4 rounded-lg shadow-md text-center w-64">
                            <img src="https://cdn2.penguin.com.au/authors/400/109221nz.jpg" alt="Bill Gates" className="rounded-full mx-auto mb-2" />
                            <h4 className="text-rose-950 font-semibold">Bill Gates</h4>
                            <p className="text-amber-600">Director</p>
                        </div>
                        <div className="bg-sky-200 p-4 rounded-lg shadow-md text-center w-64">
                            <img src="https://cdn.theatlantic.com/thumbor/NHn3RUF9eP5YykLQFuym4jwsQ0g=/438x0:1563x1125/1080x1080/media/img/mt/2023/07/summer_zuck/original.jpg" alt="Mark Zuckerberg" className="rounded-full mx-auto mb-2" />
                            <h4 className="text-rose-950 font-semibold">Mark Zuckerberg</h4>
                            <p className="text-amber-600">CEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
