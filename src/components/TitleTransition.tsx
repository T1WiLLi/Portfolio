// TitleTransition.js
import { useRef, useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from "react-bootstrap";

gsap.registerPlugin(ScrollTrigger);

function TitleTransition() {
    const titleRef = useRef(null);

    useEffect(() => {
        gsap.to(titleRef.current, {
            opacity: 0,
            scrollTrigger: {
                trigger: titleRef.current,
                start: 'top top',
                end: '+=300px',
                scrub: true,
            }
        });
    }, []);


    return (
        <Container fluid className="position-fixed top-0 start-0 pt-3 ps-4">
            <h2 ref={titleRef} className="fw-bold">Portfolio.</h2>
        </Container>
    );
}

export default TitleTransition;