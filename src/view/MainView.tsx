// MainView.tsx
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavbarComponent from "../components/Navbar";

function MainView() {
    const [showContent, setShowContent] = useState<boolean>(false);
    const [fadeEffect, setFadeEffect] = useState<boolean>(false); // Controls fade-in and fade-out effect
    const [lastScrollY, setLastScrollY] = useState<number>(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
            setFadeEffect(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowContent(true);
                setFadeEffect(true);
            } else if (window.scrollY < lastScrollY) {
                setFadeEffect(false);
                setTimeout(() => setShowContent(false), 600);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            {showContent && <NavbarComponent />}
            <Container
                fluid
                className={`main-content text-center ${fadeEffect ? 'fade-in' : 'fade-out'}`}
            >
                <section id="home" className="mt-5">
                    <h1>Welcome to My Portfolio</h1>
                    <p>This is the main landing page of the portfolio.</p>
                </section>
                <section id="projects" className="mt-5">
                    <h2>Projects</h2>
                    <p>Explore my recent projects here.</p>
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