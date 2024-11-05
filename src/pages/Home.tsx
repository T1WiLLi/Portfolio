// Home.js
import { useState } from "react";
import TitleTransition from "../components/TitleTransition";
import NameSection from "../components/NameSection";
import MainView from "../view/MainView";

function Home() {
    const [showMainContent, setShowMainContent] = useState(false);
    const handleLeave = () => {
        setShowMainContent(true);
    };

    return (
        <div className="home-wrapper" style={{ minHeight: '140vh', overflowX: 'hidden' }}>
            <TitleTransition />
            <NameSection onLeave={handleLeave} />
            {showMainContent && <MainView />}
            <footer className="position-fixed bottom-0 start-0 w-100 text-center py-2">
                <small className="fw-bold">William Beaudin © 2024</small>
            </footer>
        </div>
    );
}

export default Home;