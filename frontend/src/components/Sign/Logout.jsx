import {Fragment} from "react";
import {useNavigate} from "react-router-dom";
import { userAtom } from "../../store/atom";
import { useRecoilState } from "recoil";

export default function Logout({setUserSignedIn}){
    const navigate=useNavigate();
    // use recoilstate for user
    const [user, setUser] = useRecoilState(userAtom);

    const logout = ()=>{
        localStorage.removeItem("authorization");
        localStorage.removeItem("userEmail");
        //remove user from local storage + set the user null
        localStorage.removeItem("user-data");
        setUser(null);
        setUserSignedIn(false);
        navigate("/");
    }

    return <Fragment>
        <div className={"logout"} onClick={logout}>Logout</div>
    </Fragment>
}
