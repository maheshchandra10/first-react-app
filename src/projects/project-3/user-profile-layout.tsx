import { useLocation, useNavigate, useParams } from "react-router";
import Back from "./back";
import UserProfile from "./user-profile";

export default function UserProfileLayout() {

    const params = useParams();
    const location = useLocation();
    const employeeId = params.employeeId;
    const user = location.state?.user;

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <Back />
                <div className="flex justify-center">
                    <UserProfile employeeId={employeeId} user={user} />
                </div>
            </div>
        </div>
    );
}