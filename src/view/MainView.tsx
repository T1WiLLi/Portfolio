// MainContent.js
import { Container } from "react-bootstrap";

function MainView() {
    return (
        <Container fluid className="main-content text-center">
            <h2 className="mt-5">Welcome to My Portfolio</h2>
            <p>This is the main landing page of the portfolio.</p>
        </Container>
    );
}

export default MainView;