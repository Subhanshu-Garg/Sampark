import UserRouter from '../resources/User/User.Router.mjs'
import ShreniRouter from "../resources/Shreni/Shreni.Router.mjs"
import DiyutRouter from "../resources/Diyut/Diyut.Router.mjs"
import ShetraRouter from "../resources/Shetra/Shetra.Router.mjs"
import SuchiMemberRouter from  "../resources/Suchi/SuchiMember.Router.mjs"
import UpdateRouter from "../resources/Update/Update.Router.mjs"

const Routes = [
    {
        path: "/users",
        router: UserRouter
    },
    {
        path: "/shrenis",
        router: ShreniRouter
    },,
    {
        path: "/diyuts",
        router: DiyutRouter
    },
    {
        path: "/shetras",
        router: ShetraRouter
    },
    {
        path: "/suchimembers",
        router: SuchiMemberRouter
    },
    {
        path: "/updates",
        router: UpdateRouter
    }
];

export default Routes
