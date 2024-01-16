import { HashRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "../MainPage/MainPage";
import Dashboard from "../Dashboard/Dashboard";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import NotFound from "../NotFound/NotFound";
import { Notes } from "../Notes/Notes";
import { Dishes } from "../Dishes/Dishes";
import { Programs } from "../Programs/Programs";
import { Stats } from "../Stats/Stats";
import { Friends } from "../Friends/Friends";
import { Notifications } from "../Notifications/Notifications";
import { Settings } from "../Settings/Settings";
import { Friend } from "../Friends/Friend";
import { Program } from "../Programs/Program";
import { Dish } from "../Dishes/Dish";
import { Timetable } from "../Timetable/Timetable";
import { Profile } from "../Profile/Profile";
import { Policy } from "../Policy/Policy";
import { AppReview } from "../AppReview/AppReview";
import Exersises from "../Exersises/Exersises";
import Exersise from "../Exersises/Exersise";

export function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/main" element={<MainPage />}/>
                <Route path="/signin" element={<SignIn />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/notes" element={<Notes />}/>
                <Route path="/exersises" element={<Exersises />}/>
                <Route path="/dishes" element={<Dishes />}/>
                <Route path="/programs" element={<Programs />}/>
                <Route path="/stats" element={<Stats />}/>
                <Route path="/friends" element={<Friends />}/>
                <Route path="/notifications" element={<Notifications />}/>
                <Route path="/settings" element={<Settings />}/>
                <Route path="/friend" element={<Friend />}/>
                <Route path="/program" element={<Program />}/>
                <Route path="/dish" element={<Dish />}/>
                <Route path="/exersise" element={<Exersise />}/>
                <Route path="/timetable" element={<Timetable />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/policy" element={<Policy />}/>
                <Route path="/appreview" element={<AppReview />}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    )
}