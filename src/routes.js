// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";

import CommuteIcon from "@material-ui/icons/Commute";
import TrafficIcon from "@material-ui/icons/Traffic";
import SpeedIcon from "@material-ui/icons/Speed";
import CrashForcast from "@material-ui/icons/TrendingUp";

import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import SignInSide from "views/Account/SignIn";

import SitesPage from "views/Sites/Sites";
import FlowsPage from "views/Flows/Flows";
import SpeedPage from "views/Speeds/Speeds";

// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/sites",
    name: "Sites",
    rtlName: "لوحة القيادة",
    icon: TrafficIcon,
    component: SitesPage,
    layout: "/admin"
  },
  {
    path: "/flows",
    name: "Flows",
    rtlName: "لوحة القيادة",
    icon: CommuteIcon,
    component: FlowsPage,
    layout: "/admin"
  },
  {
    path: "/speed",
    name: "Speeds",
    rtlName: "لوحة القيادة",
    icon: SpeedIcon,
    component: SpeedPage,
    layout: "/admin"
  },

  // {
  //   path: "/table",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "content_paste",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: LibraryBooks,
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "/admin"
  // },
  {
    path: "/maps",
    name: "Trajectory maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/crash-forcast",
    name: "Crash forecast",
    rtlName: "لوحة القيادة",
    icon: CrashForcast,
    component: SpeedPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },

  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin"
  // },
  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl"
  }
];

export default dashboardRoutes;
