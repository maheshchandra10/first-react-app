import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet, useLocation } from "react-router";
import { createContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ProjectSelector() {

    const [lightTheme, setLightTheme] = useState(true);

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