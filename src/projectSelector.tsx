import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet, useLocation } from "react-router";
import { createContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ProjectSelector() {

    const [lightTheme, setLightTheme] = useState(false);

    console.log('Header (re)renders');

    return (
        <ThemeContext.Provider value={lightTheme}>
            <nav className="border-b border-gray-200 bg-white shadow-sm" style={{ backgroundColor: lightTheme ? '#f8fafc' : '#111827' }}>
                <div className={"mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 " + (lightTheme ? "[&_*]:text-gray-900" : "[&_*]:text-slate-50")}>
                    {/* Logo / Brand */}
                    <Link to={`/`} className="text-xl font-bold text-gray-900">
                        Projects
                    </Link>
                    {/* Navigation */}
                    <div className="flex items-center gap-4">
                        <Link
                            to="/digital-card"
                            className="rounded-full px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
                        >
                            Digital Card
                        </Link>
                        <Link
                            to="/users-with-props"
                            className="rounded-full px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
                        >
                            Users with Props
                        </Link>
                        <Link
                            to="/users-with-routing"
                            className="rounded-full px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
                        >
                            Users with Routing
                        </Link>

                        {
                            lightTheme ? <FontAwesomeIcon onClick={() => setLightTheme(false)} className="cursor-pointer" icon={faMoon} /> :
                                <FontAwesomeIcon onClick={() => setLightTheme(true)} className="cursor-pointer" icon={faSun} style={{ color: '#f8fafc' }} />
                        }
                    </div>
                </div>
            </nav>
            <Outlet />
        </ThemeContext.Provider>
    );
}


//try not to have <Outlet /> inside any condition.

//Virtul DOM: React uses a Virtual DOM to efficiently determine what needs to be changed in the UI and update the actual DOM accordingly.
//It determine what, how and when to render something on the screen.

// React Rendering Steps:
// 1. State/props change: When the state or props of a React component change, React schedules a re-render of that component.
// 2. Virtual DOM: During the re-render, React creates a new Virtual DOM representation of the UI.
// 3. Diffing: React compares the new Virtual DOM representation with the previous Virtual DOM representation (from the previous render) to determine what has changed.
// 4. Reconciliation: React determines the minimal set of changes needed and applies those changes to the real DOM.
// 5. Browser Update: Once the real DOM is updated, the browser renders the updated UI on the screen.

// In short:
// State/Props Change → Re-render → New Virtual DOM → Diffing → Reconciliation → Real DOM Update → Browser Paint