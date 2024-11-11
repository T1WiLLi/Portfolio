// MainView.tsx
import { Container } from "react-bootstrap";
import "../styles/components/project.css";

function MainView() {
    return (
        <>
            <Container fluid className="main-content text-center">
                <section id="home" className="mt-5">
                    <h1>Welcome to My Portfolio</h1>
                    <p>This is the main landing page of the portfolio.</p>
                </section>
                <section id="projects" className="mt-5">
                    <h2>About</h2>
                    <p>A brief introduction about myself and my work.</p>
                </section>
                <section id="about" className="mt-5">
                    <h2>About</h2>
                    <p>A brief introduction about myself and my work.</p>
                </section>
                <section id="contact" className="mt-5">
                    <h2>Contact Me</h2>
                    <p>Feel free to reach out for collaborations or inquiries.</p>
                </section>
            </Container>
        </>
    );
}

export default MainView;