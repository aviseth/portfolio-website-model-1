// package imports
import React from "react";

// component imports
import LandingComponent from "../../components/home/landingComponent/landingComponent";
import Overview from "../../components/home/overview/overview";
import ProjectOverview from "../../components/home/project-overview/project-overview";

function Home(props) {
    const { overviewData, projectData } = props;
    return (
        <div className="home-page">
            <LandingComponent></LandingComponent>
            <Overview data={overviewData}></Overview>
            <ProjectOverview data={projectData}></ProjectOverview>
        </div>
    );
}

export default Home;
