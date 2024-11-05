// NameSection.js
import { useRef, useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container, Row, Col } from "react-bootstrap";
import TypingEffect from 'react-typing-effect';

interface NameSectionProps {
    onLeave: () => void;
}

gsap.registerPlugin(ScrollTrigger);

function NameSection({ onLeave }: NameSectionProps) {
    const nameContainerRef = useRef(null);

    useEffect(() => {
        gsap.to(nameContainerRef.current, {
            scale: 3,
            opacity: 0,
            scrollTrigger: {
                trigger: nameContainerRef.current,
                start: 'top top',
                end: '+=300px',
                scrub: true,
                onLeave: () => onLeave(),
            }
        });
    }, [onLeave]);

    return (
        <Container
            ref={nameContainerRef}
            fluid
            className="d-flex vh-100 align-items-center justify-content-center text-center"
            style={{ zIndex: 1, position: 'relative' }}
        >
            <Row>
                <Col>
                    <h1 className="display-3 fw-bold">William Beaudin</h1>
                    <TypingEffect
                        text={['Java Developer', 'React-Typescript Developer', 'Student']}
                        speed={100}
                        eraseSpeed={60}
                        typingDelay={250}
                        className="lead mt-3"
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default NameSection;