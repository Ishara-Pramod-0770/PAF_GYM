import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

export const navigationMenu=[
    {
        title:"Home",
        icon:<HomeIcon/>,
        path:"/home"
    },
    {
        title:"Workout Status",
        icon:<FitnessCenterIcon/>,
        path:"/workout-status"
    },
    {
        title:"Workout Plans",
        icon:<AssignmentIcon/>,
        path:"/workout-plans"
    },
    {
        title:"Meal Plans",
        icon:<FoodBankIcon/>,
        path:"/meal-plans"
    },
    {
        title:"Profile",
        icon:<AccountCircleIcon/>,
        path:"/profile"
    },
]