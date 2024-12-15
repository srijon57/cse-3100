export default function ContactUs() {
    //for clicking on submit button
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted!');
    };

    return (
        <section className="text-center mt-4">
            <h2>Contact Us</h2>
            <p>
                Please provide us your necesarry information.
            </p>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input type="text" className="form-control" id="name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                        Phone
                    </label>
                    <input type="text" className="form-control" id="phone" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input type="email" className="form-control" id="email" required />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </section>
    );
}
