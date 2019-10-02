//we are making a website using react by placing components in another files that we are doing in this project.
import React from "react"
import Footer from "./Body/Footer"
import MainContent from "./Body/MainContent"
import Header from "./Body/Header"
function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

export default App