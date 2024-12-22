export default function AboutUs() {//will add ui later.
    return (
        <section className="text-center mt-4">
            <h2>About Us</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Our Mission</h3>
                        <p>
                        Looking to welcome a new cat or kitten into your family? Our comprehensive articles have all the information you need to adopt a feline companion successfully. A transformed animal welfare system that protects and cares for vulnerable pets.Out target is to give the animals a better future with you.
                        This is not an easy thing to achieve, but that’s the point. It’s challenging and ambitious. But by moving towards it we`ll continually make the world better for cats and people.
                        </p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <h3>Our History</h3>
                        <p>
                        A universal, proactive, well-funded, recognised process of support, rehabilitation and care.
                        </p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <h3>Our Team</h3>
                        <div className="row justify-content-center">
                            <div className="col-md-3 mb-4">
                                <div className="team-card text-center p-3" style={{ border: '1px solid #ddd', borderRadius: '8px' }}>
                                    <img src="https://avatars.githubusercontent.com/u/33003206?v=4" alt="Shahjalal Shohag" className="img-fluid mb-2" style={{ borderRadius: '50%' }} />
                                    <h4>Shahjalal Shohag</h4>
                                    <p>Founder</p>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="team-card text-center p-3" style={{ border: '1px solid #ddd', borderRadius: '8px' }}>
                                    <img src="https://cdn2.penguin.com.au/authors/400/109221nz.jpg" alt="Bill Gates" className="img-fluid mb-2" style={{ borderRadius: '50%' }} />
                                    <h4>Bill Gates</h4>
                                    <p>Director</p>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="team-card text-center p-3" style={{ border: '1px solid #ddd', borderRadius: '8px' }}>
                                    <img src="https://cdn.theatlantic.com/thumbor/NHn3RUF9eP5YykLQFuym4jwsQ0g=/438x0:1563x1125/1080x1080/media/img/mt/2023/07/summer_zuck/original.jpg" alt="Mark Zuckerberg" className="img-fluid mb-2" style={{ borderRadius: '50%' }} />
                                    <h4>Mark Zuckerberg</h4>
                                    <p>CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
